export const PDFViewerPanel = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">

      <div className="px-4 py-3 border-b flex justify-between text-sm text-slate-600">
        <span>eCTD_Module2_Summary.pdf</span>
        <span>100%</span>
      </div>

      <div className="h-[500px] bg-slate-100 flex items-center justify-center text-slate-400">
        PDF Preview Area
      </div>

      <div className="px-4 py-3 border-t text-xs text-slate-500">
        Page 1 of 42
      </div>

    </div>
  );
};