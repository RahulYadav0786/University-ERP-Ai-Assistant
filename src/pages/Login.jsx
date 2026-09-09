import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (userId && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter User ID and Password.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🎓
        </div>

        <h1>University ERP</h1>

        <p className="login-subtitle">
          Student Management Portal
        </p>

        <form onSubmit={handleLogin}>

          <label>User ID</label>

          <input
            type="text"
            placeholder="Enter your User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="login-footer">
          © 2026 University ERP
        </p>

      </div>

    </div>
  );
}

export default Login;