import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen pt-24 sm:pt-32 md:pt-40 lg:pt-[160px] pb-16 sm:pb-24 md:pb-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #000000 100%)"
      }}
    >

      {/* Subtle GoQuant Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[300px] sm:w-[450px] md:w-[650px] h-[300px] sm:h-[450px] md:h-[650px] bg-[#07080818] rounded-full blur-[150px] sm:blur-[200px] md:blur-[230px]" />
        <div className="absolute top-[45%] right-1/4 w-[400px] sm:w-[650px] md:w-[900px] h-[400px] sm:h-[650px] md:h-[900px] bg-[#0a0a0a10] rounded-full blur-[180px] sm:blur-[220px] md:blur-[260px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex px-4 sm:px-6 md:px-7 py-2 bg-[#00ff7f] text-black rounded-full text-xs sm:text-sm md:text-[15px] font-medium shadow-sm mb-4 max-w-full"
        >
          <span className="hidden sm:inline">GoDark Launch – Crypto's First Institutional Dark Pool →</span>
          <span className="sm:hidden">GoDark Launch →</span>
        </motion.div>

        {/* Execution Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-3 sm:px-4 py-1.5 border border-[#2a2a2a] rounded-md text-xs sm:text-[13px] text-[#d4d4d4] mb-6 sm:mb-8"
        >
          Execution Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold text-white leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] mb-8 sm:mb-10 px-2"
        >
          High-Performance Trade <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Execution for Digital Assets
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4"
        >
          {/* Learn More */}
          <Link
            to="/products"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#00ff7f] text-black font-semibold rounded-lg hover:bg-[#00e76f] transition text-center"
          >
            Learn More
          </Link>

          {/* Book Demo with Glow */}
          <Link
            to="/contact"
            className="w-full sm:w-auto relative px-6 sm:px-8 py-3 bg-[#0c0f0d] border border-white/10 text-white font-semibold rounded-lg overflow-hidden group text-center"
          >
            <span className="absolute inset-0 rounded-lg border border-[#00ff7f] opacity-0 
                             group-hover:opacity-100 group-hover:shadow-[0_0_20px_#00ff7f60] transition duration-300"></span>
            Book Demo
          </Link>
        </motion.div>

        {/* Trade Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 flex justify-center px-4"
        >
          <div className="w-full max-w-5xl rounded-xl sm:rounded-2xl overflow-hidden border border-[#0f1e17] bg-[#07140d] shadow-[0_0_40px_rgba(0,255,127,0.15)]">
            <img
              src="/src/assets/trade-panel.png"
              className="w-full h-auto"
              alt="Trade Panel"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
