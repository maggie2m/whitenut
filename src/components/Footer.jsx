import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Whitenut_logo from "../assets/Whitenut_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0C101A] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-10">
        <div>
          <img src={Whitenut_logo} alt="" srcset="" />
          <p className="text-sm mb-4">
            Crafting premium digital experiences through innovative technology
            solutions and exceptional design excellence.
          </p>
          <p className="text-sm">📧 whitenut@gmail.com</p>
          <p className="text-sm">📞 +1 (555) 123-4567</p>
          <p className="text-sm">📍 San Francisco, CA</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Services</h4>
          <ul className="text-sm space-y-1">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Game Development</li>
            <li>Business Analytics</li>
            <li>Graphic Design</li>
            <li>Digital Strategy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
          <p className="text-sm mb-2">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
        </div>
      </div>
      <div className="flex items-center mb-4 w-sm justify-center m-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-l w-full text-black border border-gray-500"
        />
        <button className="bg-[#ffcc33] text-black px-4 py-2 rounded-r hover:bg-blue-300 font-semibold">
          Subscribe
        </button>
      </div>
      <div className="flex gap-4 text-xl m-auto justify-center">
        <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
        <FaTwitter className="hover:text-blue-700 cursor-pointer" />
        <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
        <FaInstagram className="hover:text-blue-700 cursor-pointer" />
      </div>
    </footer>
  );
}
