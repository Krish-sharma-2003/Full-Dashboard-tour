import { Outlet } from "react-router-dom";
import { TopNavbar } from "../components/TopNavbar";

export const ComplianceLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopNavbar />
      <Outlet />
    </div>
  );
};