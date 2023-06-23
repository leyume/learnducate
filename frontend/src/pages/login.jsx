import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post } from "../utils/fetchAPI";
import { formly } from "../utils";

export default function Login() {
  let navigate = useNavigate();
  let [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    mutate(formData);
  };

  const queryClient = useQueryClient();
  const { data: courses } = useQuery({ queryKey: ["courses"], queryFn: () => get("courses"), retry: 2 });

  const { data, mutate, isLoading, isError, error, isSuccess } = useMutation({
    mutationFn: async (data) => {
      let data_ = await post("login", formly({ ...data }), 1);
      return data_;
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // queryClient.setQueryData(["user"], () => result);
      if (result) navigate("/dashboard");
    },
    onError: (e) => {
      if (e?.detail) setMsg(e.detail);
    },
  });

  return (
    <section className="central">
      <div className="min-h-180 flex relative z-10 items-center">
        <div className="bg-white bg-opacity-90 p-12 border-solid border-6 border-brand-blue border-opacity-50">
          <h1 className="text-3xl font-bold mt-0 mb-1 p-0">Login</h1>
          <p className="text-base font-normal mt-0 mb-4">
            Don’t have an account, <Link to="/register">Register Here</Link>
          </p>

          {/* <div>{JSON.stringify(data)}</div> */}

          {msg && <div className={"msg " + (isSuccess ? "success" : "error")}>{msg}</div>}
          <form onSubmit={handleSubmit} className="w-320px grid grid-cols-2 gap-5">
            <input type="email" name="email" placeholder="Email" className="col-span-2" />
            <input type="password" name="password" placeholder="Password" className="col-span-2" />
            <button type="submit">{isLoading ? <i className="i-svg-spinners-3-dots-fade text-4xl -my-4" /> : "Login"}</button>
          </form>
        </div>
      </div>
      <div className="banner_ w-3/4"></div>
    </section>
  );
}
