import React from "react";
import {
  LayoutDashboard,
  MoveUpRight,
  MoveDownLeft,
  Calendar,
  PlusCircle,
  Activity,
  MessageCircle,
  Phone,
  Settings,
} from "lucide-react";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="side">
      <nav className="nav">
        <div className="group">
          <h4 className="title">General</h4>
          <a href="#" className="link-sidebar active">
            <LayoutDashboard size={28} /> <span>Dashboard</span>
          </a>
          <a href="#" className="link-sidebar">
            <div className="icon-col">
              <MoveUpRight size={20} />
              <MoveDownLeft size={20} />
            </div>
            <span>History</span>
          </a>
          <a href="#" className="link-sidebar">
            <Calendar size={24} /> <span>Calendar</span>
          </a>
          <a href="#" className="link-sidebar">
            <PlusCircle size={24} /> <span>Appointments</span>
          </a>
          <a href="#" className="link-sidebar">
            <Activity size={24} /> <span>Statistics</span>
          </a>
        </div>

        <div className="group">
          <h4 className="title">Tools</h4>
          <a href="#" className="link-sidebar">
            <MessageCircle size={24} /> <span>Chat</span>
          </a>
          <a href="#" className="link-sidebar">
            <Phone size={24} /> <span>Support</span>
          </a>
        </div>
      </nav>

      <div className="bottom">
        <a href="#" className="link-sidebar">
          <Settings size={24} /> <span>Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
