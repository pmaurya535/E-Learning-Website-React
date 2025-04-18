import React from "react";
import { motion } from "framer-motion";

const badges = [
  { title: "Beginner", icon: "🥉", description: "Completed 1 Course" },
  { title: "Intermediate", icon: "🥈", description: "Completed 5 Courses" },
  { title: "Expert", icon: "🥇", description: "Completed 10+ Courses" },
];

const Gamification = () => {
  return (
    <section className="relative py-16 text-center text-white bg-gray-900">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎯 Earn Exclusive Badges
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-gray-300 border border-gray-500 border-opacity-30"
            >
              <h3 className="text-5xl">{badge.icon}</h3>
              <h3 className="text-2xl font-semibold mt-4">{badge.title}</h3>
              <p className="text-gray-400 mt-2">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gamification;
