import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <Topbar />

        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};