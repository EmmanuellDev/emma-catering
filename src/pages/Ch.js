import React from "react";
import img1 from "../requirements/img-6.jpg"

const ImageOverlay = () => {
  return (
    <div className="flex justify-around space-x-4 p-5">
      <div className="relative w-1/3">
        <img
          src={img1}
          alt="Image 1"
          className="w-full h-auto opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold text-shadow-lg">
            Your Text Here
          </span>
        </div>
      </div>

      <div className="relative w-1/3">
        <img
          src={img1}
          alt="Image 2"
          className="w-full h-auto opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold text-shadow-lg">
            Your Text Here
          </span>
        </div>
      </div>

      <div className="relative w-1/3">
        <img
          src={img1}
          alt="Image 3"
          className="w-full h-auto opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold text-shadow-lg">
            Your Text Here
          </span>
        </div>
      </div>

      <div className="relative w-1/3">
        <img
          src={img1}
          alt="Image 3"
          className="w-full h-auto opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold text-shadow-lg">
            Your Text Here
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
