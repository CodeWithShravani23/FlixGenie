import React from 'react';
import { motion } from 'framer-motion';
import { FaFilm, FaRobot, FaSearch, FaRocket } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";



const Features = () => {
  const features = [
   {
    icon: <FaWandMagicSparkles className="text-3xl" />,
    title: "Ask the Genie",
    description: "Describe the type of movie you want to watch and let our AI Genie do the magic!",
    accent: "text-red-500"
  },
  {
    icon: <FaFilm className="text-3xl" />,
    title: "Curated Movie Suggestions",
    description: "Powered by TMDb API — Get curated lists based on your input, updated daily",
    accent: "text-purple-400"
  },
  {
    icon: <FaSearch className="text-3xl" />,
    title: "Smart Search by Description",
    description: "Type in a mood, plot, or vibe — get titles that match the experience you're seeking",
    accent: "text-blue-400"
  },
  {
    icon: <FaRobot className="text-3xl" />,
    title: "AI-Powered Discovery",
    description: "Leverages an intelligent API to find movies that fit your custom prompts",
    accent: "text-amber-400"
  },
  {
    icon: <FaRocket className="text-3xl" />,
    title: "Seamless & Fast Experience",
    description: "Built with React & Tailwind — optimized for speed and responsiveness",
    accent: "text-green-400"
  }
  ];

  return (
    <section className="py-16 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why FlixGenie?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-opacity-50 transition-all duration-300 h-full group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
              }}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 h-1 w-full ${feature.accent.replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${feature.accent} bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 flex-grow group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors">
                  <span className={`text-xs font-semibold ${feature.accent}`}>
                    Learn more →
                  </span>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20 blur-md ${feature.accent.replace('text', 'bg')} transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-40 mt-16 mx-auto w-3/4"></div>
      </div>
    </section>
  );
};

export default Features;