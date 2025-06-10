import React from "react";
import P1 from "../requirements/p1.png";
import P2 from "../requirements/p2.png";
import P3 from "../requirements/p3.png";
import P4 from "../requirements/p4.png";
import P5 from "../requirements/p5.png";
import P6 from "../requirements/p6.png";
import P7 from "../requirements/p7.png";
import P8 from "../requirements/p8.png";
import P9 from "../requirements/p9.png";
import AB from "../requirements/about-bg.png";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Menu = () => {
  const images = [P1, P2, P3, P4, P5, P6, P7, P8, P9];
  const title = "Menus";

  return (
    <div>
      <Navbar />
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
        <p className="text-1xl">website / menu</p>
      </div>
    </div>
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="border-8 border-[#E9b472] rounded-xl shadow-lg shadow-[#951F44] overflow-hidden"
          >
            <img
              src={img}
              alt={`P${index + 1}`}
              className="w-full h-auto rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Menu;
