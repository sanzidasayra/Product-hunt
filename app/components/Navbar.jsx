"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation"; // <-- import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname(); // <-- get current path

  const handleLinkClick = () => setIsOpen(false);

  const linkClasses = (href) =>
    `text-black hover:text-rose-700 transition ${
      pathname === href ? "text-rose-700 font-bold" : ""
    }`;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={handleLinkClick}
        >
          <Image
            src="/logo.png"
            alt="MyShop Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-rose-700">MyShop</span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex gap-6 items-center absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClasses("/products")}>
            Products
          </Link>
          <Link href="/dashboard/add-product" className={linkClasses("/dashboard/add-product")}>
            Dashboard
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          {!session ? (
            <>
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
            </>
          ) : (
            <div className="flex items-center gap-3 relative group">
              {session.user.photo && (
                <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={session.user.photo}
                    alt={session.user.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-rose-700 text-white rounded hover:bg-rose-800 transition"
              >
                Logout
              </button>

              <span className="absolute top-12 left-1/6 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {session.user.name}
              </span>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col items-start text-left">
          <Link
            href="/"
            onClick={handleLinkClick}
            className={linkClasses("/")}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={handleLinkClick}
            className={linkClasses("/products")}
          >
            Products
          </Link>
          <Link
            href="/dashboard/add-product"
            onClick={handleLinkClick}
            className={linkClasses("/dashboard/add-product")}
          >
            Dashboard
          </Link>

          {!session ? (
            <>
              <Link
                href="/login"
                onClick={handleLinkClick}
                className="block py-2 px-4 mt-2 bg-rose-700 hover:bg-rose-800 text-white rounded transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={handleLinkClick}
                className="block py-2 px-4 mt-2 bg-rose-700 hover:bg-rose-800 text-white rounded transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex flex-col items-start gap-2 mt-2">
              {session.user.photo && (
                <Image
                  src={session.user.photo}
                  alt={session.user.name}
                  width={35}
                  height={35}
                  className="rounded-full object-cover"
                />
              )}
              <button
                onClick={() => {
                  signOut();
                  handleLinkClick();
                }}
                className="block py-2 px-4 bg-rose-700 hover:bg-rose-800 text-white rounded transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
