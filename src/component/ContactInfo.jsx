import { motion } from "framer-motion";

export const ContactInfo = ({
  handlechange,
  formValues,
  formErrors,
  setformErrors,
  setformValues,
}) => {
  const handleSubmit = () => {};
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "red", width: 300 }}
    >
      <input type="text" name="email" onChange={handlechange} />
      <input type="" name="phoneNumber" onChange={handlechange} />
      <input type="password" name="password" onChange={handlechange} />
      <input type="password" name="confirmPassword" onChange={handlechange} />
      <button onclick={handleSubmit}></button>
    </motion.div>
  );
};
