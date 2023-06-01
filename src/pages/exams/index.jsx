import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";

export default function Exams() {
  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 pl-12">
        <h1 className="text-4xl m-0">Exams</h1>
        <div className="py-6 grid gap-6">
          <Link to="/exams/1">
            DevOps Engineering <div className="text-xs">Julien</div>
          </Link>
          <Link to="/exams/1">
            Low Level Software Development <div className="text-xs">Maarten</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
