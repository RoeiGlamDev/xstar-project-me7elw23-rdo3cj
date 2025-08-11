import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    image: '/images/alice.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    image: '/images/bob.jpg',
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Developer',
    image: '/images/charlie.jpg',
  },
];

const CleanSSR = () => {
  return (
    <div className="min-h-screen bg-white text-purple-600">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">About CleanSSR</h1>
        <p className="mt-2 text-lg">Your trusted partner in technology solutions.</p>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-base">
            CleanSSR was founded in 2023 with a mission to transform the technology landscape. We specialize in providing clean, efficient, and innovative solutions that help businesses thrive in a digital-first world.
          </p>
        </motion.div>
      </section>

      <section className="bg-purple-600 text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-4"
          >
            Our Values
          </motion.h2>
          <ul className="list-disc pl-5">
            <li>Innovation: We embrace technology to drive change.</li>
            <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
            <li>Customer-Centric: Our clients’ success is our top priority.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-4"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white border border-purple-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-32 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
              <p className="text-purple-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CleanSSR;