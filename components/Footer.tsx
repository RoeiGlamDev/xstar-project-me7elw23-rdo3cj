import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className="bg-white text-purple-600 py-8 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <motion.div
          className="text-center mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your go-to technology partner for clean solutions and innovative services.
        </motion.p>
        <div className="flex space-x-4 mb-4">
          <motion.div
            href="#"
            className="hover:text-purple-800 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.div
            href="#reviews"
            className="hover:text-purple-800 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Reviews
          </motion.a>
          <motion.div
            href="#contact"
            className="hover:text-purple-800 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </div>
        <div className="text-center mb-4">
          <p>&copy; {year} {companyName}. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <motion.div
            href="https://facebook.com/CleanSSR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-800 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Facebook
          </motion.a>
          <motion.div
            href="https://twitter.com/CleanSSR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-800 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Twitter
          </motion.a>
          <motion.div
            href="https://linkedin.com/company/CleanSSR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-800 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;