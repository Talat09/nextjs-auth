"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";
export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-5xl">Sign Up</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        className="p-4 rounded-md outline-none border border-green-500"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter your username"
      />
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        id="email"
        className="p-4 rounded-md outline-none border border-green-500"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter your Email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        className="p-4 rounded-md outline-none border border-green-500"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter your password"
      />
      <button
        className="p-2 px-8 border border-gray-300 mb-4 rounded-md mt-4 focus:outline-none focus:border-black"
        onClick={onSignup}
      >
        Signup
      </button>
      <p>
        Already have an account? Go to
        <Link href="/login" className="text-blue-500">
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
}
