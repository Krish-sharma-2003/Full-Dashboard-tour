import {
  DownloadIcon,
  SparklesIcon,
  PlayIcon,
  UploadCloudIcon,
  Loader2Icon,
  FileTextIcon,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AIDraftEditorModal } from "../components/modals/AIDraftEditorModal";
import { UploadDocumentModal } from "../components/modals/UploadDocumentModal";
import { AITemplateGeneratorModal } from "../components/modals/AITemplateGeneratorModal";
import { api } from "../lib/api";


export const ClinicalOverview = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [isDraftEditorOpen, setIsDraftEditorOpen] = useState(false);

  // 🔥 Real documents from backend
  const [documents, setDocuments] = useState<any[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isUpdated = searchParams.get("state") === "updated";
  const showUploadModal = searchParams.get("modal") === "upload";
  const showGenerateDraftModal = searchParams.get("modal") === "generateDraft";
  const showDraftEditorModal = searchParams.get("modal") === "draftEditor";

  // 🔥 Read project_id from URL: /workspace?project_id=<id>
  const projectId = searchParams.get("project_id") || "";

  // 🔥 Fetch documents for this project
  const fetchDocuments = useCallback(async () => {
    if (!projectId) return;
    try {
      setLoadingDocs(true);
      const data = await api.getDocuments(projectId);
      setDocuments(data);
    } catch (err) {
      console.error("Failed to fetch documents:", err);
    } finally {
      setLoadingDocs(false);
    }
  }, [projectId]);

  useEffect(() => {
    if (showUploadModal) {
      setIsUploadOpen(true);
    }
  }, [showUploadModal]);

  useEffect(() => {
    setIsGeneratorOpen(showGenerateDraftModal);
  }, [showGenerateDraftModal]);

  useEffect(() => {
    setIsDraftEditorOpen(showDraftEditorModal);
  }, [showDraftEditorModal]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">

        {/* BREADCRUMB */}
        <div className="text-sm text-slate-500">
          Home &gt; Submission XYZ &gt;{" "}
          <span className="text-[rgb(44,73,182)] font-medium">
            Module 2.5 Clinical Overview
          </span>
        </div>

        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                2.5 Clinical Overview
              </h1>

              {isUpdated && (
                <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-600 rounded-full">
                  ✓ Completed
                </span>
              )}
            </div>

            <p className="text-slate-500 text-sm mt-2 max-w-2xl">
              Central management for clinical summary documentation,
              validation criteria, and regulatory cross-referencing.
            </p>
          </div>

          <div className="flex gap-4">
            <ActionButton
              icon={<DownloadIcon className="w-4 h-4" />}
              label="Export Module"
            />

            <ActionButton
              className="generate-draft-btn"
              icon={<SparklesIcon className="w-4 h-4" />}
              label="Generate Draft"
              onClick={() => setIsGeneratorOpen(true)}
            />

            <button
  onClick={() => navigate("/compliance-review")}
  className="submit-review-btn flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[rgb(44,73,182)] text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
>
  <PlayIcon className="w-4 h-4" />
  Submit for Review
</button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-6">
          <StatCard
            title="ACTIVE DOCUMENTS"
            value={isUpdated ? "15" : "14"}
            sub={isUpdated ? "+1 new" : "+2 new"}
          />
          <StatCard title="INTERNAL DEADLINE" value="Oct 28" sub="12 days left" />
          <StatCard title="VALIDATED NODES" value="92%" sub="Passing" />
          <StatCard
            title="REVIEW STATUS"
            value={isUpdated ? "Awaiting Review" : "In-Draft"}
            sub={isUpdated ? "Stage 2" : "Stage 1"}
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-3 gap-8">
          {isUpdated && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-lg text-sm">
    ✓ Section 2.5 Clinical Overview marked as completed
  </div>
)}

          {/* LEFT */}
          <div className="col-span-2 flex flex-col gap-8">

            {/* SECTION DOCUMENTS */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h3 className="font-semibold text-slate-900">
                  Section Documents
                  {projectId && (
                    <span className="ml-2 text-xs font-normal text-slate-400">
                      (Project: {projectId.slice(0, 8)}...)
                    </span>
                  )}
                </h3>
                <button
                  onClick={() => setIsUploadOpen(true)}
                  className="text-sm text-[rgb(44,73,182)] font-medium hover:underline"
                >
                  + Add Entry
                </button>
              </div>

              <div className="grid grid-cols-4 px-6 py-3 text-[11px] text-slate-400 bg-slate-50 uppercase tracking-wider">
                <div>Document Name</div>
                <div>Uploaded By</div>
                <div>Date</div>
                <div className="text-right">Actions</div>
              </div>

              {/* Loading state */}
              {loadingDocs && (
                <div className="flex items-center gap-2 px-6 py-5 text-slate-500 text-sm">
                  <Loader2Icon className="w-4 h-4 animate-spin" />
                  Loading documents...
                </div>
              )}

              {/* AI-generated doc (if state=updated) */}
              {isUpdated && (
                <div className="grid grid-cols-4 items-center px-6 py-4 border-t text-sm bg-blue-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold">
                      AI
                    </div>
                    AI-Generated_Clinical_Overview.docx
                  </div>
                  <div>system</div>
                  <div>Just now</div>
                  <div className="text-right text-slate-400 cursor-pointer">⋮</div>
                </div>
              )}

              {/* 🔥 Real uploaded documents from backend */}
              {!loadingDocs && documents.map((doc: any) => (
                <div
                  key={doc.id}
                  className="grid grid-cols-4 items-center px-6 py-4 border-t text-sm hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[rgb(44,73,182)]/10 flex items-center justify-center">
                      <FileTextIcon className="w-4 h-4 text-[rgb(44,73,182)]" />
                    </div>
                    <a
                      href={doc.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 hover:text-[rgb(44,73,182)] hover:underline truncate max-w-[180px]"
                    >
                      {doc.file_name}
                    </a>
                  </div>
                  <div className="text-slate-500">{doc.uploaded_by}</div>
                  <div className="text-slate-500">
                    {new Date(doc.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <div className="text-right">
                    <a
                      href={doc.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(44,73,182)] text-xs font-medium hover:underline"
                    >
                      View ↗
                    </a>
                  </div>
                </div>
              ))}

              {/* Empty state when no project or no docs */}
              {!loadingDocs && documents.length === 0 && !isUpdated && (
                <div className="px-6 py-10 text-center text-slate-400 text-sm">
                  {projectId
                    ? "No documents uploaded yet for this project."
                    : "Open a project from the Dashboard to see its documents."}
                </div>
              )}

              {/* Static fallback rows (always shown) */}
              <DocumentRow
                label="PDF"
                name="clin-overview-main.pdf"
                version="v2.4"
                modified="2h ago by Chen"
                status="APPROVED"
                statusColor="emerald"
              />
              <DocumentRow
                label="DOC"
                name="product-risk-analysis.docx"
                version="v1.0"
                modified="Yesterday"
                status="IN REVIEW"
                statusColor="amber"
              />
            </div>

            {/* DRAG DROP */}
            <div
              onClick={() => setIsUploadOpen(true)}
              className="drag-drop-area border-2 border-dashed border-[rgb(44,73,182)] rounded-2xl p-14 text-center bg-[rgb(44,73,182)]/10 hover:bg-[rgb(44,73,182)]/15 transition"
            >
              <UploadCloudIcon className="w-12 h-12 text-[rgb(44,73,182)] mx-auto mb-4" />
              <p className="font-medium text-slate-800 text-sm">
                Drag & Drop Documents
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Accepts PDF, DOCX, and XML files up to 50MB
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — FULLY RESTORED */}
          <div className="flex flex-col gap-8">

            {/* AI INSIGHT SUMMARY */}
            <div className="rounded-2xl p-7 text-white shadow-lg bg-[rgb(44,73,182)]">
              <h3 className="font-semibold text-lg mb-4">
                AI Insight Summary
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Analysis suggests strong alignment between Section 2.5.3 and clinical trial data.
                Ensure endpoints match finalized datasets to avoid validation warnings.
              </p>
              <div className="flex justify-center mt-6">
                <button className="px-6 py-2.5 bg-white text-[rgb(44,73,182)] text-sm rounded-xl font-medium hover:bg-slate-100 transition">
                  View AI Suggestions
                </button>
              </div>
            </div>

            {/* VALIDATION HEALTH — FULL RESTORED */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-6">
                Validation Health
              </h3>

              <div className="flex items-center justify-center mb-6">
                <div className="relative w-36 h-36">
                  <svg className="w-36 h-36 -rotate-90">
                    <circle cx="72" cy="72" r="60" stroke="#e2e8f0" strokeWidth="14" fill="transparent" />
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      stroke="rgb(44,73,182)"
                      strokeWidth="14"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 60}
                      strokeDashoffset={(2 * Math.PI * 60) * (1 - 0.92)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-[rgb(44,73,182)]">92%</span>
                    <span className="text-xs text-slate-500">READY</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> Critical Errors
                  </div>
                  <span className="font-semibold text-slate-800">0</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span> Validation Warnings
                  </div>
                  <span className="font-semibold text-slate-800">3</span>
                </div>
              </div>

              <div className="flex justify-center mt-7">
                <button className="text-sm text-[rgb(44,73,182)] font-medium hover:underline">
                  Download Detailed Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <UploadDocumentModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onComplete={() => {
          setIsUploadOpen(false);
          // 🔥 Refresh document list after successful upload
          fetchDocuments();
          navigate("/ai-processing");
        }}
      />

      <AITemplateGeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}

        onGenerate={() => {
          setIsGeneratorOpen(false);      // Step 1: Generator close
          setIsDraftEditorOpen(true);     // Step 2: Draft editor open
        }}
      />
      <AIDraftEditorModal
        isOpen={isDraftEditorOpen}
        onClose={() => setIsDraftEditorOpen(false)}
      />

    </>
  );
};

/* COMPONENTS */

const ActionButton = ({ icon, label, onClick, className }: any) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition ${className || ""}`}
  >
    {icon}
    {label}
  </button>
);

const StatCard = ({ title, value, sub }: any) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
    <div className="text-[11px] text-slate-400 uppercase tracking-wider">
      {title}
    </div>
    <div className="text-2xl font-semibold text-[rgb(44,73,182)] mt-1">
      {value}
    </div>
    <div className="text-xs text-slate-500 mt-1">
      {sub}
    </div>
  </div>
);

const DocumentRow = ({
  label,
  name,
  version,
  modified,
  status,
  statusColor,
}: any) => (
  <div className="grid grid-cols-5 items-center px-6 py-4 border-t text-sm hover:bg-slate-50 transition">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 text-sm font-semibold">
        {label}
      </div>
      {name}
    </div>
    <div>{version}</div>
    <div>{modified}</div>
    <div>
      <span
        className={`bg-${statusColor}-100 text-${statusColor}-600 px-3 py-1 rounded-full text-xs font-medium`}
      >
        {status}
      </span>
    </div>
    <div className="text-right text-slate-400">⋮</div>
  </div>
);