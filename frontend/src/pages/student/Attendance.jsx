import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";

function Attendance({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <StudentSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Attendance</h1>

          <div className="card">
            <h3>Overall Attendance</h3>
            <p>Present: 42 Days</p>
            <p>Absent: 8 Days</p>
            <p>Attendance: 84%</p>
          </div>

          <div className="card">
            <h3>Subject Wise Attendance</h3>
            <p>Data Structures: 90%</p>
            <p>Computer Graphics: 85%</p>
            <p>Software Engineering: 80%</p>
            <p>Computer Networks: 82%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;