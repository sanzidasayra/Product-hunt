"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!email || !password) {
      setLoginError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setLoginError("Invalid email or password.");
    } else {
      router.push("/products");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl w-full max-w-md transition-colors duration-300">
        <h2 className="text-4xl font-extrabold text-rose-700 text-center mb-4">
          Welcome Back!
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Log in to your account and manage your products.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full py-3 px-4 text-sm bg-white border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full py-3 px-4 text-sm bg-white border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
            />
            <div
              className="absolute right-4 top-3 cursor-pointer text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>

          {/* Error message */}
          {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

          {/* Forgot password */}
          <div className="text-sm text-right">
            <Link href="/forgot-password" className="text-rose-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-rose-700 hover:bg-rose-800 text-white py-3 rounded-xl text-sm font-medium transition-colors duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Sign up link */}
          <p className="text-sm text-center text-gray-700 mt-4">
            Don’t have an account?{" "}
            <Link href="/register" className="text-rose-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
