import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import AB from "../requirements/about-bg.png";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const ContactPage = () => {
    const title = "Contact";
    const sentence = "We prepare food just like your home in large quantities. That's it. Do book us and relax.";

    const textVariants = {
        hidden: { opacity: 0, x: -20 }, // Starts from the left
        visible: (i) => ({
          opacity: 1,
          x: 0,
          transition: { delay: i * 0.05, duration: 0.3 }, // Each letter appears sequentially
        }),
      };
    
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
        <p className="text-1xl">Website / Contact Us</p>
      </div>
    </div>
    <div className="bg-[#FAF8F6] min-h-screen">
      {/* Top Section */}
      <div className="bg-gray-100 text-black  py-16 px-6 md:px-20">
        <h1 className="tracking-wide mb-6 text-3xl font-bold libre-baskerville-text1">Hello Everyone<span className="text-[#951F44] animate-pulse"> ~</span></h1>
        <h2 className="text-5xl aclonica-regular font-bold mb-6 max-w-full text-black">
      {sentence.split("").map((char, index) => (
        <motion.span key={index} variants={textVariants} initial="hidden" animate="visible" custom={index}>
          {char}
        </motion.span>
      ))}
    </h2>
        <p className="text-lg mt-4 mb-6 max-w-2xl">
          We offer personalized catering solutions for all events, ensuring every detail is perfect. Contact us for exceptional service and exquisite culinary experiences tailored to your needs. Your satisfaction is our top priority.
        </p>
        {/* Book Now Button */}
            <a
              href="https://wa.me/9994873204"
              className="relative flex items-center border-2 border-black text-black px-6 py-3 rounded-full font-semibold shadow-md group w-fit overflow-hidden"
            >
              {/* Background effect (Left to Right) */}
              <span className="absolute inset-0 bg-[#E9b472] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              
              {/* Button Text */}
              <span className="relative group-hover:text-black transition-colors duration-300">
                BOOK NOW
              </span>
  
              {/* Arrow Circle */}
              <div className="ml-3 flex items-center justify-center w-10 h-8 rounded-full border-2 border-black bg-[#951F44] transition-all duration-300 group-hover:bg-white">
                <FaArrowRight className="text-white transition-colors duration-300 group-hover:text-black" />
              </div>
            </a>
      </div>
      <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Contact Us and Get In Touch */}
        <div className="text-center mb-12">
          <h2 className="text-[#1F1F1F] mb-2 text-3xl font-bold libre-baskerville-text1">
            Contact Us<span className="text-[#951F44] animate-pulse"> ~</span>
          </h2>
          <h3 className="text-5xl font-semibold text-[#1F1F1F] aclonica-regular">Get In Touch</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Google Map */}
          <div className="w-full md:w-2/3 lg:-ml-4"> {/* Increased width and added margin to move left */}
            <iframe
              title="Google Map"
              className="w-full h-[350px] rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.601739331566!2d80.2038766740499!3d12.923328387361175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb812c68db5%3A0x1fbcaa5d83fc7f37!2s1%2F379B%2C%20Kannagi%20Street%2C%20Jalladianpet%2C%20Pallikaranai%2C%20Medavakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600100!5e0!3m2!1sen!2sin!4v1706524010547!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Right: Contact Info Container */}
          <div className="w-full bg-white md:w-1/3 flex justify-center shadow-lg shadow-[#951F44]"> {/* Reduced width to 1/3 */}
            <div className="bg-white rounded-lg p-8 space-y-6 w-[90%] max-w-lg">
              {/* Contact Details Header */}
              <div className="flex justify-center mb-12">
                <h2 className="text-2xl font-bold text-center text-[#1F1F1F]">Contact Details</h2>
              </div>

              {/* Address */}
              <div className="flex items-center mb-10">
                <FaMapMarkerAlt className="text-[#951F44] text-4xl mr-4" />
                <p className="text-gray-800 font-semibold">
                  No.1/379B, Kannagi Street, Jalladianpet, Pallikarani, Medavakkam, Chennai - 600 100.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center mb-10">
                <FaEnvelope className="text-[#951F44] text-2xl mr-4" />
                <p className="text-gray-800 font-semibold">emmanuelsk04@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <FaPhoneAlt className="text-[#951F44] text-2xl mr-4" />
                <p className="text-gray-800 font-semibold">+91 9994873204</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    <Footer />
    </div>
  );
};

export default ContactPage;
