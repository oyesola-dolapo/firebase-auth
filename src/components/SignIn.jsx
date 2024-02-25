import React from "react";

export default function signIn({
  handleEmail,
  handlePassword,
  handleSignIn,
  handleGoogleSignUp,
  changeState,
}) {
  return (
    <div className="flex">
      <div className="flex w-full bg-[#121212] px-8 lg:px-0 lg:w-[50%] h-screen py-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
          className="text-white w-[26rem] flex flex-col my-auto mx-auto">
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
          />
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
