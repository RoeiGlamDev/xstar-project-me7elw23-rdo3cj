import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: number;
  clientsServed: number;
  projectsCompleted: number;
  yearsInBusiness: number;
}

const StatsSection: React.FC<StatsProps> = ({
  achievements,
  clientsServed,
  projectsCompleted,
  yearsInBusiness,
}) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            className="bg-purple-600 text-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                {achievements}
              </motion.span>
            </h3>
            <p className="text-lg">Achievements</p>
          </motion.div>

          <motion.div
            className="bg-purple-600 text-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                {clientsServed}
              </motion.span>
            </h3>
            <p className="text-lg">Clients Served</p>
          </motion.div>

          <motion.div
            className="bg-purple-600 text-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                {projectsCompleted}
              </motion.span>
            </h3>
            <p className="text-lg">Projects Completed</p>
          </motion.div>

          <motion.div
            className="bg-purple-600 text-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                {yearsInBusiness}
              </motion.span>
            </h3>
            <p className="text-lg">Years in Business</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;