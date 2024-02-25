import React, { useContext, useState } from "react";
import { authContext } from "./AuthPage";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    handleEmail,
    handlePassword,
    handleSignUp,
    handleGoogleSignUp,
    emailUsed,
    setLoginErr,
  } = useContext(authContext);

  return (
    <div className=" flex h-screen py-12 lg:py-0 bg-[#121212] lg:bg-transparent">
      <div className="lg:py-12 w-full lg:bg-[#121212] px-8 lg:px-0 lg:w-[50%]">
        <div className="text-white flex flex-col">
          <h1 className="text-center opacity-[.6]">Welcome</h1>
          <h1 className="text-center text-3xl font-bold tracking-wide">
            Create an account
          </h1>
          <button
            onClick={() => {
              handleGoogleSignUp();
            }}
            className="border-2 rounded-full bg-transparent w-max my-4 place-self-center">
            <i className="fa-brands fa-google m-3"></i>
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
          className="text-white flex flex-col lg:w-[26rem] mx-auto lg:my-auto">
          <label htmlFor="fn">First Name</label>
          <input type="text" placeholder="First Name" id="fn" required />
          <label htmlFor="ln">Last Name</label>
          <input type="text" placeholder="Last Name" id="ln" required />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            onChange={handleEmail}
            required
            className={`${emailUsed && "mb-0"}`}
          />
          {emailUsed && (
            <p className="text-[#d32f2f] tracking-wider text-[12px] mt-[.2rem] mb-[1rem] shake">
              Email already used
            </p>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            onChange={handlePassword}
            required
          />
          <div>
            <input type="checkbox" id="remember" className="h-max w-max mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button
            type="submit"
            className="bg-white text-black rounded-[8px] h-[2.5rem] mt-[1rem] font-bold">
            Sign Up
          </button>
          <p className="mt-2">
            Have an account?{" "}
            <Link
              to="/"
              className="underline"
              onClick={() => {
                setLoginErr();
              }}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:block"></div>
    </div>
  );
}
