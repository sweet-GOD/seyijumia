'use client'
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";

const GoogleLogin = () => {
  const router = useRouter()

  const handleLogin = async () => {
    const auth = getAuth();

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        localStorage.setItem("authUser", JSON.stringify(user))
        console.log(user)
        router('/')
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
      <div>
        <FcGoogle className="w-32 h-32" />
      </div>
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
