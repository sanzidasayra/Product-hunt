"use client";

import React from "react";
import RegisterForm from "../register/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full md:w-1/2">
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
