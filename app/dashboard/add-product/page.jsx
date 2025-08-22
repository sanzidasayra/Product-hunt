"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AddProductForm from "./AddProductForm";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return; // still checking session
    if (!session) {
      router.push("/login"); // redirect if not logged in
    } else {
      setLoading(false); // session exists, show form
    }
  }, [session, status, router]);

  if (loading || status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-rose-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome, {session.user.name}!
          </h1>
          <p className="mt-2 text-gray-600">
            Use the form below to add a new product to your shop.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <AddProductForm />
        </div>

   
      </div>
    </div>
  );
}
