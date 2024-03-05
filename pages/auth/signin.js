'use client'
import { getProviders, signIn } from "next-auth/react";

export default function Signin({ providers }) {
  return (
    <div className="w-full mx-auto p-5 signPage" align="center">
      <img src="/1.png" className="w-[70px] mt-5" alt="image" />

      <h1 className="text-xl mt-3 text-black">Welcome to Jumia</h1>

      <h1 className="text-md text-black mt-3">
        Type your e-mail or phone number to log in or create a Jumia 
        account.
      </h1>
      <div className="flex flex-col">
        <input
          type="email"
          className="mt-5"
          placeholder="Email"
        />
        <input
          type="password"
          className="mt-5"
          placeholder="Password"
        />

        <button className="btn btn-lg rounded bg-orange-400 hover:bg-orange-500 border-0 text-white mt-5">Continue</button>

        <p className="text-sm mt-3 text-black">By continuing you agree to Jumia’s</p>
        <a href="#" className="text-sm text-warning mb-2">Terms and Conditions</a>
      </div>

      <div className="mt-3">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center "  style={{borderTop: "1px solid #ddd"}}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="btn-lg bg-orange-400 w-full rounded mt-5 p-3 text-white hover:bg-orange-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
