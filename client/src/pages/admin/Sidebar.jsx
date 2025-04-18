import { 
  ChartLine, BookOpen, Users, ClipboardList, 
  DollarSign, FileText, Bell, Settings, User, LogOut 
} from "lucide-react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`hidden lg:flex flex-col ${isOpen ? "w-64" : "w-20"} 
        bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-white h-screen 
        transition-all duration-300 p-5 shadow-xl fixed overflow-y-auto rounded-r-xl`}>

        {/* Toggle Button (Slightly Right) */}
        <button
          className="absolute top-5 right-[-10px] bg-gray-800 p-2 rounded-full hover:bg-gray-700 
          shadow-md transition text-xl font-extrabold flex items-center justify-center w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "←" : "→"}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <ChartLine size={26} className="text-blue-400" />
          {isOpen && <h1 className="text-xl font-bold text-blue-300">Admin Panel</h1>}
        </div>

        {/* Menu Items */}
        <nav className="space-y-4 flex-1 overflow-y-auto">
          <SidebarItem to="dashboard" icon={<ChartLine size={22} />} text="Dashboard" isOpen={isOpen} />
          <SidebarItem to="course" icon={<BookOpen size={22} />} text="Courses" isOpen={isOpen} />
          <SidebarItem to="/admin/users" icon={<Users size={22} />} text="Users" isOpen={isOpen} />
          <SidebarItem to="/admin/enrollment" icon={<ClipboardList size={22} />} text="Enrollments" isOpen={isOpen} />
          <SidebarItem to="/admin/payments" icon={<DollarSign size={22} />} text="Payments" isOpen={isOpen} />
          <SidebarItem to="/admin/reports" icon={<FileText size={22} />} text="Reports" isOpen={isOpen} />
          <SidebarItem to="/admin/notifications" icon={<Bell size={22} />} text="Notifications" isOpen={isOpen} />
          <SidebarItem to="/admin/settings" icon={<Settings size={22} />} text="Settings" isOpen={isOpen} />
          <SidebarItem to="/admin/profile" icon={<User size={22} />} text="Profile" isOpen={isOpen} />
        </nav>

        {/* Logout (Fixed at Bottom) */}
        <div className="mt-auto">
          <SidebarItem to="/logout" icon={<LogOut size={22} />} text="Logout" isOpen={isOpen} className="text-red-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-10 transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}>
        <Outlet />
      </div>
    </div>
  );
};

// Sidebar Menu Item Component
const SidebarItem = ({ to, icon, text, isOpen }) => (
  <Link 
    to={to} 
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md text-white"
  >
    {icon}
    {isOpen && <span>{text}</span>}
  </Link>
);

export default Sidebar;
