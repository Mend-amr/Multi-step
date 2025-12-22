import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/component/ui/Header";

import { ErrorMessage } from "@/component/ui/ErrorMessage";
import { Input } from "@/component/ui/Input";

import { validateStepOne } from "@/utils/Validators";

export const ContactInfo = ({
  handlechange,
  formValues,
  formErrors,
  setformErrors,
  setformValues,
  handleclick,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);
    if (isValid) {
      handleclick();
    }
  };
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      transition={{ duration: 0.5 }}
      style={{ width: 300 }}
    >
      <Header />
      <Input
        type="text"
        name="email"
        onChange={handlechange}
        errors={formErrors}
      />
      <input
        type=""
        name="phoneNumber"
        onChange={handlechange}
        errors={formErrors}
      />
      <input
        type="password"
        name="password"
        onChange={handlechange}
        errors={formErrors}
      />
      <input
        type="password"
        name="confirmPassword"
        onChange={handlechange}
        errors={formErrors}
      />
      <button onclick={handleSubmit}></button>
    </motion.div>
  );
};
