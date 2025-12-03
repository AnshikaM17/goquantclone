import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Fast Execution',
      description: 'Execute low-latency trades while encountering reduced slippage',
    },
    {
      title: 'Private Trading',
      description: 'Self-hosted infrastructure for sensitive IP and front-running risk',
    },
    {
      title: 'Sensible Fees',
      description: 'Trade without the burden of high volume-based fees',
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 inline-block px-3 sm:px-4 py-1 sm:py-1.5 border border-gray-800 rounded-full bg-gray-900/30">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 sm:mt-6 px-4">
            Why GoQuant?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-goquant-green/30 transition-all duration-300">
                {/* Green glow effect on hover */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-goquant-green/0 group-hover:bg-goquant-green/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Green Circle Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-goquant-green relative group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-goquant-green/20 blur-md"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
