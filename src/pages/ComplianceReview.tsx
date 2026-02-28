import { useState } from "react";
import { ComplianceHeader } from "../components/compliance/ComplianceHeader";
import { ComplianceTabs } from "../components/compliance/ComplianceTabs";
import { IssueCard } from "../components/compliance/IssueCard";
import { PDFViewerPanel } from "../components/compliance/PDFViewerPanel";
import { BottomActionBar } from "../components/compliance/BottomActionBar";

export const ComplianceReview = () => {
  const [activeTab, setActiveTab] = useState("all");

  const issues = [
    {
      id: "ERR-2.3.S.1",
      tag: "MISSING SECTION",
      type: "critical",
      title: "Section 2.3.S.1 General Information is missing",
      description:
        "Required by EU-EMA guidelines. Must include name and address of manufacturer.",
      time: "2m ago",
      actions: ["Fix Manual", "Request AI Rewrite"],
    },
  ];

 
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="max-w-7xl mx-auto px-8 py-8 space-y-6">
        <ComplianceHeader />
        <ComplianceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-[1.3fr_1fr] gap-8">
          <div className="space-y-5">
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
           <div className="space-y-5">
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>

          <PDFViewerPanel />
        </div>
      </div>

      <BottomActionBar />
    </div>
  );
};