function Results() {
  return (
    <main className="main-content">

      <div className="page-header">
        <h1>Results 📝</h1>
        <p>View your semester marks and academic performance.</p>
      </div>

      <section className="results-card">

        <div className="results-summary">
          <div>
            <h2>Semester 6</h2>
            <p>Current Academic Performance</p>
          </div>

          <div className="cgpa">
            <span>CGPA</span>
            <strong>8.2</strong>
          </div>
        </div>

        <h2 className="section-title">Subject-wise Results</h2>

        <div className="results-table">

          <div className="results-row heading">
            <span>Subject</span>
            <span>Internal</span>
            <span>External</span>
            <span>Total</span>
            <span>Grade</span>
          </div>

          <div className="results-row">
            <span>Data Structures</span>
            <span>28</span>
            <span>58</span>
            <strong>86</strong>
            <strong>A</strong>
          </div>

          <div className="results-row">
            <span>Computer Graphics</span>
            <span>27</span>
            <span>55</span>
            <strong>82</strong>
            <strong>A</strong>
          </div>

          <div className="results-row">
            <span>Software Project Management</span>
            <span>26</span>
            <span>54</span>
            <strong>80</strong>
            <strong>A</strong>
          </div>

          <div className="results-row">
            <span>Compiler Design</span>
            <span>25</span>
            <span>52</span>
            <strong>77</strong>
            <strong>B+</strong>
          </div>

          <div className="results-row">
            <span>Computer Networks</span>
            <span>27</span>
            <span>56</span>
            <strong>83</strong>
            <strong>A</strong>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Results;