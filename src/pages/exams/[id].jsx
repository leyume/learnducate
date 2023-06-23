import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Menu from "~/components/Menu";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post } from "~/utils/fetchAPI";

export default function Exam() {
  let id = useParams().id;

  const [num, setNum] = useState(1);
  const [ans, setAns] = useState([]);
  const [msg, setMsg] = useState("");

  const { data: course } = useQuery({ queryKey: ["course_question", id], queryFn: () => get(`courses/${id}/questions`) });
  if (course) console.log({ course });

  const question = () => {
    return course?.questions?.length ? course?.questions[num - 1] : null;
  };

  const updateAns = (ans_id) => {
    let ans_edit = [...ans];
    let check = false;
    for (let i = 0; i < ans_edit.length; i++) {
      if (ans_edit[i].question_id == num) {
        ans_edit[i].question_option_id = ans_id;
        check = true;
      }
    }
    if (!check) ans_edit.push({ question_id: num, question_option_id: ans_id });
    setAns(ans_edit);
  };

  const queryClient = useQueryClient();

  const {
    data,
    mutate: exam,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      setMsg("");
      let data_ = await post(`students/courses/${id}/exam`, [...ans]);
      console.log({ data_ });
      return data_;
    },
    onSuccess: (result) => {
      console.log("RESULT", result);
      if (result?.message) setMsg(result.message);
      // queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (e) => {
      if (e?.detail) setMsg(e.detail);
    },
  });

  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 pl-12">
        <div className="text-gray-600">EXAM</div>

        <div className="flex">
          <h1 className="text-4xl flex-grow">{course?.name}</h1>
          <div>
            {num} out of {course?.questions?.length}
          </div>
        </div>
        <div className="pb-6">
          {course?.tutor?.firstname} {course?.tutor?.lastname}
        </div>

        {msg && <div className={"msg " + (isSuccess ? "success" : "error")}>{msg}</div>}

        {!!question() && (
          <div className="pt-4 pb-12 grid gap-8">
            <div className="flex pt-4 pb-2">
              <div className="text-3xl opacity-40 pr-2">{num}.</div>
              <div className="text-2xl">{question().question}</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {question().options.map((opt, i) => (
                <a key={opt.id} className="flex gap-3 text-black hover:text-brand-blue" onClick={() => updateAns(opt.id)}>
                  <div className="border-solid border-gray-300 p-2px">
                    <div
                      className={
                        "cursor-pointer h-4 w-4 " + (ans.filter((a) => a.question_id == num && a.question_option_id == opt.id)?.length ? "bg-brand-blue" : "")
                      }
                    ></div>
                  </div>
                  <div>{opt.option}</div>
                </a>
              ))}
            </div>

            <div className="flex justify-between text-xs pt-12">
              {num == 1 ? (
                <div />
              ) : (
                <a className={"btn black"} onClick={() => setNum(num - 1)}>
                  PREV
                </a>
              )}
              {num == course?.questions?.length ? (
                <a className="btn black" onClick={() => exam()}>
                  {isLoading ? <i className="i-svg-spinners-3-dots-fade text-4xl -my-4" /> : "FINISH AND SUBMIT"}
                </a>
              ) : (
                <a className="btn black" onClick={() => setNum(num + 1)}>
                  NEXT
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
