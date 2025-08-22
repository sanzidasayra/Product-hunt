"use client";

import React from "react";
import LoginForm from "./LoginForm";

const Page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-50 to-gray-100 p-4">
      <div className="w-full max-w-md  p-8 flex flex-col items-center">
        {/* Login Form */}
        <div className="w-full">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Page;
