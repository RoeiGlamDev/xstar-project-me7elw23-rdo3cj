import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Advanced Cleaning Technology',
    description: 'Utilizing the latest tech solutions, CleanSSR offers unparalleled cleaning services tailored to your needs.',
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'Our cleaning processes are designed with the environment in mind, using sustainable and non-toxic products.',
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Stay informed with our real-time service updates and monitoring, keeping you in the loop every step of the way.',
  },
];

const CleanSSR: React.FC = () => {
  return (
    <div className="bg-white text-purple-600 font-sans">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">CleanSSR</h1>
      </header>
      <main className="p-8">
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl mb-4"
          >
            Welcome to CleanSSR
          </motion.h2>
          <p className="text-lg">
            Experience the future of cleaning with CleanSSR, where technology meets cleanliness.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="p-6 border border-purple-300 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="text-3xl text-center mb-8">What Our Clients Say</h2>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="border-l-4 border-purple-600 pl-4 italic text-lg mb-4"
            >
              "CleanSSR transformed my workspace! Their technology-driven approach is unmatched."
            </motion.blockquote>
            <p className="text-right">- Alex T.</p>
          </div>
        </section>
      </main>
      <footer className="bg-purple-600 text-white text-center p-4">
        <p>&copy; 2023 CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CleanSSR;