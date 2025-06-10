import React from 'react';
import "../App.css"
import { FaArrowRight } from 'react-icons/fa';
import I1 from "../requirements/img2.jpg";
import I2 from "../requirements/img1.png";
import I3 from '../requirements/img3.jpg';
import I4 from '../requirements/img4.png';
import I5 from '../requirements/img5.png';
import AB from "../requirements/about-bg.png";
import { motion } from "framer-motion";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  const title = "About";
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
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-white p-4">
        <h1 className="text-5xl mb-6 flex">
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="mr-1"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-1xl">Website / About Us</p>
      </div>
    </div>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-4 lg:px-8">
  
          {/* Left - Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="flex flex-row gap-4 lg:gap-6 w-full">
              {/* Left Image */}
              <div className="w-[48%] lg:w-[45%] h-[380px] lg:h-[580px]">
                <img 
                  src={I1}
                  alt="Elegant table setting"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
  
              <div className="w-[48%] lg:w-[45%] h-[380px] lg:h-[580px] relative">
                <img 
                  src={I2}
                  alt="Floral table decoration"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
  
                <div className="absolute -top-8 lg:-top-16 right-0 lg:left-56 bg-[#8B1F41] text-white rounded-full w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center shadow-lg border-4 lg:border-8 border-[#E9b472]">
                  <div className="text-sm lg:text-lg font-medium libre-baskerville-text">Since</div>
                  <div className="text-2xl lg:text-4xl font-bold libre-baskerville-text">1998</div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="w-full lg:w-1/2 pl-6 lg:pl-22">
            <h3 className="text-[#8B1F41] uppercase tracking-widest text-sm font-semibold mb-3">
              About Us
            </h3>
            <h1 className="text-4xl lg:text-5xl font-bold aclonica-regular text-gray-900 leading-tight mb-6 libre-baskerville-text">
              Indulge in a celebration <br className="hidden lg:block" /> with great food!
            </h1>
            <p className="text-gray-700 text-base lg:text-lg leading-7 mb-8 libre-baskerville-text">
              Emma Catering Service is a professional catering company that was established in 1998, offering comprehensive services to meet all your culinary needs for nearly two decades. Our primary goal is to provide a unique and memorable dining experience with each meal we serve. We are committed to maintaining uncompromised quality, exceptional hygiene standards, meticulous presentation, and attention to detail to ensure the utmost satisfaction of our customers.
            </p>
  
            <a
              href="https://wa.me/9994873204"
              className="relative flex items-center border-2 border-black text-black px-6 lg:px-8 py-3 lg:py-3 rounded-full font-semibold shadow-md group w-fit overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#E9B472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              
              <span className="relative group-hover:text-black transition-colors duration-300">
                BOOK NOW
              </span>
    
              <div className="ml-3 flex items-center justify-center w-12 h-8 lg:w-12 lg:h-8 rounded-full border-2 border-black bg-[#951F44] transition-all duration-300 group-hover:bg-white group-hover:z-2">
                <FaArrowRight className="text-white transition-colors duration-300 group-hover:text-black text-sm lg:text-base" />
              </div>
            </a>
          </div>
        </div>
      </div>
        <div className="bg-gray-100 p-16 libre-baskerville-text">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-left md:ml-14">
            <h2 className="text-4xl aclonica-regular lg:text-5xl font-bold text-gray-800 mb-8 leading-tight"> 
              A Quality-Driven <br /> Catering Company
            </h2>
            <p className="text-lg text-base text-gray-600 mb-8 leading-relaxed">
              We have been one of the successful names in the business when it comes 
              to providing catering and services. Our team has completed all the events 
              on large and medium scales just the way it has been asked by the client. 
              Whether you need service indoors or outdoors, we can take care of it just 
              the way you want.
            </p>

            <a
              href="/menu"
              className="relative flex items-center border-2 border-black text-black px-8 py-3 rounded-full font-semibold shadow-md group w-fit overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#E9b472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              
              <span className="relative group-hover:text-black transition-colors duration-300">
                OUR MENU
              </span>
  
              <div className="ml-3 flex items-center justify-center w-12 h-8 rounded-full border-2 border-black bg-[#951F44] transition-all duration-300 group-hover:bg-white">
                <FaArrowRight className="text-white transition-colors duration-300 group-hover:text-black" />
              </div>
            </a>
          </div>
  
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img 
              src={I3} 
              alt="Catering Service" 
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
        </div>
  
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-1 libre-baskerville-text1">Always Quality<span className="text-[#951F44] animate-pulse"> ~</span></h2>
          <h2 className="text-5xl font-bold text-gray-800 mt-2 mb-4 aclonica-regular">Our Team</h2>
        </div>
  
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-8">
          <div className="relative flex flex-col items-center bg-gray-200 p-7 rounded-lg shadow-lg max-w-xl mx-4 w-full h-full">
            <div className="w-96 h-96 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <img 
                src={I4} 
                alt="Team Member 1" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute top-100 left-0 right-0 text-center text-lg font-semibold text-gray-800">
              <span className="bg-[#951F44] text-white p-3 rounded-full">FOUNDER</span>
            </div>
            <h3 className="text-2xl mt-8 font-bold text-gray-800">PROP. C RAMAMOORTHY</h3>
            <p className="text-lg text-gray-600 mt-4">B.SC., M.B.A., M.T.M., M.Phil., Ph.D[p]</p>
          </div>
  
          <div className="relative flex flex-col items-center bg-gray-200 p-7 rounded-lg shadow-lg max-w-xl mx-4 w-full h-full">
            <div className="w-96 h-96 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <img 
                src={I5} 
                alt="Team Member 2" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute top-100 left-0 right-0 text-center text-lg font-semibold text-gray-800">
              <span className="bg-[#951F44] text-white p-3 rounded-full">CEO</span>
            </div>
            <h3 className="text-2xl mt-8 font-bold text-gray-800">EMMANUEL R</h3>
            <p className="text-lg text-gray-600 mt-4">B.E</p>
          </div>
        </div>
      </div>
      <Footer />
      </div>
  );
};

export default About;