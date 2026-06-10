import { SearchIcon, BellIcon } from "lucide-react";

export const WorkspaceTopbar = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between">

      {/* LEFT NAV LINKS */}
      <div className="flex items-center gap-8">
        <h1 className="text-lg font-semibold text-slate-900">
          ReguFlow eCTD
        </h1>

        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <span className="hover:text-[rgb(44,73,182)] cursor-pointer">
            Dashboard
          </span>
          <span className="text-[rgb(44,73,182)] font-medium">
            Projects
          </span>
          <span className="hover:text-[rgb(44,73,182)] cursor-pointer">
            Compliance
          </span>
          <span className="hover:text-[rgb(44,73,182)] cursor-pointer">
            Submissions
          </span>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* SEARCH */}
        <div className="relative">
          <SearchIcon className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search documents..."
            className="pl-9 pr-4 py-2 w-64 rounded-full bg-slate-100 text-sm outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
          />
        </div>

        {/* BELL */}
        <BellIcon className="w-5 h-5 text-slate-600 cursor-pointer hover:text-[rgb(44,73,182)]" />

        {/* USER */}
        <div className="flex items-center gap-3">
          <div className="text-right text-sm">
            <div className="font-medium text-slate-900">Dr. Sarah Chen</div>
            <div className="text-xs text-slate-500">Regulatory Lead</div>
          </div>

          <div className="w-9 h-9 rounded-full bg-[rgb(44,73,182)] text-white flex items-center justify-center font-semibold">
            SC
          </div>
        </div>

      </div>
    </header>
  );
};