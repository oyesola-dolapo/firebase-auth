import React, { useContext, useState } from "react";

import { authContext } from "./AuthPage";

export default function signIn() {
  const {
    handleEmail,
    handlePassword,
    handleSignIn,
    handleGoogleSignUp,
    changeState,
    loginErr,
  } = useContext(authContext);

  const [password, setPassword] = useState();
  return (
    <div className="flex h-screen bg-[#121212] lg:bg-transparent scroll-hidden">
      <div className="flex w-full py-16 lg:bg-[#121212] px-8 lg:px-0 lg:w-[50%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
          className="text-white w-[26rem] flex flex-col lg:my-auto mx-auto">
          <h1 className="text-center opacity-[.6]">Welcome Back</h1>
          <h1 className="text-center text-3xl font-bold tracking-wide">
            Sign in to your account
          </h1>
          <button
            onClick={() => {
              handleGoogleSignUp();
            }}
            className="border-2 rounded-full bg-transparent w-max my-8 place-self-center">
            <i class="fa-brands fa-google m-3"></i>
          </button>
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
            <p className="text-[#d32f2f] tracking-wider text-[12px] mt-[.4rem] mb-[1rem]">Invalid email or password</p>
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
            <a
              href="#"
              className="underline"
              onClick={() => {
                changeState();
              }}>
              Sign Up
            </a>
          </p>
        </form>
      </div>
      <div className="hidden lg:block"></div>
    </div>
  );
}
