import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post, put } from "../utils/fetchAPI";
import { formly } from "../utils";

import Menu from "../components/Menu";

export default function Profile() {
  let [msg, setMsg] = useState("");

  const { data: user } = useQuery({ queryKey: ["user"], queryFn: () => get("user/courses"), retry: 0 });

  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    // console.log("FORM", formData);
    mutate(formData);
  };

  const { data, mutate, isLoading, isError, error, isSuccess } = useMutation({
    mutationFn: async (data) => {
      let data_ = await put("user", { ...data });
      return data_;
    },
    onSuccess: (result) => {
      if (result?.message) setMsg(result.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (e) => {
      if (e?.detail) setMsg(e.detail);
    },
  });

  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 px-12">
        <h1 className="text-4xl m-0">Profile</h1>
        <div className="grid grid-cols-3 py-6 gap-8">
          <form onSubmit={handleSubmit} className="w-320px grid gap-5">
            {msg && <div className={"msg " + (isSuccess ? "success" : "error")}>{msg}</div>}
            <input type="text" name="firstname" defaultValue={user?.firstname} placeholder="First Name" />
            <input type="text" name="lastname" defaultValue={user?.lastname} placeholder="Last Name" />
            <input type="text" name="phone" defaultValue={user?.phone} placeholder="Phone" />
            <div />
            <button type="submit">{isLoading ? <i className="i-svg-spinners-3-dots-fade text-4xl -my-4" /> : "Update Profile"}</button>
          </form>
        </div>
      </section>
    </div>
  );
}
