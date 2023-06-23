import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tutors } from "~/data";

import Menu from "~/components/Menu";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "~/utils/fetchAPI";

export default function TutorDashboard() {
  const { data: user, error, isError } = useQuery({ queryKey: ["user"], queryFn: () => get("user"), retry: 0 });

  const { data: students } = useQuery({ queryKey: ["students"], queryFn: () => get("students") });
  const { data: courses } = useQuery({ queryKey: ["courses"], queryFn: () => get("courses") });
  if (user) console.log({ user });

  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 px-12">
        <h1 className="text-4xl m-0">
          Hello {user.firstname} {user.lastname}
        </h1>
        <div className="grid grid-cols-3 py-6 gap-8">
          <Link to="/tutors/students" className="bg-blue-600 text-white p-5 hover:text-white">
            <h2 className="text-7xl">{students?.length}</h2>
            <div>STUDENTS</div>
          </Link>
          <div className="col-span-2 grid grid-cols-3">
            <div className="bg-pink-500 text-white p-5">
              <h2 className="text-7xl">{user?.courses?.length}</h2>
              <div>COURSES</div>
            </div>
            <div className="bg-orange-100 p-5 col-span-2 grid gap-y-4 overflow-auto">
              {user?.courses?.slice(0, 3).map((course, index) => (
                <div key={index}>
                  {course.name}
                  <div className="text-10px">
                    {course.tutor?.firstname} {course.tutor?.lastname}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/tutors/exams" className="bg-black text-white p-5 hover:text-white">
            <h2 className="text-7xl">.</h2>
            <div>EXAMS</div>
          </Link>
          <div className="col-span-2 grid grid-cols-3">
            <Link to="/tutors/results" className="bg-orange-400 text-white p-5 hover:text-white">
              <h2 className="text-7xl">.{/* 12<span className="text-2xl">%</span> */}</h2>
              <div>SUBMISSIONS</div>
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
