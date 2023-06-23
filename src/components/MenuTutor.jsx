import React from "react";
import { Link } from "react-router-dom";

export default function MenuTutor() {
  return (
    <aside className="tutor">
      <div className="grid gap-2">
        <Link to="/tutors/dashboard">Dashboard</Link>
        <Link to="/tutors/students">Students</Link>
        <Link to="/tutors/courses">Courses</Link>
        <Link to="/tutors/exams">Exams</Link>
        {/* <Link to="/tutors/results">Results</Link> */}
        <Link to="/tutors/profile">Profile</Link>
      </div>
      <div className="w-56" />
      <Link to="/" className="absolute bottom-20">
        Logout
      </Link>
    </aside>
  );
}
