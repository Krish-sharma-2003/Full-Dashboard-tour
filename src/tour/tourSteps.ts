import { Step } from "react-joyride";

export const tourSteps: Step[] = [

  // 1️⃣ Dashboard – Create Project
  {
    target: ".create-project-btn",
    content:
      "Begin your regulatory workflow by creating a new submission project.",
    disableBeacon: true,
  },

  // 2️⃣ Select Project
  {
    target: ".project-card",
    content:
      "Select an active project to open the Project Workspace.",
  },

  // 3️⃣ Upload Documents
  {
    target: ".drag-drop-area",
    content:
      "Upload regulatory documents here to initiate AI validation.",
  },

  // 4️⃣ AI Processing Summary
  {
    target: ".ai-processing-summary",
    content:
      "The system analyzes your uploaded document and identifies compliance insights.",
  },

  // 5️⃣ Accept Suggestions
  {
    target: ".accept-suggestions-btn",
    content:
      "Accept AI-generated improvements to update your document.",
  },

  // 6️⃣ Generate Draft
  {
    target: ".generate-draft-btn",
    content:
      "Generate an AI-assisted draft for missing or incomplete sections.",
  },

  // 7️⃣ AI Draft Editor
  {
    target: ".draft-editor",
    content:
      "Review, edit, and refine the AI-generated draft before approval.",
  },

  // 8️⃣ Save Draft
  {
    target: ".accept-save-btn",
    content:
      "Approve and save the draft to the module. The updated version will appear in your Section Documents.",
  },

  // 9️⃣ Compliance Review
  {
    target: ".navbar-compliance",
    content:
      "Access the Compliance Review panel to resolve regulatory issues.",
  },

  // 🔟 Submission Readiness
  {
    target: ".navbar-submissions",
    content:
      "Monitor overall submission readiness and validation metrics here.",
  },

  // 1️⃣1️⃣ Finalize Submission
  {
    target: ".finalize-btn",
    content:
      "Once all modules are validated, finalize the submission package.",
  },

  // 1️⃣2️⃣ Generate eCTD Package
  {
    target: ".generate-package-btn",
    content:
      "Generate and download the final eCTD submission package.",
  },
];