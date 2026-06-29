"use client";

import { ChevronRight } from "lucide-react";

export default function OnlineServices() {
  const leftServices = [
    "Parking Permission",
    "File a tax Return",
    "Order Birth certificate",
    "Get Building Permission",
    "Apply for Driving License",
    "Report Pollution",
  ];

  const rightServices = [
    "Public Service Identity",
    "Apply for a City Job",
    "Professional Licenses",
    "National Planning Framework",
    "Apply for Business License",
    "Online Court Services",
  ];

  return (
    <>
      {/* Blue Section */}
      <section className="bg-[#06163A] pt-12 lg:pt-[50px]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[38%_62%] gap-8 lg:gap-12 items-start">
            
            {/* Left Content */}
            <div className="pt-2 text-center lg:text-left">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight">
                Explore Online <br />
                Services & Resource
              </h2>

              <p className="text-[#8d97b5] text-base sm:text-lg lg:text-[20px] pt-5">
                City government providing a wide range of online
                services to people who need help.
              </p>
            </div>

            {/* Right Card */}
            <div className="shadow-2xl relative lg:-mb-24 z-10">
              <div className="grid md:grid-cols-2">

                {/* White Column */}
                <div className="bg-white px-6 sm:px-8 lg:px-[50px] py-8 lg:py-10">
                  {leftServices.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group flex items-center justify-between py-4 border-b border-gray-200"
                    >
                      <span className="text-[#00154f] text-base lg:text-[18px] font-medium transition-all duration-300 group-hover:text-[#ff5421]">
                        {item}
                      </span>

                      <ChevronRight
                        size={18}
                        className="text-gray-400 transition-all duration-300 group-hover:text-[#ff5421] group-hover:translate-x-1"
                      />
                    </a>
                  ))}
                </div>

                {/* Orange Column */}
                <div className="bg-[#ff5421] px-6 sm:px-8 lg:px-[50px] py-8 lg:py-10">
                  {rightServices.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group flex items-center justify-between py-4 border-b border-white/20"
                    >
                      <span className="text-white text-base lg:text-[18px] font-medium transition-all duration-300 group-hover:text-[#00154f]">
                        {item}
                      </span>

                      <ChevronRight
                        size={18}
                        className="text-white transition-all duration-300 group-hover:text-[#00154f] group-hover:translate-x-1"
                      />
                    </a>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* White Section Below */}
      <section className="bg-white h-[80px] sm:h-[100px] lg:h-[120px]"></section>
    </>
  );
}