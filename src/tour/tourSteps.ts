import { Step } from "react-joyride";

export const tourSteps: Step[] = [
  // 1️⃣ Dashboard – Create Project
  {
    target: ".create-project-btn",
    content: "Step 1: Start by creating a new regulatory submission project.",
    disableBeacon: true,
  },
  // 2️⃣ Project Dashboard - Select Project
  {
    target: ".project-card",
    content: "Step 2: Select your project from the dashboard to open the Project Workspace.",
  },
  // 3️⃣ Project Workspace – Drag & Drop
  {
    target: ".drag-drop-area",
    content: "Step 3: Click 'Drag and Drop Documents' to open the Upload dialog.",
  },
  // 4️⃣ Upload Modal - Complete Upload
  {
    target: ".complete-upload-btn",
    content: "Step 4: Fill in the details and click 'Complete Upload' to start AI processing.",
  },
  // 5️⃣ AI Processing Summary
  {
    target: ".ai-processing-summary",
    content: "Step 5: After uploading, the system identifies compliance insights and scores.",
  },
  // 6️⃣ Accept Suggestions
  {
    target: ".accept-suggestions-btn",
    content: "Step 6: Review and click 'Accept Suggestions' to update the document with AI-generated improvements.",
  },
  // 7️⃣ Screen 6 - Generate Draft Button
  {
    target: ".generate-draft-btn",
    content: "Step 7: Back in the workspace, click 'Generate Draft' to open the AI Template Generator dialog.",
  },
  // 8️⃣ AI Template Generator Modal - Generate Draft
  {
    target: ".modal-generate-draft-inner", 
    content: "Step 8: Click 'Generate Draft' within the dialog to proceed to the AI Draft Editor.",
  },
  // 9️⃣ AI Draft Editor (Screen 9)
  {
    target: ".draft-editor",
    content: "Step 9: Perform final review and edits in the AI Draft Editor.",
  },
  // 1️⃣0️⃣ Accept and Save (Screen 10)
  {
    target: ".accept-save-btn",
    content: "Step 10: Click 'Accept and Save to Module' to update the module.",
  },
  // 1️⃣1️⃣ Compliance (Screen 11)
  {
    target: ".navbar-compliance",
    content: "Step 11: Click 'Compliance' in the navbar to review regulatory status.",
  },
  // 1️⃣2️⃣ Submission (Screen 12)
  {
    target: ".navbar-submissions",
    content: "Step 12: Click 'Submission' to prepare for finalization.",
  },
  // 1️⃣3️⃣ Finalize for Submission (Screen 13)
  {
    target: ".finalize-btn",
    content: "Step 13: Finally, click 'Finalize for Submission' to complete the flow.",
  },
];