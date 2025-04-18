import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Pradeep Kumar Maurya",
    role: "Frontend Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWb5Zt6BAR_mKGXNqf6SpHBBJjiQFiAMAZQ&s",
  },
  {
    name: "Dhirendra Sah",
    role: "Backend Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WDVXiZSuSUUeURxbBZl4SvMnwmDNdO65LA&s",
  },
  {
    name: "Santosh Mahato",
    role: "UI/UX Designer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxzM_e4qVtnPZttfPhbjcPssC78WndotRPg&s",
  },
];

const Team = () => {
  return (
    <section className="relative py-16 text-center">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* 🔹 Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-transparent opacity-70"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our <span className="text-blue-300">Awesome Team</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We are passionate about building great experiences!
        </motion.p>

        <div className="flex justify-center gap-8 flex-wrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="w-72 p-6 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
