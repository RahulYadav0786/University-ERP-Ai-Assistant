import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";

function Fees({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <StudentSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Fees</h1>

          <div className="card">
            <h3>Total Fees</h3>
            <p>₹1,00,000</p>
          </div>

          <div className="card">
            <h3>Paid Fees</h3>
            <p>₹75,000</p>
          </div>

          <div className="card">
            <h3>Remaining Fees</h3>
            <p>₹25,000</p>
          </div>

          <div className="card">
            <h3>Payment Status</h3>
            <p>Partially Paid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fees;