import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  let navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRetypePasswordChange = (event) => {
    setRetypePassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <section className="central">
        <div className="min-h-180 flex relative z-10 items-center">
          <div className="bg-white bg-opacity-90 p-12 border-solid border-6 border-brand-blue border-opacity-50">
            <h1 className="text-3xl font-bold mt-0 mb-1 p-0">Register</h1>
            <p className="text-base font-normal mt-0 mb-4">
              Already have an Account, <Link to="/login">Login Here</Link>
            </p>

            <form onSubmit={handleSubmit} className="w-320px grid grid-cols-2 gap-5">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Student"
                  checked={userType === "Student"}
                  onChange={handleUserTypeChange}
                  className="form-radio h-4 w-4 text-brand-blue"
                />
                <span className="ml-2 pt-1">Student</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Tutor"
                  checked={userType === "Tutor"}
                  onChange={handleUserTypeChange}
                  className="form-radio h-4 w-4 text-brand-blue"
                />
                <span className="ml-2 pt-1">Tutor</span>
              </label>
              <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" className="col-span-2" />
              <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
              <input type="password" value={retypePassword} onChange={handleRetypePasswordChange} placeholder="Retype Password" />
              <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" />
              <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
              <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Phone" />
              <div />
              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>
        <div className="banner_ w-3/4"></div>
      </section>
    </>
  );
}
