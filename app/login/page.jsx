import React from "react";
import LoginForm from "./LoginForm";
import LoginSide from "./LoginSide";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded shadow-lg overflow-hidden max-w-4xl w-full">
        <LoginSide />
        <div className="flex justify-center items-center w-full md:w-1/2 p-6">
          <LoginForm />
          
        </div>
      </div>
    </div>
  );
};

export default Page;
