import React from "react";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }
});

export default function Insights() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[120px] px-6">

      {/* PAGE HEADER */}
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        animate="show"
        className="text-center mb-16"
      >
        <div className="inline-block px-3 py-1 border border-[#2a2a2a] text-xs rounded-md mb-4">
          Blog
        </div>
        <h1 className="text-4xl md:text-6xl font-bold">
          The latest insights
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Stay informed on GoQuant's latest updates.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT GRID */}
        <div className="lg:col-span-2 space-y-10">

          {/* CARD 1 */}
          <motion.div
            variants={fadeIn(0.2)}
            initial="hidden"
            animate="show"
            className="border border-[#1a1a1a] rounded-lg p-5 cursor-pointer hover:border-[#00ff7f] transition"
          >
            <img
              src="/src/assets/insights1.png"
              className="rounded-lg mb-4"
            />

            <p className="text-sm text-gray-400">
              Oct. 31, 2025 • Press Release
            </p>

            <h2 className="text-xl font-semibold mt-2 leading-tight">
              GoQuant, Copper, and GSR Partner to Launch GoDark — Crypto’s First Institutional Dark Pool
            </h2>

            <button className="mt-4 text-[#00ff7f] text-sm">Read More</button>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="show"
            className="border border-[#1a1a1a] rounded-lg p-5 cursor-pointer hover:border-[#00ff7f] transition"
          >
            <img
              src="/src/assets/tedx.png"
              className="rounded-lg mb-4"
            />

            <p className="text-sm text-gray-400">
              June 19, 2025 • Technology
            </p>

            <h2 className="text-xl font-semibold mt-2 leading-tight">
              Building the Future of Digital Asset Infrastructure | TEDx Talk
            </h2>

            <button className="mt-4 text-[#00ff7f] text-sm">Read More</button>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeIn(0.4)}
            initial="hidden"
            animate="show"
            className="border border-[#1a1a1a] rounded-lg p-5 cursor-pointer hover:border-[#00ff7f] transition"
          >
            <img
              src="/src/assets/fund-alert.png"
              className="rounded-lg mb-4"
            />

            <p className="text-sm text-gray-400">
              July 9, 2025 • Press Release
            </p>

            <h2 className="text-xl font-semibold mt-2 leading-tight">
              GoQuant Featured in Hedge Fund Alert
            </h2>

            <button className="mt-4 text-[#00ff7f] text-sm">Read More</button>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={fadeIn(0.5)}
            initial="hidden"
            animate="show"
            className="border border-[#1a1a1a] rounded-lg p-5 cursor-pointer hover:border-[#00ff7f] transition"
          >
            <img
              src="/src/assets/gsr.png"
              className="rounded-lg mb-4"
            />

            <p className="text-sm text-gray-400">
              May 8, 2025 • Press Release
            </p>

            <h2 className="text-xl font-semibold mt-2 leading-tight">
              GoQuant Raises $4M in Seed Funding Led by GSR
            </h2>

            <button className="mt-4 text-[#00ff7f] text-sm">Read More</button>
          </motion.div>

          {/* LOAD MORE */}
          <motion.div variants={fadeIn(0.6)} initial="hidden" animate="show" className="text-center">
            <button className="px-6 py-2 border border-[#2a2a2a] hover:border-[#00ff7f] rounded-lg text-gray-300 hover:text-white transition">
              Load More
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Search Bar */}
          <div className="border border-[#1a1a1a] rounded-lg p-4">
            <input
              type="text"
              placeholder="Search Post"
              className="w-full bg-transparent outline-none text-sm text-gray-300"
            />
          </div>

          {/* Recent Posts */}
          <div className="border border-[#1a1a1a] rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>

            <div className="space-y-6">
              {/* Recent Post 1 */}
              <div>
                <p className="text-sm text-gray-400">Oct. 31, 2025 • Press Release</p>
                <h4 className="font-medium mt-1">
                  GoQuant, Copper, and GSR Partner to Launch GoDark — Crypto’s First Institutional Dark Pool
                </h4>
              </div>

              {/* Recent Post 2 */}
              <div>
                <p className="text-sm text-gray-400">June 19, 2025 • Technology</p>
                <h4 className="font-medium mt-1">
                  Building the Future of Digital Asset Infrastructure | TEDx Talk
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ SECTION */}
      <motion.div
        variants={fadeIn(0.5)}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto mt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* FAQ CARD */}
          {[
            "How does GoQuant achieve high-performance execution?",
            "Why is privacy important to trade execution?",
            "How is a fixed-price fee model beneficial to traders?",
            "What’s the seamless onboarding process?"
          ].map((q, i) => (
            <div
              key={i}
              className="border border-[#1a1a1a] rounded-lg p-4 flex justify-between items-center"
            >
              <p className="text-sm">{q}</p>
              <button className="text-[#00ff7f] text-xl">+</button>
            </div>
          ))}

        </div>
      </motion.div>

      {/* CTA SECTION */}
      <motion.div
        variants={fadeIn(0.7)}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto mt-24"
      >
        <div className="bg-[#00ff7f] text-black rounded-xl p-12 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">Schedule a Demo</h2>
            <p className="mt-2 text-black/70">Realize The Advantage</p>
          </div>
          <button className="px-6 py-2 bg-black text-white rounded-md">
            Book Demo Now
          </button>
        </div>
      </motion.div>

    </div>
  );
}
