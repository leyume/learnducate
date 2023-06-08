import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");

    // Perform login logic here
  };

  return (
    <section className="central">
      <div className="min-h-180 flex relative z-10 items-center">
        <div className="bg-white bg-opacity-90 p-12 border-solid border-6 border-brand-blue border-opacity-50">
          <h1 className="text-3xl font-bold mt-0 mb-1 p-0">Login</h1>
          <p className="text-base font-normal mt-0 mb-4">
            Don’t have an account, <Link to="/register">Register Here</Link>
          </p>

          <form onSubmit={handleSubmit} className="w-320px grid grid-cols-2 gap-5">
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" className="col-span-2" />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" className="col-span-2" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <div className="banner_ w-3/4"></div>
    </section>
  );
}
