import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

export default function Profile() {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

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
  };
  return (
    <div className="central flex">
      <Menu />
      <section className="flex-grow py-6 px-12">
        <h1 className="text-4xl m-0">Profile</h1>
        <div className="grid grid-cols-3 py-6 gap-8">
          <form onSubmit={handleSubmit} className="w-320px grid grid-cols-2 gap-5">
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" className="col-span-2" />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            <input type="password" value={retypePassword} onChange={handleRetypePasswordChange} placeholder="Retype Password" required />
            <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" />
            <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
            <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Phone" required />
            <div />
            <button type="submit">Create Account</button>
          </form>
        </div>
      </section>
    </div>
  );
}
