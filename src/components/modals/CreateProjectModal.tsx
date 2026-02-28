// import { X } from "lucide-react";

// interface CreateProjectModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const CreateProjectModal = ({
//   isOpen,
//   onClose,
// }: CreateProjectModalProps) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 z-10">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-semibold">
//             Create New Submission Project
//           </h2>
//           <button onClick={onClose}>
//             <X className="w-5 h-5 text-slate-500 hover:text-slate-700" />
//           </button>
//         </div>

//         {/* Form */}
//         <div className="flex flex-col gap-4">
//           <div>
//             <label className="text-sm font-medium text-slate-700">
//               Project Name
//             </label>
//             <input
//               className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
//               placeholder="e.g., Oncology-v2 Submission 2026"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium text-slate-700">
//               Company Name
//             </label>
//             <input
//               className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
//               placeholder="Enter pharmaceutical entity name"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//               <option>Select Region</option>
//             </select>

//             <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//               <option>Select Type</option>
//             </select>
//           </div>

//           <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//             <option>Select Phase</option>
//           </select>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-end gap-4 mt-6">
//           <button
//             onClick={onClose}
//             className="text-slate-600 hover:text-slate-800 text-sm font-medium"
//           >
//             Cancel
//           </button>

//           <button className="bg-[rgb(44,73,182)] hover:opacity-90 text-white px-6 py-2 rounded-xl text-sm font-medium shadow-md">
//             Create Project
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };




// import { X } from "lucide-react";

// interface CreateProjectModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const CreateProjectModal = ({
//   isOpen,
//   onClose,
// }: CreateProjectModalProps) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl px-10 py-8 z-10">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-2xl font-semibold text-slate-900">
//             Create New Submission Project
//           </h2>
//           <button onClick={onClose}>
//             <X className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" />
//           </button>
//         </div>

//         {/* Form */}
//         <div className="flex flex-col gap-6">
//           <div>
//             <label className="text-sm font-medium text-slate-700">
//               Project Name
//             </label>
//             <input
//               className="mt-2 w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
//               placeholder="e.g., Oncology-v2 Submission 2026"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium text-slate-700">
//               Company Name
//             </label>
//             <input
//               className="mt-2 w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
//               placeholder="Enter pharmaceutical entity name"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <select className="rounded-2xl border border-slate-200 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//               <option>Select Region</option>
//             </select>

//             <select className="rounded-2xl border border-slate-200 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//               <option>Select Type</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-sm font-medium text-slate-700">
//               Clinical Phase
//             </label>
//             <select className="mt-2 w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//               <option>Select Phase</option>
//             </select>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-end items-center gap-6 mt-10">
//           <button
//             onClick={onClose}
//             className="text-slate-600 hover:text-slate-800 text-sm font-medium"
//           >
//             Cancel
//           </button>

//           <button className="bg-gradient-to-r from-[rgb(44,73,182)] to-indigo-600 hover:opacity-95 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg">
//             Create Project
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// import { X } from "lucide-react";

// interface CreateProjectModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const CreateProjectModal = ({
//   isOpen,
//   onClose,
// }: CreateProjectModalProps) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/25 backdrop-blur-[1.5px]"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative bg-white w-full max-w-[720px] rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] px-12 py-10 z-10 border border-slate-100">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <h2 className="text-[22px] font-semibold text-slate-900">
//             Create New Submission Project
//           </h2>
//           <button onClick={onClose}>
//             <X className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" />
//           </button>
//         </div>

//         {/* Form */}
//         <div className="flex flex-col gap-7">
//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium text-slate-700">
//               Project Name
//             </label>
//             <input
//               className="w-full rounded-2xl border border-slate-200 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
//               placeholder="e.g., Oncology-v2 Submission 2026"
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium text-slate-700">
//               Company Name
//             </label>
//             <input
//               className="w-full rounded-2xl border border-slate-200 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
//               placeholder="Enter pharmaceutical entity name"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-slate-700">
//                 Target Region
//               </label>
//               <select className="rounded-2xl border border-slate-200 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//                 <option>Select Region</option>
//               </select>
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-slate-700">
//                 Submission Type
//               </label>
//               <select className="rounded-2xl border border-slate-200 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//                 <option>Select Type</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium text-slate-700">
//               Clinical Phase
//             </label>
//             <select className="rounded-2xl border border-slate-200 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
//               <option>Select Phase</option>
//             </select>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-end items-center gap-8 mt-12">
//           <button
//             onClick={onClose}
//             className="text-slate-600 hover:text-slate-800 text-sm font-medium"
//           >
//             Cancel
//           </button>

//           <button className="bg-gradient-to-r from-[rgb(44,73,182)] to-indigo-600 text-white px-9 py-3.5 rounded-full text-sm font-semibold shadow-lg hover:opacity-95 transition-all">
//             Create Project
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };



// import { X } from "lucide-react";
// import { Button } from "../ui/button";

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
//   onSuccess: () => void;   // 🔥 ADD THIS
// };

// export const CreateProjectModal = ({
//   isOpen,
//   onClose,
//   onSuccess,
// }: Props) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
//       <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 relative animate-in fade-in zoom-in-95 duration-200">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
//         >
//           <X size={20} />
//         </button>

//         <h2 className="text-xl font-semibold text-slate-900 mb-6">
//           Create New Submission Project
//         </h2>

//         {/* Dummy Inputs (UI only) */}
//         <div className="space-y-4">
//           <input
//             className="w-full border rounded-xl px-4 py-3 text-sm"
//             placeholder="Project Name"
//           />
//           <input
//             className="w-full border rounded-xl px-4 py-3 text-sm"
//             placeholder="Company Name"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-4 mt-8">
//           <Button variant="ghost" onClick={onClose}>
//             Cancel
//           </Button>

//           <Button
//             onClick={onSuccess}   // 🔥 THIS IS IMPORTANT
//             className="bg-[rgb(44,73,182)] hover:opacity-90 text-white rounded-full px-6"
//           >
//             Create Project
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };



import { useState } from "react";
import { useFlow } from "../../context/FlowContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateProjectModal = ({ isOpen, onClose }: Props) => {
  const { addProject } = useFlow();

  const [projectName, setProjectName] = useState("");
  const [company, setCompany] = useState("");
  const [region, setRegion] = useState("");
  const [phase, setPhase] = useState("");

  if (!isOpen) return null;

  const handleCreate = () => {
    if (!projectName || !company) return;

    addProject({
      id: Date.now(),
      title: projectName,
      company,
      region,
      phase,
      completion: "0%",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Create New Submission Project
        </h2>

        <input
          placeholder="e.g., Oncology-v2 Submission 2026"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Enter pharmaceutical entity name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <div className="flex gap-4">
          <input
            placeholder="Select Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />
          <input
            placeholder="Select Phase"
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button onClick={onClose} className="text-slate-500">
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full shadow-md hover:opacity-90"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};