import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import Whitenut_logo from '../assets/Whitenut_logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-4 py-3 fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img className="w-32" src={Whitenut_logo} alt="Whitenut Logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Services</a>
          <a href="#" className="hover:text-blue-400">Founder</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <button className="text-white px-4 py-2 rounded hover:shadow-2xl bg-gradient-to-r from-sky-300 to-blue-700 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pt-4 pb-6 space-y-4 flex flex-col text-white">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Services</a>
          <a href="#" className="hover:text-blue-400">Founder</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <button className="text-white w-full py-2 rounded bg-gradient-to-r from-sky-300 to-blue-700">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
