import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-red-600 text-xl font-bold tracking-wide mb-4">FlixGenie</h2>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Help Center</a>
          <a href="#" className="hover:text-white transition">Contact Us</a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} FlixGenie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

