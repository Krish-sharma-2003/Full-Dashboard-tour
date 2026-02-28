import {
  FolderKanbanIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  ShieldIcon,
  LogOutIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    icon: LayoutDashboardIcon,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: FolderKanbanIcon,
    label: "Projects",
    path: "/projects",
  },
  {
    icon: ShieldIcon,
    label: "Admin",
    path: "/admin",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    path: "/settings",
  },
];

export const Sidebar = (): JSX.Element => {
  return (
    <aside className="hidden lg:flex flex-col w-60 min-h-screen items-start bg-white border-r">
      <header className="flex items-center gap-3 p-6 w-full">
        <div className="w-8 h-8 rounded-lg bg-[rgb(44,73,182)] flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-slate-900 text-lg tracking-tight leading-7">
            AI-eCTD
          </h1>
          <p className="font-medium text-slate-500 text-[10px] tracking-wider leading-[15px] uppercase">
            REGULATORY TOOL
          </p>
        </div>
      </header>

      <nav className="flex flex-col items-start gap-1 p-4 flex-1 w-full">
        {navigationItems.map((item) => (
          <NavLink key={item.label} to={item.path} end={item.path === "/"}>
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 px-3 py-2.5 h-auto rounded-xl transition-all ${
                  isActive
                    ? "bg-[rgb(44,73,182)]/10 text-[rgb(44,73,182)] font-medium"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{item.label}</span>
              </Button>
            )}
          </NavLink>
        ))}
      </nav>

      <footer className="flex flex-col items-start p-4 w-full border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 px-3 py-2.5 h-auto rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-all"
        >
          <LogOutIcon className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">Logout</span>
        </Button>
      </footer>
    </aside>
  );
};