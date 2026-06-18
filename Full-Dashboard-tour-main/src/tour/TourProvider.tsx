import Joyride, { CallBackProps, STATUS } from "react-joyride";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tourSteps } from "./tourSteps";

export const TourProvider = () => {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();

  // const handleCallback = (data: CallBackProps) => {
  //   const { index, status, type } = data;

  //   if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
  //     setRun(false);
  //     setStepIndex(0);
  //   }

  //   if (type === "step:after") {
  //     const nextIndex = index + 1;

  //     // Navigation mapping based on 13-step flow
  //     if (index === 0) {
  //       // Step 1: Create Project (stays on dashboard)
  //       setStepIndex(nextIndex);
  //     } else if (index === 1) {
  //       // Step 2: Select Project -> Go to Workspace
  //       navigate("/workspace");
  //       setTimeout(() => setStepIndex(nextIndex), 400);
  //     } else if (index === 2) {
  //       // Step 3: Drag & Drop click -> Open Modal via URL
  //       navigate("/workspace?modal=upload");
  //       setTimeout(() => setStepIndex(nextIndex), 600); // Give modal transition extra time
  //     } else if (index === 3) {
  //       // Step 4: Complete Upload click -> Go to AI Processing
  //       navigate("/ai-processing");
  //       setTimeout(() => setStepIndex(nextIndex), 400);
  //     } else if (index === 5) {
  //       // Step 6: Accept Suggestions -> Back to Workspace
  //       navigate("/workspace?state=updated");
  //       setTimeout(() => setStepIndex(nextIndex), 400);
  //     } else if (index === 6) {
  //       // Step 7: Generate Draft click -> Open AI Template Generator Modal
  //       navigate("/workspace?modal=generateDraft");
  //       setTimeout(() => setStepIndex(nextIndex), 500);
  //     } else if (index === 7) {
  //       // Step 8: Click Generate Draft inside modal -> Open AI Draft Editor Modal
  //       navigate("/workspace?modal=draftEditor");
  //       setTimeout(() => setStepIndex(nextIndex), 500);
  //     } else if (index === 9) {
  //       // Step 10: Click Accept & Save -> Go to Workspace (updated state)
  //       navigate("/workspace?state=updated");
  //       setTimeout(() => setStepIndex(nextIndex), 500);
  //     } else if (index === 10) {
  //       // Step 11: Compliance click -> Screen 11
  //       setStepIndex(nextIndex);
  //       // setTimeout(() => setStepIndex(nextIndex), 400);
  //     } else if (index === 11) {
  //       navigate("/compliance-review");
  //       setTimeout(() => setStepIndex(nextIndex), 500);
  //     } else if (index === 12) {
  //       navigate("/submissions/readiness");
  //       setTimeout(() => setStepIndex(nextIndex), 500);
  //     } else {
  //       setStepIndex(nextIndex);
  //     }
  //   }
  // };

  const handleCallback = (data: CallBackProps) => {
  const { index, status, type } = data;

  if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
    setRun(false);
    setStepIndex(0);
    return;
  }

  if (type === "step:after") {
    const nextIndex = index + 1;

    if (index === 0) {
      // Step 1 -> Step 2
      setStepIndex(nextIndex);

    } else if (index === 1) {
      // Step 2 -> Workspace
      navigate("/workspace");
      setTimeout(() => setStepIndex(nextIndex), 400);

    } else if (index === 2) {
      // Step 3 -> Upload Modal
      navigate("/workspace?modal=upload");
      setTimeout(() => setStepIndex(nextIndex), 600);

    } else if (index === 3) {
      // Step 4 -> AI Processing
      navigate("/ai-processing");
      setTimeout(() => setStepIndex(nextIndex), 400);

    } else if (index === 5) {
      // Step 6 -> Updated Workspace
      navigate("/workspace?state=updated");
      setTimeout(() => setStepIndex(nextIndex), 400);

    } else if (index === 6) {
      // Step 7 -> AI Template Generator
      navigate("/workspace?modal=generateDraft");
      setTimeout(() => setStepIndex(nextIndex), 500);

    } else if (index === 7) {
      // Step 8 -> Draft Editor
      navigate("/workspace?modal=draftEditor");
      setTimeout(() => setStepIndex(nextIndex), 500);

    } else if (index === 9) {
      // Step 10 -> Clinical Overview (Screen 10)
      navigate("/workspace?state=updated");
      setTimeout(() => setStepIndex(nextIndex), 500);

    }else if (index === 10) {
  // Step 11
  setStepIndex(nextIndex);
}

else if (index === 11) {
  // Step 12
  setStepIndex(nextIndex);
}

else if (index === 12) {
  // Step 13
  navigate("/submissions/readiness");

  setTimeout(() => {
    setStepIndex(nextIndex);
  }, 500);
} else {
      setStepIndex(nextIndex);
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