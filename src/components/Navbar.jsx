 import React, { useState } from 'react';
import { HiOutlineMenu, HiX, HiPhone } from 'react-icons/hi';
import Whitenut_logo from '../assets/Whitenut_logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#E5E7EA] text-white px-4 py-3 fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-20 h-fit  rounded-md flex items-center justify-center font-bold text-white text-sm"
               style={{ backgroundImage: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))' }}>
     
<div className="flex w-20  items-center space-x-2">
  <div className="w-20  rounded-md overflow-hidden">
    <img
      src={Whitenut_logo}
      alt="VelvetCode Logo"
      className="w-60 h-12 object-contain"
    />
  </div>

</div>

          </div>
        
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-gray-500 hover:text-black font-medium">Home</a>
          <a href="#" className="text-gray-500 hover:text-black font-medium">About</a>
          <a href="#" className="text-gray-500 hover:text-black font-medium">Services</a>
   
          <a href="#contact" className="text-gray-500 hover:text-black font-medium flex items-center gap-1">
            <HiPhone className="text-black" />
            <span>Contact</span>
          </a>
          <button className="text-white px-4 py-2 rounded hover:shadow-2xl"
                  style={{ backgroundImage: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))' }}>
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="w-6 h-6 text-black" /> : <HiOutlineMenu className="w-6 h-6 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#E5E7EA] px-4 pt-4 pb-6 space-y-4 flex flex-col text-black">
          <a href="#" className="text-gray-700 hover:text-black font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">Services</a>
  
          <a href="#contact" className="text-gray-700 hover:text-black font-medium flex items-center gap-1">
            <HiPhone className="text-black" />
            <span>Contact</span>
          </a>
          <button className="text-white w-full py-2 rounded"
                  style={{ backgroundImage: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))' }}>
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
