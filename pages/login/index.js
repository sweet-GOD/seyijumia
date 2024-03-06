"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import { app } from "@/firebase";

const GoogleLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleLogin = async () => {
    const auth = getAuth(app);

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        localStorage.setItem("authUser", JSON.stringify(user));
        console.log(user);
        router("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="min-h-[80vh] w-full gap-10 bg-white flex flex-col items-center justify-center">
      {/* <div>
        <FcGoogle className="w-32 h-32" />
      </div> */}
      <form onSubmit={HandleSubmit} className="bg-red-200">
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="border p-4 w-full"
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="border p-4 w-full"
        />
        <button type="submit" className="btn btn-lg mt-4">
          Send
        </button>
      </form>
      <button
        onClick={handleLogin}
        className="btn btn-lg bg-white text-black border-gray-300 rounded-2xl hover:bg-gray-300 shadow-xl"
      >
        Login With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
