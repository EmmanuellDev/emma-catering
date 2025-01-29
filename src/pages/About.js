import React from 'react';
import "../App.css"
import { FaArrowRight } from 'react-icons/fa';
import I1 from "../requirements/img2.jpg";
import I2 from "../requirements/img1.png";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-8">

        {/* Left - Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="flex gap-6">
            {/* Left Image */}
            <div className="w-[45%] h-[700px]">
              <img 
                src={I1}
                alt="Elegant table setting"
                className="w-full h-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Image (With Overlapping Badge) */}
            <div className="w-[45%] h-[700px] relative">
              <img 
                src={I2}
                alt="Floral table decoration"
                className="w-full h-full rounded-2xl shadow-lg"
              />

              {/* "Since 1998" Badge */}
              <div className="absolute -top-14 left-64 bg-[#8B1F41] text-white rounded-full w-[180px] h-[180px] flex flex-col items-center justify-center shadow-lg border-8 border-[#E9b472]">
                <div className="text-lg font-medium libre-baskerville-text">Since</div>
                <div className="text-4xl font-bold libre-baskerville-text">1998</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Text Section */}
        <div className="w-full pl-22 lg:w-1/2">
          <h3 className="text-[#8B1F41] uppercase tracking-widest text-sm font-semibold mb-3">About Us</h3>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6 libre-baskerville-text">
            Indulge in a celebration <br /> with great food!
          </h1>
          <p className="text-gray-700 text-lg leading-7 mb-8 libre-baskerville-text">
            Venus Catering Service is a professional catering company that was established in 1998, offering comprehensive services to meet all your culinary needs for nearly two decades. Our primary goal is to provide a unique and memorable dining experience with each meal we serve. We are committed to maintaining uncompromised quality, exceptional hygiene standards, meticulous presentation, and attention to detail to ensure the utmost satisfaction of our customers.
          </p>

          {/* Book Now Button */}
          <a href="#book-now" className="inline-flex items-center border-2 border-gray-800 text-gray-800 text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition duration-300 origin-left">
            Book Now
            <span className="ml-3 bg-[#8B1F41] text-white p-2 rounded-full">
              <FaArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
