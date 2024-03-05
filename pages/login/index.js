import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <div className="min-h-[80vh] w-full gap-10 bg-white flex flex-col items-center justify-center">
      <div>
        <FcGoogle className="w-32 h-32" />
      </div>
      <button className="btn btn-lg bg-white text-black border-gray-300 rounded-2xl hover:bg-gray-300 shadow-xl">
        Login With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
