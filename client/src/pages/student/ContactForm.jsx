import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_93c0zfk"; // ✅ Your EmailJS Service ID
    const templateID = "template_4gcdyjs"; // ✅ Your EmailJS Template ID
    const userID = "Dcp5QWz2J7Wsl0P38"; // ✅ Your EmailJS Public Key

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      alert("Message sent successfully!");
      setFormData({ from_name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email Error:", error);
      alert("Failed to send message. Please check your EmailJS credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 blur-lg"></div>

      {/* Contact Info */}
      <motion.div
        className="relative lg:w-1/3 bg-white text-gray-900 shadow-xl p-8 rounded-2xl backdrop-blur-md bg-opacity-80"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">📩 Get in Touch</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out to us for any queries or support.</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <p className="text-gray-700">Shivraj-7, Kapilvastu, Nepal</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-500 text-xl" />
            <p className="text-gray-700">+977 9807578681</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-500 text-xl" />
            <p className="text-gray-700">pradipkumarmaurya12345@gmail.com</p>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="relative lg:w-1/2 bg-white text-gray-900 shadow-xl p-8 rounded-2xl backdrop-blur-md bg-opacity-80 mt-6 lg:mt-0 lg:ml-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">📬 Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your full name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-200"
              rows="4"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
