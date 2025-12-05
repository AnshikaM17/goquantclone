import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Custom Brass Sheet Manufacturing (CBSM)',
      description: 'Precision-built brass sheets designed for consistent quality and dependable industrial performance.',
      features: [
        'Precision Processes Ensure Consistent Output - Uniform thickness, accurate dimensions, and reliable quality across every batch.',
        'High-Purity Alloys Guarantee Superior Durability - Premium materials offer better strength, conductivity, and corrosion resistance.',
        'Transparent Pricing Simplifies Large-Scale Procurement - Clear and predictable costs for efficient bulk ordering and planning.',
      ],
      image: '/images/post-trade.png',
      imageAlt: 'GoQuant OEMS Dashboard',
    },
    {
      title: 'Material Insights',
      description: 'Accurate, up-to-date, and quality-verified brass material intelligence—optimize planning and production using SKVAD\'s detailed material insights.',
      features: [
        'Access real-time and historical data on alloy composition, hardness, and sheet performance.',
        'Reliable quality insights backed by standardized testing and certification processes.',
        'Data is clean, structured, and ready for engineering, procurement, or manufacturing workflows.',
      ],
      image: '/images/market-data.png',
      imageAlt: 'GoQuant Market Data',
      reverse: true,
    },
    {
      title: 'Advanced Quality Control System (AQCS)',
      description: 'Monitor precision, minimize defects, and maintain consistency—SKVAD AQCS ensures every brass sheet meets strict industrial quality standards.',
      features: [
        'Inspection analytics improve decision-making with accurate quality insights.',
        'Material evaluations support better planning for stability and performance.',
        'Pre-production checks ensure defect-free output and consistent batch quality.',
      ],
      image: '/images/portfolio-management.png',
      imageAlt: 'GoQuant Portfolio Management',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-3 sm:mb-4 inline-block px-3 sm:px-4 py-1 sm:py-1.5 border border-gray-800 rounded-full bg-gray-900/30">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 sm:mt-6 px-4">
            Services We Provide
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6 sm:space-y-8 w-full">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features with Green Circle Icons */}
                <div className="space-y-4 sm:space-y-6">
                  {service.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial={{ opacity: 0, x: service.reverse ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + fIndex * 0.1 }}
                      className="flex items-start space-x-3 sm:space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mt-0.5 sm:mt-1">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-3 border-goquant-green relative group-hover:scale-110 transition-transform duration-300">
                          <div className="absolute inset-0 rounded-full bg-goquant-green/20 blur-sm"></div>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-0.5 sm:pt-1.5">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1 w-full"
              >
                <div className="relative group">
                  {/* Green glow effect behind image */}
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-goquant-green/10 to-emerald-500/10 rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-300 opacity-50"></div>
                  
                  {/* Dashboard mockup */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-2xl group-hover:border-goquant-green/30 transition-all duration-300">
                    <div className="bg-black rounded-md sm:rounded-lg overflow-hidden">
                      {/* Header */}
                      <div className="bg-gray-900/50 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-gray-800">
                        <div className="flex items-center space-x-1.5 sm:space-x-2">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-goquant-green rounded"></div>
                          <span className="text-white font-semibold text-xs sm:text-sm">GoQuant</span>
                        </div>
                        <div className="hidden sm:flex space-x-3 sm:space-x-4 text-xs">
                          <span className="text-goquant-green">Trade</span>
                          <span className="text-gray-500">Data</span>
                          <span className="text-gray-500">Portfolio</span>
                        </div>
                      </div>
                      {/* Content Area */}
                      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          <div className="h-16 sm:h-20 bg-gray-900/70 rounded-md sm:rounded-lg p-1.5 sm:p-2 space-y-1 sm:space-y-1.5">
                            <div className="h-1.5 sm:h-2 bg-gray-800 rounded w-3/4"></div>
                            <div className="h-1.5 sm:h-2 bg-goquant-green/30 rounded w-1/2"></div>
                          </div>
                          <div className="h-16 sm:h-20 bg-gray-900/70 rounded-md sm:rounded-lg"></div>
                        </div>
                        <div className="h-24 sm:h-32 bg-gray-900/50 rounded-md sm:rounded-lg flex items-center justify-center">
                          <div className="text-gray-700 text-[10px] sm:text-xs text-center px-2">{service.imageAlt}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
