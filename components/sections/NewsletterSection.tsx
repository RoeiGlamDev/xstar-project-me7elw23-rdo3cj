import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle email submission
    setIsSuccess(true);
    setEmail('');
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div 
        className="text-purple-600 text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-gray-700 mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7 }}
      >
        {description}
      </motion.p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <motion.div 
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Subscribe
        </motion.button>
      </form>
      {isSuccess && (
        <motion.div 
          className="mt-4 text-green-600"
          initial={{ opacity: 0}} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to CleanSSR!
        </motion.p>
      )}
    </section>
  );
};

export default NewsletterSection;