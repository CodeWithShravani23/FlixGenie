import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiFilm, 
  FiZap, 
  FiDollarSign, 
  FiLock, 
  FiSmartphone,
  FiMail,
  FiArrowRight
} from "react-icons/fi";

const faqData = [
  {
    question: "What is FlixGenie?",
    answer: "FlixGenie is your AI-powered movie assistant that helps you discover movies based on your description or mood.",
    icon: <FiFilm className="text-red-400" size={24} />
  },
  {
    question: "How does the Genie suggest movies?",
    answer: "You provide a description like 'a mind-blowing sci-fi thriller with a twist', and our AI suggests movies matching it.",
    icon: <FiZap className="text-yellow-400" size={24} />
  },
  {
    question: "Can I use FlixGenie for free?",
    answer: "Yes, FlixGenie is completely free to use with basic features. Premium features may be introduced later.",
    icon: <FiDollarSign className="text-green-400" size={24} />
  },
  {
    question: "Do I need to create an account?",
    answer: "Yes, you need to sign up or log in using Firebase Authentication to access personalized suggestions.",
    icon: <FiLock className="text-blue-400" size={24} />
  },
  {
    question: "Is FlixGenie available on mobile?",
    answer: "FlixGenie is fully responsive and works great on both desktop and mobile browsers.",
    icon: <FiSmartphone className="text-purple-400" size={24} />
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden transition-all ${openIndex === index ? 'bg-gray-900' : 'bg-gray-900/50 hover:bg-gray-900/70'}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-lg"
                whileHover={{ scale: 1.01 }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center space-x-4">
                  <span className="flex-shrink-0">
                    {item.icon}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <FiChevronUp className="text-red-400 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-400 text-xl" />
                )}
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-5 overflow-hidden"
                    role="region"
                  >
                    <div className="pb-5">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-4"></div>
                      <p className="text-gray-300 pl-11 pr-4">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center group">
            Contact Support
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;