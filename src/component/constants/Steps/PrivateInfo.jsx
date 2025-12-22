import { Header } from "@/component/ui/Header";
import { motion } from "framer-motion";
import Head from "next/head";

export const PrivateInfo = ({
  handlechange,
  formValues,
  formErrors,
  setformErrors,
  handleclick,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);
    setformErrors(errors);
    if (isValid) {
      handleclick();
    }
  };
  console.log(formErrors);
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "green", width: 300 }}
    >
      <Header />
      <input type="text" name="firstName" onChange={handlechange} />
      <p>{formErrors.firstName}</p>
      <input type="text" name="lastName" onChange={handlechange} />
      <p>{formErrors.lastName}</p>
      <input type="text" name="userName" onChange={handlechange} />
      <p>{formErrors.userName}</p>
      <button onclick={handleSubmit}></button>
    </motion.div>
  );
};
