"use client";

import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    image: "/images/8.png",
    name: "Wenalbooze",
    role: "Councilor, District 3",
    email: "district3@citygov.com",
    phone: "(+91)800238798",
  },
  {
    image: "/images/7.png",
    name: "Kanaov Marla",
    role: "Councilor, District 2",
    email: "district2@citygov.com",
    phone: "(+91)8002354565",
  },
  {
    image: "/images/6.png",
    name: "Dinaval Jall",
    role: "Councilor, District 1",
    email: "district1@citygov.com",
    phone: "(+91)8002352321",
  },
  {
    image: "/images/single-1.jpg",
    name: "Cevin Peter",
    role: "City Council President",
    email: "president@citygov.com",
    phone: "(+91)8002359595",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#051c4f] text-3xl sm:text-4xl md:text-5xl font-bold">
            Meet City Council
          </h2>

          <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            The city council have the real super powers as administration to
            lead country.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[280px] sm:h-[320px] lg:h-[340px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Social Icons */}
                <div
                  className="
                    absolute bottom-5 left-1/2 -translate-x-1/2
                    bg-white rounded-full px-4 py-3 flex gap-4 shadow-lg
                    opacity-0 translate-y-4
                    transition-all duration-500
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  <FaTwitter className="text-gray-500 hover:text-orange-600 cursor-pointer transition" />

                  <FaFacebookF className="text-gray-500 hover:text-orange-600 cursor-pointer transition" />

                  <FaLinkedinIn className="text-gray-500 hover:text-orange-600 cursor-pointer transition" />

                  <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer transition" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-[22px] text-[#0b2354] font-medium hover:text-orange-500 cursor-pointer transition">
                  {member.name}
                </h3>

                <p className="text-[#0a4fc6] font-medium mb-4 text-sm sm:text-base">
                  {member.role}
                </p>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-gray-500 hover:text-orange-600 cursor-pointer transition break-all">
                    <Mail size={18} />
                    <span className="text-sm sm:text-base">
                      {member.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-500 hover:text-orange-600 cursor-pointer transition">
                    <Phone size={18} />
                    <span className="text-sm sm:text-base">
                      {member.phone}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}