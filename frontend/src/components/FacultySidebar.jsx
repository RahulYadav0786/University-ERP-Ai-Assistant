function FacultySidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Faculty ERP</h2>

      <ul>
        <li onClick={() => setPage("facultyDashboard")}>Dashboard</li>
        <li onClick={() => setPage("facultyProfile")}>Profile</li>
        <li onClick={() => setPage("students")}>Students</li>
        <li onClick={() => setPage("attendanceManage")}>Attendance</li>
        <li onClick={() => setPage("marksManage")}>Marks</li>
        <li onClick={() => setPage("timetableManage")}>Timetable</li>
      </ul>
    </div>
  );
}

export default FacultySidebar;