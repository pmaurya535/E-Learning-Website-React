import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    review:
      "This platform has transformed my learning experience! The courses are well-structured, and the instructors are top-notch.",
    rating: 5,
  },
  {
    name: "Pooja Verma",
    review:
      "The interactive quizzes and hands-on labs make learning fun and engaging. Highly recommended!",
    rating: 4,
  },
  {
    name: "Rohan Gupta",
    review:
      "Affordable courses with great content. I was able to get my CCNA certification thanks to this platform!",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center">
      <motion.h2
        className="text-4xl font-extrabold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🌟 What Our Students Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl transform transition"
          >
            <p className="text-gray-700 italic">"{testimonial.review}"</p>
            <h3 className="mt-4 font-semibold text-gray-900">{testimonial.name}</h3>
            <div className="flex justify-center mt-2 text-yellow-500 text-xl">
              {"⭐".repeat(testimonial.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
