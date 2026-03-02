import { Calendar, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ModuleReadiness = () => {
      const navigate = useNavigate();  // ✅ inside
    return (
        <div className="min-h-screen bg-slate-50">

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">

                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-400">
                        {/* const navigate = useNavigate();    */}
                         Projects › Project Alpha (EU-001) › Submission Readiness Panel
                        </p>
                        <h1 className="text-2xl font-semibold text-slate-900 mt-2">
                            Module 1 Readiness
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Administrative Information & Regional Documentation Dashboard
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="border px-4 py-2 rounded-xl text-sm">
                            Export Report
                        </button>
                        <button
                            onClick={() => navigate("/submissions/build")}
                            className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
                        >
                            Finalize for Submission →
                        </button>


                    </div>
                </div>

                {/* TOP STATS */}
                <div className="grid grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-2xl shadow-sm border">
                        <p className="text-sm text-slate-500">Overall Project Readiness</p>
                        <div className="text-3xl font-semibold text-indigo-600 mt-2">
                            78%
                        </div>
                        <p className="text-xs text-emerald-600 mt-1">+5% increase</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border">
                        <p className="text-sm text-slate-500">Validation Score</p>
                        <div className="text-3xl font-semibold text-slate-900 mt-2">
                            92<span className="text-slate-400 text-xl">/100</span>
                        </div>
                        <p className="text-xs text-amber-500 mt-1">4 Warnings</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border">
                        <p className="text-sm text-slate-500">Estimated Submission Date</p>
                        <div className="text-lg font-semibold mt-2">
                            Oct 24, 2023
                        </div>
                        <p className="text-xs text-red-500 mt-1">2 days delayed from baseline</p>
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-[1.3fr_1fr] gap-8">

                    {/* LEFT REQUIRED DOCS */}
                    <div className="bg-white rounded-2xl border shadow-sm p-6">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="font-semibold">Required Documents Missing (4)</h3>
                            <button className="text-sm text-indigo-600">View Checklist</button>
                        </div>

                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex justify-between items-center py-4 border-t">
                                <div>
                                    <h4 className="font-medium text-slate-800">
                                        {i === 0 && "1.2 Application Form (EU-Annex I)"}
                                        {i === 1 && "1.3.1 Summary of Product Characteristics"}
                                        {i === 2 && "1.0 Cover Letter"}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Expected Path: /m1/documents/sample.pdf
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <button className="border px-3 py-1 rounded-lg text-sm">Assign</button>
                                    <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm">
                                        Upload Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="space-y-6">

                        <div className="bg-white rounded-2xl border shadow-sm p-6">
                            <h3 className="font-semibold mb-4">Validation Breakdown</h3>

                            {[
                                { label: "Technical Validation", value: "100%" },
                                { label: "Hyperlink Integrity", value: "84%" },
                                { label: "Metadata Completeness", value: "91%" },
                            ].map((item, i) => (
                                <div key={i} className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{item.label}</span>
                                        <span>{item.value}</span>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full">
                                        <div className="h-2 bg-indigo-600 rounded-full w-4/5"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-indigo-50 border rounded-2xl p-6">
                            <h3 className="font-semibold mb-3">Timeline Forecast</h3>
                            <p className="text-sm text-slate-600">
                                Drafting Phase Completed<br />
                                Compliance Readiness In Progress<br />
                                Agency Dispatch Upcoming
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};