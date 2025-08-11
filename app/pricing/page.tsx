import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Package',
    description: 'Essential cleaning services for your tech environment.',
    price: '$99/month',
    features: [
      'Weekly cleaning sessions',
      'Basic tech equipment dusting',
      'Email support',
    ],
  },
  {
    title: 'Premium Package',
    description: 'Comprehensive cleaning with advanced tech care.',
    price: '$199/month',
    features: [
      'Bi-weekly cleaning sessions',
      'In-depth tech equipment care',
      'Priority email & phone support',
      'Monthly tech maintenance check',
    ],
  },
  {
    title: 'Enterprise Package',
    description: 'Custom solutions for large tech companies.',
    price: 'Contact Us',
    features: [
      'Custom cleaning schedule',
      'Dedicated account manager',
      'On-site tech consultation',
      '24/7 support',
    ],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-purple-800 p-10">
      <motion.div
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        CleanSSR Pricing Plans
      </motion.h1>
      <motion.div
        className="text-lg text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Choose the right plan for your tech cleaning needs.
      </motion.p>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <motion.div
            className="bg-purple-50 shadow-lg rounded-lg p-6 m-4 w-80 hover:shadow-xl transition-shadow duration-300"
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-4">{option.title}</h2>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <p className="text-2xl font-bold mb-4">{option.price}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, index) => (
                <li key={index} className="text-gray-500">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300">
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-3xl font-bold mt-12 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold">What is included in the Basic Package?</h3>
          <p className="text-gray-600">The Basic Package includes weekly cleaning sessions, basic tech equipment dusting, and email support.</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold">Can I customize my cleaning plan?</h3>
          <p className="text-gray-600">Yes, our Enterprise Package offers custom solutions tailored to your company's needs.</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold">How do I contact support?</h3>
          <p className="text-gray-600">You can reach our support team via email or by calling the number provided in your account.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;