"use client";

import {
  FaUniversity,
  FaBriefcase,
  FaIndustry,
  FaBus,
  FaTree,
  FaBalanceScale,
} from "react-icons/fa";

export default function GovernmentServices() {
  const services = [
    {
      icon: <FaUniversity />,
      title: "Your Government",
    },
    {
      icon: <FaBriefcase />,
      title: "Jobs and Unemployment",
    },
    {
      icon: <FaIndustry />,
      title: "Business and Industry",
    },
    {
      icon: <FaBus />,
      title: "Roads and Transport",
    },
    {
      icon: <FaTree />,
      title: "Culture and Recreation",
    },
    {
      icon: <FaBalanceScale />,
      title: "Justice, Safety and the Law",
    },
  ];

  return (
    <section className="-mt-30 relative w-full">
      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="bg-white shadow-2xl ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
            {services.map((service, index) => (
              <div  
                key={index}
                className="group flex flex-col items-center text-center px-6 py-12 borde cursor-pointer transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#ff4a22]">
                  <span className="text-[#ff4a22] text-4xl transition-all duration-300 group-hover:text-white">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#263B73] text-lg font-semibold leading-7 transition-all duration-300 group-hover:text-[#ff4a22]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orange Section */}
      <div className="bg-[#ee4722] -mt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <p className="text-white text-xl lg:text-xl font-medium text-center py-12 font-sans">
              The official guide to living, working, visiting and investing in
              Texas
            </p>

            <button className="h-12 px-7 bg-orange-700 text-white font-medium font-sans hover:bg-blue-950 transition-all duration- 300">
              Lets Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}