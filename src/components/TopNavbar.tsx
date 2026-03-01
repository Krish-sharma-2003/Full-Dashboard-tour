import { Search, Bell, Settings } from "lucide-react";

export const TopNavbar = () => {
  return (
    <div className="bg-white border-b px-8 py-4 flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 font-semibold text-slate-900">
          <div className="w-6 h-6 bg-purple-600 rounded-md"></div>
          ReguCompliance <span className="text-xs text-purple-600">SaaS</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-600">
          <button className="hover:text-purple-600">Dashboard</button>
          <button className="text-purple-600 font-medium border-b-2 border-purple-600 pb-1">
            Compliance
          </button>
          <button className="hover:text-purple-600">Submissions</button>
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

        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-medium">
          SC
        </div>
      </div>
    </div>
  );
};