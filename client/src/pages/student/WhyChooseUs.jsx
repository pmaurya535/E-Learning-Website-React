import React from "react";
import { FaChalkboardTeacher, FaClock, FaCertificate, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaChalkboardTeacher className="text-5xl text-blue-500" />, title: "Experienced Instructors", description: "Learn from industry experts with real-world experience." },
  { icon: <FaClock className="text-5xl text-green-500" />, title: "Flexible Learning", description: "Study at your own pace, anytime, anywhere." },
  { icon: <FaCertificate className="text-5xl text-yellow-500" />, title: "Certification on Completion", description: "Receive a verified certificate after course completion." },
  { icon: <FaLaptopCode className="text-5xl text-red-500" />, title: "Hands-on Projects", description: "Work on real-world projects to boost your skills." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="p-6 bg-white shadow-lg rounded-xl text-center hover:shadow-xl transition-transform"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 mt-3">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
