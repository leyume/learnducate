import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuTutor from "~/components/MenuTutor";
import { courses } from "~/data";

export default function Courses() {
  return (
    <div className="central flex">
      <MenuTutor />
      <section className="flex-grow py-6 pl-12">
        <div className="flex gap-10 text-xs">
          <h1 className="text-4xl m-0">Courses</h1>
          <Link to={"/tutors/courses/"} className="btn pink-500 whitespace-nowrap">
            CREATE COURSE
          </Link>

          {/* <Link to={"/tutors/courses/" + courses.id} className="btn pink-500 whitespace-nowrap">
            CREATE COURSE
          </Link> */}
        </div>
        <div className="py-6">To be Updated...</div>

        {/* <div className="py-6 grid gap-6">
          {courses.map((course, index) => (
            <Link key={index} to={"/tutors/courses/" + course.id}>
              {course.name} <div className="text-xs text-black">{course.name}</div>
            </Link>
          ))}
        </div> */}
      </section>
    </div>
  );
}
