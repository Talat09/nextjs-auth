"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function ProfilePage() {
  const router = useRouter();
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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1 className="text-3xl font-bold">Profile</h1>
      <hr />
      <p className="text-4xl">Profile page</p>
      <hr />
      <button
        className="bg-green-500 mt-4 text-white font-bold px-3 py-2 rounded "
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
