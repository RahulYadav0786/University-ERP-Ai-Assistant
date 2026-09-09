function Profile() {
  return (
    <main className="main-content">
      <div className="page-header">
        <h1>Student Profile 👤</h1>
        <p>View your personal and academic information.</p>
      </div>

      <section className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">HS</div>

          <div>
            <h2>Hemant Singh</h2>
            <p>B.Tech Computer Science</p>
            <span>6th Semester</span>
          </div>
        </div>

        <div className="profile-details">
          <div>
            <label>Full Name</label>
            <strong>Hemant Singh</strong>
          </div>

          <div>
            <label>Roll Number</label>
            <strong>21CS001</strong>
          </div>

          <div>
            <label>Email</label>
            <strong>student@university.edu</strong>
          </div>

          <div>
            <label>Department</label>
            <strong>Computer Science</strong>
          </div>

          <div>
            <label>Semester</label>
            <strong>6th Semester</strong>
          </div>

          <div>
            <label>Academic Year</label>
            <strong>2026–27</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;