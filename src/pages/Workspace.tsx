export const Workspace = () => {
  return (
    <div className="flex w-full min-h-screen bg-slate-50">
      
      {/* LEFT MODULE SIDEBAR */}
      <div className="w-64 bg-white border-r p-4">
        <h3 className="text-sm font-semibold text-slate-500 mb-4">
          ECTD HIERARCHY
        </h3>

        <ul className="space-y-2 text-sm">
          <li className="text-slate-700">Module 1: Administrative</li>
          <li className="text-slate-700">Module 2: Summaries</li>
          <li className="text-purple-600 font-medium">
            2.5 Clinical Overview
          </li>
          <li className="text-slate-700">Module 3: Quality</li>
          <li className="text-slate-700">Module 4: Nonclinical</li>
          <li className="text-slate-700">Module 5: Clinical</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">
          2.5 Clinical Overview
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          Section Documents
        </div>

        <div className="mt-6 p-10 border-2 border-dashed border-purple-300 rounded-xl text-center">
          Drag & Drop Documents
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-80 bg-white border-l p-6">
        <h3 className="font-semibold mb-4">Validation Health</h3>
        <div className="text-3xl font-bold text-purple-600">
          92%
        </div>
      </div>
    </div>
  );
};