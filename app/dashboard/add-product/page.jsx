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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-rose-50 to-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-rose-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-50 to-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-rose-700">
            Welcome, {session.user.name}!
          </h1>
          <p className="mt-2 text-gray-600">
            Add a new product to your shop using the form below.
          </p>
        </div>

        {/* Add Product Form */}
        <div className="w-full">
          <AddProductForm />
        </div>

        {/* Optional Footer */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
      </div>
    </main>
  );
}
