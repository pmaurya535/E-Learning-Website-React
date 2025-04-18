import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed : ${email}`);
    setEmail(""); // Clear input after submission
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">E-Learning</h2>
          <p className="mt-2 text-gray-400">
            Empowering students with high-quality online education.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/course/search?query" className="hover:text-white transition">Courses</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact & Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="flex items-center space-x-2 text-gray-400">
            <FaEnvelope /> <span>support@elearning.com</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-400 mt-2">
            <FaPhone /> <span>+977-9800000000</span>
          </p>
          <h3 className="text-xl font-semibold text-white mt-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white transition"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white transition"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white transition"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white transition"><FaLinkedin size={24} /></a>
          </div>
        </div>

        {/* Column 4 - Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Newsletter</h3>
          <p className="text-gray-400 mb-3">Subscribe to get updates on new courses & offers.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <div className="flex flex-wrap justify-center space-x-4 text-gray-400">
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          <span>|</span>
          <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} E-Learning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
