function Login({ onLogin, onRegister }) {
  const handleLogin = (e) => {
    e.preventDefault();

    const role = e.target.role.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!role || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    onLogin(role);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>University ERP</h1>
        <p>Login to your account</p>

        <form onSubmit={handleLogin}>
          <label>Select Role</label>

          <select name="role">
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <span onClick={onRegister}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;