import React from "react";
import img1 from "../requirements/img-6.jpg"

const ImageOverlay = () => {
  return (
    <div className="flex justify-around space-x-4 p-5">
      <div className="relative w-1/3">
        <img
          src={img1}
          alt="Image 1"
          className="w-full h-33 opacity-400 brightness-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center libre-baskerville-text text-xl font-bold text-shadow-lg">
            25+ <br/> Years of Experience
          </span>
        </div>
      </div>

      <div className="relative w-1/3">
        <img
          src={img1}
          alt="Image 2"
          className="w-full h-33 opacity-400 brightness-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center libre-baskerville-text text-xl font-bold text-shadow-lg">
            250+ <br/> Menu Options
          </span>
        </div>
      </div>

      <div className="relative w-1/3">
        <img
          src={img1}
          alt="Image 3"
          className="w-full h-33 opacity-400 brightness-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center libre-baskerville-text text-xl font-bold text-shadow-lg">
            340 <br/> staff
          </span>
        </div>
      </div>

      <div className="relative w-1/3">
        <img
          src={img1}
          alt="Image 3"
          className="w-full h-33 opacity-400 brightness-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center libre-baskerville-text text-xl font-bold text-shadow-lg">
            125k <br/> Happy Foodies
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;