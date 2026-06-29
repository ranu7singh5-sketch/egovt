"use client";
import { useState } from "react";
import TopBar from "@/components/layouts/TopBar";
import Navbar from "@/components/layouts/Navbar";
import Footers from "@/components/layouts/Footers";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  
} from "react-icons/fa";
import axios from "axios"


export default function Contact1Page() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:5000/api/contact",
      formData
    );

    if (res.data.success) {
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Failed to send message");
    }

  } catch (error) {
    console.log("API Error:", error.response?.data || error.message);
    alert("Something went wrong");
  }
};
  return (
    <>
    <TopBar/>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[250px] md:h-[350px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://demo.ovathemewp.com/egovt/wp-content/uploads/2020/09/bg_contact-2.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center ">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-5 mt-10">
            Contact 1
          </h1>

          <div className="flex items-center text-gray-100 text-sm font-semibold md:text-base">
            <Link href="/" className="hover:text-red-400 transition">
              Home
            </Link>

            <span className="mx-3">/</span>

            <span>Contact 1</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl text-blue-950 font-bold mb-4">Get In Touch</h2>

            <p className="text-gray-500  font-sans mb-6">
              We really appreciate you taking the time to get in touch.<br/>
               Please fill in the form below.
            </p>

            <div className="space-y-4">
              <h2 className="text-blue-950 text-xl font-semibold">City Hall</h2>
              <p>
                <strong className="text-gray-700">Address:</strong> <span className="text-gray-500">
                  123 Main Street, New York
                </span>
              </p>

              <p>
                <strong className="text-gray-700">Email:</strong> <span className="text-gray-500">info@example.com</span>
              </p>

              <p>
                <strong className="text-gray-700">Phone:</strong><span className="text-gray-500"> +1 234 567 890</span>
              </p>
            </div>
            <h3 className="text-blue-950 text-xl font-bold my-8">Opening Hours</h3>
            <p className="text-gray-500 font-sm">Open Daily 10am–5pm Sunday Until 8pm.</p>
            <div className="flex gap-3">
              <a
                href="#"
                className=" mt-10 w-10 h-10 rounded-full bg-blue-300 text-white flex items-center justify-center hover:bg-blue-900 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className=" mt-10 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-800 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className=" mt-10 w-10 h-10 rounded-full bg-pink-400 text-white flex items-center justify-center hover:bg-pink-800 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className=" mt-10 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-blue-950 transition"
              >
                <FaYoutube />
              </a>
              </div>
          </div>
          
          {/* Right Side Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5 p-10 shadow-2xl">
               <h2 className="text-blue-950 font-bold text-2xl">Leave your message</h2>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
              />

              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
              />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
              />

              <textarea rows="5" name="message" value={formData.message}onChange={handleChange}placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
              />

              <button type="submit"
                className="mt-6 md:mt-10 bg-orange-600 text-white hover:bg-blue-950 transition-all duration-300 px-5 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=17&output=embed&iwloc=near"
            title="London Eye, London, United Kingdom">
          </iframe>
        </div>
      </section>
      <Footers />
    </>
  );
}