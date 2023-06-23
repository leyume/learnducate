import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post } from "../utils/fetchAPI";
import { formly } from "../utils";

export default function Register() {
  const [userType, setUserType] = useState("");
  let navigate = useNavigate();
  let [msg, setMsg] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    // console.log("FORM", formData);
    mutate(formData);
  };

  const { data, mutate, isLoading, isError, error, isSuccess } = useMutation({
    mutationFn: async (data) => {
      let data_ = await post("register", { ...data });
      console.log({ data_ });
      return data_;
    },
    retry: 2,
    onSuccess: (result) => {
      console.log("Login Success", result);
      queryClient.setQueryData(["user"], () => result);
      if (result) navigate("/dashboard");
    },
    onError: (e) => {
      console.log({ e });
      if (e?.detail) setMsg(e.detail);
    },
  });

  return (
    <>
      <section className="central">
        <div className="min-h-180 flex relative z-10 items-center">
          <div className="bg-white bg-opacity-90 p-12 border-solid border-6 border-brand-blue border-opacity-50">
            <h1 className="text-3xl font-bold mt-0 mb-1 p-0">Register</h1>
            <p className="text-base font-normal mt-0 mb-4">
              Already have an Account, <Link to="/login">Login Here</Link>
            </p>

            {msg && <div className={"msg " + (isSuccess ? "success" : "error")}>{msg}</div>}
            <form onSubmit={handleSubmit} className="w-320px grid grid-cols-2 gap-5">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={userType === "student"}
                  onChange={handleUserTypeChange}
                  className="form-radio h-4 w-4 text-brand-blue"
                />
                <span className="ml-2 pt-1">Student</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="tutor"
                  checked={userType === "tutor"}
                  onChange={handleUserTypeChange}
                  className="form-radio h-4 w-4 text-brand-blue"
                />
                <span className="ml-2 pt-1">Tutor</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="col-span-2" />
              <input type="password" name="password" placeholder="Password" />
              <input type="password" name="password2" placeholder="Retype Password" />
              <input type="text" name="firstname" placeholder="First Name" />
              <input type="text" name="lastname" placeholder="Last Name" />
              <input type="text" name="phone" placeholder="Phone" />
              <div />
              <button type="submit">{isLoading ? <i className="i-svg-spinners-3-dots-fade text-4xl -my-4" /> : "Create Account"}</button>
            </form>
          </div>
        </div>
        <div className="banner_ w-3/4"></div>
      </section>
    </>
  );
}
