import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Package',
    price: '$99/month',
    features: [
      'Basic Cleaning Technology Services',
      'Monthly Maintenance',
      'Email Support',
    ],
  },
  {
    title: 'Pro Package',
    price: '$199/month',
    features: [
      'Advanced Cleaning Technology Services',
      'Bi-weekly Maintenance',
      'Priority Email Support',
      'Performance Analytics',
    ],
  },
  {
    title: 'Enterprise Package',
    price: '$499/month',
    features: [
      'Comprehensive Cleaning Technology Services',
      'Weekly Maintenance',
      '24/7 Support',
      'Custom Performance Analytics',
      'Dedicated Account Manager',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          CleanSSR Pricing Plans
        </h2>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-purple-600 text-white shadow-lg rounded-lg p-6 m-4 w-full max-w-sm transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{tier.title}</h3>
              <p className="text-2xl font-bold mb-4">{tier.price}</p>
              <ul className="mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded shadow hover:bg-purple-200 transition duration-200">
                Choose {tier.title}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;