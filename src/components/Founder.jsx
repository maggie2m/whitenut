import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const founders = [
  {
    name: 'Alex Morgan',
    title: 'Co-Founder & CEO',
    image: 'https://cdn4.iconfinder.com/data/icons/developer-2/100/developer-solid-2-17-512.png',
    quote:
      'Technology is not just about code and algorithms—it’s about creating solutions that make a meaningful difference in people’s lives and businesses.',
    stats: [
      { label: 'Experience', value: '15+ Years' },
      { label: 'Projects', value: '500+' },
      { label: 'Success Rate', value: '98%' }
    ]
  },
  {
    name: 'Jamie Lee',
    title: 'Co-Founder & CTO',
    image: 'https://cdn4.iconfinder.com/data/icons/developer-2/100/developer-solid-2-17-512.png',
    quote:
      'Innovation lies at the heart of every great product. We build not just to deliver, but to redefine what’s possible.',
    stats: [
      { label: 'Innovation Projects', value: '300+' },
      { label: 'Years in Tech', value: '12' },
      { label: 'Tech Patents', value: '10+' }
    ]
  }
];

export default function Founder() {
  return (
    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="text-center mb-12">
<h2 className="text-7xl font-semibold">
  Meet Our{' '}
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))',
    }}
  >
    Founders
  </span>
</h2>

        <p className="mt-4 max-w-2xl mx-auto">
          Visionary leadership driving innovation and excellence in every project we undertake.
        </p>
      </div>

      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-12">
        {founders.map((founder, index) => (
          <div key={index} className="space-y-6">
            <div className="relative">
         <div
  className="absolute top-4 left-4 w-full h-full transform rotate-1 rounded-xl z-0"
  style={{
    backgroundImage: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))',
  }}
></div>

              <div className="relative z-10 bg-white border rounded-xl p-6 text-center shadow">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="rounded-md mx-auto mb-4 w-full"
                />
                <h3 className="text-xl font-bold">{founder.name}</h3>
                <p className="text-gray-600">{founder.title}</p>
                <div className="flex justify-center gap-4 mt-4 text-gray-600">
                  <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                  <FaEnvelope className="hover:text-blue-500 cursor-pointer" />
                  <FaPhone className="hover:text-blue-500 cursor-pointer" />
                </div>
                <div className="grid grid-cols-3 mt-6 text-sm font-medium text-gray-800">
                  {founder.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-blue-500">{stat.value}</p>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="bg-gray-50 border-l-4 border-blue-400 p-4 italic">
              “{founder.quote}”
              <footer className="mt-2 text-sm font-medium text-gray-600">
                — {founder.name}, {founder.title}
              </footer>
            </blockquote>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 ">
        <div className='border-2 border-gray-400 rounded-2xl p-3'>
          <h4 className="text-3xl font-semibold mb-2 text-center">Company Mission</h4>
          <p>Our mission is to empower businesses through innovative technology solutions that combine aesthetic excellence with functional superiority. We believe that great software should be both powerful and beautiful.</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-3 ">
            <li>Delivering premium quality solutions</li>
            <li>Building long-term partnerships</li>
            <li>Fostering innovation and creativity</li>
          </ul>
        </div>
        <div className="mt-6 text-center">
         <button
  className="text-white px-6 py-3 rounded-md font-semibold"
  style={{
    backgroundImage: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))',
  }}
>
  Schedule a Personal Consultation
</button>

        </div>
      </div>
    </section>
  );
}