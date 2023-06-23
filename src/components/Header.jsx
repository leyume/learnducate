import { useState, useRef, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "~/utils/fetchAPI";

export default function Header() {
  const exclude = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = (path = "/") => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    queryClient.removeQueries("user");
    navigate("/");
  };

  const { data: user, error, isError } = useQuery({ queryKey: ["user"], queryFn: () => get("user/courses"), retry: 0 });

  useEffect(() => {
    const handleClick = (event) => {
      if (!exclude?.current?.contains(event.target)) setIsDropdownOpen(false);
    };
    // Attach the click event listener when the component mounts
    document.addEventListener("click", handleClick);
    // Clean up the event listener when the component unmounts
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="pt-4 pb-5">
      <div className="central flex align-middle text-center">
        <Link to="/" className="text-4xl tracking-tight font-bold">
          Learn<span className="opacity-60">ducate</span>
        </Link>
        <nav className="flex flex-grow gap-x-2 justify-end items-center">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/about" className="">
            About
          </Link>
          <Link to="/allcourses" className="">
            Courses
          </Link>
          {user?.id ? (
            <div className="userin relative">
              <div className="flex gap-3 items-center">
                <Link to="/profile" className="profile">
                  {user.firstname[0] + user.lastname[0]}
                </Link>
                <div className="i-ph-caret-down-fill text-black w-5 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)} ref={exclude} />
              </div>
              {isDropdownOpen && (
                <div className="grid absolute top-13 right-0 z-100 text-xs">
                  <Link to="/tutors/reports" className="btn drop">
                    Reports
                  </Link>
                  <a onClick={logout} className="btn drop logout">
                    Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="userout">
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
