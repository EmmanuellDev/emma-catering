import React, { useState } from 'react';

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

const SplitLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col bg-gray-200 md:flex-row w-full">
      {/* Left side - Carousel */}
      <div className="w-full md:w-1/2 bg-gray-200 p-6 flex flex-col justify-center">
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
  );
};

export default SplitLayout;