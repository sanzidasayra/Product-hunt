"use client";

import React from "react";
import LoginForm from "./LoginForm";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full md:w-1/2 p-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
