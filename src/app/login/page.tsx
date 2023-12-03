/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      console.log("login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-3xl">
        {loading ? "Loading..." : "Login"}
      </h1>
      <hr />

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
        onClick={onLogin}
      >
        {buttonDisabled ? "No Login" : "Login"}
      </button>
      <p>
        Don't have an account? Go to
        <Link href="/signup" className="text-blue-500">
          {" "}
          Signup
        </Link>
      </p>
    </div>
  );
}
