function Timetable() {
  return (
    <main className="main-content">

      <div className="page-header">
        <h1>Timetable 📅</h1>
        <p>View your weekly class schedule.</p>
      </div>

      <section className="timetable-card">

        <h2>Weekly Timetable</h2>

        <div className="timetable-table">

          <div className="timetable-row heading">
            <span>Day</span>
            <span>10:00 AM</span>
            <span>12:00 PM</span>
            <span>02:00 PM</span>
          </div>

          <div className="timetable-row">
            <strong>Monday</strong>
            <span>Data Structures</span>
            <span>Computer Graphics</span>
            <span>SPM</span>
          </div>

          <div className="timetable-row">
            <strong>Tuesday</strong>
            <span>Compiler Design</span>
            <span>Computer Networks</span>
            <span>Data Structures</span>
          </div>

          <div className="timetable-row">
            <strong>Wednesday</strong>
            <span>Computer Graphics</span>
            <span>SPM</span>
            <span>Compiler Design</span>
          </div>

          <div className="timetable-row">
            <strong>Thursday</strong>
            <span>Computer Networks</span>
            <span>Data Structures</span>
            <span>Computer Graphics</span>
          </div>

          <div className="timetable-row">
            <strong>Friday</strong>
            <span>SPM</span>
            <span>Compiler Design</span>
            <span>Computer Networks</span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Timetable;