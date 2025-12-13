import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useForm } from "../../context/FormContext";
import "./GetStarted.css";

export function GetStarted() {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   age: "25",
  //   requestAmount: "5,000",
  //   purpose: "",
  //   email: "",
  // });

  const fields = [
    {
      key: "firstName",
      label: "First name",
      type: "text",
      placeholder: "John",
    },
    {
      key: "lastName",
      label: "Last name",
      type: "text",
      placeholder: "Doe",
    },
    {
      key: "age",
      label: "Age",
      type: "number",
      placeholder: 25,
      min: 18,
      step: 1,
    },
    {
      key: "requestAmount",
      label: "How much would you like to request?",
      type: "number",
      placeholder: "$5,000",
      min: 100,
      step: 25,
    },
    {
      key: "purpose",
      label: "What's the purpose?",
      type: "text",
      placeholder: "Business expansion",
    },
    {
      key: "email",
      label: "What's your email?",
      type: "email",
      placeholder: "john@example.com",
    },
  ];

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (fields[currentStep].key === "age" && Number(formData.age) < 18) {
      alert("Minimum age is 18");
      return;
    }

    if (currentStep < fields.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter" && currentStep < fields.length - 1) {
      handleNext();
    }
  };

  const validateForm = () => {
    const errors: string[] = [];

    if (!formData.firstName.trim()) errors.push("First name is missing");
    if (!formData.lastName.trim()) errors.push("Last name is missing");

    if (!formData.age) {
      errors.push("Age is missing");
    } else if (Number(formData.age) < 18) {
      errors.push("You must be at least 18 years old");
    }

    if (!formData.requestAmount) errors.push("Requested amount is missing");

    if (!formData.purpose.trim()) errors.push("Purpose is missing");

    if (!formData.email.trim()) errors.push("Email is missing");

    return errors;
  };

  // replace fieldChecks with this
  const fieldChecks = () => {
    const errors = validateForm();

    if (errors.length > 0) {
      errors.forEach((err) => alert(err));
      return;
    }

    console.log("Form submitted:", {
      ...formData,
      age: Number(formData.age),
      requestAmount: Number(formData.requestAmount),
    });
  };

  const getFieldStyle = (index: number) => {
    const diff = index - currentStep;

    if (diff === 0) {
      return {
        transform: "translateY(0) scale(1)",
        opacity: 1,
        zIndex: 10,
      };
    } else if (diff === 1) {
      return {
        transform: "translateY(140px) scale(0.85)",
        opacity: 0.5,
        zIndex: 5,
      };
    } else if (diff === -1) {
      return {
        transform: "translateY(-140px) scale(0.85)",
        opacity: 0.5,
        zIndex: 5,
      };
    } else {
      return {
        transform: `translateY(${diff * 160}px) scale(0.7)`,
        opacity: 0,
        zIndex: 0,
      };
    }
  };
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="progress-section">
          <div className="progress-text">
            Step {currentStep + 1} of {fields.length}
          </div>
          <div className="progress-bars">
            {fields.map((_, index) => (
              <div
                key={index}
                className={`progress-bar ${
                  index === currentStep
                    ? "progress-bar-active"
                    : index < currentStep
                    ? "progress-bar-complete"
                    : "progress-bar-inactive"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="carousel-fields">
          {fields.map((field, index) => (
            <div
              key={field.key}
              className="field-wrapper"
              style={getFieldStyle(index)}
            >
              <div className="field-card">
                <label className="field-label">{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={field.placeholder}
                  min={field.min}
                  step={field.step}
                  disabled={index !== currentStep}
                  className="field-input"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="navigation-section">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="nav-button"
          >
            <ChevronUp className="nav-icon" />
          </button>

          <div className="nav-hint">
            {currentStep === fields.length - 1 ? (
              <NavLink
                onClick={() => fieldChecks()}
                className="submit-button"
                to="/user-panel"
              >
                Submit
              </NavLink>
            ) : (
              <span>Press Enter or ↓</span>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={currentStep === fields.length - 1}
            className="nav-button"
          >
            <ChevronDown className="nav-icon" />
          </button>
        </div>

        <div className="keyboard-hint">
          Use arrow keys or click buttons to navigate
        </div>
      </div>
    </div>
  );
}
