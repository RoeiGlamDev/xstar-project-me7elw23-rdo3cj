import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  review: string;
}

const Card: React.FC<CardProps> = ({ title, content, review }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg p-6 m-4 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h2 className="text-purple-600 text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <blockquote className="text-purple-500 italic border-l-4 border-purple-600 pl-4">
        "{review}"
      </blockquote>
    </motion.div>
  );
};

export default Card;