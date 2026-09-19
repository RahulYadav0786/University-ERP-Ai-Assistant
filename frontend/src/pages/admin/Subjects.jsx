import AdminSidebar from "../../components/AdminSidebar";
import Navbar from "../../components/Navbar";

function Subjects({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <AdminSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Manage Subjects</h1>

          <table className="timetable">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Semester</th>
                <th>Faculty</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>IT501</td>
                <td>Data Structures</td>
                <td>5th</td>
                <td>Priya Verma</td>
              </tr>

              <tr>
                <td>IT502</td>
                <td>Computer Graphics</td>
                <td>5th</td>
                <td>Rajesh Kumar</td>
              </tr>

              <tr>
                <td>IT503</td>
                <td>Software Engineering</td>
                <td>5th</td>
                <td>Neha Sharma</td>
              </tr>

              <tr>
                <td>IT504</td>
                <td>Computer Networks</td>
                <td>5th</td>
                <td>Rajesh Kumar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Subjects;