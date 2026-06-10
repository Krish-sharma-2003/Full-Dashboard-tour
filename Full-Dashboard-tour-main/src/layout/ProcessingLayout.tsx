import { Outlet } from "react-router-dom";
import { Topbar } from "../layout/Topbar";

export const ProcessingLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Topbar />
      <main className="flex-1 px-8 py-10 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>
    </div>
  );
};