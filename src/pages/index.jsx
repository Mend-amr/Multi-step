import { useState } from "react";

import StepThree from "@/component/StepThree";
import StepOne from "@/component/StepOne";
import StepTwo from "@/component/StepTwo";

export default function RegisterForm() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({});

  const updateData = (values) => setData((prev) => ({ ...prev, ...values }));

  return (
    <div>
      {step === 1 && <StepOne next={() => setStep(2)} update={updateData} />}

      {step === 2 && (
        <StepTwo
          next={() => setStep(3)}
          back={() => setStep(1)}
          update={updateData}
        />
      )}

      {step === 3 && <StepThree back={() => setStep(2)} update={updateData} />}
    </div>
  );
}
