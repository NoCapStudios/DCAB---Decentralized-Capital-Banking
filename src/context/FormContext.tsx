import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  requestAmount: number;
  purpose: string;
  email: string;
  [key: string]: string | number;
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem("applicationData");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {
          firstName: "",
          lastName: "",
          age: 26,
          requestAmount: 1000,
          purpose: "",
          email: "",
        };
      }
    }
    return {
      firstName: "",
      lastName: "",
      age: 26,
      requestAmount: 1000,
      purpose: "",
      email: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("applicationData", JSON.stringify(formData));
  }, [formData]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used inside FormProvider");
  }
  return context;
};
