import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does SKVAD ensure high-precision brass sheet manufacturing?',
      answer: 'SKVAD uses advanced rolling, cutting, and finishing systems that maintain strict dimensional tolerances. Each batch undergoes multiple quality checks to ensure uniform thickness, smooth surfaces, and consistent performance across all sheets.',
    },
    {
      question: 'Why is material purity important in brass sheet production?',
      answer: 'Purity directly affects strength, conductivity, corrosion resistance, and overall durability. SKVAD sources high-grade brass alloys and conducts detailed composition testing, ensuring every sheet meets industry standards for reliability.',
    },
    {
      question: 'How is SKVAD\'s transparent pricing model beneficial for bulk buyers?',
      answer: 'SKVAD\'s straightforward pricing structure eliminates hidden costs, making it easier for manufacturers to plan budgets, secure long-term supply, and maintain stable production schedules—especially during large-volume procurement.',
    },
    {
      question: 'What\'s the process for placing and receiving custom-size sheet orders?',
      answer: 'Customers share their required dimensions, thickness, and grade. SKVAD prepares a detailed quotation, confirms specifications, and produces the custom sheets after thorough inspection and quality certification—ensuring accuracy and timely delivery.',
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
