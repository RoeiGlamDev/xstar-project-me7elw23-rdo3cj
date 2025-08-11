import React from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, error }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-purple-600 mb-2" htmlFor={label}>
        {label}
      </label>
      <motion.div
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className={p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 ease-in-out ${error ? 'border-red-500' : 'border-purple-300'}}
        whileHover={{ scale: 1.05 }}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;