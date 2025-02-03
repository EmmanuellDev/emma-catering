import React, { useState, useEffect } from "react";
import BG from "../requirements/bg.png";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import I1 from "../requirements/img2.jpg";
import I2 from "../requirements/img1.png";
import "../App.css";
import { GiCampCookingPot } from "react-icons/gi";
import { HiOutlineHeart } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import E1 from "../requirements/img-eve-1.png";
import E2 from "../requirements/img-eve-5.png";
import E3 from "../requirements/img-eve-8.png";
import { Utensils, Truck, Trophy, Heart } from 'lucide-react';
import Footer from "../components/Footer";

const Home = () => {
  const greetings = ["Hello!", "Namaste!", "Vanakkam!"];
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const title1 = "Premium Catering Services";
  const title2 = "What People's Say About us ?";
  
  
const data = [
  {
    description: "I am a person who selected venus catering. Initially I was in a dilemma. Later I felt my decision is right. We ordered 300 breakfast and 300 lunch. Both are awesome. Thank you to Mr.Gurumurrthy. Your services are great. Keep up your good work.",
    customer: "Prem kumar Kalyanasundaram"
  },
  {
    description: "We have planned housewarming function on June 9th. We booked venus catering based on very good reviews. Both Gurumurthy sir and his son Ruthresh came in- person and provided Extradinory service. We are very happy for the service and food items. Both our friends and family are very happy. Top class top notch food.",
    customer: "Sathish Kumar"
  },
  {
    description: "I appreciate the exceptional service provided by Guru Murthy, the caterer, at my housewarming ceremony. His dedication and kindness were evident in the diverse and high-quality breakfast and lunch menu he offered. The addition of a tea and coffee stall by Kumbakonam Degree added great value, leaving my guests delighted. Notably, Guru Murthy himself ensured the impeccable service by personally serving food and even attending to guests. A heartfelt thank you for your outstanding service sir. Surely I will recommend your valuable service to my friends and relatives.",
    customer: "Sujith Joseph"
  },
  {
    description: "Venus catering is very very good in catering service, their hospitality is very very good , unexpected crowd was came into my daughters marriage, but Mr .Gurumoorthy tackled the situation easily and immediately managed and served to all coming to our marriage , I'm very very grateful to him , food they served was excellent and praised by all coming to our marriage at 18/2/24 &19/2/24.",
    customer: "Uma Devi"
  }
];

  const services = [
    {
      image: E1,
      title: "Wedding Event",
      description:
      "Wedding. Why we have the concept of inviting all our relatives, friends and known ones? Its because, when a family celebrates an event means, its an occasion, when lot of people celebrates an event means, it turns as a feast. If there any feast occurs without food?? We are here to make a memorable experience for your guests by pampering their taste buds.",
    },
    {
      image: E2,
      title: "Birthday Party",
      description:
      "Make every birthday a memorable one with our birthday photography. Whether it’s a child's first birthday or a milestone celebration, we capture the joy, excitement, and love of the day and preserve it forever. At Venus Catering Service, we take care of the happiness of your guests by offering them amazing food on behalf of you.",
    },
    {
      image: E3,
      title: "Corporate Events",
      description:
      "From corporate events to business occasions or milestone celebrations, our event catering team captures the heart of their audiences on their special occasions. We focus on delivering the customized delicacies of different types. We make sure all the audience feel good about the food too and that make your event unique.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <div>
    <section
    id="#about"
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
              <span className="relative z-2 group-hover:text-black transition-colors duration-500">
                Explore
              </span>
              <div className="ml-3 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#951F44] group-hover:bg-white transition-colors duration-300 z-2">
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
              <span className="relative z-2 group-hover:text-black transition-colors duration-500">
                Contact
              </span>
              <div className="ml-3 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#951F44] group-hover:bg-white transition-colors duration-300 z-2">
                <FaArrowRight className="text-white group-hover:text-black transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>

        {/* Down Arrow Button */}
        <div className="pt-32">
          <a
            href="#about"
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
    </section>
    <section className="min-h-screen bg-gray-100 flex justify-center items-center py-20">
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
        
                    {/* Right Image (With Overlapping Badge) */}
                    <div className="w-[48%] lg:w-[45%] h-[380px] lg:h-[580px] relative">
                      <img 
                        src={I2}
                        alt="Floral table decoration"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                      />
        
                      {/* "Since 1998" Badge */}
                      <div className="absolute -top-8 lg:-top-16 right-0 lg:left-56 bg-[#8B1F41] text-white rounded-full w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] flex flex-col items-center justify-center shadow-lg border-4 lg:border-8 border-[#E9b472]">
                        <div className="text-sm lg:text-lg font-medium libre-baskerville-text">Since</div>
                        <div className="text-2xl lg:text-4xl font-bold libre-baskerville-text">1998</div>
                      </div>
                    </div>
                  </div>
                </div>
        
                {/* Right - Text Section */}
                <div className="w-full lg:w-1/2 pl-6 lg:pl-22">
                  <h3 className="text-[#8B1F41] uppercase tracking-widest text-sm font-semibold mb-3">
                    About Us
                  </h3>
                  <h1 className="text-4xl lg:text-5xl font-bold aclonica-regular text-gray-900 leading-tight mb-6 libre-baskerville-text">
                  Elevating Your Events <br className="hidden lg:block" /> with Exceptional Food.
                  </h1>
                  <p className="text-gray-700 text-base lg:text-lg leading-7 mb-8 libre-baskerville-text">
                  Venus is The Place where Food is Celebrated over 25 Years. We Love to Create Unforgettable Culinary Experiences.
                  </p>

                  <div className="flex flex-col items-center lg:flex-row gap-8 pb-12">
  {/* First Container - Chef (using GiCampCookingPot) */}
  <div className="flex lg:flex-col flex-row items-center lg:justify-center lg:h-60 lg:w-54 h-16 w-[90%] bg-white shadow-lg rounded-2xl p-6 shadow-[12px_12px_12px_12px_rgba(0.2,0,0,0.15)] shadow-[#951F44]">
    <GiCampCookingPot size={40} className="text-yellow-500 lg:mr-0 mr-5" />
    <span className="text-2xl font-semibold text-gray-800 text-center libre-baskerville-text">25 Years of Experience</span>
  </div>

  {/* Second Container - Heart (Successful Marriages) */}
  <div className="flex lg:flex-col flex-row items-center lg:justify-center lg:h-60 lg:w-54 h-16 w-[90%] bg-white shadow-lg rounded-2xl p-6 shadow-[12px_12px_12px_12px_rgba(0,0,0,0.15)] shadow-[#951F44]">
    <HiOutlineHeart size={40} className="text-yellow-500 lg:mr-0 mr-5" />
    <span className="text-2xl font-semibold text-gray-800 text-center libre-baskerville-text">200+ Successful Marriages</span>
  </div>

  {/* Third Container - Handshake (Using FiUsers as Alternative) */}
  <div className="flex lg:flex-col flex-row items-center lg:justify-center lg:h-60 lg:w-54 h-16 w-[90%]  bg-white shadow-lg rounded-2xl p-6 shadow-[12px_12px_12px_12px_rgba(0,0,0,0.15)] shadow-[#951F44]">
    <FiUsers size={40} className="text-yellow-500 mb-3 lg:mr-0 mr-5" />
    <span className="text-2xl font-semibold text-gray-800 text-center libre-baskerville-text">98% Repeated Customers</span>
  </div>
</div>

        
                  {/* Book Now Button */}
                  <a
                    href="https://wa.me/9994873204"
                    className="relative flex items-center border-2 border-black text-black px-6 lg:px-8 py-3 lg:py-3 rounded-full font-semibold shadow-md group w-fit overflow-hidden"
                  >
                    {/* Background effect */}
                    <span className="absolute inset-0 bg-[#E9B472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    
                    {/* Button Text */}
                    <span className="relative group-hover:text-black transition-colors duration-300">
                      BOOK NOW
                    </span>
          
                    {/* Arrow Circle */}
                    <div className="ml-3 flex items-center justify-center w-12 h-8 lg:w-12 lg:h-8 rounded-full border-2 border-black bg-[#951F44] transition-all duration-300 group-hover:bg-white z-2">
                      <FaArrowRight className="text-white transition-colors duration-300 group-hover:text-black text-sm lg:text-base" />
                    </div>
                  </a>
                </div>
              </div>
    </section>
    <section className="container mx-auto px-6 py-12 text-center libre-baskerville-text">
      <h2 className="text-3xl libre-baskerville-text1">What We Do<span className="text-[#951F44] animate-pulse"> ~</span></h2>
      <h3 className="lg:text-4xl text-3xl aclonica-regular font-semibold text-black mt-2 flex justify-center">
      {title1.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20 }} // Start from left (-20px)
          animate={{ opacity: 1, x: 0 }}  // Move to original position
          transition={{ delay: index * 0.05, duration: 0.3 }} // Delay effect
        >
          {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
        </motion.span>
      ))}
    </h3>

      <div className="mt-12 grid grid-cols-1 rounded-full md:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#E9b472] shadow-lg shadow-[#951F44] rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-66 object-cover rounded-md"
            />
            <h4 className="text-2xl pl-3 text-center font-semibold text-gray-800 mt-4">
              {service.title}
            </h4>
              <p className="flex justify-start pt-4">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="pt-8 flex justify-center">
      <a
                    href="/service"
                    className="relative flex items-center border-2 border-black text-black px-6 lg:px-8 py-3 lg:py-3 rounded-full font-semibold shadow-md group w-fit overflow-hidden"
                  >
                    {/* Background effect */}
                    <span className="absolute inset-0 bg-[#E9B472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    
                    {/* Button Text */}
                    <span className="relative group-hover:text-black transition-colors duration-300">
                      View All Services
                    </span>
          
                    {/* Arrow Circle */}
                    <div className="ml-3 flex items-center justify-center w-12 h-8 lg:w-12 lg:h-8 rounded-full border-2 border-black bg-[#951F44] transition-all duration-300 group-hover:bg-white z-2">
                      <FaArrowRight className="text-white transition-colors duration-300 group-hover:text-black text-sm lg:text-base" />
                    </div>
                  </a>
                  </div>
    </section>
    <section>
      <div className="container mx-auto px-6 py-12 text-center libre-baskerville-text">
    <h2 className="text-3xl libre-baskerville-text1">Why Choose us<span className="text-[#951F44] animate-pulse"> ~</span></h2>
    <h2 className="text-4xl aclonica-regular lg:text-5xl font-bold text-gray-800 mb-1 leading-tight"> 
    Leave Your Guests Speechless <br /> With Our Fabulous Food!
    </h2>
    </div>
    <div className="mb-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-0 px-6">
      {/* Container 1 */}
      <div className="border-10 lg:border-t-10 lg:border-b-10 border-t-10 border-b-15 border-yellow-400 p-6 lg:rounded-lg flex flex-col items-center text-center">
        <Utensils className="w-12 h-12 mb-4 text-yellow-400 stroke-2" />
        <h3 className="text-2xl font-semibold mb-2 text-black libre-baskerville-text">Authentic Taste</h3>
        <p className="text-black libre-baskerville-text1 text-lg">Enjoy our traditional recipes, inspired by rich culinary heritage.</p>
      </div>

      {/* Container 2 */}
      <div className="border-10 lg:border-t-10 lg:border-b-10 border-t-15 border-b-15 border-yellow-400 p-6 lg:rounded-lg flex flex-col items-center text-center">
        <Truck className="w-12 h-12 mb-4 text-yellow-400 stroke-2" />
        <h3 className="text-2xl font-semibold mb-2 text-black libre-baskerville-text">Service Excellence</h3>
        <p className="text-black libre-baskerville-text1 text-lg">Outstanding service and unforgettable experiences.</p>
      </div>

      {/* Container 3 */}
      <div className="border-10 lg:border-t-10 lg:border-b-10 border-t-15 border-b-15 border-yellow-400 p-6 lg:rounded-lg flex flex-col items-center text-center">
        <Trophy className="w-12 h-12 mb-4 text-yellow-400 stroke-2" />
        <h3 className="text-2xl font-semibold mb-2 text-black libre-baskerville-text">Best Quality</h3>
        <p className="text-black libre-baskerville-text1 text-lg">Top quality standards, excellence in every bite.</p>
      </div>

      <div className="border-10 lg:border-t-10 lg:border-b-10 border-t-15 border-b-10 border-yellow-400 p-6 lg:rounded-lg flex flex-col items-center text-center">
        <Heart className="w-12 h-12 mb-4 text-yellow-400 stroke-2" />
        <h3 className="text-2xl font-semibold mb-2 text-black libre-baskerville-text">Heritage</h3>
        <p className="text-black libre-baskerville-text1 text-lg">Venus catering blends food and heart, rooted in family traditions.</p>
      </div>
      </div>
    </div>
    </section>
    <section>
    <h2 className="text-3xl libre-baskerville-text1 text-center">Testimonial<span className="text-[#951F44] animate-pulse"> ~</span></h2>
      <h3 className="lg:text-4xl text-3xl aclonica-regular font-semibold text-black mt-2 flex justify-center">
      {title2.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20 }} // Start from left (-20px)
          animate={{ opacity: 1, x: 0 }}  // Move to original position
          transition={{ delay: index * 0.05, duration: 0.3 }} // Delay effect
        >
          {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
        </motion.span>
      ))}
    </h3>
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side - Carousel */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <div className="text-center mb-4">
          <p className="text-xl mb-2">{data[currentIndex].description}</p>
          <p className="text-2xl text-black font-semibold text-center libre-baskerville-text">
            {data[currentIndex].customer}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={goToPrevious} 
            className="p-2 border-4 h-15 border-black text-3xl font-bold bg-[#E9b472] rounded-full text-black hover:bg-black hover:text-white hover:border-white transition duration-300"
          >
            &larr;
          </button>
          
          <button 
            onClick={goToNext} 
            className="p-2 border-4 h-15 border-black text-3xl font-bold bg-[#E9b472] rounded-full text-black hover:bg-black hover:text-white hover:border-white transition duration-300"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Right side - GIF */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <img 
          src="https://i.pinimg.com/originals/57/e2/09/57e209296e586933febadf06e271a3d3.gif" 
          alt="Catering Service" 
          className="w-full max-w-lg rounded-lg"
        />
      </div>
    </div>
    </section>
    <section>
      <div>
        
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Home;
