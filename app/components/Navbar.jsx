"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
  <Image
    src="/logo.png"    
    alt="MyShop Logo"
    width={40}
    height={40}
    className="object-contain"
  />
  <span className="text-2xl font-bold text-rose-700">MyShop</span>
</Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-rose-700 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-rose-700 transition">
            Products
          </Link>
          <Link href="/dashboard/add-product" className="hover:text-rose-700 transition">
            Add Product
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-rose-700 text-white rounded hover:bg-rose-800 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-rose-700 text-white rounded hover:bg-rose-800 transition"
          >
            Register
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <Link href="/" className="block py-2 hover:text-rose-600 transition">
            Home
          </Link>
          <Link href="/products" className="block py-2 hover:text-rose-600 transition">
            Products
          </Link>
          <Link href="/dashboard/add-product" className="block py-2 hover:text-rose-600 transition">
            Add Product
          </Link>
          <Link
            href="/login"
            className="block py-2 px-4 mt-2  bg-rose-700 hover:bg-rose-800 text-white rounded transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="block py-2 px-4 mt-2 bg-rose-700 hover:bg-rose-800 text-white rounded transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
