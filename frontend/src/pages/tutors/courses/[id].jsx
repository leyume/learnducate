import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Menu from "~/components/Menu";
import { courses } from "~/data";

export default function Course() {
  let id = useParams().id;
  const [course, setCourse] = useState({});

  useEffect(() => {
    if (id) {
      let cc = courses.filter((c) => c.id == id)[0];
      setCourse({ ...cc });
    }
  }, []);

  return (
    !!course?.id && (
      <div className="central flex">
        <MenuTutor />
        <section className="flex-grow py-6 pl-12">
          <div className="text-pink-500">COURSES</div>
          <div className="flex gap-6 items-start">
            <h1 className="text-4xl flex-grow">{course.name}</h1>
            <div className="flex gap-1 text-xs">
              <a className="btn">APPLY</a>
              <Link to={"/tutors/exams/" + course.id} className="btn black whitespace-nowrap">
                TAKE EXAM
              </Link>
            </div>
          </div>
          <div>{course.tutor.name}</div>
          <div className="py-6 grid gap-6">
            <div className="text-sm opacity-70 text-justify">
              {course.content}
              <br />
              <br />
            </div>
          </div>
        </section>
      </div>
    )
  );
}
