import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-[#FAF8F6] min-h-screen">
      {/* Top Section */}
      <div className="bg-[#1F1F1F] text-white text-center py-16">
        <h1 className="text-5xl font-semibold tracking-wide">Hello Everyone</h1>
        <h2 className="text-3xl font-bold mt-4 max-w-3xl mx-auto">
          We prepare food just like your home in large quantities. That's it. Do book us and relax.
        </h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          We offer personalized catering solutions for all events, ensuring every detail is perfect. Contact us for exceptional service and exquisite culinary experiences tailored to your needs. Your satisfaction is our top priority.
        </p>
        {/* Book Now Button */}
        <button className="mt-6 bg-[#951F44] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center mx-auto hover:bg-[#7A1835] transition">
          Book Now <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
        {/* Left: Google Map */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-[#1F1F1F] mb-6">Get In Touch</h2>
          <iframe
            title="Google Map"
            className="w-full h-[400px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.601739331566!2d80.2038766740499!3d12.923328387361175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb812c68db5%3A0x1fbcaa5d83fc7f37!2s1%2F379B%2C%20Kannagi%20Street%2C%20Jalladianpet%2C%20Pallikaranai%2C%20Medavakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600100!5e0!3m2!1sen!2sin!4v1706524010547!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right: Contact Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-[#1F1F1F] mb-6">Contact Us</h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-4">
              <FaMapMarkerAlt className="text-[#951F44] text-2xl mr-4" />
              <p className="text-gray-800 font-semibold">
                No.1/379B, Kannagi Street, Jalladianpet, Pallikarani, Medavakkam, Chennai - 600 100.
              </p>
            </div>
            {/* Email */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-4">
              <FaEnvelope className="text-[#951F44] text-2xl mr-4" />
              <p className="text-gray-800 font-semibold">emmanuelsk04@gmail.com</p>
            </div>
            {/* Phone */}
            <div className="flex items-center bg-white shadow-md rounded-lg p-4">
              <FaPhoneAlt className="text-[#951F44] text-2xl mr-4" />
              <p className="text-gray-800 font-semibold">+91 9994873204</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
