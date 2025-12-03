import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ------------------------------------------
   ANIMATION VARIANTS
---------------------------------------------*/
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ------------------------------------------
   FAQ COMPONENT
---------------------------------------------*/
const FAQItem = ({ question }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full border border-white/10 rounded-lg p-4 px-6 bg-[#0b0f0d] cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <p className="text-white text-[15px]">{question}</p>

        <div className="w-7 h-7 border border-white/20 rounded-md flex items-center justify-center">
          <span className="text-[#00ff7f] text-lg">{open ? "−" : "+"}</span>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 pt-3 text-[14px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace with real FAQ text.
        </p>
      </motion.div>
    </motion.div>
  );
};

/* ------------------------------------------
   MAIN PRODUCTS PAGE
---------------------------------------------*/
export default function Products() {
  return (
    <div className="bg-black min-h-screen text-white">
      
      {/* PAGE HEADER */}
      <section className="pt-40 pb-20 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 border border-white/20 text-sm rounded-md mb-5"
        >
          DISCOVER THE ADVANTAGE
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl font-semibold"
        >
          Products
        </motion.h1>
      </section>


      {/* ======================================
           SECTION 1 — HIGH PERFORMANCE EXECUTION
      =======================================*/}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12">

        {/* IMAGE LEFT */}
        <motion.img
          src="/src/assets/prod-execution.png"
          className="w-full rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* TEXT RIGHT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            High-Performance Trade Execution
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Execute trades instantly with ultra-low latency, private
            infrastructure, and fixed predictable pricing.
          </p>

          <ul className="space-y-5">
            {[
              "Low-latency execution with co-located access and rapid compute speeds to reduce slippage",
              "Private trading through self-hosted infrastructure to protect sensitive IP and reduce front-running risk",
              "Sensible fees without volume-based fees so clients can focus on what matters most: delivering alpha",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-[#00ff7f] flex-shrink-0" />
                <p className="text-gray-300">{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>

      </section>


      {/* ======================================
           SECTION 2 — MARKET DATA + PORTFOLIO MGMT
      =======================================*/}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Low-Latency Market Data
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Access high-speed historical & live market data reliably through redundant infrastructure.
          </p>

          <ul className="space-y-5">
            {[
              "Clean data with standardized formatting across exchanges & venues",
              "Fast data using direct connections for low-latency execution",
              "Reliable distributed cloud infrastructure for uninterrupted trading",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-[#00ff7f]" />
                <p className="text-gray-300">{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          src="/src/assets/prod-chart.png"
          className="w-full rounded-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

      </section>



      {/* ======================================
           SECTION 3 — PORTFOLIO MANAGEMENT
      =======================================*/}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* IMAGE */}
        <motion.img
          src="/src/assets/prod-risk.png"
          className="w-full rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Extensive Portfolio & Risk Management
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Optimize decisions using TCA, scenario modeling, and real-time risk tools.
          </p>

          <ul className="space-y-5">
            {[
              "Comprehensive risk monitoring with real-time analytics",
              "Analyze positions & portfolio exposures instantly",
              "Detailed reporting on investment performance",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-[#00ff7f]" />
                <p className="text-gray-300">{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>

      </section>



      {/* ======================================
           SECTION 4 — VENUE INTEGRATIONS
      =======================================*/}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1 border border-white/20 text-sm rounded-md mb-5">
            VENUE INTEGRATIONS
          </div>

          <h2 className="text-4xl font-semibold mb-14">
            Integrated with the largest Sources <br /> of liquidity
          </h2>
        </motion.div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "bybit", "coinbase", "kucoin", "binance",
            "okx", "uniswap", "bitfinex", "hyperliquid",
            "bitmex", "kraken", "htx", "dydx"
          ].map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-[#0c0f0d] border border-white/10 rounded-xl flex items-center justify-center"
            >
              <img src={`/src/assets/venues/${logo}.png`} className="h-7 opacity-80" />
            </motion.div>
          ))}
        </div>

      </section>



      {/* ======================================
           SECTION 5 — FAQ
      =======================================*/}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "How does GoQuant achieve high-performance execution?",
            "Why is privacy important in execution?",
            "How is a fixed-price model beneficial?",
            "What’s the seamless onboarding process?",
          ].map((q, idx) => (
            <FAQItem key={idx} question={q} />
          ))}
        </div>
      </section>



      {/* ======================================
           SECTION 6 — SCHEDULE DEMO CTA
      =======================================*/}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-xl bg-[#00ff7f] px-10 py-16 shadow-[0_0_40px_#00ff7f55]"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Schedule a Demo
          </h2>

          <p className="text-black/70 mb-10">Realize The Advantage</p>

          <Link
            to="/contact"
            className="px-6 py-3 bg-black text-[#00ff7f] rounded-md text-sm font-semibold hover:opacity-80 transition"
          >
            Book Demo Now
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
