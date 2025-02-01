import React, { useState, useEffect } from "react";
import BG from "../requirements/bg.png";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import "../App.css"; // Import the correct CSS file

const Home = () => {
  const greetings = ["Hello!", "Namaste!", "Vanakkam!"];
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 1000); // Change greeting every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="h-screen pt-40 flex flex-col justify-center items-center text-center text-white px-6 relative"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to make the background slightly dull */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4 tracking-wide uppercase leading-snug font-smooch">
          Welcome to <span className="text-yellow-500 aclonica-regular">Dream Catering Service</span>
        </h1>

        {/* Show only the current greeting with animation */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-yellow-400 font-serif zoomInOut">
          {greetings[currentGreeting]}
        </h2>

        {/* Updated text content with center alignment */}
        <div className="mt-6 text-center">
          <p className="text-xl sm:text-2xl font-semibold">
            We are the top <span className="text-yellow-400 font-bold aclonica-regular">biryani event caterer</span> in Tamil Nadu.
          </p>
          <p className="text-xl sm:text-2xl font-semibold">
            We have completed over <span className="text-yellow-400 font-bold aclonica-regular">200+</span> events,
          </p>
          <p className="text-xl sm:text-2xl font-semibold">
            supported by a professional team of <span className="text-yellow-400 font-bold aclonica-regular">40 members</span>.
          </p>
        </div>

        {/* Explore and Contact Buttons */}
        <div className="mt-10 flex flex-row space-x-6">
          <div>
            <a
              href="/menu"
              className="relative flex items-center justify-center border-2 border-white text-white px-6 py-2 rounded-full font-semibold shadow-md group overflow-hidden hover:text-black hover:border-white"
            >
              <span className="absolute inset-0 bg-[#E9b472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-20 group-hover:text-black transition-colors duration-500">
                Explore
              </span>
              <div className="ml-3 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#951F44] group-hover:bg-white transition-colors duration-300 z-30">
                <FaArrowRight className="text-white group-hover:text-black transition-colors duration-300" />
              </div>
            </a>
          </div>
          <div>
            <a
              href="/contact"
              className="relative flex items-center justify-center border-2 border-white text-white px-6 py-2 rounded-full font-semibold shadow-md group overflow-hidden hover:text-black hover:border-white"
            >
              <span className="absolute inset-0 bg-[#E9b472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-20 group-hover:text-black transition-colors duration-500">
                Contact
              </span>
              <div className="ml-3 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#951F44] group-hover:bg-white transition-colors duration-300 z-30">
                <FaArrowRight className="text-white group-hover:text-black transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>

        {/* Down Arrow Button */}
        <div className="pt-32">
          <a
            href="/about"
            className="relative flex items-center rounded-full justify-center border-1 border-white text-white px-1 py-3 rounded-full font-semibold shadow-md group overflow-hidden animate-bounce"
            style={{ borderRadius: "15px / 15px" }} // Custom border radius for oval effect
          >
            <div className="absolute inset-0 bg-[#E9b472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="relative z-20">
              <FaArrowDown className="text-white text-1xl group-hover:text-black" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
