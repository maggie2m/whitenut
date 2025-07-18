import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-300 to-blue-700 -300 text-white text-center py-20 px-6 h-full">
      <h1 className="text-4xl md:text-7xl font-bold mt-28 w-fit lg:w-3xl m-auto">
        Crafting Digital <span className="text-gray-700 ">Excellence</span>
      </h1>
      <p className="mt-6 max-w-3xl text-gray-300 mx-auto text-2xl">
        We transform visionary ideas into extraordinary digital experiences through cutting-edge software development, innovative design, and strategic technology solutions.
      </p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-gradient-to-r from-sky-300 to-blue-700  text-white  px-6 py-2 rounded font-semibold hover:shadow-2xl cursor-pointer text-xl">
          Start Your Project
        </button>
        <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black text-xl cursor-pointer">
          View Our Work
        </button>
      </div>
    </section>
  );
}
