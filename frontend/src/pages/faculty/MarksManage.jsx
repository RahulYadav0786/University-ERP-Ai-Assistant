import FacultySidebar from "../../components/FacultySidebar";
import Navbar from "../../components/Navbar";

function MarksManage({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <FacultySidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Manage Marks</h1>

          <table className="timetable">
            <thead>
              <tr>
                <th>Enrollment No.</th>
                <th>Student Name</th>
                <th>Subject</th>
                <th>Internal Marks</th>
                <th>Assignment</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>STU001</td>
                <td>Rahul Sharma</td>
                <td>Data Structures</td>
                <td>25 / 30</td>
                <td>18 / 20</td>
                <td>43 / 50</td>
              </tr>

              <tr>
                <td>STU002</td>
                <td>Priya Singh</td>
                <td>Data Structures</td>
                <td>24 / 30</td>
                <td>17 / 20</td>
                <td>41 / 50</td>
              </tr>

              <tr>
                <td>STU003</td>
                <td>Aman Kumar</td>
                <td>Data Structures</td>
                <td>26 / 30</td>
                <td>19 / 20</td>
                <td>45 / 50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MarksManage;