export const BottomActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-10 py-4 flex justify-between items-center shadow-lg">

      <div className="flex items-center gap-4 text-sm">
        <button className="text-slate-500 hover:text-slate-700">
          ← Back to Summary
        </button>

        <span className="text-amber-600 font-medium">
          Compliance Not Met
        </span>
      </div>

      <div className="flex gap-4">
        <button className="px-4 py-2 border rounded-xl text-sm">
          Save Progress
        </button>

        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm shadow-md">
          Run Re-Validation
        </button>
      </div>

    </div>
  );
};