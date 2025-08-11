import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm z-50">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-purple-600 text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <button
          onClick={onClose}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-200"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;