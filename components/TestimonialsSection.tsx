import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    photo: '/images/alice.jpg',
    review: 'CleanSSR transformed our office tech environment with their innovative cleaning solutions. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Smith',
    photo: '/images/michael.jpg',
    review: 'The attention to detail and use of technology in their cleaning process is unmatched. CleanSSR is a game-changer!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Lee',
    photo: '/images/sarah.jpg',
    review: 'Thanks to CleanSSR, our tech equipment is now spotless and functioning optimally. Excellent service!',
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-center text-3xl font-bold text-purple-600 mb-8">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.photo}
                alt={${testimonial.name}'s photo}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-purple-600">{testimonial.name}</h3>
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <svg key={index} className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.534L0 7.545l6.545-.951L10 1l2.455 5.594L20 7.545l-5.244 3.011 1.122 6.534z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;