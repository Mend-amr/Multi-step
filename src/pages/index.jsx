import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ContactInfo, PrivateInfo } from "../component";
import { initialvalues } from "@/constants/initail";
const Home = () => {
  const [step, setStep] = useState(0);
  const [formValues, setformValues] = useState(initialvalues);
  const [formErrors, setformErrors] = useState({ initialvalues });
  const handleclick = () => {
    setStep((prev) => prev + 1);
  };
  const handleprev = () => {
    setStep((prev) => prev - 1);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformValues((previous) => ({ ...previous, [name]: "" }));
    setformValues((previous) => ({ ...previous, [name]: value }));
  };
  const Container = [ContactInfo, PrivateInfo, profileImage, Success][step];
  return (
    <AnimatePresence mode="wait">
      <Container
        handlechange={handleChange}
        formValues={formValues}
        formErrors={formErrors}
        setformErrors={setformErrors}
        setformValues={setformValues}
        handleclick={handleclick}
      />

      <button onClick={handleprev}>previous</button>
      <button onClick={handleclick}>Continue</button>
    </AnimatePresence>
  );
};

export default Home;
