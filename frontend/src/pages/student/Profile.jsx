import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";

function Profile({ setPage }) {
  return (
    <div>
      <Navbar />

      <div className="dashboard-layout">
        <StudentSidebar setPage={setPage} />

        <div className="dashboard-content">
          <h1>Student Profile</h1>

          <div className="profile-box">
            <p><strong>Name:</strong> Student Name</p>
            <p><strong>Enrollment No:</strong> STU001</p>
            <p><strong>Course:</strong> B.Tech IT</p>
            <p><strong>Semester:</strong> 5th Semester</p>
            <p><strong>Email:</strong> student@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;