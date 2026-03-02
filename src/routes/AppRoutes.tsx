import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../layout/Layout";
import { WorkspaceLayout } from "../layout/WorkspaceLayout";
import { ComplianceLayout } from "../layout/ComplianceLayout";
import { ProcessingLayout } from "../layout/ProcessingLayout";

import { Dashboard } from "../pages/Dashboard";
import { Projects } from "../pages/Projects";
import { Admin } from "../pages/Admin";
import { Settings } from "../pages/Settings";
import { ClinicalOverview } from "../pages/ClinicalOverview";
import { AIProcessing } from "../pages/AIProcessing";
import { ComplianceReview } from "../pages/ComplianceReview";
import { ModuleReadiness } from "../pages/ModuleReadiness";
import { SubmissionBuild } from "../pages/SubmissionBuild";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN APP */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* WORKSPACE */}
        <Route element={<WorkspaceLayout />}>
          <Route path="/workspace" element={<ClinicalOverview />} />
        </Route>

        {/* COMPLIANCE + SUBMISSIONS (WITH NAVBAR) */}
        <Route element={<ComplianceLayout />}>
          <Route path="/compliance-review" element={<ComplianceReview />} />
          <Route path="/submissions/readiness" element={<ModuleReadiness />} />
          <Route path="/submissions/build" element={<SubmissionBuild />} />
        </Route>

        {/* AI PROCESSING */}
        <Route element={<ProcessingLayout />}>
          <Route path="/ai-processing" element={<AIProcessing />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};