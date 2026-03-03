// import { Calendar, FileText } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export const ModuleReadiness = () => {
//       const navigate = useNavigate();  // ✅ inside
//     return (
//         <div className="min-h-screen bg-slate-50">

//             <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">

//                 {/* HEADER */}
//                 <div className="flex items-center justify-between">
//                     <div>
//                         <p className="text-sm text-slate-400">
//                         {/* const navigate = useNavigate();    */}
//                          Projects › Project Alpha (EU-001) › Submission Readiness Panel
//                         </p>
//                         <h1 className="text-2xl font-semibold text-slate-900 mt-2">
//                             Module 1 Readiness
//                         </h1>
//                         <p className="text-sm text-slate-500 mt-1">
//                             Administrative Information & Regional Documentation Dashboard
//                         </p>
//                     </div>

//                     <div className="flex gap-4">
//                         <button className="border px-4 py-2 rounded-xl text-sm">
//                             Export Report
//                         </button>
//                         <button
//                             onClick={() => navigate("/submissions/build")}
//                             className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
//                         >
//                             Finalize for Submission →
//                         </button>


//                     </div>
//                 </div>

//                 {/* TOP STATS */}
//                 <div className="grid grid-cols-3 gap-6">

//                     <div className="bg-white p-6 rounded-2xl shadow-sm border">
//                         <p className="text-sm text-slate-500">Overall Project Readiness</p>
//                         <div className="text-3xl font-semibold text-indigo-600 mt-2">
//                             78%
//                         </div>
//                         <p className="text-xs text-emerald-600 mt-1">+5% increase</p>
//                     </div>

//                     <div className="bg-white p-6 rounded-2xl shadow-sm border">
//                         <p className="text-sm text-slate-500">Validation Score</p>
//                         <div className="text-3xl font-semibold text-slate-900 mt-2">
//                             92<span className="text-slate-400 text-xl">/100</span>
//                         </div>
//                         <p className="text-xs text-amber-500 mt-1">4 Warnings</p>
//                     </div>

//                     <div className="bg-white p-6 rounded-2xl shadow-sm border">
//                         <p className="text-sm text-slate-500">Estimated Submission Date</p>
//                         <div className="text-lg font-semibold mt-2">
//                             Oct 24, 2023
//                         </div>
//                         <p className="text-xs text-red-500 mt-1">2 days delayed from baseline</p>
//                     </div>
//                 </div>

//                 {/* MAIN GRID */}
//                 <div className="grid grid-cols-[1.3fr_1fr] gap-8">

//                     {/* LEFT REQUIRED DOCS */}
//                     <div className="bg-white rounded-2xl border shadow-sm p-6">
//                         <div className="flex justify-between items-center mb-5">
//                             <h3 className="font-semibold">Required Documents Missing (4)</h3>
//                             <button className="text-sm text-indigo-600">View Checklist</button>
//                         </div>

//                         {[1, 2, 3].map((_, i) => (
//                             <div key={i} className="flex justify-between items-center py-4 border-t">
//                                 <div>
//                                     <h4 className="font-medium text-slate-800">
//                                         {i === 0 && "1.2 Application Form (EU-Annex I)"}
//                                         {i === 1 && "1.3.1 Summary of Product Characteristics"}
//                                         {i === 2 && "1.0 Cover Letter"}
//                                     </h4>
//                                     <p className="text-xs text-slate-500 mt-1">
//                                         Expected Path: /m1/documents/sample.pdf
//                                     </p>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <button className="border px-3 py-1 rounded-lg text-sm">Assign</button>
//                                     <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm">
//                                         Upload Now
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* RIGHT PANEL */}
//                     <div className="space-y-6">

//                         <div className="bg-white rounded-2xl border shadow-sm p-6">
//                             <h3 className="font-semibold mb-4">Validation Breakdown</h3>

//                             {[
//                                 { label: "Technical Validation", value: "100%" },
//                                 { label: "Hyperlink Integrity", value: "84%" },
//                                 { label: "Metadata Completeness", value: "91%" },
//                             ].map((item, i) => (
//                                 <div key={i} className="mb-4">
//                                     <div className="flex justify-between text-sm mb-1">
//                                         <span>{item.label}</span>
//                                         <span>{item.value}</span>
//                                     </div>
//                                     <div className="h-2 bg-slate-200 rounded-full">
//                                         <div className="h-2 bg-indigo-600 rounded-full w-4/5"></div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="bg-indigo-50 border rounded-2xl p-6">
//                             <h3 className="font-semibold mb-3">Timeline Forecast</h3>
//                             <p className="text-sm text-slate-600">
//                                 Drafting Phase Completed<br />
//                                 Compliance Readiness In Progress<br />
//                                 Agency Dispatch Upcoming
//                             </p>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };


// import { useNavigate } from "react-router-dom";
// import { ArrowRight, FileText } from "lucide-react";

// export const ModuleReadiness = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-slate-50">

//       <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">

//         {/* ===== HEADER ===== */}
//         <div className="flex items-start justify-between">
//           <div>
//             <p className="text-xs text-slate-400 mb-2">
//               Projects › Project Alpha (EU-001) › Submission Readiness Panel
//             </p>

//             <h1 className="text-2xl font-semibold text-slate-900">
//               Module 1 Readiness
//             </h1>

//             <p className="text-sm text-slate-500 mt-1">
//               Administrative Information & Regional Documentation Dashboard
//             </p>
//           </div>

//           <div className="flex gap-4">
//             <button className="border px-4 py-2 rounded-xl text-sm bg-white hover:bg-slate-100">
//               Export Report
//             </button>

//             <button
//               onClick={() => navigate("/submissions/build")}
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl text-sm shadow-md flex items-center gap-2"
//             >
//               Finalize for Submission
//               <ArrowRight size={16} />
//             </button>
//           </div>
//         </div>

//         {/* ===== KPI CARDS ===== */}
//         <div className="grid grid-cols-3 gap-6">

//           <div className="bg-white border rounded-2xl p-6 shadow-sm">
//             <p className="text-sm text-slate-500">Overall Project Readiness</p>
//             <h2 className="text-3xl font-semibold text-blue-600 mt-2">
//               78%
//             </h2>
//             <span className="text-xs text-emerald-600 mt-1 block">
//               +5% increase
//             </span>
//           </div>

//           <div className="bg-white border rounded-2xl p-6 shadow-sm">
//             <p className="text-sm text-slate-500">Validation Score</p>
//             <h2 className="text-3xl font-semibold mt-2">
//               92<span className="text-slate-400 text-lg">/100</span>
//             </h2>
//             <span className="text-xs text-amber-500 block mt-1">
//               4 Warnings
//             </span>
//           </div>

//           <div className="bg-white border rounded-2xl p-6 shadow-sm">
//             <p className="text-sm text-slate-500">
//               Estimated Submission Date
//             </p>
//             <h2 className="text-lg font-semibold mt-2">
//               Oct 24, 2023
//             </h2>
//             <span className="text-xs text-red-500 block mt-1">
//               2 days delayed from baseline
//             </span>
//           </div>
//         </div>

//         {/* ===== MODULE TABS ===== */}
//         <div className="flex gap-8 border-b pb-3 text-sm">
//           {[
//             "Module 1 (Admin)",
//             "Module 2 (Summaries)",
//             "Module 3 (Quality)",
//             "Module 4 (Nonclinical)",
//             "Module 5 (Clinical)",
//           ].map((tab, i) => (
//             <button
//               key={i}
//               className={`pb-2 ${
//                 i === 0
//                   ? "border-b-2 border-blue-600 text-blue-600 font-medium"
//                   : "text-slate-500"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* ===== MAIN GRID ===== */}
//         <div className="grid grid-cols-[1.6fr_1fr] gap-8">

//           {/* LEFT REQUIRED DOCS */}
//           <div className="bg-white border rounded-2xl shadow-sm p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="font-semibold">
//                 Required Documents Missing (4)
//               </h3>
//               <button className="text-blue-600 text-sm">
//                 View Checklist
//               </button>
//             </div>

//             {[
//               "1.2 Application Form (EU-Annex I)",
//               "1.3.1 Summary of Product Characteristics",
//               "1.0 Cover Letter",
//             ].map((doc, i) => (
//               <div
//                 key={i}
//                 className="flex justify-between items-center py-4 border-t first:border-t-0"
//               >
//                 <div>
//                   <p className="font-medium text-slate-800">{doc}</p>
//                   <p className="text-xs text-slate-400 mt-1">
//                     Expected Path: /m1/documents/sample.pdf
//                   </p>
//                 </div>

//                 <div className="flex gap-3">
//                   <button className="border px-3 py-1 rounded-lg text-xs bg-white">
//                     Assign
//                   </button>
//                   <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs">
//                     Upload Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-6">

//             {/* VALIDATION BREAKDOWN */}
//             <div className="bg-white border rounded-2xl shadow-sm p-6">
//               <h3 className="font-semibold mb-4">
//                 Validation Breakdown
//               </h3>

//               {[
//                 { label: "Technical Validation", value: 100 },
//                 { label: "Hyperlink Integrity", value: 84 },
//                 { label: "Metadata Completeness", value: 91 },
//               ].map((item, i) => (
//                 <div key={i} className="mb-4">
//                   <div className="flex justify-between text-xs mb-1">
//                     <span>{item.label}</span>
//                     <span>{item.value}%</span>
//                   </div>

//                   <div className="h-2 bg-slate-200 rounded-full">
//                     <div
//                       className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
//                       style={{ width: `${item.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* TIMELINE */}
//             <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
//               <h3 className="font-semibold mb-3">
//                 Timeline Forecast
//               </h3>

//               <ul className="text-sm text-slate-600 space-y-2">
//                 <li>Drafting Phase Completed</li>
//                 <li>Compliance Readiness In Progress</li>
//                 <li>Agency Dispatch Upcoming</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="border-t pt-6 flex justify-between text-xs text-slate-400">
//           <div>© 2023 ReguFlow Regulatory Compliance SaaS</div>
//           <div className="text-emerald-600">
//             ● System Compliant: ICH v3.2.2
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };


import { useNavigate } from "react-router-dom";
import {
  DownloadIcon,
  ArrowRight,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  HelpCircle
} from "lucide-react";

export const ModuleReadiness = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">

        {/* ===== HEADER ===== */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-slate-400 mb-2">
              Projects › Project Alpha (EU-001) › Submission Readiness Panel
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">
              Module 1 Readiness
            </h1>
            <p className="text-sm text-slate-500">
              Administrative Information & Regional Documentation Dashboard
            </p>
          </div>

          <div className="flex gap-4">
            <button className="border bg-white px-4 py-2 rounded-xl text-sm">
                <DownloadIcon className="w-4 h-4 size={16} text-black-400" />
                 
              Export Report
            </button>

            <button
              onClick={() => navigate("/submissions/build")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl text-sm shadow-md flex items-center gap-2"
            >
              Finalize for Submission
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ===== KPI CARDS ===== */}
        <div className="grid grid-cols-3 gap-6">

          {/* Overall Readiness */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="h-1 w-20 bg-blue-600 rounded-full mb-4"></div>

            <p className="text-sm text-slate-500">
              Overall Project Readiness
            </p>

            <div className="flex items-end gap-2 mt-2">
              <h2 className="text-3xl font-semibold text-blue-600">
                78%
              </h2>
              <span className="text-xs text-emerald-600 mb-1">
                +5% increase
              </span>
            </div>

            <span className="text-xs text-slate-400">
              Complete
            </span>
          </div>

          {/* Validation Score */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Validation Score
            </p>

            <div className="flex items-center gap-3 mt-2">
              <h2 className="text-3xl font-semibold">
                92<span className="text-slate-400 text-lg">/100</span>
              </h2>
              <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
                4 Warnings
              </span>
            </div>

            <span className="text-xs text-slate-400">
              Technical Compliance
            </span>
          </div>

          {/* Submission Date */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between">
              <p className="text-sm text-slate-500">
                Estimated Submission Date
              </p>
              <Calendar size={16} className="text-slate-400" />
            </div>

            <h2 className="text-lg font-semibold mt-3">
              Oct 24, 2023
            </h2>

            <span className="text-xs text-red-500">
              2 days delayed from baseline
            </span>
          </div>
        </div>

        {/* ===== MODULE TABS ===== */}
        <div className="flex gap-8 border-b pb-3 text-sm">
          {[
            "Module 1 (Admin)",
            "Module 2 (Summaries)",
            "Module 3 (Quality)",
            "Module 4 (Nonclinical)",
            "Module 5 (Clinical)",
          ].map((tab, i) => (
            <button
              key={i}
              className={`pb-2 ${
                i === 0
                  ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                  : "text-slate-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-[1.6fr_1fr] gap-8">

          {/* LEFT DOCUMENTS */}
          <div className="bg-white border rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">
                Required Documents Missing (4)
              </h3>
              <button className="text-blue-600 text-sm">
                View Checklist
              </button>
            </div>

            {[
              {
                title: "1.2 Application Form (EU-Annex I)",
                badge: "HIGH PRIORITY",
                badgeColor: "bg-amber-100 text-amber-600"
              },
              {
                title: "1.3.1 Summary of Product Characteristics",
                badge: "STANDARD",
                badgeColor: "bg-slate-100 text-slate-600"
              },
              {
                title: "1.0 Cover Letter",
                badge: "CRITICAL",
                badgeColor: "bg-red-100 text-red-600"
              }
            ].map((doc, i) => (
              <div
                key={i}
                className="flex justify-between items-start py-4 border-t first:border-t-0"
              >
                <div className="flex gap-4">
                  <FileText className="text-blue-600 mt-1" size={18} />

                  <div>
                    <p className="font-medium text-slate-800">
                      {doc.title}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      Expected Path: /m1/documents/sample.pdf
                    </p>

                    <span className={`text-[10px] px-2 py-1 rounded-full mt-2 inline-block ${doc.badgeColor}`}>
                      {doc.badge}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="border px-3 py-1 rounded-lg text-xs bg-white">
                    Assign
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs">
                    Upload Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* Validation Breakdown */}
            <div className="bg-white border rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">
                Validation Breakdown
              </h3>

              {[
                { label: "Technical Validation", value: 100, color: "bg-emerald-500" },
                { label: "Hyperlink Integrity", value: 84, color: "bg-blue-600" },
                { label: "Metadata Completeness", value: 91, color: "bg-indigo-600" },
              ].map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>

                  <div className="h-2 bg-slate-200 rounded-full">
                    <div
                      className={`h-2 ${item.color} rounded-full`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  
                </div>

                
              ))}

                 <div className="flex justify-center text-xs mb-1">
                   <button className="border px-8 py-3 rounded-xl text-black bg-slate-100 hover:bg-slate-200">
                    Run Full Validation
                  </button>
                  </div>

              
            </div>

            {/* Timeline */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                 <ArrowRight size={16} className="text-slate-400" />
              <h3 className="font-semibold mb-4">
                Timeline Forecast
              </h3>

              <div className="space-y-4 text-sm text-slate-600 relative">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500" size={16} />
                  Drafting Phase Completed
                </div>

                <div className="flex gap-3">
                  <Clock className="text-blue-600" size={16} />
                  Compliance Readiness In Progress
                </div>

                <div className="flex gap-3">
                  <AlertTriangle className="text-slate-400" size={16} />
                  Agency Dispatch Upcoming
                </div>
              </div>
            </div>

            {/* Need Guidance */}
            <div className="bg-white border rounded-2xl shadow-sm p-5 flex items-center gap-3">
              <HelpCircle className="text-blue-600" size={18} />
              <div>
                <p className="text-sm font-medium">
                  Need Guidance?
                </p>
                <p className="text-xs text-slate-500">
                  Review the Module 1 EU Guidelines (v3.0.4)
                </p>
              </div>
            </div>

            

          </div>


        </div>
           {/* FOOTER */}
         <div className="border-t pt-6 flex justify-between text-xs text-black-400">
           <div>© 2023 ReguFlow Regulatory Compliance SaaS</div>
           <div className="text-black-700">
             <span className="text-emerald-700">● </span>System Compliant: ICH v3.2.2
           </div>
         </div>

      </div>
    </div>
  );
};