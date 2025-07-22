import React from 'react';
import { FaCode, FaMobileAlt, FaGamepad, FaChartBar, FaPaintBrush, FaGlobe,FaCheckCircle } from 'react-icons/fa';


const services = [
  {
    icon: <FaCode className="text-white text-2xl" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for exceptional performance and user experience.',
    points: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration'],
    color: 'bg-blue-600'
  },
  {
    icon: <FaMobileAlt className="text-white text-2xl" />,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that engage users and drive business growth across iOS and Android.',
    points: ['Native iOS & Android', 'React Native', 'Flutter Development', 'App Store Optimization'],
    color: 'bg-green-600'
  },
  {
    icon: <FaGamepad className="text-white text-2xl" />,
    title: 'Game Development',
    description: 'Immersive gaming experiences from concept to launch, including mobile games, web games, and interactive experiences.',
    points: ['Unity Development', '2D & 3D Games', 'VR/AR Experiences', 'Game Monetization'],
    color: 'bg-purple-600'
  },
  {
    icon: <FaChartBar className="text-white text-2xl" />,
    title: 'Business Analytics',
    description: 'Data-driven insights and custom dashboards that transform your business intelligence and decision-making processes.',
    points: ['Custom Dashboards', 'Data Visualization', 'Predictive Analytics', 'Real-time Reporting'],
    color: 'bg-orange-600'
  },
  {
    icon: <FaPaintBrush className="text-white text-2xl" />,
    title: 'Graphic Design',
    description: 'Visual identity and design systems that elevate your brand and create memorable user experiences.',
    points: ['Brand Identity', 'UI/UX Design', 'Design Systems', 'Marketing Materials'],
    color: 'bg-pink-600'
  },
  {
    icon: <FaGlobe className="text-white text-2xl" />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation strategies that align technology with your business objectives.',
    points: ['Technology Consulting', 'Digital Transformation', 'System Architecture', 'Performance Optimization'],
    color: 'bg-indigo-600'
  }
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="text-center mb-12">
<h2 className="text-7xl font-semibold">
  Our{' '}
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage: 'linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))',
    }}
  >
    Services
  </span>
</h2>


        <p className="mt-4 max-w-3xl mx-auto">
          We offer a comprehensive suite of premium digital services designed to transform your vision into exceptional digital reality.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="rounded-xl shadow border-gray-400 overflow-hidden">
            <div className={`p-4 h-36 flex items-center justify-start gap-3 ${service.color}`}>
              {service.icon}
              <h3 className="text-gray-50 font-semibold text-xl">{service.title}</h3>
            </div>
            <div className="p-5 bg-gray-100">
              <p className="mb-4 text-xs text-gray-700">{service.description}</p>
              <ul className="text-sm text-gray-800 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-500 text-lg"> <FaCheckCircle className="text-green-500 mr-2" /></span>
                    {point}
                  </li>
                ))}
              </ul>
              <button className="mt-4 cursor-pointer text-sm border w-full text-center text-white border-gray-300 bg-black px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-1">
                Learn More <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
