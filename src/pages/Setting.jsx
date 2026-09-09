function Settings() {
  return (
    <main className="main-content">

      <div className="page-header">
        <h1>Settings ⚙️</h1>
        <p>Manage your University ERP preferences.</p>
      </div>

      <section className="settings-card">

        <div className="setting-item">
          <div>
            <h2>Notifications 🔔</h2>
            <p>Receive notifications about university updates.</p>
          </div>

          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span></span>
          </label>
        </div>

        <div className="setting-item">
          <div>
            <h2>Email Updates 📧</h2>
            <p>Receive important academic updates by email.</p>
          </div>

          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span></span>
          </label>
        </div>

        <div className="setting-item">
          <div>
            <h2>AI Assistant 🤖</h2>
            <p>Allow the AI assistant to use your ERP information.</p>
          </div>

          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span></span>
          </label>
        </div>

        <div className="setting-item">
          <div>
            <h2>Language 🌐</h2>
            <p>Select your preferred language.</p>
          </div>

          <select defaultValue="English">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

      </section>

    </main>
  );
}

export default Settings;