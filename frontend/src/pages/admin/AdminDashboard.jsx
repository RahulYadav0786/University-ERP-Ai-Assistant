import AdminSidebar from "../../components/AdminSidebar";
import Navbar from "../../components/Navbar";

function AdminDashboard({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <AdminSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Admin Dashboard</h1>

          <div className="dashboard-cards">
            <div className="card">
              <h3>Students</h3>
              <p>Manage student records</p>
            </div>

            <div className="card">
              <h3>Faculty</h3>
              <p>Manage faculty records</p>
            </div>

            <div className="card">
              <h3>Registrations</h3>
              <p>Approve registration requests</p>
            </div>

            <div className="card">
              <h3>Subjects</h3>
              <p>Manage subjects</p>
            </div>

            <div className="card">
              <h3>Notices</h3>
              <p>Manage university notices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;