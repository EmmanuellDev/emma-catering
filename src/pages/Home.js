import React, { useState, useEffect } from "react";
import BG from "../requirements/bg.png";
import { FaArrowRight } from "react-icons/fa";
import "../App.css"; // Import the correct CSS file

const Home = () => {
  const greetings = ["Hello!", "Namaste!", "Vanakkam!"];
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 1000); // Change greeting every 0.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center text-white px-6 relative"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to make the background slightly dull */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold mb-4 tracking-wide uppercase leading-snug">
          Welcome to <span className="text-yellow-500">Venus Catering Service</span>
        </h1>

        {/* Show only the current greeting with animation */}
        <h2 className="text-7xl font-semibold text-yellow-400 zoomInOut">
          {greetings[currentGreeting]}
        </h2>

        {/* Updated text content with center alignment */}
        <div className="mt-6 text-center">
          <p className="text-2xl font-semibold">
            We are the top <span className="text-yellow-400 font-bold">vegetarian wedding caterer</span> in Tamil Nadu.
          </p>
          <p className="text-2xl font-semibold">
            We have completed over <span className="text-yellow-400 font-bold">2,000+</span> weddings,
          </p>
          <p className="text-2xl font-semibold">
            supported by a professional team of <span className="text-yellow-400 font-bold">340 members</span>.
          </p>
        </div>

        {/* Explore and Contact Buttons */}
        <div className="mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="hidden md:block">
            <a
              href="#explore"
              className="relative flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold shadow-md group overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#E9b472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-20 group-hover:text-white transition-colors duration-500">
                Explore
              </span>
              <div className="ml-3 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#951F44] group-hover:bg-white transition-colors duration-300 z-30">
                <FaArrowRight className="text-white group-hover:text-black transition-colors duration-300" />
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold shadow-md group overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#E9b472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-20 group-hover:text-white transition-colors duration-500">
                Contact
              </span>
              <div className="ml-3 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#951F44] group-hover:bg-white transition-colors duration-300 z-30">
                <FaArrowRight className="text-white group-hover:text-black transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
