import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuTutor from "~/components/MenuTutor";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "~/utils/fetchAPI";

export default function Students() {
  const { data: students } = useQuery({ queryKey: ["students"], queryFn: () => get("students") });

  return (
    <div className="central flex">
      <MenuTutor />
      <section className="flex-grow py-6 pl-12">
        <h1 className="text-4xl m-0">Students</h1>
        <div className="py-6 grid grid-cols-3 gap-12">
          {students?.map((student) => (
            <Link key={student.id} to={"/tutors/students/"}>
              {student.firstname} {student.lastname} <div className="text-xs text-black">{student.email}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
