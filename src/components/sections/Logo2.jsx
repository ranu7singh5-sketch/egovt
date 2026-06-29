"use client";

import Image from "next/image";

const brands = [
  "/images/about_logo_1.png",
  "/images/about_logo_2.png",
  "/images/about_logo_3.png",
  "/images/about_logo_5.png",
  "/images/about_logo_4.png",
];

export default function BrandSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          
          {brands.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={logo}
                alt={`Brand ${index + 1}`}
                width={140}
                height={70}
                className="
                  w-[100px]
                  sm:w-[120px]
                  lg:w-[140px]
                  h-auto
                  opacity-70
                  hover:opacity-100
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}