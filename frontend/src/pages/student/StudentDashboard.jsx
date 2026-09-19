import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";

function StudentDashboard({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <StudentSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Student Dashboard</h1>

          <div className="dashboard-cards">
            <div className="card">
              <h3>Attendance</h3>
              <p>View your attendance</p>
            </div>

            <div className="card">
              <h3>Marks</h3>
              <p>View your marks</p>
            </div>

            <div className="card">
              <h3>Fees</h3>
              <p>Check your fees</p>
            </div>

            <div className="card">
              <h3>Timetable</h3>
              <p>View your timetable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;