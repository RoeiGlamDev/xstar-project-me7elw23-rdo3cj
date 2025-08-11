import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-purple-600 text-white hover:bg-purple-700',
  secondary: 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  return (
    <motion.div
      className={`rounded-lg py-2 px-4 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 ${buttonVariants[variant]`}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      aria-label={Button - ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;