import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    expertise: 'Tech Innovations & Business Strategy',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    expertise: 'Cloud Computing & Software Development',
  },
  {
    name: 'Clara Lee',
    role: 'Head of Operations',
    expertise: 'Project Management & Quality Assurance',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-purple-700 py-10 px-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-5">About CleanSSR</h2>
        <p className="mb-5">
          CleanSSR is a pioneering technology company dedicated to redefining the cleaning industry through innovative, tech-driven solutions. Our journey began with a vision to integrate advanced technology into cleaning services, ensuring efficiency and sustainability. We leverage cutting-edge tools and data-driven insights to enhance the cleaning experience for our clients.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p className="mb-5">
          At CleanSSR, our mission is to provide exceptional cleaning services powered by technology. We strive to deliver superior quality, reliability, and transparency in every interaction, ensuring that our clients experience a cleaner, healthier environment. We are committed to continuous improvement and innovation, setting the standard in the cleaning industry.
        </p>
        <h3 className="text-2xl font-semibold mb-3">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-purple-700 text-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="italic">{member.role}</p>
              <p className="mt-2">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mt-10">Our Values</h3>
        <ul className="list-disc list-inside mb-5">
          <li>Innovation: Continuously seeking to improve and innovate our services.</li>
          <li>Integrity: Upholding the highest ethical standards in all our interactions.</li>
          <li>Customer-Centric: Prioritizing the needs and satisfaction of our clients.</li>
        </ul>
        <h3 className="text-2xl font-semibold">Achievements</h3>
        <p>
          CleanSSR has proudly been recognized as a leader in technology-driven cleaning solutions, receiving accolades for our commitment to sustainability and customer satisfaction. We continually aim to exceed expectations and set benchmarks in our industry.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;