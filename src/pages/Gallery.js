import React from 'react';
import V1 from "../requirements/vid-1.mp4";
import V2 from "../requirements/vid-2.mp4";
import V3 from "../requirements/vid-3.mp4";
import V4 from "../requirements/vid-4.mp4";
import img6 from "../requirements/img-6.jpg";
import img7 from "../requirements/img-7.jpg";
import img8 from "../requirements/img-8.jpg";
import img9 from "../requirements/img-9.jpg";
import img10 from "../requirements/img-10.png";
import img11 from "../requirements/img-11.png";
import AB from "../requirements/about-bg.png";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

const Gallery = () => {
    const title = "Gallery";
  return (
    <div>
            <div
      className="flex flex-col items-center mt-22 justify-center text-center h-[200px] relative"
      style={{
        backgroundImage: `url(${AB})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Libre Baskerville, serif",
      }}
    >
      {/* Overlay to dull the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-white p-4">
        <h1 className="text-5xl mb-6 flex">
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }} // Start from left (-20px)
              animate={{ opacity: 1, x: 0 }} // Move to its normal position
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="mr-1" // Adds spacing between letters
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-1xl">Website / About Us</p>
      </div>
    </div>
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
      <div className="text-center mt-4">
          <h2 className="text-3xl font-bold mb-1 libre-baskerville-text1">Our Memorable Events<span className="text-[#951F44] animate-pulse"> ~</span></h2> {/* Only dot in sand color */}
          <h2 className="text-5xl font-bold text-gray-800 mt-2 mb-12 libre-baskerville-text">Gallery</h2>
        </div>

        {/* Video Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <div className="video-item border-8 border-black">
            <video className="w-full h-auto rounded-lg shadow-lg" controls>
              <source src={V1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-item border-8 border-black">
            <video className="w-full h-auto rounded-lg shadow-lg" controls>
              <source src={V4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="video-item border-8 border-black">
            <video className="w-full h-auto rounded-lg shadow-lg" controls>
              <source src={V3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-item border-8 border-black">
            <video className="w-full h-auto rounded-lg shadow-lg" controls>
              <source src={V2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 pt-12 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="image-item border-8 border-black">
            <img className="w-full h-auto rounded-lg shadow-lg" src={img6} alt="Gallery 1" />
          </div>
          <div className="image-item border-8 border-black">
            <img className="w-full h-auto rounded-lg shadow-lg" src={img7} alt="Gallery 2" />
          </div>
          <div className="image-item border-8 border-black">
            <img className="w-full h-auto rounded-lg shadow-lg" src={img8} alt="Gallery 3" />
          </div>
          <div className="image-item border-8 border-black">
            <img className="w-full h-auto rounded-lg shadow-lg" src={img9} alt="Gallery 5" />
          </div>
          <div className="image-item border-8 border-black">
            <img className="w-full h-auto rounded-lg shadow-lg" src={img10} alt="Gallery 5" />
          </div>
          <div className="image-item border-8 border-black">
            <img className="w-full h-auto rounded-lg shadow-lg" src={img11} alt="Gallery 5" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Gallery;
