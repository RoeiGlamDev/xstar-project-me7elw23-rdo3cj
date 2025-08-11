import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onClick?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Experience the Future of Clean with CleanSSR",
  subtitle = "Revolutionizing the cleaning industry through innovative technology solutions.",
  buttonText = "Get Started",
  onClick,
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white text-purple-600 py-20 px-4">
      <motion.div 
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-lg mb-8 text-center max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        onClick={onClick}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </section>
  );
};

export default CTASection;