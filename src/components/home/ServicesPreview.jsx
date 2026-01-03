import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

const ServicesPreview = () => {
  const services = servicesData.slice(0, 6);

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of traditional cupping therapies, 
            each designed to promote healing and wellness naturally.
          </p>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link to="/services" key={index}>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full text-sm font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors shadow-sm"
              >
                {service.title}
              </motion.button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;