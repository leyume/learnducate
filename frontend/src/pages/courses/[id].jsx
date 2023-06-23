import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Menu from "~/components/Menu";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post } from "~/utils/fetchAPI";

export default function Course() {
  let id = useParams().id;

  const [course, setCourse] = useState({});
  const [enrolled, setEnrolled] = useState(false);
  const [msg, setMsg] = useState("");

  const { data: user } = useQuery({ queryKey: ["user"], queryFn: () => get("user/courses") });
  const { data: courses } = useQuery({ queryKey: ["courses"], queryFn: () => get("courses") });
  if (courses) console.log({ courses });

  useEffect(() => {
    if (id && courses) {
      let cc = courses.filter((c) => c.id == id)[0];
      setCourse({ ...cc });
    }
    if (id && user) {
      let course_found = user.courses?.filter((c) => c.id == id);
      setEnrolled(course_found?.length ? true : false);
    }
  }, [courses, user]);

  const queryClient = useQueryClient();

  const {
    data,
    mutate: enrol,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      let data_ = await post(`students/courses/${id}/enrol`, {});
      console.log({ data_ });
      return data_;
    },
    onSuccess: (result) => {
      console.log("RESULT", result);
      if (result?.message) setMsg(result.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (e) => {
      if (e?.detail) setMsg(e.detail);
    },
  });

  return (
    !!course?.id && (
      <div className="central flex">
        <Menu />
        <section className="flex-grow py-6 pl-12">
          {msg && <div className={"msg " + (isSuccess ? "success" : "error")}>{msg}</div>}
          <div className="text-pink-500">COURSES</div>
          <div className="flex gap-6 items-start">
            <h1 className="text-4xl flex-grow">{course.name}</h1>
            <div className="flex gap-1 text-xs">
              {!enrolled ? (
                <a className="btn" onClick={() => enrol()}>
                  {isLoading ? <i className="i-svg-spinners-3-dots-fade text-4xl -my-4" /> : "ENROL"}
                </a>
              ) : (
                <Link to={"/exams/" + course.id} className="btn black whitespace-nowrap">
                  TAKE EXAM
                </Link>
              )}
            </div>
          </div>
          <div>{course.tutor.name}</div>
          <div className="py-6 grid gap-6">
          <div className="text-sm opacity-70 text-justify" dangerouslySetInnerHTML={{__html: course.content }} />
          </div>
        </section>
      </div>
    )
  );
}
