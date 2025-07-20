import React from 'react';
import { motion } from 'framer-motion';
import { FaFilm, FaRobot, FaFilter, FaUserCog, FaBolt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaFilm className="text-3xl" />,
      title: "Browse Trending Movies",
      description: "Powered by TMDb API - Discover the hottest movies and shows updated daily",
      accent: "text-red-500"
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: "Get Smart Recommendations",
      description: "AI-generated suggestions tailored just for you based on your preferences",
      accent: "text-purple-400"
    },
    {
      icon: <FaFilter className="text-3xl" />,
      title: "Genre-Based Filtering",
      description: "Find exactly what you're in the mood for with powerful filtering options",
      accent: "text-blue-400"
    },
    {
      icon: <FaUserCog className="text-3xl" />,
      title: "Personalized Results",
      description: "AI learns your tastes to deliver content you'll love",
      accent: "text-amber-400"
    },
    {
      icon: <FaBolt className="text-3xl" />,
      title: "Responsive & Fast UI",
      description: "Lightning fast browsing experience on any device",
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