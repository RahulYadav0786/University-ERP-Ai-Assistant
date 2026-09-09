function Dashboard() {
  return (
    <main className="main-content">

      {/* Top Bar */}
      <header className="topbar">
        <div>
          <h1>Welcome back, Student 👋</h1>
          <p>Here's your university overview.</p>
        </div>

        <div className="student">
          🔔 &nbsp; 👤 Student
        </div>
      </header>

      {/* Student Info */}
      <section className="student-info">
        <div>
          <h2>Hemant Singh</h2>
          <p>B.Tech / Computer Science</p>
          <p>Semester: 6th | Roll No: 21CS001</p>
        </div>

        <div className="semester">
          <span>Current Semester</span>
          <strong>6th</strong>
        </div>
      </section>

      {/* Statistics */}
      <section className="cards">

        <div className="card">
          <h3>Attendance</h3>
          <strong>85%</strong>
          <div className="progress">
            <div className="progress-bar attendance"></div>
          </div>
          <p>Good attendance</p>
        </div>

        <div className="card">
          <h3>Average Marks</h3>
          <strong>82%</strong>
          <div className="progress">
            <div className="progress-bar marks"></div>
          </div>
          <p>Current semester</p>
        </div>

        <div className="card">
          <h3>Courses</h3>
          <strong>6</strong>
          <p>Active courses</p>
        </div>

        <div className="card">
          <h3>Pending Tasks</h3>
          <strong>3</strong>
          <p>Assignments & activities</p>
        </div>

      </section>

      {/* Timetable */}
      <section className="dashboard-section">
        <h2>Today's Timetable</h2>

        <div className="schedule">

          <div>
            <strong>10:00 AM</strong>
            <span>Data Structures</span>
            <small>Room 204</small>
          </div>

          <div>
            <strong>12:00 PM</strong>
            <span>Computer Graphics</span>
            <small>Lab 102</small>
          </div>

          <div>
            <strong>02:00 PM</strong>
            <span>Software Project Management</span>
            <small>Room 301</small>
          </div>

        </div>
      </section>

      {/* Notices */}
      <section className="dashboard-section">

        <h2>Recent Notices</h2>

        <div className="notice-list">

          <div className="notice">
            <span>📢</span>
            <div>
              <strong>Semester Examination Form</strong>
              <p>Last date for submission is 15 September.</p>
            </div>
          </div>

          <div className="notice">
            <span>📚</span>
            <div>
              <strong>Assignment Submission</strong>
              <p>Submit your project assignment before Friday.</p>
            </div>
          </div>

        </div>

      </section>

      {/* AI Assistant */}
      <section className="ai-box">

        <h2>🤖 AI Assistant</h2>

        <p>
          Ask questions about your attendance, timetable, results or university.
        </p>

        <div className="ai-input">
          <input
            type="text"
            placeholder="Ask: How is my attendance?"
          />

          <button>Ask AI</button>
        </div>

      </section>

    </main>
  );
}

export default Dashboard;