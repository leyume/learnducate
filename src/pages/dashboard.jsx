import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";
import { courses, tutors } from "~/data";

export default function Dashboard() {
  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 px-12">
        <h1 className="text-4xl m-0">Hello!</h1>
        <div className="grid grid-cols-3 py-6 gap-8">
          <Link to="/courses" className="bg-pink-500 text-white p-5 hover:text-white">
            <h2 className="text-7xl">{courses.length}</h2>
            <div>COURSES</div>
          </Link>
          <div className="col-span-2 grid grid-cols-3">
            <div className="bg-orange-400 text-white p-5">
              <h2 className="text-7xl">.</h2>
              <div>TUTORS</div>
            </div>
            <div className="bg-orange-100 p-5 col-span-2 grid gap-y-4 overflow-auto">
              {courses.slice(0, 3).map((course, index) => (
                <div key={index}>
                  {course.tutor.name} <div className="text-10px">{course.name}</div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/exams" className="bg-black text-white p-5 hover:text-white">
            <h2 className="text-7xl">2</h2>
            <div>EXAMS</div>
          </Link>
          <div className="col-span-2 grid grid-cols-3">
            <Link to="/results" className="bg-blue-600 text-white p-5 hover:text-white">
              <h2 className="text-7xl">
                82<span className="text-2xl">%</span>
              </h2>
              <div>RESULTS</div>
            </Link>
            <div className="bg-blue-100 p-5 col-span-2 grid gap-y-4 overflow-auto">
              <div className="flex">
                <div className="flex-grow">
                  DevOps Eng. <div className="text-10px">May 30, 2023 4PM</div>
                </div>
                <div>82%</div>
              </div>
              <div className="flex">
                <div className="flex-grow">
                  Low Level Eng. <div className="text-10px">Jun 2, 2023 4PM</div>
                </div>
                <div>-</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
