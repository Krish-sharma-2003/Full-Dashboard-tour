// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "../components/ui/avatar";
// import { Badge } from "../components/ui/badge";

// const userData = {
//   name: "Alex Thompson",
//   role: "ADMIN",
//   avatarUrl:
//     "/ab6axuayfd82nag0w3acp3ht9trmuuezmcbrwx2qmqsq--l3hk3y1cj9qyfarwio.png",
//   initials: "AT",
// };

// export const Topbar = (): JSX.Element => {
//   return (
//     <header className="flex h-14 md:h-16 items-center justify-between px-4 md:px-6 lg:px-8 w-full bg-white border-b border-slate-200">
//       <div className="flex flex-col items-start">
//         <h1 className="font-semibold text-slate-900 text-base md:text-lg">
//           Dashboard
//         </h1>
//       </div>

//       <div className="flex items-center gap-3">
//         <div className="hidden sm:flex flex-col items-end">
//           <span className="font-medium text-slate-900 text-sm">
//             {userData.name}
//           </span>

//           <Badge
//             variant="secondary"
//             className="px-2 py-0.5 bg-primary-50 rounded-full hover:bg-primary-50"
//           >
//             <span className="font-semibold text-primary text-xs uppercase tracking-wide">
//               Role: {userData.role}
//             </span>
//           </Badge>
//         </div>

//         <Avatar className="w-9 h-9 md:w-10 md:h-10 border-2 border-slate-200">
//           <AvatarImage
//             src={userData.avatarUrl}
//             alt={userData.name}
//             className="object-cover"
//           />
//           <AvatarFallback className="bg-primary-100 text-primary font-semibold">
//             {userData.initials}
//           </AvatarFallback>
//         </Avatar>
//       </div>
//     </header>
//   );
// };


import { useLocation, NavLink } from "react-router-dom";
import { Bell, Search } from "lucide-react";

export const Topbar = () => {
  const location = useLocation();
  const isWorkspace = location.pathname === "/workspace" || location.pathname === "/clinical-overview";

  return (
    <header className="w-full bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[rgb(44,73,182)] flex items-center justify-center text-white font-bold text-sm">
            R
          </div>
          <span className="font-semibold text-slate-900 text-lg">
            ReguFlow eCTD
          </span>
        </div>

        {/* Navigation only for workspace */}
        {isWorkspace && (
          <nav className="flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" className="text-slate-500 hover:text-slate-900">
              Dashboard
            </NavLink>
            <NavLink to="/projects" className="text-[rgb(44,73,182)] border-b-2 border-[rgb(44,73,182)] pb-1">
              Projects
            </NavLink>
            <span className="text-slate-500 hover:text-slate-900 cursor-pointer">
              Compliance
            </span>
            <span className="text-slate-500 hover:text-slate-900 cursor-pointer">
              Submissions
            </span>
          </nav>
        )}
      </div>

      {/* RIGHT SECTION — ALWAYS SHOW */}
      <div className="flex items-center gap-6">

        {/* Search only for workspace */}
        {isWorkspace && (
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search documents..."
              className="pl-9 pr-4 py-2 rounded-lg bg-slate-100 text-sm focus:outline-none w-64"
            />
          </div>
        )}

        {/* Bell */}
        {isWorkspace && (
          <Bell className="w-5 h-5 text-slate-500 cursor-pointer" />
        )}

        {/* User Account — ALWAYS */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-slate-900">
              Dr. Sarah Chen
            </div>
            <div className="text-xs text-slate-500">
              Regulatory Lead
            </div>
          </div>

          <div className="w-9 h-9 rounded-full bg-[rgb(44,73,182)] text-white flex items-center justify-center font-semibold">
            SC
          </div>
        </div>
      </div>
    </header>
  );
};