import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";

function Marks({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <StudentSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Marks</h1>

          <div className="card">
            <h3>Data Structures</h3>
            <p>Internal Marks: 25 / 30</p>
            <p>Assignment: 18 / 20</p>
            <p>Total: 43 / 50</p>
          </div>

          <div className="card">
            <h3>Computer Graphics</h3>
            <p>Internal Marks: 24 / 30</p>
            <p>Assignment: 17 / 20</p>
            <p>Total: 41 / 50</p>
          </div>

          <div className="card">
            <h3>Software Engineering</h3>
            <p>Internal Marks: 26 / 30</p>
            <p>Assignment: 19 / 20</p>
            <p>Total: 45 / 50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marks;