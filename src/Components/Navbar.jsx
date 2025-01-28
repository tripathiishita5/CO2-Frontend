import React from "react";
 
const Navbar = () => {
  return (
    <>
 
 
<nav className="bg-white">
  <div className="mx-auto flex items-center justify-between">
    {/* Logo Section */}
    <div className="p-4 pt-2">
      <img
src="https://www.metermarket.co.uk/assets/manufacturers/_manufacturerTile2x/logo_secure.png"
        alt="Secure Meter Logo"
        className="h-12"
      />
    </div>
 
    {/* Toggler for responsive navbar */}
    <button
      className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:border-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
 
    {/* Navbar Links */}
    <div
      className="hidden md:flex md:items-center md:space-x-8"
      id="navbarNav"
    >
      <a href="/dasboard" className="hover:text-gray-300">
        Dashboard
      </a>
      <a href="#" className="hover:text-gray-300">
        User Rights
      </a>
      <a href="/about" className="hover:text-gray-300">
        Input Forms
      </a>
      <a href="#" className="hover:text-gray-300">
        Activity Data
      </a>
    </div>
  </div>
</nav>
 
    </>
  );
};
export default Navbar;