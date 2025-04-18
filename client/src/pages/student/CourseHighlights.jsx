import React from "react";
import { motion } from "framer-motion";

const courses = [
  { name: "CCNA Networking", duration: "6 Weeks", rating: "⭐⭐⭐⭐⭐", price: "$199", difficulty: "Intermediate" },
  { name: "Ethical Hacking", duration: "4 Weeks", rating: "⭐⭐⭐⭐", price: "$249", difficulty: "Advanced" },
  { name: "ASP.NET MVC", duration: "8 Weeks", rating: "⭐⭐⭐⭐⭐", price: "Free", difficulty: "Beginner" },
];

const CourseHighlights = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-blue-50 to-gray-100">
      <motion.h2 
        className="text-4xl font-extrabold mb-8 text-gray-900"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        🔥 Trending Courses
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg border transition-transform"
          >
            <h3 className="text-2xl font-semibold text-gray-900">{course.name}</h3>
            <p className="text-gray-600">{course.duration}</p>
            <p className="text-yellow-500">{course.rating}</p>
            <p className="font-bold text-lg">{course.price}</p>
            <p className={`text-sm font-medium mt-2 ${
              course.difficulty === "Beginner" ? "text-green-600" : 
              course.difficulty === "Intermediate" ? "text-blue-600" : 
              "text-red-600"
            }`}>
              {course.difficulty}
            </p>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Enroll Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseHighlights;
