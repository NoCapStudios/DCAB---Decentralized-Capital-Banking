import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { fetchApplication } from "../../api/applications";
import { useForm } from "../../context/FormContext";
import { useAuth } from "../../context/AuthContext";
import "../../styles/UserPanel.css";

export function UserPanel() {
  const { formData } = useForm();
  const { user } = useAuth();
  const [application, setApplication] = useState<
    "pending" | "rejected" | "accepted"
  >("pending");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadApplication() {
      if (user?.email) {
        const app = await fetchApplication(user.email);
        if (app) {
          setApplication(app.status);
        }
      }
      setLoading(false);
    }
    loadApplication();
  }, [user?.email]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background:
            "radial-gradient(circle at top, rgba(16, 185, 129, 0.15), transparent 45%), #0e0f0f",
          color: "#10b981",
          fontSize: "1.25rem",
        }}
      >
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="user-panel">
      <NavLink to="/" className="back-button">
        <span className="back-arrow">←</span>
        <span>Back to Home</span>
      </NavLink>

      <header className="user-panel-header">
        <h1>
          Welcome to Your Dashboard,{" "}
          {formData.names.preferred || formData.names.first}
        </h1>
        <p>Your request has been submitted successfully.</p>
      </header>

      <section className="user-panel-cards">
        <div className="panel-card">
          <h2>Application Status</h2>
          <p
            className={`status ${
              application === "pending"
                ? "pending"
                : application === "accepted"
                  ? "accepted"
                  : "rejected"
            }`}
          >
            {application === "pending"
              ? "Pending Review"
              : application === "accepted"
                ? "Accepted"
                : "Rejected"}
          </p>
          <NavLink to="/documents" className="panel-link">
            Criteria for applications
          </NavLink>
        </div>

        <div className="panel-card">
          <h2>Requested Amount</h2>
          <p className="amount">
            ${Number(formData.requestAmount).toLocaleString("en-US")}
          </p>
          <div className="panel-link">Request Different Amount</div>
        </div>

        {application === "pending" ? (
          <div className="panel-card">
            <h2>Next Steps</h2>
            <ul>
              <li>We are reviewing your application</li>
              <li>You'll receive an email update</li>
              <li>Typical response: 24–48 hours</li>
            </ul>
          </div>
        ) : application === "accepted" ? (
          <div className="panel-card">
            <h2>Review Submission</h2>
            <ul>
              <li>Your application has been accepted</li>
              <li>Check your email for next steps</li>
              <li>Funds will be processed within 3-5 business days</li>
            </ul>
          </div>
        ) : (
          <div className="panel-card">
            <h2>Review Submission</h2>
            <ul>
              <li>Your application has been rejected</li>
              <li>You'll receive an email update about why</li>
              <li>
                Resubmit your application here if you've entered wrong
                information or contact us directly
              </li>
            </ul>
          </div>
        )}
      </section>

      <section className="user-info-section">
        <div className="panel-card user-info-card">
          <h2>Your Information</h2>
          <div className="user-info-grid">
            <div className="info-item">
              <strong>Name</strong>
              <span>
                {formData.names.first} {formData.names.last}
              </span>
            </div>
            <div className="info-item">
              <strong>Date of Birth</strong>
              <span>{formData.dob}</span>
            </div>
            <div className="info-item">
              <strong>Requested Amount</strong>
              <span>${formData.requestAmount.toLocaleString()}</span>
            </div>
            <div className="info-item">
              <strong>Purpose</strong>
              <span>{formData.purpose}</span>
            </div>
            <div className="info-item">
              <strong>Email</strong>
              <span>{formData.email}</span>
            </div>
            <div className="info-item">
              <strong>Credit Score</strong>
              <span>{formData.creditScore}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="user-panel-footer">
        <NavLink to="/" className="panel-link">
          Start a New Request
        </NavLink>
        <NavLink to="/about-us" className="panel-link">
          About Us
        </NavLink>
        <NavLink to="/contact-us" className="panel-link">
          Contact Us
        </NavLink>
        <NavLink to="/bug-report" className="panel-link">
          Submit Bug
        </NavLink>
      </footer>
    </div>
  );
}
