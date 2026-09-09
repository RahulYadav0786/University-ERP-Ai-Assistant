function Attendance() {
  return (
    <main className="main-content">

      <div className="page-header">
        <h1>Attendance 📊</h1>
        <p>Track your attendance subject-wise.</p>
      </div>

      <section className="attendance-card">

        <div className="attendance-summary">
          <div>
            <h2>Overall Attendance</h2>
            <strong>85%</strong>
            <p>Good attendance</p>
          </div>

          <div className="attendance-circle">
            85%
          </div>
        </div>

        <h2 className="section-title">Subject-wise Attendance</h2>

        <div className="attendance-table">

          <div className="attendance-row heading">
            <span>Subject</span>
            <span>Classes</span>
            <span>Present</span>
            <span>Attendance</span>
          </div>

          <div className="attendance-row">
            <span>Data Structures</span>
            <span>40</span>
            <span>36</span>
            <strong>90%</strong>
          </div>

          <div className="attendance-row">
            <span>Computer Graphics</span>
            <span>35</span>
            <span>30</span>
            <strong>86%</strong>
          </div>

          <div className="attendance-row">
            <span>Software Project Management</span>
            <span>38</span>
            <span>32</span>
            <strong>84%</strong>
          </div>

          <div className="attendance-row">
            <span>Compiler Design</span>
            <span>42</span>
            <span>34</span>
            <strong>81%</strong>
          </div>

          <div className="attendance-row">
            <span>Computer Networks</span>
            <span>40</span>
            <span>32</span>
            <strong>80%</strong>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Attendance;