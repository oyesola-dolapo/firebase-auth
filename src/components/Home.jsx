import React, { useContext } from "react";
import { authContext } from "./AuthPage";

export default function () {
  const { handleSignOut, username } = useContext(authContext);
  return (
    <div className="flex flex-col gap-8 items-center py-8">
      <h1>
        WELCOME TO THE HOME PAGE{username !== "" && <span>, {username}</span>}{" "}
      </h1>
      <button
        className="bg-black text-white rounded-lg px-6 py-2 mx-auto"
        onClick={() => {
          handleSignOut();
        }}>
        Sign Out
      </button>
    </div>
  );
}
