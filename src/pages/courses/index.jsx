import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";
import { courses } from "~/data";

export default function Courses() {
  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 pl-12">
        <h1 className="text-4xl m-0">Courses</h1>
        <div className="py-6 grid gap-6">
          {courses.map((course, index) => (
            <Link key={index} to={"/courses/" + course.id}>
              {course.name} <div className="text-xs text-black">{course.tutor.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
