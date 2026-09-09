import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <main className="main-content">
      <div className="logout-card">
        <div className="logout-icon">🚪</div>

        <h1>Logout</h1>

        <p>
          Are you sure you want to logout from University ERP?
        </p>

        <div className="logout-buttons">
          <button className="cancel-btn" onClick={() => navigate(-1)}>
            Cancel
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

export default Logout;