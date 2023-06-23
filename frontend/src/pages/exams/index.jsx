import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";

import { useQuery } from "@tanstack/react-query";
import { get } from "~/utils/fetchAPI";

export default function Exams() {
  const [result, setResult] = useState(0);
  const [exams, setExams] = useState(0);

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
    if (user?.enrolments?.length) {
      let total = 0;
      let count = 0;
      for (let i = 0; i < user.enrolments.length; i++) {
        const enrol = user.enrolments[i];
        if (enrol.exam_date) {
          total = total + enrol.result;
          count++;
        }
      }
      if (count) {
        setExams(count); // exam taken
        setResult(total / count);
      }
    }
  }, [user]);

  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 pl-12">
        <h1 className="text-4xl m-0">Exams</h1>
        <div className="grid grid-cols-2 gap-6 items-start">
          {courses?.filter((c) => userCourses.indexOf(c.id) > -1).length ? (
            <div className="py-6 grid gap-6">
              <h3>Enrolled Courses</h3>
              {user?.enrolments?.slice(0, 3).map((e) => (
                <Link key={e.course_id} to={"/courses/" + e.course_id}>
                  {user?.courses?.filter((c) => c.id == e.course_id)[0]?.name}
                  <div className="text-xs text-black">
                    {user?.courses?.filter((c) => c.id == e.course_id)[0]?.tutor?.firstname}{" "}
                    {user?.courses?.filter((c) => c.id == e.course_id)[0]?.tutor?.lastname}
                  </div>
                  {/* <div className="text-10px">{e?.exam_date ? e.exam_date : "NOT DONE"}</div> */}
                  <div>{e?.result ? e.result + "%" : "-"}</div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="pt-6 leading-normal">
              <h3>You need to enrol for Courses before you can take exams</h3>
              <Link to="/courses">Choose a course here</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
