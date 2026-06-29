"use client";

import Image from "next/image";

const services = [
  {
    image: "/images/home1_3.jpg",
    title: "Service Departments",
    link: "Go Service",
  },
  {
    image: "/images/home1_2.jpg",
    title: "City Visitors Guide",
    link: "Go Service",
  },
  {
    image: "/images/home1_1.jpg",
    title: "Administrations",
    link: "Go Service",
  },
];

export default function ExploreServices() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-6 mb-12 lg:mb-16">
          <h2 className="text-[#1b2f6b] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
            Let’s explore local services,
            <br />
            programs & initiatives.
          </h2>

          <button className="bg-[#001a59] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:bg-[#ff4a22] transition-all duration-300">
            Explore Services
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((item, index) => (
            <div key={index} className="relative pb-16">
              
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={550}
                  height={350}
                  className="w-full h-[260px] sm:h-[300px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="group absolute left-4 right-4 sm:left-8 sm:right-8 -bottom-2 bg-white text-center py-5 sm:py-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                
                <h3 className="text-[#1b2f6a] text-xl sm:text-2xl font-semibold transition-all duration-300 group-hover:text-orange-600">
                  {item.title}
                </h3>

                <div className="overflow-hidden">
                  <p className="text-gray-500 font-sans mt-0 opacity-0 max-h-0 transition-all duration-300 group-hover:opacity-100 group-hover:max-h-10 group-hover:mt-2 group-hover:text-orange-600">
                    {item.link} →
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}