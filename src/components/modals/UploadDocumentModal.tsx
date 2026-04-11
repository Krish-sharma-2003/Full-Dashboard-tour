import { useState, useEffect, useRef } from "react";
import { UploadCloudIcon, XIcon, CheckCircleIcon, AlertCircleIcon } from "lucide-react";
import { api } from "../../lib/api";

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
  const [file, setFile] = useState<File | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      fetchProjects();
    }
  }, [isOpen]);

  const fetchProjects = async () => {
    try {
      const data = await api.getProjects("test_org");
      setProjects(data);
      if (data.length > 0) {
        setSelectedProjectId(data[0].id);
      }
    } catch (err) {
      console.error("Failed to fetch projects for upload modal", err);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadStatus("idle");
    }
  };

  const handleUpload = async () => {
    if (!file || !selectedProjectId) {
      setErrorMessage("Please select a file and a destination project.");
      setUploadStatus("error");
      return;
    }

    setIsLoading(true);
    setUploadStatus("idle");
    setErrorMessage(null);

    try {
      await api.uploadDocument(file, selectedProjectId);
      setUploadStatus("success");
      console.log("Upload successful!");
      setTimeout(() => {
        onComplete();
        onClose();
        // Reset
        setFile(null);
        setUploadStatus("idle");
      }, 1500);
    } catch (err: any) {
      console.error("Upload failed:", err);
      setUploadStatus("error");
      setErrorMessage(err.message || "Failed to upload document.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden">

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
              className={`h-2 bg-[rgb(44,73,182)] rounded-full transition-all duration-500 ${uploadStatus === 'success' ? 'w-full' : 'w-2/3'}`}
            />
          </div>
        </div>

        {/* BODY */}
        <div className="p-8">
          
          {uploadStatus === "success" ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <CheckCircleIcon className="w-16 h-16 text-emerald-500 animate-bounce" />
              <h3 className="text-2xl font-bold text-slate-900">Upload Complete!</h3>
              <p className="text-slate-500">The document has been securely stored and indexed.</p>
            </div>
          ) : (
            <>
              {/* CENTERED DRAG & DROP */}
              <div className="flex justify-center mb-10">
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                />
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full max-w-2xl border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer bg-[rgb(44,73,182)]/5 ${file ? 'border-emerald-500 bg-emerald-50/30' : 'border-[rgb(44,73,182)] hover:bg-[rgb(44,73,182)]/10'}`}
                >
                  <UploadCloudIcon className={`w-14 h-14 mx-auto mb-5 ${file ? 'text-emerald-500' : 'text-[rgb(44,73,182)]'}`} />
                  {file ? (
                    <div>
                      <p className="font-semibold text-slate-800 text-base">{file.name}</p>
                      <p className="text-sm text-slate-500 mt-1">{(file.size / (1024 * 1024)).toFixed(2)} MB • Ready to upload</p>
                    </div>
                  ) : (
                    <>
                      <p className="font-medium text-slate-800 text-sm">
                        Drag and drop PDF/Word files here
                      </p>
                      <p className="text-sm text-slate-500 mt-2">
                        or browse files from your computer. Max size 50MB.
                      </p>
                      <button className="mt-6 px-6 py-2.5 rounded-xl bg-[rgb(44,73,182)] text-white text-sm font-medium hover:opacity-90 transition shadow-md">
                        Browse Files
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* LOWER GRID */}
              <div className="grid grid-cols-3 gap-10">

                {/* LEFT FORM */}
                <div className="col-span-2 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Target Project *
                      </label>
                      <select 
                        value={selectedProjectId}
                        onChange={(e) => setSelectedProjectId(e.target.value)}
                        className="mt-2 w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]"
                      >
                        {projects.length === 0 ? (
                          <option>Loading projects...</option>
                        ) : (
                          projects.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                          ))
                        )}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Document Type *
                      </label>
                      <select className="mt-2 w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(44,73,182)]">
                        <option>Clinical Protocol</option>
                        <option>Statistical Analysis Plan</option>
                        <option>Case Report Form</option>
                        <option>Investigator Brochure</option>
                      </select>
                    </div>
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
                            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                              i === 0
                                ? "bg-[rgb(44,73,182)] text-white border-[rgb(44,73,182)] shadow-sm"
                                : "bg-white text-slate-600 border-slate-300 hover:border-slate-400"
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
                  
                  {uploadStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm">
                      <AlertCircleIcon className="w-5 h-5 flex-shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}
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
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between px-8 py-5 border-t bg-slate-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="text-sm text-slate-600 hover:underline disabled:opacity-50"
            disabled={isLoading}
          >
            ← Back
          </button>

          <div className="flex gap-4">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-sm hover:bg-white transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              disabled={isLoading || !file || uploadStatus === "success"}
              className="complete-upload-btn flex items-center gap-2 px-8 py-2.5 rounded-xl bg-[rgb(44,73,182)] text-white text-sm font-semibold shadow-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Uploading...
                </>
              ) : uploadStatus === "success" ? (
                <>Upload Complete ✓</>
              ) : (
                <>Complete Upload ✓</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};