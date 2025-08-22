"use client";

import React from "react";
import RegisterForm from "../register/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
