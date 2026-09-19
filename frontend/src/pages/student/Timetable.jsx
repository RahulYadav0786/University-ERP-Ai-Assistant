import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";

function Timetable({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <StudentSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Timetable</h1>

          <table className="timetable">
            <thead>
              <tr>
                <th>Day</th>
                <th>9:00 - 10:00</th>
                <th>10:00 - 11:00</th>
                <th>11:00 - 12:00</th>
                <th>1:00 - 2:00</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Monday</td>
                <td>Data Structures</td>
                <td>Computer Graphics</td>
                <td>Software Engineering</td>
                <td>Lab</td>
              </tr>

              <tr>
                <td>Tuesday</td>
                <td>Computer Networks</td>
                <td>Data Structures</td>
                <td>Lab</td>
                <td>Software Engineering</td>
              </tr>

              <tr>
                <td>Wednesday</td>
                <td>Computer Graphics</td>
                <td>Computer Networks</td>
                <td>Data Structures</td>
                <td>Lab</td>
              </tr>

              <tr>
                <td>Thursday</td>
                <td>Software Engineering</td>
                <td>Data Structures</td>
                <td>Computer Graphics</td>
                <td>Computer Networks</td>
              </tr>

              <tr>
                <td>Friday</td>
                <td>Lab</td>
                <td>Software Engineering</td>
                <td>Computer Networks</td>
                <td>Data Structures</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Timetable;