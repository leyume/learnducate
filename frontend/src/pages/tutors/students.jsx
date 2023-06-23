import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuTutor from "~/components/MenuTutor";
import { students } from "~/data";

export default function Students() {
  return (
    <div className="central flex">
      <MenuTutor />
      <section className="flex-grow py-6 pl-12">
        <h1 className="text-4xl m-0">Students</h1>
        <div className="py-6 grid gap-6">
          {students.map((students, index) => (
            <Link key={index} to={"/tutors/students/" + students.id}>
              {students.name} <div className="text-xs text-black">{students.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
