import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-purple-600">
      <motion.div 
        className="text-4xl font-bold my-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h1>
      
      <motion.div 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" 
        onSubmit={handleSubmit} 
        initial={{ y: -50 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-600 leading-tight focus:outline-none focus:shadow-outline" 
            id="name" 
            name="name" 
            type="text" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-600 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            name="email" 
            type="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-600 leading-tight focus:outline-none focus:shadow-outline" 
            id="message" 
            name="message" 
            rows={4} 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" 
            type="submit"
          >
            Send Message
          </button>
        </div>
      </motion.form>

      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-purple-600">Our Location</h2>
        <p className="text-purple-600">123 Tech Lane, Silicon Valley, CA 94016</p>
        <h2 className="text-2xl font-semibold text-purple-600 mt-4">Business Hours</h2>
        <p className="text-purple-600">Monday - Friday: 9 AM - 5 PM</p>
        <p className="text-purple-600">Saturday: 10 AM - 4 PM</p>
        <p className="text-purple-600">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;