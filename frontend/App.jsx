import { useState } from "react";

import Login from "./src/pages/Login";
import Register from "./src/pages/Register";

import StudentDashboard from "./src/pages/student/StudentDashboard";
import Profile from "./src/pages/student/Profile";
import Attendance from "./src/pages/student/Attendance";
import Marks from "./src/pages/student/Marks";
import Fees from "./src/pages/student/Fees";
import Timetable from "./src/pages/student/Timetable";

import AdminDashboard from "./src/pages/admin/AdminDashboard";
import Registrations from "./src/pages/admin/Registrations";
import ManageStudents from "./src/pages/admin/ManageStudents";
import ManageFaculty from "./src/pages/admin/ManageFaculty";
import Subjects from "./src/pages/admin/Subjects";
import Notices from "./src/pages/admin/Notices";

import FacultyDashboard from "./src/pages/faculty/FacultyDashboard";
import FacultyProfile from "./src/pages/faculty/FacultyProfile";
import Students from "./src/pages/faculty/Students";
import AttendanceManage from "./src/pages/faculty/AttendanceManage";
import MarksManage from "./src/pages/faculty/MarksManage";
import TimetableManage from "./src/pages/faculty/TimetableManage";

function App() {
  const [page, setPage] = useState("login");

  const handleLogin = (role) => {
    if (role === "student") {
      setPage("studentDashboard");
    } else if (role === "faculty") {
      setPage("facultyDashboard");
    } else if (role === "admin") {
      setPage("adminDashboard");
    }
  };

  if (page === "register") {
    return <Register onLogin={() => setPage("login")} />;
  }

  if (page === "studentDashboard") {
    return <StudentDashboard setPage={setPage} />;
  }

  if (page === "profile") {
    return <Profile setPage={setPage} />;
  }

  if (page === "attendance") {
    return <Attendance setPage={setPage} />;
  }

  if (page === "marks") {
    return <Marks setPage={setPage} />;
  }

  if (page === "fees") {
    return <Fees setPage={setPage} />;
  }

  if (page === "timetable") {
    return <Timetable setPage={setPage} />;
  }

  if (page === "facultyDashboard") {
    return <FacultyDashboard setPage={setPage} />;
  }
  
  if (page === "facultyProfile") {
    return <FacultyProfile setPage={setPage} />;
  }

  if (page === "students") {
    return <Students setPage={setPage} />;
  }

  if (page === "attendanceManage") {
    return <AttendanceManage setPage={setPage} />;
  }

  if (page === "marksManage") {
    return <MarksManage setPage={setPage} />;
  }

  if (page === "timetableManage") {
    return <TimetableManage setPage={setPage} />;
  }

  if (page === "adminDashboard") {
    return <AdminDashboard setPage={setPage} />;
  }

  if (page === "registrations") {
    return <Registrations setPage={setPage} />;
  }

  if (page === "manageStudents") {
    return <ManageStudents setPage={setPage} />;
  }

  if (page === "manageFaculty") {
    return <ManageFaculty setPage={setPage} />;
  }

  if (page === "subjects") {
    return <Subjects setPage={setPage} />;
  }

  if (page === "notices") {
    return <Notices setPage={setPage} />;
  }

  return (
    <Login
      onLogin={handleLogin}
      onRegister={() => setPage("register")}
    />
  );
}

export default App; 