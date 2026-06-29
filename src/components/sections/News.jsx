"use client";

import Image from "next/image";
import { FaRegComment } from "react-icons/fa";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      image: "/images/home_slide3.jpg",
      category: "City News, Community",
      title: "List Of City Weekend Celebrations",
    },
    {
      id: 2,
      image: "/images/news.jpg",
      category: "Development",
      title: "New Ustralian Economic Culture",
    },
    {
      id: 3,
      image: "/images/news3.jpg",
      category: "Development",
      title: "Metro Road Design Plan 2025",
    },
  ];

  return (
    <section
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/images/home1_bg_blog.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-12">

        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-[#1f3268] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            News and
            <br />
            Publications
          </h2>

          <p className="text-gray-400 mt-6 lg:mt-8 text-base leading-relaxed">
            The news about recent activities
            <br />
            for needed peoples.
          </p>

          <button className="mt-8 lg:mt-10 border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 font-medium hover:border-red-600 hover:text-red-500 transition">
            More News
          </button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={380}
                  className="w-full h-[220px] sm:h-[250px] object-cover transition duration-500 hover:scale-105"
                />

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 bg-[#ff3b1d] text-white px-3 py-1 text-sm sm:text-base">
                  July 24, 2020
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm">
                  <span className="hover:text-orange-500 cursor-pointer">
                    In {item.category}
                  </span>

                  <FaRegComment />

                  <span>Comment off</span>
                </div>

                <h3 className="text-[#1f3260] text-xl sm:text-[22px] font-bold leading-snug mt-4 hover:text-red-500 cursor-pointer transition">
                  {item.title}
                </h3>

                <button className="mt-6 text-[#1f3268] font-medium flex items-center gap-2 hover:text-red-500 transition">
                  Continue Reading
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}