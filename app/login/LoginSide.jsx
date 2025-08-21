"use client";

import React from "react";

const LoginSide = () => {
  return (
    <div className="hidden md:flex flex-col justify-center items-center bg-blue-50 p-6 w-1/2 rounded-l">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">Welcome Back!</h3>
      <p className="text-blue-600 text-center">
        Login to access your dashboard, view products, and manage your account.
      </p>
    </div>
  );
};

export default LoginSide;
