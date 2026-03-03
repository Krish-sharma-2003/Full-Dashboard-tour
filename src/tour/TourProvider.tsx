import Joyride, { CallBackProps, STATUS } from "react-joyride";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { tourSteps } from "./tourSteps";

export const TourProvider = () => {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCallback = (data: CallBackProps) => {
    const { index, status, type } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
      setStepIndex(0);
    }

    if (type === "step:after") {
      setStepIndex(index + 1);

      // Navigation mapping
      if (index === 1) {
        navigate("/workspace");
      }

      if (index === 2) {
        navigate("/workspace"); // stay here for drag drop
      }

      if (index === 4) {
        navigate("/workspace");
      }

      if (index === 7) {
        navigate("/compliance-review");
      }

      if (index === 8) {
        navigate("/submissions/readiness");
      }

      if (index === 9) {
        navigate("/submissions/build");
      }
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setStepIndex(0);   // 🔥 RESET
          setRun(true);
        }}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg z-50"
      >
        Start Tour
      </button>

      <Joyride
        steps={tourSteps}
        run={run}
        stepIndex={stepIndex}   // 🔥 IMPORTANT
        callback={handleCallback}
        continuous
        showProgress
        showSkipButton
        scrollToFirstStep
        styles={{
          options: {
            primaryColor: "#2563eb",
            zIndex: 10000,
          },
        }}
      />
    </>
  );
};