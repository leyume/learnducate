import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuTutor from "~/components/MenuTutor";

export default function Exams() {
  return (
    <div className="central flex">
      <MenuTutor />
      <section className="flex-grow py-6 pl-12">
        <h1 className="text-xl m-0">Exams</h1>
        <div className="py-6 grid gap-6">
          <div className="py-6">To be Updated...</div>

          {/* <Link to="/tutors/exams/1">
            <h1 className="text-5xl text-gray-500 m-0">DevOps Engineering</h1>
            <div className="text-base text-gray-800 mt-4">Julien Barbier</div>
          </Link> */}

          {/* <div className="text-2xl font-bold">SET QUESTION 1</div>
          <div className="text-base text-gray-800 bg-gray-200 p-2">
            In this example, we have a Vue component with an input field. The v-model directive is used to bind the input value to the inputValue property in
            the component's data.
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["OutputValue property", "OutputValue property", "OutputValue property", "OutputValue property"].map((opt, i) => (
              <div key={i} className="flex gap-3">
                <div className="border-solid border-gray-300 p-2px">
                  <div className={"h-4 w-4 " + (i == 0 ? "bg-brand-blue" : "")}></div>
                </div>
                <div>{opt}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-xs">
            <a className="btn gray-300">PREV</a>
            <a className="btn black">NEXT</a>
          </div> */}

          {/*           
          <Link to="/tutors/exams/1">
            Low Level Software Development <div className="text-xs">Maarten</div>
          </Link> */}
        </div>
      </section>
    </div>
  );
}
