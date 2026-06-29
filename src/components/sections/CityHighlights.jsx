"use client";

import Image from "next/image";
import { Camera, ArrowRight } from "lucide-react";

const highlights = [
  {
    image: "/images/city1.jpg",
    category: "Business",
    title: "Business Portfolio",
  },
  {
    image: "/images/city.jpg",
    category: "Government",
    title: "Museum of New York",
  },
  {
    image: "/images/city3.jpg",
    category: "Public Places",
    title: "Rome Art Museum",
  },
  {
    image: "/images/city4.jpg",
    category: "Culture",
    title: "Town of Rome",
  },
];

export default function CityHighlights() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-[#061f54] text-3xl sm:text-4xl md:text-5xl font-bold">
            Explore City Highlights
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative h-[280px] sm:h-[320px] lg:h-[380px] overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#061f54]/30 group-hover:bg-[#061f54]/60 transition-all duration-700" />

              {/* Camera Count */}
              <div className="absolute top-4 right-4 flex items-center gap-2 text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm z-20">
                <Camera size={16} />
                <span className="text-sm">6</span>
              </div>

              {/* Content */}
              <div className="absolute left-5 right-5 bottom-8 z-20 transition-all duration-500 group-hover:bottom-20">
                <p className="text-white text-base sm:text-lg mb-2 hover:text-orange-500 transition">
                  {item.category}
                </p>

                <h3 className="text-2xl sm:text-[26px] font-bold text-white leading-tight hover:text-orange-500 transition">
                  {item.title}
                </h3>
              </div>

              {/* Arrow Button */}
              <div className="absolute left-5 bottom-5 z-20 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <button className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#061f54] flex items-center justify-center hover:bg-[#ff5421] hover:text-white transition">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10 md:mt-12">
          <span className="w-3 h-3 rounded-full bg-[#ff5421]" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>

      </div>
    </section>
  );
}