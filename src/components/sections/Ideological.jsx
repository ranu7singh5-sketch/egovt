"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IdeologicalLeaderSection() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#202b5c] leading-snug">
            Meet Ideological leader for <br />
            youth generation
          </h2>

          <p className="mt-6 md:mt-8 text-gray-500 leading-relaxed text-base md:text-lg">
            Mayor Carnee Simmons is committed to solving problems for town
            people across the state under her leadership.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed text-base md:text-lg">
            Expanding access to affordable healthcare, improving skills,
            respecting working families as the City’s 45th mayor. Mayor Carnee
            was won in the serve a sixth term on October 7, 2018.
          </p>

          <div className="mt-8 md:mt-10 border-l-2 border-red-500 pl-5">
            <h3 className="text-lg md:text-xl font-semibold text-[#202b5d] italic leading-relaxed">
              “Stand at the top of a cliff and jump off and build your wings on
              the way down.”
            </h3>

            <p className="mt-4 text-sm">
              <span className="text-[#17215c] font-medium">
                – Carnee Simmons,
              </span>{" "}
              <span className="text-gray-500">Mayor</span>
            </p>
          </div>

          <div className="mt-8 md:mt-10 flex items-center gap-4">
            <a
              href="https://www.youtube.com/watch?v=XHOmBV4js_E"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
                ▶
              </div>
            </a>

            <h4 className="text-[#1f308b] font-bold leading-snug text-sm md:text-base">
              Video Intro <br />
              About Our Municipal
            </h4>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[700px]">

          {/* Small Building Image */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="absolute right-0 lg:right-[-60px] top-0 lg:top-auto lg:bottom-16 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[330px] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden z-10"
          >
            <Image
              src="/images/home1_img_2.jpg"
              alt="Building"
              fill
              className="object-cover shadow-lg"
            />
          </motion.div>

          {/* Main Leader Image */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] h-[320px] sm:h-[400px] md:h-[480px] lg:h-[500px] z-20"
          >
            <Image
              src="/images/home1_img_1.jpg"
              alt="Leader"
              fill
              className="object-cover shadow-xl"
            />
          </motion.div>

          {/* Overlay Shape */}
          <div className="absolute bottom-0 left-0 sm:left-8 md:left-16 lg:left-28 w-[100px] sm:w-[130px] md:w-[150px] lg:w-[160px] h-[100px] sm:h-[130px] md:h-[150px] lg:h-[160px] z-30">
            <Image
              src="/images/home1_img_3.png"
              alt="Overlay"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}