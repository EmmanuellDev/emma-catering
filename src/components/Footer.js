import React from "react";
import { 
  FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, 
  FaMapMarkerAlt, FaPhone, FaEnvelope 
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md"; // Import Right Arrow Icon
import logo from "../requirements/logo.jpg"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer>
    <div className="bg-[#951F44] text-white py-6 overflow-hidden">
    <div className="animate-marquee flex items-center text-3xl font-semibold">
      <div className="flex space-x-4">
        {/* Infinite loop effect by duplicating text */}
        <span className="flex-shrink-0 libre-baskerville-text">
          Wedding Event <span className="mx-4">•</span>
          60th Wedding Event <span className="mx-4">•</span>
          Engagement <span className="mx-4">•</span>
          Seemantham <span className="mx-4">•</span>
          Birthday Party <span className="mx-4">•</span>
          House Warming <span className="mx-4">•</span>
          Mehndi Function <span className="mx-4">•</span>
          Corporate Events <span className="mx-4">•</span>
          Retirement Function <span className="mx-4">•</span>
        </span>
        {/* Duplicating content multiple times for an infinite effect */}
        <span className="flex-shrink-0">
          Wedding Event <span className="mx-4">•</span>
          60th Wedding Event <span className="mx-4">•</span>
          Engagement <span className="mx-4">•</span>
          Seemantham <span className="mx-4">•</span>
          Birthday Party <span className="mx-4">•</span>
          House Warming <span className="mx-4">•</span>
          Mehndi Function <span className="mx-4">•</span>
          Corporate Events <span className="mx-4">•</span>
          Retirement Function <span className="mx-4">•</span>
        </span>
        <span className="flex-shrink-0">
          Wedding Event <span className="mx-4">•</span>
          60th Wedding Event <span className="mx-4">•</span>
          Engagement <span className="mx-4">•</span>
          Seemantham <span className="mx-4">•</span>
          Birthday Party <span className="mx-4">•</span>
          House Warming <span className="mx-4">•</span>
          Mehndi Function <span className="mx-4">•</span>
          Corporate Events <span className="mx-4">•</span>
          Retirement Function <span className="mx-4">•</span>
        </span>
      </div>
    </div>
  </div>
    <div className="bg-black text-white py-12">
      <div className="max-w-full mx-auto px-14 flex flex-col md:flex-row justify-between items-start">
        
        {/* Session 1: Logo, About Text, Social Icons */}
        <div className="w-1/3 ml-4">
          <img src={logo} alt="Venus Catering" className="h-16 mb-8" />
          <p className="mb-8 text-2xl libre-baskerville-text">
            Let Venus Catering transform your <br/> special occasion into a masterpiece <br/> with our professional touch.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white text-2xl hover:border-2 hover:border-white hover:bg-[#E9b472]">
              <FaFacebookF />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white text-2xl hover:border-2 hover:border-white hover:bg-[#E9b472]">
              <FaInstagram />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white text-2xl hover:border-2 hover:border-white hover:bg-[#E9b472]">
              <FaYoutube />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white text-2xl hover:border-2 hover:border-white hover:bg-[#E9b472]">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Session 2: Our Services */}
        <div className="w-1/3 pl-4">
          <h3 className="text-4xl mb-3 pb-6 libre-baskerville-text">Our Services</h3>
          <div className="grid grid-cols-2 gap-6 libre-baskerville-text justify-center text-xl">
            <div>
              <p><MdArrowForward className="inline text-[#E9b472]" /> Wedding Event</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> 60th Wedding Event</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Engagement</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Seemantham</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Birthday Party</p>
            </div>
            <div>
              <p><MdArrowForward className="inline text-[#E9b472]" /> House Warming</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Mehndi Function</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Corporate Events</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Retirement Function</p>
            </div>
          </div>
        </div>

        {/* Session 3: Contact Now */}
        <div className="w-1/3 pl-20">
          <h3 className="text-4xl libre-baskerville-text">Contact Now</h3>
          <p className="flex items-center mt-8">
            <span className="w-26 h-12 flex items-center justify-center rounded-full bg-[#E9b472] text-black text-2xl mr-3">
              <FaMapMarkerAlt />
            </span>
            <span className="text-white text-xl libre-baskerville-text">
              No.1/379B, Kannagi Street, Jalladianpet, Pallikarani, Medavakkam, Chennai - 600 100.
            </span>
          </p>
          <p className="flex items-center mt-6">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9b472] text-black text-xl mr-3">
              <FaPhone />
            </span>
            <a href="tel:+919840935064" className="hover:text-teal-400 text-white text-xl libre-baskerville-text">+91 98409 35064</a>
          </p>
          <p className="flex items-center mt-6">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9b472] text-black text-xl mr-3">
              <FaEnvelope />
            </span>
            <a href="mailto:gurumurrthy@gmail.com" className="hover:text-teal-400 text-white text-xl libre-baskerville-text">gurumurrthy@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-left ml-19 text-gray-200 text-sm mt-8">
        © 2024 <span className="font-bold">DREAM CATERINGS.</span> All rights reserved | Designed By <span className="text-[#E9b470]">Team Espoir.</span>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
