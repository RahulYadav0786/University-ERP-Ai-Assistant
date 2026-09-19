import AdminSidebar from "../../components/AdminSidebar";
import Navbar from "../../components/Navbar";

function Notices({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <AdminSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>University Notices</h1>

          <div className="card">
            <h3>Semester Examination</h3>
            <p>
              5th semester examination schedule will be announced soon.
            </p>
            <small>Date: 17 September 2026</small>
          </div>

          <div className="card">
            <h3>Holiday Notice</h3>
            <p>
              University will remain closed on the upcoming holiday.
            </p>
            <small>Date: 15 September 2026</small>
          </div>

          <div className="card">
            <h3>Assignment Submission</h3>
            <p>
              Students are requested to submit their assignments before
              the last date.
            </p>
            <small>Date: 10 September 2026</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notices;