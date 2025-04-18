import React from "react";
import { motion } from "framer-motion";

const instructors = [
  {
    name: "Pradeep Maurya",
    expertise: "Networking",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQF3dsg9ySzQpA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698257685985?e=2147483647&v=beta&t=6cJr4qzM9hPcuTXcV_57MexKDIJGlycKWkX5XU15JpU",
  },
  {
    name: "Dhirendra Sah",
    expertise: "Cybersecurity",
    image:
      "https://i1.rgstatic.net/ii/profile.image/633310501949440-1528004398808_Q512/Pradeep-Mishra-14.jpg",
  },
];

const InstructorProfiles = () => {
  return (
    <section className="relative py-20 text-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Animated Section Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          👨‍🏫 Meet Our Expert Instructors
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl transform transition"
            >
              <motion.img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
                whileHover={{ scale: 1.2 }}
              />
              <h3 className="text-2xl font-semibold mt-4">{instructor.name}</h3>
              <p className="text-blue-600 font-medium">{instructor.expertise}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                View Profile
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorProfiles;
