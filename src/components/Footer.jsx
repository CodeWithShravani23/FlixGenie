import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-800 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            FlixGenie
          </h2>
          <p className="text-gray-400">AI-Powered Movie Magic</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {['About', 'Privacy Policy', 'Terms', 'Help Center', 'Contact Us'].map((item) => (
            <motion.a
              key={item}
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-white transition"
              href="#"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm">
          © 2025 FlixGenie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

