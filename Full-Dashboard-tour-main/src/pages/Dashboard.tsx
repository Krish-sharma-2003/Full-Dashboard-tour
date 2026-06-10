import {
  BuildingIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FlaskConicalIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  UploadCloudIcon,
  Loader2Icon,
  AlertCircleIcon,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CreateProjectModal } from "../components/modals/CreateProjectModal";
import { UploadDocumentModal } from "../components/modals/UploadDocumentModal";
import { api } from "../lib/api";

const statsData = [
  { label: "ACTIVE SUBMISSIONS", value: "12" },
  { label: "PENDING REVIEW", value: "4" },
  { label: "HEALTH AUTHORITIES", value: "08" },
];

/* 🔥 Figma Default Projects (Always Visible) */
const defaultProjects = [
  {
    id: "default-1",
    title: "Project Alpha - Oncology Submission",
    company: "XYZ Pharma",
    region: "US (FDA)",
    created: "12 Feb 2026",
    phase: "PHASE III",
    completion: "84%",
  },
  {
    id: "default-2",
    title: "Vax-Guard 2026 Resubmission",
    company: "Global Biologics",
    region: "EU (EMA)",
    created: "05 Feb 2026",
    phase: "AWAITING REVIEW",
    completion: "100%",
  },
  {
    id: "default-3",
    title: "NeuroPath Small Molecule IND",
    company: "NeuroLabs Inc.",
    region: "JP (PMDA)",
    created: "28 Jan 2026",
    phase: "DRAFTING",
    completion: "22%",
  },
];

const getBadgeClasses = (phase?: string) => {
  if (!phase) return "bg-blue-50 text-blue-600 border-blue-100";
  if (phase.toLowerCase().includes("iii"))
    return "bg-emerald-50 text-emerald-600 border-emerald-100";
  if (phase.toLowerCase().includes("review"))
    return "bg-amber-50 text-amber-600 border-amber-100";
  return "bg-blue-50 text-blue-600 border-blue-100";
};

export const Dashboard = (): JSX.Element => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const navigate = useNavigate();

  const [backendProjects, setBackendProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Stable fetch function — passed as onSuccess to CreateProjectModal
  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = await api.getProjects("test_org");
      const formatted = data.map((p: any) => ({
        id: p.id,
        title: p.name,
        company: p.description || "Your Org",
        region: p.region,
        created: new Date(p.created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        phase: p.status || "DRAFT",
        completion: "0%",
      }));
      setBackendProjects(formatted);
    } catch (err: any) {
      console.error(err);
      setError("Failed to load projects from backend.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // Merge default (mock) + live backend projects
  const allProjects = [...defaultProjects, ...backendProjects];

  const handleProjectClick = (projectId: string) => {
    // Navigate to workspace with project_id in URL
    navigate(`/workspace?project_id=${projectId}`);
  };

  return (
    <>
      <section className="flex flex-col max-w-7xl mx-auto items-start gap-8 p-4 md:p-6 lg:p-8 w-full">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-4">
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-extrabold text-slate-900 text-2xl md:text-3xl tracking-tight leading-tight">
              Project Dashboard
            </h1>
            <p className="max-w-lg font-normal text-slate-600 text-sm md:text-base leading-relaxed">
              Manage and monitor pharmaceutical eCTD submission projects for
              global health authorities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Upload Document Button */}
            <Button
              onClick={() => setIsUploadModalOpen(true)}
              variant="outline"
              className="gap-2 px-5 py-2.5 rounded-full border-slate-300 hover:border-slate-400 transition-all"
            >
              <UploadCloudIcon className="w-4 h-4" />
              <span className="font-semibold text-sm">Upload Document</span>
            </Button>

            {/* Create Project Button */}
            <Button
              onClick={() => setIsCreateModalOpen(true)}
              className="create-project-btn gap-2 px-5 py-2.5 bg-[rgb(44,73,182)] hover:opacity-90 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <PlusIcon className="w-4 h-4" />
              <span className="font-semibold text-white text-sm md:text-base">
                Create Project
              </span>
            </Button>
          </div>
        </header>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="flex flex-col items-start gap-2 p-6">
                <p className="font-semibold text-slate-500 text-xs tracking-wide uppercase">
                  {stat.label}
                </p>
                <p className="font-bold text-slate-900 text-3xl">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-bold text-slate-900 text-lg md:text-xl">
              Active Projects
            </h2>
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors">
              <span className="font-medium text-xs md:text-sm">
                Sort by: Date Created
              </span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center gap-2 text-slate-500 text-sm py-2">
              <Loader2Icon className="w-4 h-4 animate-spin" />
              <span>Loading projects from server...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm w-full">
              <AlertCircleIcon className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
              <button
                onClick={fetchProjects}
                className="ml-auto underline text-red-600 hover:text-red-800 font-medium"
              >
                Retry
              </button>
            </div>
          )}

          <div className="flex flex-col items-start gap-4 w-full">
            {allProjects.map((project) => (
              <Card
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="project-card cursor-pointer w-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-slate-300"
              >
                <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 md:p-6 gap-4">
                  <div className="flex items-start md:items-center gap-4 md:gap-6 w-full md:w-auto">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[rgb(44,73,182)]/10 flex items-center justify-center">
                      <FlaskConicalIcon className="w-6 h-6 text-[rgb(44,73,182)]" />
                    </div>

                    <div className="flex flex-col items-start gap-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        <h3 className="font-semibold text-slate-900 text-base md:text-lg">
                          {project.title}
                        </h3>
                        <Badge
                          className={`px-2 py-1 rounded-md border text-[10px] font-semibold uppercase tracking-wide ${getBadgeClasses(
                            project.phase
                          )}`}
                        >
                          {project.phase || "DRAFT"}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <BuildingIcon className="w-4 h-4" />
                          <span>Company: {project.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <GlobeIcon className="w-4 h-4" />
                          <span>Region: {project.region}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <CalendarIcon className="w-4 h-4" />
                          <span>Created: {project.created}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 ml-auto">
                    <div className="flex flex-col items-end">
                      <span className="font-semibold text-slate-500 text-xs uppercase tracking-wide">
                        Completion
                      </span>
                      <span className="font-bold text-slate-900 text-lg">
                        {project.completion}
                      </span>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI SECTION */}
        <Card className="w-full bg-[rgb(44,73,182)]/5 rounded-2xl border border-[rgb(44,73,182)]/20">
          <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[rgb(44,73,182)] flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base md:text-lg">
                  AI-Powered Compliance Check
                </h3>
                <p className="font-normal text-slate-700 text-sm leading-relaxed">
                  All submissions are automatically validated against 2026 ICH guidelines.
                </p>
              </div>
            </div>
            <Button variant="outline">View Report</Button>
          </CardContent>
        </Card>
      </section>

      {/* CREATE PROJECT MODAL */}
      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={fetchProjects}
      />

      {/* UPLOAD DOCUMENT MODAL */}
      <UploadDocumentModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onComplete={() => {
          setIsUploadModalOpen(false);
        }}
      />
    </>
  );
};