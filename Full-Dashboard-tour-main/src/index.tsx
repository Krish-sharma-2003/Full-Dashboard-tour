import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes/AppRoutes";
import { FlowProvider } from "./context/FlowContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FlowProvider>
      <AppRoutes />
    </FlowProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { AppRoutes } from "./routes/AppRoutes";
// import { FlowProvider } from "./context/FlowContext";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <FlowProvider>
//       <AppRoutes />
//     </FlowProvider>
//   </React.StrictMode>
// );