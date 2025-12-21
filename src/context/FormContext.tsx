import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type FormData = {
  names: { first: string; last: string; prefered: string };
  age: number;
  requestAmount: number;
  purpose: string;
  email: string;
  [key: string]: string | number | object;
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const defaultFormData: FormData = {
    names: { first: "", last: "", prefered: "" },
    age: 26,
    requestAmount: 1000,
    purpose: "",
    email: "",
  };

  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem("applicationData");
    if (!saved) return defaultFormData;

    try {
      const parsed = JSON.parse(saved);
      return {
        ...defaultFormData,
        ...parsed,
        names: {
          ...defaultFormData,
          ...parsed.names,
        },
      };
    } catch {
      return defaultFormData;
    }
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
