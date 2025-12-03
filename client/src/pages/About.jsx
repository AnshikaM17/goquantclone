import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[#050812] to-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-6">About GoQuant</h1>
          <p className="text-xl text-gray-400">Learn more about our mission and team</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
