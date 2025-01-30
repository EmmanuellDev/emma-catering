import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../requirements/logo.jpg"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-full mx-auto px-28 flex flex-col md:flex-row justify-between items-start">
        
        {/* Session 1: Logo, About Text, Social Icons (Moved closer to left margin) */}
        <div className="w-1/3 ml-4">
          <img src={logo} alt="Venus Catering" className="h-16 mb-8" />
          <p className="mb-8 text-2xl libre-baskerville-text">
            Let Venus Catering transform your special occasion into a masterpiece with our professional touch.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-teal-400 text-3xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-teal-400 text-3xl"><FaInstagram /></a>
            <a href="#" className="hover:text-teal-400 text-3xl"><FaYoutube /></a>
            <a href="#" className="hover:text-teal-400 text-3xl"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Session 2: Our Services (Centered) */}
        <div className="w-1/3 pl-4">
          <h3 className="text-4xl mb-3 libre-baskerville-text">Our Services</h3>
          <div className="grid grid-cols-2 gap-3 libre-baskerville-text justify-center text-xl">
            <div>
              <p>&gt; Wedding Event</p>
              <p>&gt; 60th Wedding Event</p>
              <p>&gt; Engagement</p>
              <p>&gt; Seemantham</p>
              <p>&gt; Birthday Party</p>
            </div>
            <div>
              <p>&gt; House Warming</p>
              <p>&gt; Mehndi Function</p>
              <p>&gt; Corporate Events</p>
              <p>&gt; Retirement Function</p>
            </div>
          </div>
        </div>

        {/* Session 3: Contact Now (Moved closer to right margin) */}
        <div className="w-1/3 pl-20">
          <h3 className="text-4xl libre-baskerville-text">Contact Now</h3>
          <p className="flex  items-center mt-6">
            <FaMapMarkerAlt className="text-teal-400 mr-2" />
            <span className="text-white text-xl libre-baskerville-text">
              No.1/379B, Kannagi Street, Jalladianpet, Pallikarani, Medavakkam, Chennai - 600 100.
            </span>
          </p>
          <p className="flex  items-center mb-2 mt-4">
            <FaPhone className="text-teal-400 mr-2" />
            <a href="tel:+919840935064" className="hover:text-teal-400 text-white text-xl libre-baskerville-text">+91 98409 35064</a>, 
          </p>
          <p className="flex items-center mt-4">
            <FaEnvelope className="text-teal-400 mr-2" />
            <a href="mailto:gurumurrthy@gmail.com" className="hover:text-teal-400 text-white text-xl libre-baskerville-text">gurumurrthy@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-left ml-32 text-gray-500 text-sm mt-8">
        © 2024 Venus Caterings. All rights reserved | Designed By Olivegrapes.
      </div>
    </footer>
  );
};

export default Footer;
