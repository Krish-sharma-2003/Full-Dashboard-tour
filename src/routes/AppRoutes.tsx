import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../layout/Layout";
import { WorkspaceLayout } from "../layout/WorkspaceLayout";

import { Dashboard } from "../pages/Dashboard";
import { Projects } from "../pages/Projects";
import { Admin } from "../pages/Admin";
import { Settings } from "../pages/Settings";
import { ClinicalOverview } from "../pages/ClinicalOverview";
import { AIProcessing } from "../pages/AIProcessing";
import { ProcessingLayout } from "../layout/ProcessingLayout";
import { ComplianceReview } from "../pages/ComplianceReview";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
     <Routes>

  {/* NORMAL APP LAYOUT */}
  <Route element={<Layout />}>
    <Route path="/" element={<Dashboard />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/settings" element={<Settings />} />
  </Route>

  {/* WORKSPACE LAYOUT (Screen 3 onwards) */}
  <Route element={<WorkspaceLayout />}>
    <Route path="/workspace" element={<ClinicalOverview />} />
    <Route path="/compliance-review" element={<ComplianceReview />} />
    
    {/* <Route path="/ai-processing" element={<AIProcessing />} /> */}
  </Route>

   {/* AI PROCESSING (NO SIDEBAR) */}
  <Route element={<ProcessingLayout />}>
    <Route path="/ai-processing" element={<AIProcessing />} />
  </Route>


</Routes>
    </BrowserRouter>
  );
};

