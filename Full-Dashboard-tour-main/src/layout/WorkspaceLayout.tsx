import { Outlet } from "react-router-dom";
import { WorkspaceSidebar } from "./WorkspaceSidebar";
import { WorkspaceTopbar } from "./WorkspaceTopbar";

export const WorkspaceLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <WorkspaceSidebar />

      <div className="flex flex-col flex-1">
        <WorkspaceTopbar />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};