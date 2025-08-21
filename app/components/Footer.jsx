"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-700 to-rose-600 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">MyShop</h2>
          <p className="text-gray-200">
            Your one-stop shop for the best products. Quality guaranteed and delivered fast.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="hover:text-gray-200 transition">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-200 transition">Products</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-gray-200 transition">Login</Link>
            </li>
            <li>
              <Link href="/dashboard/add-product" className="hover:text-gray-200 transition">Add Product</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/sanzida.sayra"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-rose-700 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/SayraSanzida"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-rose-700 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/sanzida-sayra/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-rose-700 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-rose-400 pt-4 text-center text-gray-100 text-sm">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
