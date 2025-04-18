import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  { type: "Basic", price: "Free", features: ["Access to Free Courses", "No Certificate"] },
  { type: "Pro", price: "$19/month", features: ["Premium Courses", "Certificates", "Live Support"] },
  { type: "Elite", price: "$49/month", features: ["All Features", "1-on-1 Mentorship", "Exclusive Content"] },
];

const PricingSection = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-indigo-50 to-blue-100">
      <motion.h2 
        className="text-4xl font-extrabold mb-8 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        💰 Choose Your Plan
      </motion.h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white p-8 rounded-2xl shadow-xl w-80 transition-transform"
          >
            <h3 className="text-2xl font-bold text-gray-900">{plan.type}</h3>
            <p className="text-3xl font-extrabold text-blue-600 mt-2">{plan.price}</p>
            <ul className="text-gray-700 mt-4 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
