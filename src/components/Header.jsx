import React from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-[#000] to-[#292929] text-white py-4 px-6 rounded-full shadow-lg mx-auto w-[700px] max-w-6xl">
      {/* Logo Section */}
      <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex justify-center space-x-8">
        <a href="#how-it-works" className="hover:text-gray-400">How it works</a>
        <a href="#benefits" className="hover:text-gray-400">Benefits</a>
        <a href="#services" className="hover:text-gray-400">Services</a>
        <a href="#pricing" className="hover:text-gray-400">Pricing</a>
        <a href="#faqs" className="hover:text-gray-400">FAQs</a>
      </nav>

      {/* Login Button */}
      <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700">
        <a href="#login" className="text-sm font-medium">Login</a>
      </div>
    </div>
  );
};

export default Header;
