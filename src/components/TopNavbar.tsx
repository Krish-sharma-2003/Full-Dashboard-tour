import { Search, Bell, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const TopNavbar = () => {
  const navigate = useNavigate();   // ✅ INSIDE component

  return (
    <div className="bg-white border-b px-8 py-4 flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 font-semibold text-slate-900">
          <div className="w-6 h-6 bg-indigo-600 rounded-md"></div>
          ReguCompliance <span className="text-xs text-indigo-600">SaaS</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-600">
          <button onClick={() => navigate("/")}>Dashboard</button>
          <button onClick={() => navigate("/projects")}>Projects</button>
          <button onClick={() => navigate("/compliance-review")}>
            Compliance
          </button>
          <button onClick={() => navigate("/submissions/readiness")}>
            Submissions
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <div className="flex items-center bg-slate-100 px-3 py-2 rounded-xl text-sm text-slate-500 w-64">
          <Search size={16} className="mr-2" />
          Search document ID...
        </div>

        <Bell size={18} className="text-slate-500 cursor-pointer" />
        <Settings size={18} className="text-slate-500 cursor-pointer" />

        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-medium">
          SC
        </div>
      </div>
    </div>
  );
};