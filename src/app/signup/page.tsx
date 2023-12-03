"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp success", response.data);
      toast.success("Signup Success");
      router.push("/login");
    } catch (error: any) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-3xl">
        {loading ? "Loading..." : "Signup"}
      </h1>
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
        {buttonDisabled ? "No signup" : "Signup"}
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
