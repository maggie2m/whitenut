import React from 'react';

export default function CoreValues() {
  const values = [
    { title: 'Precision', desc: 'Every line of code, every pixel, is crafted with meticulous attention to detail.' },
    { title: 'Vision', desc: 'We see beyond today’s tech to shape tomorrow’s digital landscape.' },
    { title: 'Passion', desc: 'Our love for technology drives us to exceed expectations.' },
    { title: 'Excellence', desc: 'We set high standards and constantly push boundaries.' },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-7xl font-semibold mb-10">Our <span className="bg-gradient-to-tr from-sky-300 to-blue-700 bg-clip-text text-transparent">Core Values</span></h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-2 md:grid-cols-4 px-6">
        {values.map((val, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600 mb-3">{val.title}</h3>
            <p className="text-gray-700">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
