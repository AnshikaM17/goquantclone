import React from 'react';
import { motion } from 'framer-motion';

const Investors = () => {
  const backedBy = [
    { name: 'Tyr Capital', logo: '/images/tyr-capital-logo.svg' },
    { name: 'GSR', logo: '/images/gsr-logo.svg' },
  ];

  const supportedBy = [
    { name: 'Capital Union Bank', logo: '/images/cap.svg' },
    { name: 'Lombard Oddier', logo: '/images/lombard-logo.svg' },
    { name: 'Concordium', logo: '/images/concor.svg' },
    { name: 'Copper.co', logo: '/images/copper.co-logo.svg' },
    { name: 'FRNT', logo: '/images/frnt.svg' },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* OUR INVESTORS Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-8 inline-block px-4 py-1.5 border border-gray-800 rounded-full bg-gray-900/30">OUR INVESTORS</p>
        </motion.div>

        {/* Backed By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-white mb-8 text-center">Backed by</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {backedBy.map((investor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="w-32 h-16 flex items-center justify-center bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:bg-gray-900 hover:border-goquant-green/30 transition-all">
                  <span className="text-white font-semibold text-sm">{investor.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supported By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-8 text-center">Supported by members of</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {supportedBy.map((supporter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="w-28 h-14 flex items-center justify-center bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:bg-gray-900 hover:border-goquant-green/30 transition-all">
                  <span className="text-white text-xs font-medium text-center">{supporter.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investors;
