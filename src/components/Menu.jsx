import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <aside className="">
      <div className="grid gap-2">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/exams">Exams</Link>
        <Link to="/results">Results</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="w-56" />
      <Link to="/" className="absolute bottom-20">
        Logout
      </Link>
    </aside>
  );
}
