import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does GoQuant achieve high-performance execution?',
      answer: 'GoQuant is a platform that allows you to trade cryptocurrencies and other digital assets.',
    },
    {
      question: 'Why is privacy important to trade execution?',
      answer: 'GoQuant\'s self-hosted architecture allows for absolute privacy in IP protection and front-running risk prevention.',
    },
    {
      question: 'How is a fixed-price fee model beneficial to traders?',
      answer: 'GoQuant does not charge volume-based fees, as it inhibits clients from generating alpha by taking away from per-trade profits. Instead, GoQuant operates a fixed-price fee model, enabling clients to maximize trading opportunities while benefiting from high-performance execution.',
    },
    {
      question: 'What\'s the seamless onboarding process?',
      answer: 'GoQuant\'s seamless onboarding process allows clients to install the GoQuant application, on their preferred machine, at any time.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-lg sm:rounded-xl overflow-hidden hover:border-goquant-green/30 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left group"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-goquant-green relative group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-goquant-green/20 blur-sm"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-goquant-green text-xs font-bold">
                        {openIndex === index ? '−' : '+'}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white pr-2 sm:pr-4">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 hidden sm:block"
                >
                  <div className="text-goquant-green text-xl sm:text-2xl font-bold">{openIndex === index ? '−' : '+'}</div>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-11 sm:pl-16 md:pl-20">
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
