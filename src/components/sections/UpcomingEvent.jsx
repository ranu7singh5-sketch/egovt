"use client";

import Image from "next/image";
import {
  FaClock,
  FaMapMarkerAlt,
  FaFileAlt,
  FaChevronRight,
} from "react-icons/fa";

export default function UpcomingEventsDocuments() {
  const events = [
    {
      id: 1,
      day: "02",
      month: "JAN",
      year: "2021",
      category: "Conference",
      title: "The Strategically Build Your Business",
      image: "/images/play.jpg",
      time: "January 2, 2021 @ 15:00 - 19:00",
      location: "32 Quincy Street, Cambridge, MA",
    },
    {
      id: 2,
      day: "19",
      month: "APR",
      year: "2021",
      category: "Entertainment",
      title: "The International Coffee Festival 2021",
      image: "/images/coffee.jpg",
      time: "April 19, 2021 @ 09:30 - 13:00",
      location: "15 Champions Center, Crewey",
    },
  ];

  const documents = [
    {
      title: "Housing Development Plan",
      date: "July 23, 2020",
    },
    {
      title: "Business License Application",
      date: "July 24, 2020",
    },
    {
      title: "Rural Development Reports",
      date: "July 24, 2020",
    },
    {
      title: "Covid-19 Daily Updates",
      date: "July 24, 2020",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-12">

        {/* ================= EVENTS ================= */}
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#24345b]">
              Upcoming Events
            </h2>

            <a
              href="#"
              className="flex items-center gap-2 text-blue-500 font-medium hover:text-red-500 transition"
            >
              See All Events
              <FaChevronRight className="text-xs" />
            </a>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id}>
                {/* Image */}
                <div className="relative overflow-hidden shadow-lg">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={450}
                    className="w-full h-[220px] sm:h-[260px] lg:h-[280px] object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Date Badge */}
                  <div className="absolute top-4 left-0 flex shadow-lg">
                    <div className="bg-[#ff3b1d] text-white px-3 sm:px-4 py-3 font-bold text-lg">
                      {event.day}
                    </div>

                    <div className="bg-white px-3 sm:px-4 py-3 flex items-center gap-2 text-[#24356b] font-semibold text-sm sm:text-base">
                      <span>{event.month}</span>
                      <span>{event.year}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-5 lg:pt-6">
                  <p className="text-blue-500 text-sm font-medium mb-2">
                    {event.category}
                  </p>

                  <h3 className="text-xl sm:text-2xl leading-8 font-bold text-[#24356b] hover:text-red-500 cursor-pointer transition">
                    {event.title}
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-2 text-gray-500 text-sm">
                      <FaClock className="mt-1 shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start gap-2 text-gray-500 text-sm">
                      <FaMapMarkerAlt className="mt-1 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="py-2 px-5 border-2 border-gray-200 mt-6 lg:mt-7 cursor-pointer text-blue-900 font-medium hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DOCUMENTS ================= */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#24356b] mb-8 lg:mb-10">
            City Documents
          </h2>

          <div className="bg-white p-6 sm:p-8 shadow-lg">
            {/* Red Icon Box */}
            <div className="bg-[#ff3b1d] h-[120px] sm:h-[150px] rounded-lg flex items-center justify-center mb-8">
              <FaFileAlt className="text-white text-5xl sm:text-7xl" />
            </div>

            {/* Documents */}
            <div className="space-y-6">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-5 last:border-b-0"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#24356b] hover:text-red-500 cursor-pointer transition">
                    {doc.title}
                  </h3>

                  <p className="text-gray-400 mt-1 text-sm">
                    {doc.date}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold hover:text-red-500 transition">
              More Documents
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}