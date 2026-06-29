"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer  className="bg-[#132244] text-gray-300 overflow-hidden">
      
      {/* ================= TOP FOOTER ================= */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row justify-between items-center gap-6">

          {/* Menu */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 text-sm sm:text-base">
            <a href="#" className="hover:text-red-600 transition">
              About Us
            </a>
            <a href="#" className="hover:text-red-600 transition">
              Services
            </a>
            <a href="#" className="hover:text-red-600 transition">
              Events
            </a>
            <a href="#" className="hover:text-red-600 transition">
              News
            </a>
            <a href="#" className="hover:text-red-600 transition">
              Contact
            </a>
            <a href="#" className="hover:text-red-600 transition">
              Portfolio
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-medium hover:text-red-600 cursor-pointer">
              Connect With Us
            </span>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#0b1f57] flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#0b1f57] flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#0b1f57] flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#0b1f57] flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Contact */}
          <div>
            <div className="mb-5">
              {/* Agar SVG me blue text aa raha hai to SVG file me fill color white karna padega */}
              <Image
                src="/images/logo1.svg"
                alt="logo"
                width={150}
                height={60}
                className="w-[130px] sm:w-[150px] h-auto"
              />
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              95 FF3, App Street Avenue
              <br />
              NSW 96209, Canada
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaClock className="mt-1 text-gray-400" />
                <div>
                  <p className="text-white font-medium">
                    Opening Hours:
                  </p>
                  <p className="text-gray-400 text-sm">
                    Mon – Fri: 8:00 am – 6:00 pm
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-400" />
                <p>
                  <span className="text-white hover:text-orange-500 cursor-pointer">
                    Phone:
                  </span>{" "}
                  1800 123 4567
                </p>
              </div>

              <div className="flex items-center gap-3 break-all">
                <FaEnvelope className="text-gray-400" />
                <p>
                  <span className="text-white hover:text-orange-500 cursor-pointer">
                    Email:
                  </span>{" "}
                  demo@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Service Request */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
              Service Request
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Apply for a City Job
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Request a 311 Service
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Get a Parking Permit
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Building Permits
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Online Birth Certificate
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Trade License
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
              Useful Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Our Blog
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Our History
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Documentation
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Environmental
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Town Gallery
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                › Department
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
              City News & Updates
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              The latest Egovt news, articles, and resources,
              sent straight to your inbox every month.
            </p>

            <form>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-white text-gray-700 outline-none"
                />

                <button
                  type="submit"
                  className="bg-[#ff5a1f] hover:bg-blue-600 text-white font-semibold px-8 py-4 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-[#06163A] text-center px-4 py-6">
        <p className="text-gray-500 text-sm sm:text-base font-bold">
          EGovt Theme - Ovatheme © 2025. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}