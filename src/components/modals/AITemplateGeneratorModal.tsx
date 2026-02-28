import { XIcon, SparklesIcon } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: () => void;
}

export const AITemplateGeneratorModal = ({
  isOpen,
  onClose,
  onGenerate,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl">

        {/* HEADER */}
        <div className="flex items-start justify-between px-8 py-6 border-b">
          <div>
            <p className="text-xs font-semibold text-[rgb(44,73,182)] tracking-wider uppercase">
              Step 3B: AI Generation
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-1">
              AI Template Generator
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="px-8 py-8 space-y-8">

          {/* GRID SECTION */}
          <div className="grid grid-cols-2 gap-6">

            <FormField label="Region / Authority">
              <select className="input">
                <option>FDA (USA)</option>
              </select>
            </FormField>

            <FormField label="Product Type">
              <select className="input">
                <option>Biologic (BLA)</option>
              </select>
            </FormField>

            <FormField label="Molecule Type">
              <input
                className="input"
                placeholder="e.g. Monoclonal Antibody"
              />
            </FormField>

            <FormField label="Clinical Phase">
              <select className="input">
                <option>Phase I</option>
              </select>
            </FormField>
          </div>

          {/* INDICATION */}
          <FormField label="Indication">
            <input
              className="input"
              placeholder="e.g. Relapsing-Remitting Multiple Sclerosis"
            />
          </FormField>

          {/* STUDY REFERENCES */}
          <div>
            <label className="form-label">
              Key Study References
            </label>

            <div className="border border-dashed border-slate-300 rounded-xl p-4 mt-2 space-y-3">
              <div className="flex flex-wrap gap-2">
                <Chip label="Study-301-P3.pdf" />
                <Chip label="Clinical-Summary-R2.xlsx" />
              </div>

              <button className="text-sm text-[rgb(44,73,182)] font-medium hover:underline">
                + Add Study Report from Workspace
              </button>
            </div>
          </div>

          {/* TONE SLIDER */}
          <div>
            <label className="form-label">
              Tone & Detail Level
            </label>

            <div className="mt-4">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="w-full accent-[rgb(44,73,182)]"
              />

              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>Concise</span>
                <span>Balanced</span>
                <span>Highly Detailed</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between px-8 py-6 border-t bg-slate-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="text-sm text-slate-600 hover:underline"
          >
            Cancel
          </button>

          <div className="flex gap-4">
            <button className="px-5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium">
              Save Configuration
            </button>

            <button
              onClick={onGenerate}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
            >
              <SparklesIcon className="w-4 h-4" />
              Generate Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- SMALL COMPONENTS ---------- */

const FormField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="form-label">
      {label}
    </label>
    <div className="mt-2">{children}</div>
  </div>
);

const Chip = ({ label }: { label: string }) => (
  <span className="px-3 py-1.5 text-xs rounded-full bg-[rgb(44,73,182)]/10 text-[rgb(29, 72, 229)] font-medium">
    {label}
  </span>
);