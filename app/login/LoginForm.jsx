"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginError("Please enter both email and password.");
      return;
    }
    alert(`Email: ${email}, Password: ${password}`);
  };
  return (
    <div className=" bg-gray-100 ">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl sm:px-4 md:px-8 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-[#03373D] text-center mb-2">
          Welcome to my shop
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Login to continue to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full py-2 px-3 text-sm bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full py-2 px-3 text-sm bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
            />
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
            </div>
          </div>

          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

          <div className="text-sm text-right">
            <Link href="/forgot-password" className="text-rose-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-700 hover:bg-rose-800 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-300"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-700  mt-2">
            Don’t have an account?{" "}
            <Link href="/register" className="text-rose-600 hover:underline">
              Sign Up
            </Link>
          </p>

          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
