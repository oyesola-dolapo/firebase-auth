import React from "react";

export default function SignUp({
  handleEmail,
  handlePassword,
  handleSignUp,
  handleGoogleSignUp,
  changeState,
}) {
  return (
    <div className=" flex">
      <div className="py-12 flex w-full bg-[#121212] px-8 lg:px-0 lg:w-[50%] min-h-full py-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
          className="text-white flex flex-col w-[26rem] mx-auto my-auto">
          <h1 className="text-center opacity-[.6]">Welcome</h1>
          <h1 className="text-center text-3xl font-bold tracking-wide">
            Create an account
          </h1>
          <button
            onClick={() => {
              handleGoogleSignUp();
            }}
            className="border-2 rounded-full bg-transparent w-max my-4 place-self-center">
            <i class="fa-brands fa-google m-3"></i>
          </button>
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
          />
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
            <a
              href="#"
              className="underline"
              onClick={() => {
                changeState();
              }}>
              Sign In
            </a>
          </p>
        </form>
      </div>
      <div className="hidden lg:block"></div>
    </div>
  );
}
