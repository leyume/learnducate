import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { get } from "~/utils/fetchAPI";

import Header from "./Header";
import Footer from "./Footer";

let public_paths = ["/", "/about", "/allcourses", "/login", "/register"];
let public_access_paths = ["/login", "/register"];

export default function Layout({ children }) {
  const location = useLocation();

  const { data: user, error, isError } = useQuery({ queryKey: ["user"], queryFn: () => get("user/courses"), retry: 0 });
  if (isError && (error.status == 403 || error.status == 401) && public_paths.indexOf(location.pathname) < 0) return <Navigate to="/login" />;

  const tAuth = () => (localStorage.getItem("token") ? true : false);

  if (public_paths.indexOf(location.pathname) < 0 && !tAuth()) return <Navigate to="/login" />;
  else if (public_access_paths.indexOf(location.pathname) > -1 && tAuth()) return <Navigate to="/dashboard" />;

  console.log("Hey");

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
