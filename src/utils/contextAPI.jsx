import { createContext, useState } from "react";

 const ContextAPI = createContext();
 export const context = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState("");
  const [retrieveDAta, setRetrieveDAta] = useState([]);
};
const value=
  {
    isOpen,
    setIsOpen,
    formData,
    setFormData,
    retrieveDAta,
    setRetrieveDAta,
  }

<ContextAPI.Provider
  value={value}
>
  {children}
</ContextAPI.Provider>;
