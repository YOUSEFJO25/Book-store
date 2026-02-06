import { useState } from "react";

export default function OrderProgress() {
  const [currentStep] = useState(2);

  const steps = [
    { id: 1, label: "Order placed" },
    { id: 2, label: "Shipping" },
    { id: 3, label: "Completed" },
  ];

  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-[50%] w-[43%] right-0 top-1/4 h-0.5 bg-[#E5E5E5] -translate-y-1/2" />

          <div
            className="absolute left-[5%] w-[89%] top-1/4 h-0.5 bg-[#D9176C] -translate-y-1/2 transition-all duration-300"
            style={{
              width:
                currentStep === 1 ? "0%" : currentStep === 2 ? "47%" : "89%",
            }}
          />

          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;

            return (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
              ${
                isCompleted || isActive
                  ? "bg-[#D9176C] text-white"
                  : "bg-[#ACACAC] border-2 border-[#CFCFCF] text-white"
              }`}
                >
                  ✓
                </div>

                <p
                  className={` text-[20px] font-semibold mt-4
              ${
                isCompleted
                  ? "text-[#D9176C]"
                  : isActive
                    ? "text-[#222222]"
                    : "text-[#9E9E9E]"
              }`}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="more">
          
      </div>
    </>
  );
}
