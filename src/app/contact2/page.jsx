"use client";

import TopBar from "@/components/layouts/TopBar";
import Navbar from "@/components/layouts/Navbar";
import Footers from "@/components/layouts/Footers";
import Link from "next/link";

export default function Contact2Page() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full bg-cover  py-28"
        style={{
          backgroundImage:
            "url('https://demo.ovathemewp.com/egovt/wp-content/uploads/2020/09/bg_contact-2.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className=" text-white">
            <h1 className="text-5xl font-bold mb-4">
              Contact 2
            </h1>

            {/* Breadcrumb */}
            <nav>
              <ul className="flex  gap-2 text-lg">
                <li>
                  <Link
                    href="/"
                    className="hover:text-yellow-400 transition"
                  >
                    Home
                  </Link>
                </li>

                <li>/</li>

                <li className="text-gray-300">
                  Contact 2
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=17&output=embed&iwloc=near"
            title="London Eye, London, United Kingdom">
          </iframe>
        </div>

      {/* Footer */}
      <Footers />
    </>
  );
}