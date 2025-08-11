import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Innovative Cleaning Solutions',
    description: 'At CleanSSR, we leverage cutting-edge technology to provide the most efficient and effective cleaning services tailored to your needs.',
    icon: <svg / your SVG icon here / />,
  },
  {
    title: 'Eco-Friendly Approach',
    description: 'Our cleaning methods are designed with sustainability in mind, using environmentally friendly products that ensure safety for you and the planet.',
    icon: <svg / your SVG icon here / />,
  },
  {
    title: 'Real-Time Monitoring',
    description: 'We utilize the latest technology to offer real-time updates and monitoring of your cleaning services, providing peace of mind and transparency.',
    icon: <svg / your SVG icon here / />,
  },
  {
    title: 'Customer-Centric Service',
    description: 'CleanSSR prioritizes your satisfaction, with a dedicated support team ready to assist you at any time, ensuring a seamless experience.',
    icon: <svg / your SVG icon here / />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-purple-600 text-3xl font-bold mb-6 text-center">Our Features at CleanSSR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-3xl mr-3">{feature.icon}</div>
                <h3 className="text-purple-600 text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;