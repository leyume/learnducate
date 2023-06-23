import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "~/utils/fetchAPI";

import TutorDashboard from "./tutors/dashboard";

export default function Dashboard() {
  const [result, setResult] = useState(0);
  const [exams, setExams] = useState(0);

  const { data: user, error, isError } = useQuery({ queryKey: ["user"], queryFn: () => get("user/courses") });
  const { data: courses } = useQuery({ queryKey: ["courses"], queryFn: () => get("courses") });
  const { data: tutors } = useQuery({ queryKey: ["tutors"], queryFn: () => get("tutors") });

  // if (user) console.log({ user });
  // if (courses) console.log({ courses });
  // if (tutors) console.log({ tutors });

  useEffect(() => {
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

  if (user)
    return user?.role == "tutor" ? (
      <TutorDashboard />
    ) : (
      <div className="central flex">
        <Menu />
        <section className="flex-grow py-6 px-12">
          <h1 className="text-4xl m-0">
            Hello {user.firstname} {user.lastname}
          </h1>
          <div className="grid grid-cols-3 py-6 gap-8">
            <Link to="/courses" className="bg-pink-500 text-white p-5 hover:text-white">
              <h2 className="text-7xl">{courses?.length}</h2>
              <div>COURSES</div>
            </Link>
            <div className="col-span-2 grid grid-cols-3">
              <div className="bg-orange-400 text-white p-5">
                <h2 className="text-7xl">{tutors?.length}</h2>
                <div>TUTORS</div>
              </div>
              <div className="bg-orange-100 p-5 col-span-2 grid gap-y-4 overflow-auto">
                {tutors?.slice(0, 3).map((tutor, index) => (
                  <div key={index}>
                    {tutor.firstname} {tutor.lastname} <div className="text-10px">{tutor?.courses[0]?.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/exams" className="bg-black text-white p-5 hover:text-white">
              <h2 className="text-7xl">{exams}</h2>
              <div>EXAMS TAKEN</div>
            </Link>
            <div className="col-span-2 grid grid-cols-3">
              <Link to="/results" className="bg-blue-600 text-white p-5 hover:text-white">
                <h2 className="text-7xl whitespace-nowrap">
                  {exams ? (
                    <span>
                      {result}
                      <span className="text-2xl">%</span>
                    </span>
                  ) : (
                    "No"
                  )}
                </h2>
                <div>RESULTS</div>
              </Link>
              <div className="bg-blue-100 p-5 col-span-2 grid gap-y-4 overflow-auto">
                {user?.enrolments?.slice(0, 3).map((e) => (
                  <div className="flex" key={e.course_id}>
                    <div className="flex-grow">
                      {user?.courses?.filter((c) => c.id == e.course_id)[0]?.name} <div className="text-10px">{e?.exam_date ? e.exam_date : "NOT DONE"}</div>
                    </div>
                    <div>{e?.result ? e.result + "%" : "-"}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
