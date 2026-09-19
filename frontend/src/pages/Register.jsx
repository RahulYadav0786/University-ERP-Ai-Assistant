function Register({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-box">

        <h1>University ERP</h1>
        <p>Register your account</p>

        <form>
          <label>Select Role</label>

          <select>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Enrollment / Employee ID</label>
          <input
            type="text"
            placeholder="Enter your ID"
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
          />

          <button type="submit">Register</button>
        </form>

        <p className="register-text">
          Already have an account?{" "}
          <span onClick={onLogin}>Login</span>
        </p>

      </div>
    </div>
  );
}

export default Register;