function StudentSidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Student ERP</h2>

      <ul>
        <li onClick={() => setPage("studentDashboard")}>Dashboard</li>
        <li onClick={() => setPage("profile")}>Profile</li>
        <li onClick={() => setPage("attendance")}>Attendance</li>
        <li onClick={() => setPage("marks")}>Marks</li>
        <li onClick={() => setPage("fees")}>Fees</li>
        <li onClick={() => setPage("timetable")}>Timetable</li>
      </ul>
    </div>
  );
}

export default StudentSidebar;