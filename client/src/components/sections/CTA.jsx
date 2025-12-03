import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          {/* Bright Green Background with subtle gradient */}
          <div className="bg-gradient-to-br from-goquant-green to-emerald-400 p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 relative">
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4"
                >
                  Schedule a Demo
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg sm:text-xl md:text-2xl text-black font-medium"
                >
                  Realize The Advantage
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-full md:w-auto"
              >
                <Link
                  to="/contact"
                  className="block w-full md:inline-block text-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Book Demo Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
