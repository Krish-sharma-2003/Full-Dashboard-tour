export const WorkspaceSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col justify-between">

      <div>
        <div className="mb-6">
          <div className="text-xs text-slate-400 uppercase mb-2">
            ECTD Hierarchy
          </div>
          <div className="text-sm font-medium text-[rgb(44,73,182)]">
            Submission NDA-2024-08
          </div>
        </div>

        <nav className="flex flex-col gap-3 text-sm text-slate-600">

          <div>Module 1: Administrative</div>
          <div>Module 2: Summaries</div>

          <div className="bg-[rgb(44,73,182)]/10 text-[rgb(44,73,182)] px-3 py-2 rounded-lg">
            2.5 Clinical Overview
          </div>

          <div>Module 3: Quality</div>
          <div>Module 4: Nonclinical</div>
          <div>Module 5: Clinical</div>

        </nav>
      </div>

      {/* GLOBAL PROGRESS */}
      <div>
        <div className="text-xs text-slate-500 mb-2">Global Progress</div>
        <div className="h-2 bg-slate-200 rounded-full">
          <div className="h-2 w-[68%] bg-[rgb(44,73,182)] rounded-full"></div>
        </div>
        <div className="text-right text-xs text-[rgb(44,73,182)] mt-1">
          68%
        </div>
      </div>

    </aside>
  );
};