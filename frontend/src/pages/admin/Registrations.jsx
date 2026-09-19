import AdminSidebar from "../../components/AdminSidebar";
import Navbar from "../../components/Navbar";

function Registrations({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <AdminSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Registration Requests</h1>

          <div className="card">
            <h3>Rahul Sharma</h3>
            <p>Role: Student</p>
            <p>Enrollment No: STU001</p>
            <p>Email: rahul@example.com</p>

            <button>Approve</button>
            <button>Reject</button>
          </div>

          <div className="card">
            <h3>Priya Verma</h3>
            <p>Role: Faculty</p>
            <p>Employee ID: FAC001</p>
            <p>Email: priya@example.com</p>

            <button>Approve</button>
            <button>Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrations;