"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/router";

const GoogleLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const response = {
      email: email,
      password: password,
    };
    if (response) {
      // Store user token or identifier in localStorage
      localStorage.clear("userToken");
      localStorage.setItem("userToken", JSON.stringify(response));

      // Redirect to the dashboard or any other page
      router.push("/");
    } else {
      // Handle login failure
      console.error("Login failed");
      alert("login failed");
    }
  };

  return (
    <div className="min-h-[70vh] w-full gap-10 bg-white flex flex-col items-center justify-start pt-16">
      {/* <div>
        <FcGoogle className="w-32 h-32" />
      </div> */}
      <h1 className="text-4xl text-yellow-500">Login Here!</h1>
      <form onSubmit={HandleSubmit} className="flex flex-col gap-4 w-full md:w-5/12 px-4">
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input input-bordered p-4 w-full "
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input input-bordered p-4 w-full "
        />
        <button type="submit" className="btn btn-warning mt-2">
          Log In
        </button>
      </form>
    </div>
  );
};

export default GoogleLogin;
