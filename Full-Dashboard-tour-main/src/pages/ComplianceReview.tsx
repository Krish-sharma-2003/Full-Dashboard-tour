// import { useState } from "react";
// import {
//   Search,
//   Bell,
//   Settings,
//   User,
//   Download,
//   ZoomIn,
//   ZoomOut,
//   X,
// } from "lucide-react";

// export const ComplianceReview = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col">

//       {/* TOP NAVBAR */}
//       <div className="bg-white border-b px-8 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-10">
//           <h1 className="text-lg font-semibold text-slate-900">
//             ReguCompliance <span className="text-blue-600">SaaS</span>
//           </h1>

//           <div className="flex gap-6 text-sm text-slate-600">
//             <span className="hover:text-blue-600 cursor-pointer">Dashboard</span>
//             <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
//               Compliance
//             </span>
//             <span className="hover:text-blue-600 cursor-pointer">Submissions</span>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
//             <input
//               className="pl-9 pr-4 py-2 text-sm border rounded-xl focus:outline-none"
//               placeholder="Search document ID..."
//             />
//           </div>
//           <Bell className="w-5 h-5 text-slate-500 cursor-pointer" />
//           <Settings className="w-5 h-5 text-slate-500 cursor-pointer" />
//           <User className="w-6 h-6 text-slate-600 cursor-pointer" />
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="flex-1 max-w-7xl mx-auto w-full px-8 py-8 space-y-6">

//         {/* HEADER */}
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
//               Projects / Project Beta / Compliance Review
//             </p>

//             <h2 className="text-2xl font-semibold text-slate-900">
//               Review Detailed Compliance Issues
//             </h2>

//             <p className="text-sm text-slate-500 mt-1">
//               Document ID: eCTD-2023-X99 · Region: EU-EMA
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="w-40">
//               <p className="text-xs text-slate-500 mb-1">8 issues remaining</p>
//               <div className="w-full h-2 bg-slate-200 rounded-full">
//                 <div className="h-2 bg-blue-600 rounded-full w-2/3"></div>
//               </div>
//             </div>

//             <button className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition text-sm">
//               Complete Review
//             </button>
//           </div>
//         </div>

//         {/* TABS */}
//         <div className="flex gap-8 border-b text-sm">
//           {["All Issues (12)", "Critical (3)", "Warnings (7)", "Advisory (2)"].map(
//             (tab, i) => (
//               <button
//                 key={i}
//                 className={`pb-3 ${
//                   i === 0
//                     ? "text-blue-600 border-b-2 border-blue-600 font-medium"
//                     : "text-slate-500 hover:text-blue-600"
//                 }`}
//               >
//                 {tab}
//               </button>
//             )
//           )}
//         </div>

//         {/* GRID */}
// <div className="grid grid-cols-[1.3fr_1fr] gap-8">

//   {/* ================= LEFT ISSUES ================= */}
//   <div className="space-y-5">

//     {/* ISSUE 1 */}
//     <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 relative">
//       <div className="flex justify-between items-start mb-3">

//         <div className="flex items-center gap-3">
//           <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
//             MISSING SECTION
//           </span>
//           <span className="text-xs text-slate-400">ID: ERR-2.3.S.1</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <span className="text-xs text-slate-400">2m ago</span>
//           <button className="text-slate-400 hover:text-slate-600">
//             ⋮
//           </button>
//         </div>
//       </div>

//       <h3 className="font-semibold text-slate-900 mb-2">
//         Section 2.3.S.1 General Information is missing
//       </h3>

//       <p className="text-sm text-slate-600 mb-4">
//         Required by EU-EMA guidelines. Must include name and address of manufacturer.
//       </p>

//       <div className="flex gap-3">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">
//           Fix Manual
//         </button>
//         <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-xl text-sm">
//           Request AI Rewrite
//         </button>
//       </div>
//     </div>


//     {/* ISSUE 2 */}
//     <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 relative">
//       <div className="flex justify-between items-start mb-3">

//         <div className="flex items-center gap-3">
//           <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
//             FORMATTING ERROR
//           </span>
//           <span className="text-xs text-slate-400">ID: FMT-009</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <span className="text-xs text-slate-400">15m ago</span>
//           <button className="text-slate-400 hover:text-slate-600">
//             ⋮
//           </button>
//         </div>
//       </div>

//       <h3 className="font-semibold text-slate-900 mb-2">
//         Hyperlink formatting in Summary Table
//       </h3>

//       <p className="text-sm text-slate-600 mb-4">
//         The hyperlinks in Table 3.2 do not follow the blue underlined standard required for digital navigation in Module 2.
//       </p>

//       <div className="flex gap-3">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">
//           Fix
//         </button>
//         <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-xl text-sm">
//           AI Auto-Format
//         </button>
//       </div>
//     </div>


//     {/* ISSUE 3 */}
//     <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 relative">
//       <div className="flex justify-between items-start mb-3">

//         <div className="flex items-center gap-3">
//           <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">
//             REGIONAL REQUIREMENT GAP
//           </span>
//           <span className="text-xs text-slate-400">ID: REG-EU-4</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <span className="text-xs text-slate-400">1h ago</span>
//           <button className="text-slate-400 hover:text-slate-600">
//             ⋮
//           </button>
//         </div>
//       </div>

//       <h3 className="font-semibold text-slate-900 mb-2">
//         Missing EMA Annex A declaration
//       </h3>

//       <p className="text-sm text-slate-600 mb-4">
//         A signed Annex A declaration is required for this product class under the new 2024 EU-EMA directive.
//       </p>

//       <div className="flex gap-3">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">
//           Upload Document
//         </button>
//         <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-xl text-sm">
//           Generate Draft
//         </button>
//       </div>
//     </div>

//   </div>



//   {/* ================= RIGHT PDF PANEL ================= */}
//   <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">

//     {/* PDF HEADER */}
//     <div className="flex items-center justify-between px-5 py-4 border-b bg-slate-50">
//       <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
//         eCTD_Module2_Summary.pdf
//       </div>

//       <div className="flex items-center gap-3 text-slate-500 text-sm">
//         <span>100%</span>
//         <button className="hover:text-slate-700">🔍</button>
//         <button className="hover:text-slate-700">⟳</button>
//         <button className="hover:text-slate-700">⬇</button>
//         <button className="hover:text-slate-700">✕</button>
//       </div>
//     </div>

//     {/* PDF BODY */}
//     <div className="h-[500px] bg-slate-100 relative flex items-center justify-center text-slate-400 text-sm">
//       PDF Preview Area

//       {/* RED HIGHLIGHT STRIP */}
//       <div className="absolute left-0 right-0 top-[220px] h-[80px] bg-red-100 border-y-2 border-red-400 flex items-center justify-end pr-6 text-xs text-red-600 font-medium">
//         ⚠ ERR-2.3.S.1
//       </div>
//     </div>

//     {/* PDF FOOTER */}
//     <div className="flex items-center justify-between px-5 py-3 border-t bg-white text-xs text-slate-500">
//       <span>Page 1 of 42</span>

//       <div className="flex items-center gap-2">
//         <button className="px-2 py-1 border rounded">‹</button>
//         <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
//         <button className="px-3 py-1 border rounded">2</button>
//         <button className="px-2 py-1 border rounded">›</button>
//       </div>
//     </div>

//   </div>

// </div>
//       </div>

//       {/* BOTTOM ACTION BAR */}
//       <div className="bg-white border-t px-8 py-4 flex items-center justify-between sticky bottom-0">

//         <button className="text-sm text-slate-600 hover:text-blue-600">
//           ← Back to Summary
//         </button>

//         <div className="flex items-center gap-6">
//           <span className="text-sm text-amber-600 font-medium">
//             ⚠ Compliance Not Met
//           </span>

//           <button className="px-4 py-2 border rounded-xl text-sm">
//             Save Progress
//           </button>

//           <button className="px-5 py-2 bg-blue-600 text-white rounded-xl text-sm shadow-md">
//             Run Re-Validation
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell, Settings, User } from "lucide-react";

export const ComplianceReview = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();   // ✅ add this
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* ================= TOP NAVBAR ================= */}
      
      {/* ================= HEADER SECTION ================= */}
      <div className="max-w-7xl mx-auto w-full px-8 pt-8">

        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-xs text-slate-400 mb-1">
              PROJECTS / PROJECT BETA / COMPLIANCE REVIEW
            </p>
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
                <div className="h-2 w-3/4 bg-indigo-500 rounded-full"></div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl shadow-md text-sm">
              Complete Review
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-6 border-b pb-3 mb-6 text-sm">
          {["All Issues (12)", "Critical (3)", "Warnings (7)", "Advisory (2)"].map(
            (tab, index) => (
              <button
                key={index}
                className={`pb-2 ${
                  index === 0
                    ? "border-b-2 border-indigo-600 text-indigo-600 font-medium"
                    : "text-slate-500"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto w-full px-8 pb-28">
        <div className="grid grid-cols-[1.3fr_1fr] gap-8">

          {/* LEFT ISSUES */}
          <div className="space-y-5">

            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
                      {index === 0
                        ? "MISSING SECTION"
                        : index === 1
                        ? "FORMATTING ERROR"
                        : "REGIONAL REQUIREMENT GAP"}
                    </span>
                    <span className="text-xs text-slate-400">
                      ID: ERR-2.3.S.1
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">
                      {index === 0
                        ? "2m ago"
                        : index === 1
                        ? "15m ago"
                        : "1h ago"}
                    </span>
                    <button className="text-slate-400 hover:text-slate-600">
                      ⋮
                    </button>
                  </div>
                </div>

                <h3 className="font-semibold text-slate-900 mb-2">
                  {index === 0
                    ? "Section 2.3.S.1 General Information is missing"
                    : index === 1
                    ? "Hyperlink formatting in Summary Table"
                    : "Missing EMA Annex A declaration"}
                </h3>

                <p className="text-sm text-slate-600 mb-4">
                  Required by EU-EMA guidelines. Must include name and address of manufacturer.
                </p>

                <div className="flex gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">
                    Fix Manual
                  </button>
                  <button className="border border-blue-600 text-indigo-600 px-4 py-2 rounded-xl text-sm">
                    Request AI Rewrite
                  </button>
                </div>
              </div>
            ))}

            {/* SMART ASSISTANT */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-2">
                Smart Compliance Assistant
              </h3>
              <p className="text-sm opacity-90">
                AI can auto-detect missing cross references and generate compliant content.
              </p>
              <button className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-xl text-sm font-medium">
                Launch Assistant
              </button>
            </div>

          </div>

          {/* RIGHT PDF PANEL */}
          <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">

            <div className="flex items-center justify-between px-5 py-4 border-b bg-slate-50 text-sm">
              <span>eCTD_Module2_Summary.pdf</span>

              <div className="flex items-center gap-3 text-slate-500">
                <span>100%</span>
                <button>🔍</button>
                <button>⟳</button>
                <button>⬇</button>
                <button>✕</button>
              </div>
            </div>

            <div className="h-[520px] bg-slate-100 relative flex items-center justify-center text-slate-400">
              PDF Preview Area

              <div className="absolute left-0 right-0 top-[220px] h-[80px] bg-red-100 border-y-2 border-red-400 flex items-center justify-end pr-6 text-xs text-red-600 font-medium">
                ⚠ ERR-2.3.S.1
              </div>
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t text-xs text-slate-500">
              <span>Page 1 of 42</span>
              <div className="flex gap-2">
                <button className="px-2 py-1 border rounded">‹</button>
                <button className="px-3 py-1 bg-indigo-600 text-white rounded">
                  1
                </button>
                <button className="px-3 py-1 border rounded">2</button>
                <button className="px-2 py-1 border rounded">›</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM STATUS BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-8 py-4 flex items-center justify-between">

        <button className="text-sm text-slate-500">
          ← Back to Summary
        </button>

        <div className="flex items-center gap-6">
          <div className="text-sm text-orange-600 font-medium flex items-center gap-2">
            ⚠ Compliance Not Met
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm">
            Save Progress
          </button>

         <button
  onClick={() => navigate("/submissions/readiness")}
  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl text-sm"
>
  Run Re-Validation
</button>
        </div>
      </div>

    </div>
  );
};