import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const Footer = () => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Help', href: '#help' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaGithub />, href: '#' },
    { icon: <FaLinkedin />, href: '#' }
  ];

  return (
    <footer className="w-full bg-black pt-16 pb-8 border-t border-gray-800/50">
      <div className="container mx-auto px-4 relative">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-red-500 to-purple-500 opacity-20"
              initial={{ 
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2
              }}
              animate={{
                y: [null, Math.random() * 20],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Newsletter */}
          <motion.div 
            className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 shadow-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-400">Get the latest features and movie recommendations</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                />
                <motion.button
                  className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-r-lg flex items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="mr-2" /> Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                FlixGenie
              </motion.h2>
              <p className="text-gray-400 mb-4">AI-Powered Movie Magic</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="text-gray-400 hover:text-white text-xl transition-colors"
                    whileHover={{ y: -3, color: '#EC4899' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {['Product', 'Company', 'Resources', 'Legal'].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, j) => (
                    <motion.li 
                      key={j}
                      whileHover={{ x: 5 }}
                    >
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Made with <FaHeart className="text-red-500 mx-1" /> by FlixGenie Team
            </motion.p>
            
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-white text-sm"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-white text-sm"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} FlixGenie
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;