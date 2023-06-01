import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";

export default function Results() {
  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 pl-12">
        <h1 className="text-4xl m-0">Results</h1>
        <div className="py-6 grid gap-6">
          <Link to="/results/1">
            DevOps Engineering <div className="text-xs">Julien</div>
          </Link>
          <Link to="/results/1">
            Low Level Software Development <div className="text-xs">Maarten</div>
          </Link>
          <Link to="/results/1">
            Low Level Software Development <div className="text-xs">Maarten</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
