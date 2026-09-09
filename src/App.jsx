import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import Results from "./pages/Results";
import Notices from "./pages/Notices";
import AIassistant from "./pages/AIassistant";
import Setting from "./pages/Setting";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import "./App.css";

function PageLayout({ children }) {
  return (
    <div className="app">
      <Sidebar />
      {children}
    </div>
  );
}

function SimplePage({ title, description }) {
  return (
    <main className="main-content">
      <div className="page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="coming-soon">
        <h2>🚧 {title}</h2>
        <p>This section is under development.</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/Login"replace />
          }
        />

        <Route
          path="/dashboard"
          element={
            <PageLayout>
              <Dashboard />
            </PageLayout>
          }
        />

        <Route
          path="/Profile"
          element={
            <PageLayout>
              <Profile />
            </PageLayout>
          }
        />

        <Route
          path="/Attendance"
          element={
            <PageLayout>
              <Attendance />
            </PageLayout>
          }
        />

        <Route
          path="/Timetable"
          element={
            <PageLayout>
              <Timetable />
            </PageLayout>
          }
        />

        <Route
          path="/Results"
          element={
            <PageLayout>
              <Results />
            </PageLayout>
          }
        />

        <Route
          path="/Notices"
          element={
            <PageLayout>
              <Notices />
            </PageLayout>
          }
        />

        <Route
          path="/Ai-Assistant"
          element={
            <PageLayout>
              <AIassistant />
            </PageLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <PageLayout>
              <Setting />
            </PageLayout>
          }
        />

        <Route
          path="/logout"
          element={
            <PageLayout>
              <Logout />
            </PageLayout>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;