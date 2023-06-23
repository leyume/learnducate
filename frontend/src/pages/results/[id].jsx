import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "~/components/Menu";

export default function Result() {
  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 pl-12">
        <div className="text-pink-500">RESULT</div>
        <h1 className="text-4xl">Introduction to Web Development</h1>

        <div>John Smith</div>
        <div className="py-6 grid gap-6">
          <div className="text-9xl text-brand-blue tracking-tight font-bold">
            80<span className="text-6xl">%</span>
          </div>
          <div className="text-lg">EXCELLENT</div>
        </div>
      </section>
    </div>
  );
}
