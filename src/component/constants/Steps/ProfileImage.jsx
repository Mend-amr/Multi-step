import React from "react";
import { Header } from "@/component/ui/Header";
import { Input } from "@/component/ui/Input";
import { validateStepThree } from "@/utils/Validators";
export const ProfileImage = ({
  step,
  handlechange,
  formValues,
  formErrors,
  setformErrors,
  handlePrev,
  handleclick,
  errors,
}) => {
  const handleSubmitThree = () => {
    const { errors, isValid } = validateStepThree(formValues);
    setformErrors(errors);
    if (isValid) {
      handleclick();
    }
  };
  return (
    <div>
      <Header />
      <Input
        type="date"
        Labelname={"Date of Birth"}
        onChange={handlechange}
        errors={formErrors}
      />
      <Input
        type="file"
        hidden={true}
        Labelname={"Profile Image"}
        placeholderName={"confirm password"}
      />
      <div className="mt-4">
        <div></div>
        <p className="pt-2"> Add image</p>
      </div>
      step={step}
      handleclick={handleSubmitThree}
      handlePrev={handlePrev}
    </div>
  );
};
