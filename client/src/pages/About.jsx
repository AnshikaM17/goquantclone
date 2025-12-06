import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const timeline = [
    {
      year: "2022",
      title: "Focused on Low-Latency Market Data.",
      description: "In September 2022, Denis Dariotis established GoQuant with a unique focus on low-latency market data. The company assembled a talented leadership team and world-class engineers to develop an institutional-grade data product.",
    },
    {
      year: "2023",
      title: "Product Evolution & Industry Recognition.",
      description: "As GoQuant interacted with its customer base, the product focus transitioned towards high-performance trade execution. GoQuant was nominated in two categories at Hedgeweek's Digital Asset Awards in New York City, marking a significant milestone for the company.",
    },
    {
      year: "2024",
      title: "Product Launches and Integrations.",
      description: "GoQuant planned to integrate with major centralized exchanges and decentralized exchanges in Q1 2024, followed by partnerships with prime brokers, OTC desks, and market makers in Q2 2024. These integrations aimed to maximize clients' trading potential by providing swift and efficient execution services.",
    },
  ];

  const leadership = [
    {
      name: "Denis Dariotis",
      role: "Founder & CEO",
      company: "GoQuant",
      image: "/images/denis.jpg",
    },
    {
      name: "Anthony Fiumidinisi",
      role: "Director and President",
      company: "GoQuant",
      image: "/images/anthony.jpg",
    },
    {
      name: "Daniel Cohen",
      role: "Head of Sales",
      company: "GoQuant",
      image: "/images/daniel.jpg",
    },
    {
      name: "Mradul Sahani",
      role: "Head of Engineering",
      company: "GoQuant",
      image: "/images/mradul.jpg",
    },
  ];

  const advisors = [
    {
      name: "Boris Bohrer-Bilowitzki",
      title: "CEO, Concordium. Founding Partner, Copper",
      image: "/images/boris.jpg",
    },
    {
      name: "Petter Kolm",
      title: "Professor, NYU Courant Institute Mathematics in Finance Master's Program",
      image: "/images/petter.jpg",
    },
    {
      name: "Joe Zambrano",
      title: "CTO, STS Capital. Former CTO, Pattern Research",
      image: "/images/joe.jpg",
    },
  ];

  const faqs = [
    {
      question: "How does GoQuant achieve high-performance execution?",
      answer: "GoQuant is a platform that allows you to trade cryptocurrencies and other digital assets.",
    },
    {
      question: "Why is privacy important to trade execution?",
      answer: "GoQuant's self-hosted architecture allows for absolute privacy in IP protection and front-running risk prevention.",
    },
    {
      question: "How is a fixed-price fee model beneficial to traders?",
      answer: "GoQuant does not charge volume-based fees, as it inhibits clients from generating alpha by taking away from per-trade profits. Instead, GoQuant operates a fixed-price fee model, enabling clients to maximize trading opportunities while benefiting from high-performance execution.",
    },
    {
      question: "What's the seamless onboarding process?",
      answer: "GoQuant's seamless onboarding process allows clients to install the GoQuant application, on their preferred machine, at any time.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-medium border border-[#333] rounded-full">
            Who we are
          </span>
          <h1 className="text-6xl font-bold mb-12">About Us</h1>
        </div>
      </motion.section>

      {/* TIMELINE SECTION */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">STORY</span>
            <h2 className="text-5xl font-bold mt-4 mb-8">
              Our <span className="text-[#00FF94]">Journey</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              GoQuant is a digital asset trading infrastructure provider founded by Denis Dariotis in September 2022. 
              The company focuses on delivering high-performance market data and execution services to leading financial institutions
            </p>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-[#1a1a1a]"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Green Dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#00FF94] border-4 border-black"></div>
                
                {/* Year Badge */}
                <div className="inline-block px-3 py-1 mb-3 text-sm font-medium border border-[#333] rounded">
                  {item.year}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* MISSION SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-medium border border-[#333] rounded-full">
            Our Drive
          </span>
          <h2 className="text-5xl font-bold mb-8">Mission</h2>
          <p className="text-3xl font-medium leading-relaxed">
            "GoQuant's mission is to build, establish,<br />
            and maintain enterprise standards<br />
            for digital asset infrastructure"
          </p>
        </div>
      </motion.section>

      {/* LEADERSHIP TEAM */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-medium border border-[#333] rounded-full">
              Team
            </span>
            <h2 className="text-5xl font-bold">Leadership Team</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6"
          >
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#00FF94] transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#222] flex items-center justify-center text-4xl font-bold text-[#00FF94]">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#00FF94] mb-2 font-medium">{member.role}</p>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ADVISORS */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-medium border border-[#333] rounded-full">
              Team
            </span>
            <h2 className="text-5xl font-bold">Advisors</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#00FF94] transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-[#222] flex items-center justify-center text-5xl font-bold text-[#00FF94]">
                    {advisor.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{advisor.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INVESTORS */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-medium border border-[#333] rounded-full">
              OUR INVESTORS
            </span>
            <h2 className="text-4xl font-bold mb-12">Backed by</h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center gap-16 mb-20"
            >
              <div className="text-gray-400 text-2xl font-medium">TYR CAPITAL</div>
              <div className="text-gray-400 text-2xl font-medium">GSR</div>
            </motion.div>

            <h3 className="text-3xl font-bold mb-12">Supported by members of</h3>
            
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center"
            >
              {["CAPITAL UNION BANK", "LOMBARD ODIER", "CONCORDIUM", "copper.co", "FRNT"].map((company, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="text-gray-500 text-sm font-medium"
                >
                  {company}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="border border-[#00FF94] rounded-lg p-6 cursor-pointer hover:bg-[#00FF9410] transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <p className="font-medium text-base">{faq.question}</p>
                  <button className="text-[#00FF94] text-2xl flex-shrink-0">
                    {openFAQ === index ? '×' : '+'}
                  </button>
                </div>
                {openFAQ === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-gray-400 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-8"
      >
        <div className="max-w-6xl mx-auto bg-[#00FF94] rounded-2xl p-16 text-black relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-6xl font-bold mb-4">Schedule a Demo</h2>
            <p className="text-xl mb-8">Realize The Advantage</p>
            <button className="px-8 py-3 bg-black text-[#00FF94] rounded-lg font-medium hover:bg-[#0a0a0a] transition-all duration-300">
              Book Demo Now
            </button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default About;
