import FacultySidebar from "../../components/FacultySidebar";
import Navbar from "../../components/Navbar";

function Students({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <FacultySidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Students</h1>

          <table className="timetable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Enrollment No.</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>STU001</td>
                <td>B.Tech IT</td>
                <td>5th</td>
                <td>rahul@example.com</td>
              </tr>

              <tr>
                <td>Priya Singh</td>
                <td>STU002</td>
                <td>B.Tech IT</td>
                <td>5th</td>
                <td>priya@example.com</td>
              </tr>

              <tr>
                <td>Aman Kumar</td>
                <td>STU003</td>
                <td>B.Tech IT</td>
                <td>5th</td>
                <td>aman@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;