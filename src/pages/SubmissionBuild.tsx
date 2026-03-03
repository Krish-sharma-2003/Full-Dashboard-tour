import {
  CheckCircle2,
  Clock,
  Download,
  FileText,
  ShieldCheck,
  FolderCheck,
  Lock,
  Info
} from "lucide-react";

export const SubmissionBuild = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-10">

        {/* ===== HEADER ===== */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-slate-900">
              Build Submission Package
            </h1>

            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              STEP 7 OF 7
            </span>
          </div>

          {/* Step Progress */}
          <div className="flex items-center gap-6 text-xs text-slate-400 uppercase">
            {["Plan","Modules","Files","Review","Quality","Validate","Build"].map((step,i)=>(
              <div key={i} className="flex flex-col items-center w-24">
                <div
                  className={`h-1 w-full rounded-full ${
                    i <= 6 ? "bg-blue-600" : "bg-slate-200"
                  }`}
                />
                <span
                  className={`mt-2 ${
                    i === 6 ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-[1.6fr_1fr] gap-10">

          {/* LEFT SIDE CHECKLIST */}
          <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-6">

            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-600" />
                Final Validation Checklist
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Confirming all regulatory requirements are met for the eCTD v3.2.2 standard.
              </p>
            </div>

            {/* Validation Items */}
            {[
              { icon: <FileText size={18} />, title: "XML Backbone Validated" },
              { icon: <FolderCheck size={18} />, title: "Folder Structure Verified" },
              { icon: <Lock size={18} />, title: "Checksums Generated" }
            ].map((item,i)=>(
              <div
                key={i}
                className="flex justify-between items-center bg-emerald-50 border border-emerald-200 rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      All checks passed successfully
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                  <CheckCircle2 size={16} />
                  PASSED
                </div>
              </div>
            ))}

            {/* Ready Block */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-sm text-slate-600">
              <Info size={16} className="text-blue-600 mt-1" />
              <div>
                Ready for Export. Generating the package will finalize all lifecycle operations for this submission.
                You can still download the validation report after generation.
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* Submission Details */}
            <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4 text-sm">

              <h3 className="font-semibold text-slate-700 tracking-wide uppercase text-xs">
                Submission Details
              </h3>

              <div className="flex justify-between">
                <span className="text-slate-500">Submission ID</span>
                <span className="font-medium">US-NDA-2024-082</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Package Size (Est.)</span>
                <span className="font-medium">245.8 MB</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Files Count</span>
                <span className="font-medium">1,248 files</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Authority</span>
                <span className="font-medium">FDA (USA)</span>
              </div>
            </div>

            {/* Generate Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 text-sm font-medium">
              <Download size={18} />
              Generate & Download eCTD Package
            </button>

            {/* View Report */}
            <button className="w-full border py-3 rounded-2xl text-sm flex items-center justify-center gap-2 bg-white">
              <FileText size={16} />
              View Validation Report
            </button>

            <p className="text-xs text-slate-400 text-center px-4">
              By clicking generate, you agree that this submission meets your internal compliance standards.
            </p>

          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="border-t pt-6 flex justify-between text-xs text-slate-400">
          <div className="flex gap-6 " >
            <span className="flex items-center justify-center gap-2 text-sm font-medium"> <Clock className="text-blue-600" size={16} /> View Revision History</span>
            <span className="flex items-center justify-center gap-2 text-sm font-medium"> <FileText className="text-blue-600" size={16} /> Audit Log</span>
          </div>

          <div>
            ReguCompliance eCTD Builder v4.2.1 · Licensed to BioPharma Corp
          </div>
        </div>

      </div>
    </div>
  );
};