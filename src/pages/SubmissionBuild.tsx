import { CheckCircle } from "lucide-react";


export const SubmissionBuild = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-6xl mx-auto px-8 py-8 space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Build Submission Package
          </h1>

          <div className="flex gap-6 mt-4 text-xs text-slate-400 uppercase">
            {["Plan", "Modules", "Files", "Review", "Quality", "Validate", "Build"].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`h-1 w-20 ${i === 6 ? "bg-indigo-600" : "bg-slate-300"} rounded-full`}></div>
                <span className={`mt-2 ${i === 6 ? "text-indigo-600 font-medium" : ""}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1.5fr_1fr] gap-8">

          {/* LEFT CHECKLIST */}
          <div className="bg-white rounded-2xl border shadow-sm p-6 space-y-4">

            <h3 className="font-semibold">Final Validation Checklist</h3>

            {[
              "XML Backbone Validated",
              "Folder Structure Verified",
              "Checksums Generated"
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div>
                  <h4 className="font-medium">{item}</h4>
                  <p className="text-xs text-slate-500">
                    All checks passed successfully
                  </p>
                </div>
                <CheckCircle className="text-emerald-600" size={20} />
              </div>
            ))}

            <div className="bg-indigo-50 border rounded-xl p-4 text-sm text-slate-600">
              Ready for Export. Generating package will finalize lifecycle operations.
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl border shadow-sm p-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Submission ID</span>
                <span className="font-medium">US-NDA-2024-082</span>
              </div>
              <div className="flex justify-between">
                <span>Package Size</span>
                <span>245.8 MB</span>
              </div>
              <div className="flex justify-between">
                <span>Files Count</span>
                <span>1,248 files</span>
              </div>
              <div className="flex justify-between">
                <span>Authority</span>
                <span>FDA (USA)</span>
              </div>
            </div>

            <button
              onClick={() => alert("eCTD Package Generated Successfully")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg"
            >
              Generate & Download eCTD Package
            </button>

            <button className="w-full border py-3 rounded-2xl text-sm">
              View Validation Report
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};