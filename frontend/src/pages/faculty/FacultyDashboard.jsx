import FacultySidebar from "../../components/FacultySidebar";
import Navbar from "../../components/Navbar";

function FacultyDashboard({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <FacultySidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Faculty Dashboard</h1>

          <div className="dashboard-cards">
            <div className="card">
              <h3>Students</h3>
              <p>View student details</p>
            </div>

            <div className="card">
              <h3>Attendance</h3>
              <p>Manage student attendance</p>
            </div>

            <div className="card">
              <h3>Marks</h3>
              <p>Enter and view marks</p>
            </div>

            <div className="card">
              <h3>Timetable</h3>
              <p>View teaching timetable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;