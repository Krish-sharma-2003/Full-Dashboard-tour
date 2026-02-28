import { CheckCircleIcon, AlertTriangleIcon, PencilIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AIProcessing = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">

      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Step 3: AI Processing & Summary
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            AI has completed document analysis for regulatory compliance and structure.
          </p>
        </div>

        <div className="px-4 py-1.5 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full">
          ✓ Analysis Complete
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-8">

        {/* LEFT COLUMN */}
        <div className="col-span-1 flex flex-col gap-6">

          {/* SCORE CARD */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">
              Compliance Score
            </p>

            <div className="relative w-40 h-40 mx-auto">
              <svg className="w-40 h-40 -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="65"
                  stroke="#e2e8f0"
                  strokeWidth="14"
                  fill="transparent"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="65"
                  stroke="rgb(44,73,182)"
                  strokeWidth="14"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 65}
                  strokeDashoffset={(2 * Math.PI * 65) * (1 - 0.92)}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[rgb(44,73,182)]">
                  92%
                </span>
                <span className="text-xs text-slate-500">
                  PASSABLE
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              High confidence match with FDA eCTD validation criteria.
            </p>
          </div>

          {/* SUGGESTED PLACEMENT */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">
              Module 2 / Section 2.5
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-2">
              Clinical Overview
            </h3>

            <p className="text-xs text-slate-500 mt-2">
              Based on abstract analysis, this document pertains to Phase III trial data summaries.
            </p>

            <button className="mt-5 w-full px-6 py-2.5 rounded-xl bg-[rgb(44,73,182)] text-white text-sm font-semibold shadow-md hover:opacity-90 transition">
              Confirm Placement
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-2 flex flex-col gap-6">

          {/* METADATA TABLE */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h3 className="font-semibold text-slate-900">
                Extracted Metadata
              </h3>
              <button className="text-sm text-[rgb(44,73,182)] font-medium">
                Edit All Fields
              </button>
            </div>

            <div className="divide-y text-sm">
              {[
                ["Document ID", "DOC-2024-PH3-092", "99%"],
                ["Sponsor", "AeroHealth Biotics Inc.", "98%"],
                ["Author", "Dr. Helena Vance", "72%"],
                ["Submission Type", "Original / NDA", "95%"],
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 px-6 py-4 items-center">
                  <div className="text-slate-500">{row[0]}</div>
                  <div>{row[1]}</div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs bg-emerald-100 text-emerald-600">
                      {row[2]}
                    </span>
                  </div>
                  <div className="text-right text-slate-400">
                    <PencilIcon className="w-4 h-4 inline" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ISSUES */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-900">
                Issues Detected (4 Items)
              </h3>
              <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                Critical Priority
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-start bg-slate-50 p-4 rounded-xl">
                <div>
                  <p className="font-medium text-slate-800">
                    Invalid Hyperlink Detected
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Page 42 contains internal link which will fail validation.
                  </p>
                </div>
                <button className="text-[rgb(44,73,182)] font-medium text-xs">
                  Resolve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex justify-end gap-4 pt-6 border-t">
        <button className="px-6 py-2.5 rounded-xl border border-slate-300 text-sm">
          Discard Changes
        </button>
        <button className="px-6 py-2.5 rounded-xl border border-[rgb(44,73,182)] text-[rgb(44,73,182)] text-sm">
          Edit Metadata
        </button>
        {/* const navigate = useNavigate(); */}
        <button
           onClick={() => navigate("/workspace?state=updated")}
          className="px-6 py-2.5 rounded-xl bg-[rgb(44,73,182)] text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
        >
          Accept Suggestions →
        </button>
      </div>
    </div>
  );
};