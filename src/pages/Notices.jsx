function Notices() {
  return (
    <main className="main-content">

      <div className="page-header">
        <h1>University Notices 📢</h1>
        <p>View the latest university announcements and updates.</p>
      </div>

      <section className="notices-page">

        <div className="notice-item">
          <div className="notice-icon">📢</div>

          <div className="notice-content">
            <h2>Semester Examination Form</h2>
            <p>
              Students are required to submit their semester examination
              form before the last date.
            </p>
            <span>📅 15 September 2026</span>
          </div>

          <div className="notice-badge">Important</div>
        </div>

        <div className="notice-item">
          <div className="notice-icon">📚</div>

          <div className="notice-content">
            <h2>Assignment Submission</h2>
            <p>
              Submit your pending project assignments before the deadline.
            </p>
            <span>📅 12 September 2026</span>
          </div>

          <div className="notice-badge">Academic</div>
        </div>

        <div className="notice-item">
          <div className="notice-icon">🎓</div>

          <div className="notice-content">
            <h2>Semester Registration</h2>
            <p>
              Semester registration process will begin from next week.
            </p>
            <span>📅 10 September 2026</span>
          </div>

          <div className="notice-badge">General</div>
        </div>

        <div className="notice-item">
          <div className="notice-icon">🏫</div>

          <div className="notice-content">
            <h2>College Event</h2>
            <p>
              The annual technical event will be organized in the university
              auditorium.
            </p>
            <span>📅 20 September 2026</span>
          </div>

          <div className="notice-badge">Event</div>
        </div>

      </section>

    </main>
  );
}

export default Notices;