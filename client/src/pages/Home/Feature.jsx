import React from 'react';
import { FaVoteYea, FaChartLine, FaUsers, FaMobileAlt } from 'react-icons/fa';

const features = [
  {
    title: 'Preparation',
    description: 'Set up your poll in advance or on the fly. Single or multiple-choice questions made easy.',
    icon: <FaVoteYea size={40} className="text-indigo-700" />,
  },
  {
    title: 'Presentation',
    description: 'Include your poll in presentations. Live visualization of answers, automated handling.',
    icon: <FaChartLine size={40} className="text-indigo-700" />,
  },
  {
    title: 'Real-time Voting',
    description: 'See responses from your audience instantly. Keep everyone engaged and informed.',
    icon: <FaUsers size={40} className="text-indigo-700" />,
  },
  {
    title: 'Mobile Friendly',
    description: 'Polls work perfectly on phones, tablets, and desktops. Voting anytime, anywhere.',
    icon: <FaMobileAlt size={40} className="text-indigo-700" />,
  },
];

function Feature() {
  return (
    <div className="bg-yellow-300 sm:p-16 p-6">
      <h1 className="underline decoration-indigo-800 decoration-4 mx-2 font-bold text-6xl text-center mb-8">
        Features
      </h1>
      <p className="my-4 px-2 text-center font-medium text-4xl font-serif text-gray-900">
        Interact with your audience in real-time. Ask questions, see responses instantly, and visualize the results dynamically.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            {feature.icon}
            <h2 className="text-3xl font-bold mt-4 mb-2">{feature.title}</h2>
            <p className="text-gray-700 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
