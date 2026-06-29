"use client";

import CountUp from "react-countup";
import {
  FaRunning,
  FaRoad,
  FaTree,
  FaBuilding,
} from "react-icons/fa";

export default function CounterSection() {
  const data = [
    {
      icon: <FaRunning />,
      title: "Total People lived <br/> in our city",
      number: 62,
      suffix: "k",
    },
    {
      icon: <FaRoad />,
      title: "Square kilometres <br/> region covers",
      number: 4.8,
      suffix: "k",
    },
    {
      icon: <FaTree />,
      title: "Private & domestic <br/> garden land",
      number: 32,
      suffix: "%",
    },
    {
      icon: <FaBuilding />,
      title: "Average Costs of Home <br/> Ownership",
      number: 6,
      suffix: "th",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 mt-12 lg:mt-24 overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/history_bg_couter.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06163A]/80 -z-10"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-5xl sm:text-6xl text-[#ff4a22] mb-5">
                {item.icon}
              </div>

              {/* Counter */}
              <div className="flex items-end gap-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <CountUp
                  end={item.number}
                  duration={3}
                  decimals={item.number % 1 !== 0 ? 1 : 0}
                />

                <span className="text-xl sm:text-2xl">
                  {item.suffix}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}