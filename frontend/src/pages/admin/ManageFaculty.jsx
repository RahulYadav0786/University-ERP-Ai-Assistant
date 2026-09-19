import AdminSidebar from "../../components/AdminSidebar";
import Navbar from "../../components/Navbar";

function ManageFaculty({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <AdminSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Manage Faculty</h1>

          <table className="timetable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Subject</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Priya Verma</td>
                <td>FAC001</td>
                <td>Information Technology</td>
                <td>Data Structures</td>
                <td>priya@example.com</td>
              </tr>

              <tr>
                <td>Rajesh Kumar</td>
                <td>FAC002</td>
                <td>Information Technology</td>
                <td>Computer Networks</td>
                <td>rajesh@example.com</td>
              </tr>

              <tr>
                <td>Neha Sharma</td>
                <td>FAC003</td>
                <td>Information Technology</td>
                <td>Software Engineering</td>
                <td>neha@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageFaculty;