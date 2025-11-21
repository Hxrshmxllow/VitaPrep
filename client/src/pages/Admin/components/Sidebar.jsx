import "./Sidebar.css";
import { Calendar, Users, FileText, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Minimal small label */}
      <div className="sidebar-header">
        <span className="sidebar-top-label">Dashboard</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <a className="sidebar-link active">
          <Calendar size={18} /> 
          <span>Meetings</span>
        </a>

        <a className="sidebar-link">
          <Users size={18} /> 
          <span>Customers</span>
        </a>

        <a className="sidebar-link">
          <FileText size={18} /> 
          <span>Notes</span>
        </a>
      </nav>

      {/* Bottom Logout Row */}
      <div className="sidebar-footer">
        <a className="sidebar-link logout">
          <LogOut size={18} />
          <span>Logout</span>
        </a>
      </div>

    </aside>
  );
}
