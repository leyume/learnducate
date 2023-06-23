import React from "react";
import { Link } from "react-router-dom";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "~/utils/fetchAPI";
import MenuTutor from "./MenuTutor";

export default function Menu() {
  const { data: user, error, isError } = useQuery({ queryKey: ["user"], queryFn: () => get("user"), retry: 0 });

  if (user)
    return user.role == "tutor" ? (
      <MenuTutor />
    ) : (
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
