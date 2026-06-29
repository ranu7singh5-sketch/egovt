"use client";

import { useState, useEffect } from "react";
import { FaPhone, FaClock } from "react-icons/fa";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden lg:block bg-[#06163A] font-sans text-white fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
        scrolled
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 sm:py-3 gap-3">

          {/* Left Side */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 md:gap-6">

            <div className="flex items-center gap-2">
              <FaPhone className="text-orange-500 text-sm sm:text-base md:text-lg flex-shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm lg:text-base">
                Call on: 1800 123 4567
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaClock className="text-orange-500 text-sm sm:text-base md:text-lg flex-shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm lg:text-base">
                Open Hours: Mon - Fri 8:00 am - 6:00 pm
              </span>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 md:gap-5 lg:gap-6">

            <a
              href="#"
              className="text-[11px] sm:text-xs md:text-sm lg:text-base hover:text-orange-500 transition-colors"
            >
              Council
            </a>

            <a
              href="#"
              className="text-[11px] sm:text-xs md:text-sm lg:text-base hover:text-orange-500 transition-colors"
            >
              Vacancies
            </a>

            <a
              href="#"
              className="text-[11px] sm:text-xs md:text-sm lg:text-base hover:text-orange-500 transition-colors"
            >
              Complaints
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}