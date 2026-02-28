export const ComplianceHeader = () => {
  return (
    <div className="space-y-4">

      <div className="text-xs text-slate-400 uppercase tracking-wider">
        Projects / Project Beta / Compliance Review
      </div>

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Review Detailed Compliance Issues
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Document ID: eCTD-2023-X99 · Region: EU-EMA
          </p>
        </div>

        <div className="flex items-center gap-6">

          <div className="w-48">
            <div className="text-xs text-slate-500 mb-1">
              8 issues remaining
            </div>
            <div className="h-2 bg-slate-200 rounded-full">
              <div className="h-2 w-3/4 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-xl shadow-md">
            Complete Review
          </button>
        </div>

      </div>
    </div>
  );
};