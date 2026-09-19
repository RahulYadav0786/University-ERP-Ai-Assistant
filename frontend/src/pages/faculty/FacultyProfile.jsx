import FacultySidebar from "../../components/FacultySidebar";
import Navbar from "../../components/Navbar";

function FacultyProfile({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <FacultySidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Faculty Profile</h1>

          <div className="profile-box">
            <p><strong>Name:</strong> Priya Verma</p>
            <p><strong>Employee ID:</strong> FAC001</p>
            <p><strong>Department:</strong> Information Technology</p>
            <p><strong>Subject:</strong> Data Structures</p>
            <p><strong>Email:</strong> priya@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyProfile;