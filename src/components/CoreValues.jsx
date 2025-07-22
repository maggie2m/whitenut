import React from 'react';
import { FiTarget, FiEye, FiHeart, FiAward } from 'react-icons/fi';

export default function CoreValues() {
  const values = [
    {
      title: 'Precision',
      desc: 'Every line of code, every pixel, every interaction is crafted with meticulous attention to detail.',
      icon: <FiTarget size={30} />,
    },
    {
      title: 'Vision',
      desc: 'We see beyond today\'s technology to create solutions that shape tomorrow\'s digital landscape.',
      icon: <FiEye size={30} />,
    },
    {
      title: 'Passion',
      desc: 'Our love for technology and design drives us to exceed expectations in every project.',
      icon: <FiHeart size={30} />,
    },
    {
      title: 'Excellence',
      desc: 'We set the highest standards and continuously push the boundaries of what\'s possible.',
      icon: <FiAward size={30} />,
      active: true,
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-semibold mb-14">
        Our <span className="bg-gradient-to-tr from-yellow-400 to-gray-900 bg-clip-text text-transparent">Core Values</span>
      </h2>
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 md:px-6">
        {values.map((val, idx) => (
<div
  key={idx}
  className="bg-white p-6 rounded border border-gray-300 shadow hover:shadow-lg transition"
>

            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-gray-900 to-yellow-400 p-4 rounded-full text-white">
                {val.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h3>
            <p className="text-gray-600 text-sm">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
