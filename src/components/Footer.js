import React from "react";
import { 
  FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, 
  FaMapMarkerAlt, FaPhone, FaEnvelope 
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import logo from "../requirements/logo.jpg";

const Footer = () => {
  return (
    <footer>
      {/* Marquee section */}
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

      {/* Main footer content */}
      <div className="bg-black text-white py-8 md:py-12">
        <div className="max-w-full mx-auto px-4 md:px-14 flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Logo and Social Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-6">
            <img src={logo} alt="Venus Catering" className="h-12 md:h-16" />
            <p className="text-xl md:text-2xl libre-baskerville-text text-center md:text-left px-4 md:px-0">
              Let Venus Catering transform your special occasion into a masterpiece with our professional touch.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {['FaFacebookF', 'FaInstagram', 'FaYoutube', 'FaWhatsapp'].map((icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-700 text-white text-xl md:text-2xl hover:border-2 hover:border-white hover:bg-[#E9b472] transition-all"
                >
                  {icon === 'FaFacebookF' && <FaFacebookF />}
                  {icon === 'FaInstagram' && <FaInstagram />}
                  {icon === 'FaYoutube' && <FaYoutube />}
                  {icon === 'FaWhatsapp' && <FaWhatsapp />}
                </a>
              ))}
            </div>
          </div>

        {/* Session 2: Our Services */}
        <div className="lg:w-1/3 pl-4">
          <h3 className="text-4xl mb-3 pb-6 libre-baskerville-text">Our Services</h3>
          <div className="grid lg:grid-cols-2 lg:gap-6 libre-baskerville-text justify-center text-xl space-y-4">
            <div>
              <p><MdArrowForward className="inline text-[#E9b472]" /> Wedding Event</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> 60th Wedding</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Engagement</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Seemantham</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Birthday Party</p>
            </div>
            <div>
              <p><MdArrowForward className="inline text-[#E9b472]" /> House Warming</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Mehndi Function</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Corporate Events</p>
              <p className="mt-4"><MdArrowForward className="inline text-[#E9b472]" /> Retirement Event</p>
            </div>
          </div>
        </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 pl-6 md:pl-0 space-y-6">
            <h3 className="text-3xl md:text-4xl libre-baskerville-text">Contact Now</h3>
            <div className="space-y-6">
              {[
                { icon: <FaMapMarkerAlt />, content: "No.1/379B, Kannagi Street, Jalladianpet, Pallikarani, Medavakkam, Chennai - 600 100.", type: "text" },
                { icon: <FaPhone />, content: "+91 98409 35064", type: "phone" },
                { icon: <FaEnvelope />, content: "gurumurrthy@gmail.com", type: "email" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#E9b472] text-black text-xl">
                    {item.icon}
                  </span>
                  {item.type === "text" ? (
                    <span className="text-white text-lg md:text-xl libre-baskerville-text">{item.content}</span>
                  ) : (
                    <a 
                      href={item.type === "phone" ? `tel:${item.content}` : `mailto:${item.content}`}
                      className="text-white hover:text-teal-400 text-lg md:text-xl libre-baskerville-text"
                    >
                      {item.content}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-200 text-xs md:text-sm mt-8 px-4 md:px-14">
          {/* Mobile View (centered, two lines) */}
          <div className="md:hidden text-center flex flex-col space-y-2">
            <span>© 2024 <span className="font-bold text-lg">DREAM CATERINGS.</span> All rights reserved</span>
            <span>Designed By <span className="text-[#E9b470] text-lg">Team Espoir.</span></span>
          </div>
          
          {/* Desktop View (left-aligned, single line) */}
          <div className="hidden md:block text-left">
            © 2024 <span className="font-bold text-lg">DREAM CATERINGS.</span> All rights reserved | Designed By <span className="text-[#E9b470] text-lg font-bold">Team Espoir.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;