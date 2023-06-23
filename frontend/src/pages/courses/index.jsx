import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "~/utils/fetchAPI";

export default function Courses() {
  const [userCourses, setUserCourses] = useState([]);

  const { data: user, error, isError } = useQuery({ queryKey: ["user"], queryFn: () => get("user/courses") });
  const { data: courses } = useQuery({ queryKey: ["courses"], queryFn: () => get("courses") });
  if (courses) console.log({ courses });

  useEffect(() => {
    if (user?.courses?.length) {
      let ids = [];
      for (let i = 0; i < user.courses.length; i++) {
        ids.push(user.courses[i].id);
      }
      setUserCourses(ids);
    }
  }, [user]);

  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 pl-12">
        <h1 className="text-4xl m-0">Courses</h1>
        <div className="grid grid-cols-2 gap-6 items-start">
          <div className="py-6 grid gap-6">
            <h3>Enrolled Courses</h3>
            {courses
              ?.filter((c) => userCourses.indexOf(c.id) > -1)
              .map((course, index) => (
                <Link key={index} to={"/courses/" + course.id}>
                  {course.name}
                  <div className="text-xs text-black">
                    {course.tutor?.firstname} {course.tutor?.lastname}
                  </div>
                </Link>
              ))}
          </div>
          <div className="py-6 grid gap-6">
            <h3>Other Courses</h3>
            {courses
              ?.filter((c) => userCourses.indexOf(c.id) < 0)
              .map((course, index) => (
                <Link key={index} to={"/courses/" + course.id}>
                  {course.name}
                  <div className="text-xs text-black">
                    {course.tutor?.firstname} {course.tutor?.lastname}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
