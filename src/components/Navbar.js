import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../requirements/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black ml-4">
          <a href="/">
            <img src={Logo} alt="Biryani Catering" className="h-14" />
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex ml-auto mr-40 space-x-10 text-lg font-semibold text-black">
          <li><a href="#home" className="hover:text-[#E9b472] transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-[#E9b472] transition-colors duration-300">About</a></li>
          <li><a href="#services" className="hover:text-[#E9b472] transition-colors duration-300">Services</a></li>
          <li><a href="#menu" className="hover:text-[#E9b472] transition-colors duration-300">Menu</a></li>
          <li><a href="#gallery" className="hover:text-[#E9b472] transition-colors duration-300">Gallery</a></li>
          <li><a href="#blogs" className="hover:text-[#E9b472] transition-colors duration-300">Blogs</a></li>
          <li><a href="#contact" className="hover:text-[#E9b472] transition-colors duration-300">Contact</a></li>
        </ul>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <a href="#book-now" className="relative flex items-center justify-center border-2 border-black text-black px-8 py-3 rounded-full font-semibold shadow-md group overflow-hidden">
            <span className="absolute inset-0 bg-[#E9b472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="relative z-20 group-hover:text-black transition-colors duration-500">Book Now</span>
            <div className="ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#951F44] group-hover:bg-white transition-colors duration-300 z-30">
              <FaArrowRight className="text-white group-hover:text-black transition-colors duration-300" />
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden mr-4">
          <button
            onClick={toggleMenu}
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#951F44] text-white transition-colors duration-300"
          >
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#E9b472] shadow-md w-full absolute left-0 top-full">
          <ul className="flex flex-col items-start space-y-4 p-6 text-black text-lg font-semibold ml-6">
            <li><a href="#home" className="hover:text-[#951F44]">Home</a></li>
            <li><a href="#about" className="hover:text-[#951F44]">About</a></li>
            <li><a href="#services" className="hover:text-[#951F44]">Services</a></li>
            <li><a href="#menu" className="hover:text-[#951F44]">Menu</a></li>
            <li><a href="#gallery" className="hover:text-[#951F44]">Gallery</a></li>
            <li><a href="#blogs" className="hover:text-[#951F44]">Blogs</a></li>
            <li><a href="#contact" className="hover:text-[#951F44]">Contact</a></li>
          </ul>
          {/* Centered Book Now Button */}
          <div className="flex justify-center mt-4 pb-4">
            <a href="#book-now" className="flex items-center justify-center border-2 border-black text-black px-6 py-2 rounded-full hover:bg-[#951F44] hover:text-white">
              Book Now
              <FaArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
