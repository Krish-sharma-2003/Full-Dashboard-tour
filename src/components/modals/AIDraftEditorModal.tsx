import { Sparkles, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";



interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AIDraftEditorModal = ({ isOpen, onClose }: Props) => {
  const navigate = useNavigate(); 
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-8 py-5 border-b bg-slate-50">
          <div className="bg-purple-100 p-2 rounded-xl">
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              AI Draft Editor & Review
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Drafting Module 2.5: Clinical Overview
            </p>
          </div>

          <div className="flex items-center justify-right gap-4">
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
              ● AI ASSISTANT ACTIVE
            </span>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="grid grid-cols-3">

          {/* LEFT MAIN EDITOR */}
          <div className="col-span-2 p-8 border-r">

            {/* TOOLBAR */}
            <div className="flex items-center gap-4 mb-4 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600">
              <button className="font-bold">B</button>
              <button className="italic">I</button>
              <button>📋</button>
              <button>🔗</button>
              <button>🗑</button>


            </div>

            {/* DOCUMENT CONTENT */}
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">

              <h3 className="text-xl font-semibold text-slate-900">
                2.5 Clinical Overview
              </h3>

              <p>
                The clinical overview provides a critical analysis of the clinical data
                in the Common Technical Document. It focuses on the overall strategy
                for the clinical development of the medicinal product and provides a
                summary of the clinical findings.
              </p>

              <h4 className="text-base font-semibold text-slate-900">
                2.5.1 Product Development Rationale
              </h4>

              <p>
                The development of [Product Name] was initiated to address significant
                unmet medical needs in patients with moderate-to-severe chronic inflammation.
                Current therapeutic options are often limited by systemic toxicity and poor
                long-term tolerability.
              </p>

              <h4 className="text-base font-semibold text-slate-900">
                2.5.2 Product Development Rationale
              </h4>

              <p>
                The development of [Product Name] was initiated to address significant
                unmet medical needs in patients with moderate-to-severe chronic inflammation.
                Current therapeutic options are often limited by systemic toxicity and poor
                long-term tolerability.
              </p>

              {/* AI RECOMMENDATION BOX */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4">
                <div className="text-xs font-semibold text-blue-600 mb-1">
                  AI RECOMMENDATION
                </div>
                <p className="text-sm text-slate-700">
                  Consider expanding pharmacology rationale with reference to Study PK-2023-01.
                </p>
              </div>

              <h4 className="text-base font-semibold text-slate-900">
                2.5.3 Overview of Clinical Pharmacology
              </h4>

              <p>
                The primary pharmacodynamic effect of [Product Name] is the selective
                inhibition of JAK1, demonstrated in both healthy volunteers and the
                target patient population.
              </p>

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-8 space-y-6 bg-slate-50">

            {/* COMPLIANCE CIRCLE */}
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">
                Compliance Completeness
              </p>

              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="52"
                    stroke="#e2e8f0"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="52"
                    stroke="rgb(37,99,235)"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={(2 * Math.PI * 52) * (1 - 0.82)}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-blue-600">
                  82%
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-2">
                Required Sections:  4/6
              </p>
            </div>

            {/* STATUS LIST */}
            <div className="space-y-3 text-sm">

              <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl font-medium">
                ✓ 2.5.1 Product Rationale
              </div>

              <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl font-medium">
                ● 2.5.2 Product Development Rationale
              </div>

              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl font-medium">
                ● 2.5.3 Clinical Pharmacology
              </div>

              <div className="bg-grey-100 text-grey-700 px-4 py-2 rounded-xl font-medium">
                ● 2.5.4 Clinical Efficacy
              </div>

              <div className="bg-white-100 text-grey-700 px-4 py-2 rounded-xl font-medium">
                ● 2.5.5 Clinical Safety
              </div>



              <div className="bg-amber-100 text-amber-700 px-4 py-3 rounded-xl">
                <div className="font-semibold text-sm">
                  Missing Cross Reference
                </div>
                <div className="text-xs mt-1">
                  Section 2.5.2 requires link to Module 5.3.1.
                </div>
                <div className="font-semibold text-sm">
                  Undefined Abbreviation
                </div>
                <div className="text-xs mt-1">
                  JAK.1 is used in Section 2.5.3 without definition.
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between px-8 py-5 border-t bg-slate-50">

          {/* Left Side Buttons */}
          <div className="flex gap-6 text-gray-600 text-sm">
            <button className="flex items-center gap-2 hover:text-purple-600">
              🔄 Regenerate Section
            </button>

            <button className="flex items-center gap-2 hover:text-purple-600">
              ✏️ Edit Text
            </button>
          </div>


<div className="flex gap-4">
    <button onClick={onClose}  className="text-sm text-gray-500 hover:text-gray-700">
      Cancel Draft
    </button>

    <button
  onClick={() => {
    onClose();
    navigate("?state=updated", { replace: true });
  }}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md text-sm"
>
  Accept & Save to Module
</button>
  </div>
        </div>
      </div>
    </div>
  );
};