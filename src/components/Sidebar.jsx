import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>🎓 University ERP</h2>

      <nav>
        <NavLink to="/dashboard">📊 Dashboard</NavLink>
        <NavLink to="/profile">👤 Profile</NavLink>
        <NavLink to="/timetable">📅 Timetable</NavLink>
        <NavLink to="/results">📝 Results</NavLink>
        <NavLink to="/attendance">📊 Attendance</NavLink>
        <NavLink to="/notices">📢 Notices</NavLink>
        <NavLink to="/ai-assistant">🤖 AI Assistant</NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings">⚙️ Settings</NavLink>
        <NavLink to="/logout">🚪 Logout</NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;