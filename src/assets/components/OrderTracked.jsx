export default function OrderTracked() {
  const currentStep = 1; 

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
            className="absolute left-[5%] top-1/4 h-0.5 bg-[#D9176C] -translate-y-1/2"
            style={{ width: "0%" }}
          />

          {steps.map((step) => {
            const isActive = step.id === currentStep;

            return (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
                  ${
                    isActive
                      ? "bg-[#D9176C] text-white"
                      : "bg-[#ACACAC] border-2 border-[#CFCFCF] text-white"
                  }`}
                >
                  ✓
                </div>

                <p
                  className={`text-[20px] font-semibold mt-4
                  ${
                    isActive
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
    </>
  );
}
