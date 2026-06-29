"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/home1_slide_1.jpg",
    title: "Welcome to the Local Government Portal",
    description:
      "The Most Exciting guide to living, working, visiting and investing business.",
  },
  {
    image: "/images/home1_slide_2.jpg",
    title: "Fastest Growing City in the Europe",
    description:
      "It’s Called as Electronic city because this is best city in europe to start.",
  },
  {
    image: "/images/home_slide3.jpg",
    title: "Lovely & Romantic City for Natural Lovers",
    description:
      "Every year 2 million people from worldwide don’t forget to visit here.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl text-white text-center md:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              {slides[current].title}
            </h1>

            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-200">
              {slides[current].description}
            </p>

            <button className="mt-6 md:mt-10 bg-orange-700 hover:bg-blue-950 transition-all duration-300 px-5 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold cursor-pointer">
              Discover More
            </button>

          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 text-white text-3xl md:text-5xl cursor-pointer hover:text-red-500 transition"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 text-white text-3xl md:text-5xl cursor-pointer hover:text-red-500 transition"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-orange-500 scale-125"
                : "bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}