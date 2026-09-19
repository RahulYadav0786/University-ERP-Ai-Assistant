function Navbar({ setPage, role }) {
  const handleProfile = () => {
    if (role === "student") {
      setPage("profile");
    } else if (role === "faculty") {
      setPage("facultyProfile");
    } else if (role === "admin") {
      setPage("adminProfile");
    }
  };

  const handleLogout = () => {
    setPage("login");
  };

  return (
    <div className="navbar">
      <h2>University ERP</h2>

      <div className="navbar-right">
        <span className="navbar-item">
          🔔 Notifications
        </span>

        <span className="navbar-item" onClick={handleProfile}>
          👤 Profile
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;