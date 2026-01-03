import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '@/lib/servicesData';

const PricingSection = () => {
  const allServices = servicesData.map(s => ({
    name: s.title,
    description: s.description,
    altText: s.altText,
    imageUrl: s.imageUrl,
  }));

  return (
    <section className="section-padding bg-gradient-to-b from-[#e8f7f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-[#7f8c8d] max-w-3xl mx-auto">
            We offer a comprehensive range of cupping therapies to meet your individual needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="py-6 border-b border-gray-200"
            >
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden shadow-md border-2 border-[#13aea1]/30">
                  <img  className="w-full h-full object-cover" alt={service.altText} src={service.imageUrl} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#2c3e50]">{service.name}</h3>
                  <p className="text-[#7f8c8d]">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;