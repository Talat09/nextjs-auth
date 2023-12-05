"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  //get user details
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log("from profile page:", res.data.data);
    setData(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1 className="text-3xl font-bold">Profile</h1>
      <hr />
      <p className="text-4xl">Profile page</p>
      <h2 className=" p-3 mt-4 rounded bg-green-500 text-white">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        className="bg-green-500 mt-4 text-white font-bold px-3 py-2 rounded "
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="bg-green-500 mt-4 text-white font-bold px-3 py-2 rounded "
        onClick={getUserDetails}
      >
        Get User Details
      </button>
    </div>
  );
}
