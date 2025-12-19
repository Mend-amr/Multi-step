import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
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
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "green", width: 300 }}
    >
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
