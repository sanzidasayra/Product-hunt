"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.error || "Registration failed");
        setLoading(false);
        return;
      }

      setSuccessMsg("Registration successful! Redirecting to login...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl transition-colors duration-300">
        <h2 className="text-3xl font-bold text-[#03373D] text-center mb-2">
          Create an Account
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Register with MyShop
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
            className="input input-bordered w-full py-2 px-3 text-sm bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="input input-bordered w-full py-2 px-3 text-sm bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            type="text"
            {...register("photo", { required: "Photo URL is required" })}
            placeholder="Photo URL"
            className="input input-bordered w-full py-2 px-3 text-sm bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
          />
          {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              placeholder="Password"
              className="input input-bordered w-full py-2 px-3 text-sm bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
            />
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
            </div>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          {/* Error / Success Messages */}
          {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}
          {successMsg && <p className="text-green-600 text-sm text-center">{successMsg}</p>}

          <button
            type="submit"
            className={`btn bg-rose-700 hover:bg-rose-800 text-white w-full mt-4 py-2 text-sm rounded-lg transition-colors duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="text-sm mt-2 text-center text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-rose-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
