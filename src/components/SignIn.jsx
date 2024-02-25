import React, { useContext, useState } from "react";
import { authContext } from "./AuthPage";
import { Link } from "react-router-dom";

export default function signIn() {
  const {
    handleEmail,
    handlePassword,
    handleSignIn,
    handleGoogleSignUp,
    loginErr,
    setEmailUsed,
  } = useContext(authContext);

  return (
    <div className="flex h-screen bg-[#121212] lg:bg-transparent scroll-hidden">
      <div className="flex flex-col w-full py-16 lg:bg-[#121212] px-8 lg:px-0 lg:w-[50%] lg:justify-center">
        <div className="text-white flex flex-col">
          <h1 className="text-center opacity-[.6]">Welcome back,</h1>
          <h1 className="text-center text-3xl font-bold tracking-wide">
            Sign in to your account
          </h1>
          <button
            onClick={() => {
              handleGoogleSignUp();
            }}
            className="border-2 rounded-full bg-transparent w-max my-4 place-self-center">
            <i class="fa-brands fa-google m-3"></i>
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
          className="text-white w-full lg:w-[26rem] flex flex-col mx-auto">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            onChange={handleEmail}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            onChange={handlePassword}
            required
            className={`${loginErr && "mb-0"}`}
          />
          {loginErr && (
            <p className="text-[#d32f2f] tracking-wider text-[12px] mt-[.4rem] mb-[1rem] shake">
              Invalid email or password
            </p>
          )}
          <div className="flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                id="remember"
                className="h-max w-max m-0 p-0 mr-2"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="underline opacity-[.6] ">
              Forgot Password?{" "}
            </a>
          </div>
          <button
            type="submit"
            className="bg-white text-black rounded-[8px] h-[2.5rem] mt-[2rem] font-bold">
            Sign In
          </button>
          <p className="mt-2">
            Don't Have an Account?{" "}
            <Link
              to="/"
              className="underline"
              onClick={() => {
                setEmailUsed();
              }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:block"></div>
    </div>
  );
}
