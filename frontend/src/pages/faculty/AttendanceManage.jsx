import FacultySidebar from "../../components/FacultySidebar";
import Navbar from "../../components/Navbar";

function AttendanceManage({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <FacultySidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Manage Attendance</h1>

          <table className="timetable">
            <thead>
              <tr>
                <th>Enrollment No.</th>
                <th>Student Name</th>
                <th>Subject</th>
                <th>Attendance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>STU001</td>
                <td>Rahul Sharma</td>
                <td>Data Structures</td>
                <td>90%</td>
              </tr>

              <tr>
                <td>STU002</td>
                <td>Priya Singh</td>
                <td>Data Structures</td>
                <td>85%</td>
              </tr>

              <tr>
                <td>STU003</td>
                <td>Aman Kumar</td>
                <td>Data Structures</td>
                <td>80%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AttendanceManage;