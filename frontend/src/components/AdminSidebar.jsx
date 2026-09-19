function AdminSidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Admin ERP</h2>

      <ul>
        <li onClick={() => setPage("adminDashboard")}>Dashboard</li>
        <li onClick={() => setPage("manageStudents")}>Students</li>
        <li onClick={() => setPage("manageFaculty")}>Faculty</li>
        <li onClick={() => setPage("registrations")}>Registrations</li>
        <li onClick={() => setPage("subjects")}>Subjects</li>
        <li onClick={() => setPage("notices")}>Notices</li>
      </ul>
    </div>
  );
}

export default AdminSidebar;