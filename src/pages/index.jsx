import { useState } from "react";

import StepThree from "@/component/StepThree";
import StepOne from "@/component/StepOne";
import StepTwo from "@/component/StepTwo";
import StepFour from "@/component/StepFour";

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

      {step === 3 && (
        <StepThree
          next={() => setStep(4)}
          back={() => setStep(2)}
          update={updateData}
        />
      )}

      {step === 4 && <StepFour update={updateData} />}
    </div>
  );
}
