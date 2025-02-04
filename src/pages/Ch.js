import React, { useState, useEffect, useRef } from "react";
import img13 from "../requirements/img-13.png";
import img14 from "../requirements/img-14.png";
import img15 from "../requirements/img-15.png";
import img16 from "../requirements/img-16.png";

const Counter = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

const ImageOverlay = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap lg:pl-33 lg:pr-33 justify-around gap-8 p-5">
      <div className="relative w-[45%] border-6 border-black md:w-1/4">
        <img
          src={img13}
          alt="Image 1"
          className="w-full h-33 opacity-40 brightness-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center libre-baskerville-text text-xl font-bold text-shadow-lg">
            <Counter end={25} /> <br/> Years of Experience
          </span>
        </div>
      </div>

      <div className="relative w-[45%] border-6 border-black md:w-1/4">
        <img
          src={img14}
          alt="Image 2"
          className="w-full h-33 opacity-40 brightness-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center libre-baskerville-text text-xl font-bold text-shadow-lg">
            <Counter end={250} /> <br/> Menu Options
          </span>
        </div>
      </div>

      <div className="relative w-[45%] border-6 border-black md:w-1/4">
        <img
          src={img15}
          alt="Image 3"
          className="w-full h-33 opacity-40 brightness-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center libre-baskerville-text text-xl font-bold text-shadow-lg">
            <Counter end={40} /> <br/> Expertised staffs
          </span>
        </div>
      </div>

      <div className="relative w-[45%] border-6 border-black md:w-1/4">
        <img
          src={img16}
          alt="Image 4"
          className="w-full h-33 opacity-40 brightness-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center libre-baskerville-text text-xl font-bold text-shadow-lg">
            <Counter end={125} suffix="k+" /> <br/> Happy Foodies
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;