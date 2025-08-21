"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">MyShop</h2>
          <p className="text-gray-400">
            Your one-stop shop for the best products. Quality guaranteed and delivered fast.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-500 transition">Products</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-500 transition">Login</Link>
            </li>
            <li>
              <Link href="/dashboard/add-product" className="hover:text-blue-500 transition">Add Product</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
