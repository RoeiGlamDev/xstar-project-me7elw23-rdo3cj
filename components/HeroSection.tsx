import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "CleanSSR", 
  subtitle = "Innovative Cleaning Technology Solutions", 
  ctaText = "Get Started", 
  ctaLink = "#services" 
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-purple-500">
      <div className="text-center max-w-lg p-8">
        <motion.div 
          className="text-5xl font-bold text-purple-800"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          href={ctaLink} 
          className="inline-block mt-6 px-6 py-3 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.a>
        <div className="mt-8">
          <p className="text-gray-500">Trusted by leading technology firms and clients.</p>
          <p className="text-gray-500">Join us in revolutionizing the cleaning industry.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;