import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";

export default function Exam() {
  return (
    <div className="central flex">
      <MenuTutor />
      <section className="flex-grow py-6 pl-12">
        <div className="text-gray-600">EXAM</div>
        <div className="flex">
          <h1 className="text-4xl flex-grow">Introduction to Web Development</h1>
          <div>1 out of 20</div>
        </div>
        <div>John Smith</div>
        <div className="py-12 grid gap-8">
          <div className="flex">
            <div className="text-3xl opacity-40 pr-2">1.</div>
            <div className="text-sm">Which markup language is used for structuring content on the web?</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["HTML", "CSS", "JavaScript", "Python"].map((opt, i) => (
              <div key={i} className="flex gap-3">
                <div className="border-solid border-gray-300 p-2px">
                  <div className={"h-4 w-4 " + (i == 0 ? "bg-brand-blue" : "")}></div>
                </div>
                <div>{opt}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-xs">
            <a className="btn black">PREV</a>
            <a className="btn black">NEXT</a>
          </div>
        </div>
      </section>
    </div>
  );
}
