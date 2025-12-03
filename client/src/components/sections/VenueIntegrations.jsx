import React from 'react';
import { motion } from 'framer-motion';

const VenueIntegrations = () => {
  const venues = [
    {
      title: 'Centralized Venues',
      description: 'Connect to major centralized exchanges for swift and efficient trading execution',
      icon: '🏢',
    },
    {
      title: 'Decentralized Venues',
      description: 'Access decentralized exchanges, ensuring flexibility and decentralized asset trading options',
      icon: '🌐',
    },
    {
      title: 'Prime Brokers & OTC Desks',
      description: 'Partner with prime brokers and OTC desks for institutional-grade trading services',
      icon: '🤝',
    },
    {
      title: 'Market Makers',
      description: 'Engage seamlessly with market makers for optimal liquidity and trade execution',
      icon: '💱',
    },
  ];

  return (
    <section id="venue-integrations" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 inline-block px-3 sm:px-4 py-1 sm:py-1.5 border border-gray-800 rounded-full bg-gray-900/30">VENUE INTEGRATIONS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 sm:mt-6 px-4">
            Maximize your trading potential
          </h2>
        </motion.div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 hover:border-goquant-green/30 transition-all duration-300">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-goquant-green/0 group-hover:bg-goquant-green/5 transition-all duration-300"></div>
                
                <div className="relative z-10 text-center space-y-3 sm:space-y-4">
                  {/* Green Circle Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-goquant-green relative group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-goquant-green/20 blur-md"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {venue.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {venue.description}
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

export default VenueIntegrations;
