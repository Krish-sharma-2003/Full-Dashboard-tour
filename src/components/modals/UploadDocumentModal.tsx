import { UploadCloudIcon, XIcon } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const UploadDocumentModal = ({
  isOpen,
  onClose,
  onComplete,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl">

        {/* HEADER */}
        <div className="flex items-start justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Upload Regulatory Document
            </h2>
            <p className="text-xs text-[rgb(44,73,182)] font-medium mt-1">
              STEP 2 OF 3: CLASSIFICATION & METADATA
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* PROGRESS */}
        <div className="px-6 pt-6">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>Overall Progress</span>
            <span>66%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full">
            <div
              className="h-2 bg-[rgb(44,73,182)] rounded-full"
              style={{ width: "66%" }}
            />
          </div>
        </div>

        {/* BODY */}
        <div className="p-8">

          {/* CENTERED DRAG & DROP */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-2xl border-2 border-dashed border-[rgb(44,73,182)] rounded-2xl p-14 text-center bg-[rgb(44,73,182)]/5">
              <UploadCloudIcon className="w-14 h-14 text-[rgb(44,73,182)] mx-auto mb-5" />
              <p className="font-medium text-slate-800 text-sm">
                Drag and drop PDF/Word files here
              </p>
              <p className="text-sm text-slate-500 mt-2">
                or browse files from your computer. Max size 50MB.
              </p>

              <button className="mt-6 px-6 py-2.5 rounded-xl bg-[rgb(44,73,182)] text-white text-sm font-medium hover:opacity-90 transition">
                Browse Files
              </button>
            </div>
          </div>

          {/* LOWER GRID */}
          <div className="grid grid-cols-3 gap-10">

            {/* LEFT FORM */}
            <div className="col-span-2 space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Document Type *
                </label>
                <select className="mt-2 w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
                  <option>Select document type...</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Applicable Regions
                </label>
                <div className="flex flex-wrap gap-3 mt-3">
                  {["FDA (US)", "EMA (EU)", "PMDA (JP)", "MHRA (UK)"].map(
                    (region, i) => (
                      <button
                        key={i}
                        className={`px-4 py-1.5 rounded-full text-sm border ${
                          i === 0
                            ? "bg-[rgb(44,73,182)] text-white border-[rgb(44,73,182)]"
                            : "bg-white text-slate-600 border-slate-300"
                        }`}
                      >
                        {region}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Document Version
                </label>
                <input
                  placeholder="e.g. 1.0.4"
                  className="mt-2 w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
                />
              </div>
            </div>

            {/* RIGHT SMALL METADATA */}
            <div className="col-span-1">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-4">
                  Metadata Preview
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Author</span>
                    <span className="font-medium">Dr. Sarah Jenkins</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Creation Date</span>
                    <span>Oct 24, 2023</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Language</span>
                    <span>English (EN-US)</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Security Level</span>
                    <span>Confidential</span>
                  </div>
                </div>

                <div className="mt-6 bg-[rgb(44,73,182)]/10 p-3 rounded-xl text-xs text-slate-600">
                  AI-powered metadata extraction has identified fields.
                  Please verify these values.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between px-8 py-5 border-t bg-slate-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="text-sm text-slate-600 hover:underline"
          >
            ← Back
          </button>

          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={onComplete}
              className="px-6 py-2.5 rounded-xl bg-[rgb(44,73,182)] text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
            >
              Complete Upload ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};