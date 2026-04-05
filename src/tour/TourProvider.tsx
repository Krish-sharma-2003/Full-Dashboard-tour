import Joyride, { CallBackProps, STATUS } from "react-joyride";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tourSteps } from "./tourSteps";

export const TourProvider = () => {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();

  const handleCallback = (data: CallBackProps) => {
    const { index, status, type } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
      setStepIndex(0);
    }

    if (type === "step:after") {
      setStepIndex(index + 1);

      // Navigation mapping based on 13-step flow
      if (index === 0) {
        // Step 1: Create Project (stays on dashboard)
      }

      if (index === 1) {
        // Step 2: Select Project -> Go to Workspace
        navigate("/workspace");
      }

      if (index === 2) {
        // Step 3: Drag & Drop click -> Open Modal via URL
        navigate("/workspace?modal=upload");
      }

      if (index === 3) {
        // Step 4: Complete Upload click -> Go to AI Processing
        navigate("/ai-processing");
      }

      if (index === 5) {
        // Step 6: Accept Suggestions -> Back to Workspace
        navigate("/workspace?state=updated");
      }

      if (index === 10) {
        // Step 11: Compliance click -> Screen 11
        navigate("/compliance-review");
      }

      if (index === 11) {
        // Step 12: Submission click -> Screen 12
        navigate("/submissions/readiness");
      }

      if (index === 12) {
        // Step 13: Finalize click -> Screen 13
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
            zIndex: 100000,
          },
        }}
      />
    </>
  );
};