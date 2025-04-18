import React from "react";
import { motion } from "framer-motion";

const webinars = [
  { title: "CCNA Live Session", date: "March 20, 2025", time: "5 PM IST", link: "#" },
  { title: "Cybersecurity Basics", date: "March 25, 2025", time: "7 PM IST", link: "#" },
];

const UpcomingWebinars = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <motion.h2
        className="text-4xl font-extrabold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📅 Upcoming Webinars
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {webinars.map((webinar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-900 p-8 rounded-xl shadow-xl transform transition"
          >
            <h3 className="text-2xl font-semibold">{webinar.title}</h3>
            <p className="text-gray-600">{webinar.date} | {webinar.time}</p>
            <motion.a
              href={webinar.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Join Webinar
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingWebinars;
