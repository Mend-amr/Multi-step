import { useState } from "react";
import { ContactInfo } from "@/component/constants/Steps/ContactInfo";
import { PrivateInfo } from "@/component/constants/Steps/PrivateInfo";
import { initialvalues } from "@/component/constants/initail";
import { ProfileImage } from "@/component/constants/Steps/ProfileImage";
import { Success } from "@/component/constants/Steps/Success";
import { Header } from "@/component/ui/Header";
import { Input } from "@/component/ui/Input";

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
  const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];
  return (
    <div className="flex  items-center justify-center min-h-screen ">
      <div className="  h-130 w-90    rounded-lg shadow-lg">
        <Container
          handlechange={handleChange}
          formValues={formValues}
          formErrors={formErrors}
          setformErrors={setformErrors}
          setformValues={setformValues}
          handleclick={handleclick}
        />
        <div className="flex justify-center mt-75">
          <button
            className="bg-black text-white rounded w-30 h-10 m-2"
            onClick={handleprev}
          >
            Back
          </button>
          <button
            className="bg-black text-white rounded w-50 h-10 m-2"
            onClick={handleclick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
