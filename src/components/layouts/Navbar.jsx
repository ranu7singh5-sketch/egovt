"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  IoChevronDown,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    "Home",
    "Page",
    "Government",
    "Departments",
    "Services",
    "Events",
    "Contact",
  ];

  const homeItems = [
    { name: "Home Default", href: "/" },
    { name: "Home Classic", href: "/HomeClassic" },
    { name: "Political Party", href: "/political-party" },
    { name: "Travel & Tourism", href: "/travel-tourism" },
    { name: "Local Town", href: "/local-town" },
    { name: "City Mall", href: "/city-mall" },
    { name: "County", href: "/county" },
    { name: "NGO", href: "/ngo" },
  ];
  return (
    
    <nav
      className={`sticky left-0 w-full bg-white z-50 transition-all duration-300 ${scrolled
        ? "top-0 shadow-lg"
        : "lg:top-10 top-0 shadow-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo1.svg"
              alt="logo"
              width={150}
              height={60}
              priority
              className="w-[120px] sm:w-[140px] lg:w-[150px] h-auto"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7 font-medium text-gray-800">
            {/* Home Dropdown */}
            <li className="relative group text-red-500">
              <div className="flex items-center gap-1 py-2 cursor-pointer">
                Home
                <IoChevronDown size={14} />
              </div>

              <div className="absolute left-0 top-full w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="bg-white shadow-xl py-2">
                  {homeItems.map((item, i) => (
                    <li
                      key={i}
                      className="hover:bg-red-500 hover:text-white transition"
                    >
                      <Link
                        href={item.href}
                        className="block px-5 py-3 text-gray-500 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="flex items-center gap-1 hover:text-red-500 transition cursor-pointer">
              Page <IoChevronDown size={14} />
            </li>

            <li className="flex items-center gap-1 hover:text-red-500 transition cursor-pointer">
              Government <IoChevronDown size={14} />
            </li>

            <li className="flex items-center gap-1 hover:text-red-500 transition cursor-pointer">
              Departments <IoChevronDown size={14} />
            </li>

            <li className="flex items-center gap-1 hover:text-red-500 transition cursor-pointer">
              Services <IoChevronDown size={14} />
            </li>

            <li className="flex items-center gap-1 hover:text-red-500 transition cursor-pointer">
              Events <IoChevronDown size={14} />
            </li>

            {/* Contact Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-1 py-2 cursor-pointer hover:text-red-500">
                Contact
                <IoChevronDown size={14} />
              </div>

              <div className="absolute left-0 top-full w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="bg-white shadow-xl py-2">
                  <li className="px-5 py-3 text-gray-500 hover:bg-red-500 hover:text-white transition">
                    <Link href="/contact1">Contact1</Link>
                  </li>

                  <li className="px-5 py-3 text-gray-500 hover:bg-red-500 hover:text-white transition">
                    <Link href="/contact2">Contact2</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            <FiSearch
              className="text-gray-400 hover:text-red-500 transition cursor-pointer"
              size={22}
            />

            {/* Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-sm hover:text-red-500 transition">
                Eng
                <IoChevronDown size={14} />
              </button>

              <div className="absolute right-0 top-full mt-3 w-20 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul>
                  {["Es", "It", "Sp"].map((lang, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 text-gray-500 hover:text-red-500 border-b last:border-none cursor-pointer"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Report Button */}
            <button className="lg:hidden h-11 xl:h-12 px-4 xl:px-5 border-2 border-blue-600 text-blue-600 font-medium hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300">
              Report an Issue
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <FiSearch
              size={22}
              className="text-gray-600 cursor-pointer"
            />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-gray-800"
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px]" : "max-h-0"
          }`}
      >
        <div className="bg-white border-t">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-5 py-4 border-b hover:bg-gray-50 cursor-pointer"
              >
                <span>{item}</span>
                <IoChevronDown size={16} />
              </li>
            ))}
          </ul>

          {/* Language */}
          <div className="px-5 py-4 border-b">
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full">
              Eng
              <IoChevronDown size={14} />
            </button>
          </div>

          {/* Button */}
          <div className="p-5">
            <button className="lg:hidden w-full h-12 border-2 border-blue-600 text-blue-600 font-medium hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300">
              Report an Issue
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}