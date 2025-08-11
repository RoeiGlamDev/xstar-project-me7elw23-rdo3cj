import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: Partial<ContactFormData> = {};
    
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Email is invalid';
    if (!formData.message) validationErrors.message = 'Message is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form data
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '', reason: 'General Inquiry' });
    setErrors({});
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-purple-600 text-2xl font-bold mb-4">Contact CleanSSR</h2>
      <p className="text-gray-700 mb-6">For all your technology cleaning inquiries, please fill out the form below:</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={block w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-600}
            required
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={block w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-600}
            required
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="reason" className="block text-gray-700">Reason for Contact:</label>
          <select
            name="reason"
            id="reason"
            value={formData.reason}
            onChange={handleChange}
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Service Request">Service Request</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={block w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-600}
            required
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>
        <motion.div
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Submit
        </motion.button>
      </form>
      <div className="mt-8">
        <h3 className="text-purple-600 font-semibold">Business Information</h3>
        <p className="text-gray-700">CleanSSR</p>
        <p className="text-gray-700">Location: 123 Tech Avenue, Silicon Valley, CA 94043</p>
        <p className="text-gray-700">Business Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;