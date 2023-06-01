import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header className="pt-4 pb-5">
        <div className="central flex">
          <Link to="/" className="text-4xl tracking-tight font-bold">
            Learn<span className="opacity-60">ducate</span>
          </Link>
          <nav className="flex flex-grow gap-x-2 justify-end items-center">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/" className="">
              About
            </Link>
            <Link to="/" className="">
              Courses
            </Link>
            <Link to="/" className="login">
              Login
            </Link>
            <Link to="/" className="btn">
              Register
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <div>Footer</div>
    </>
  );
}
