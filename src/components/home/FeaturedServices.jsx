import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { servicesData } from '@/lib/servicesData';

const FeaturedServices = () => {
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: "🚧 Booking System",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const featuredServices = servicesData.slice(0, 3).map(s => ({
    title: s.title,
    description: s.description,
    image: s.imageUrl,
  }));

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            A Modern Approach to <span className="gradient-text">Holistic Healing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a curated selection of cupping therapies designed to restore balance, alleviate discomfort, and promote natural healing.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-xl bg-gray-100 group-hover:bg-[#13aea1]/10 transition-colors duration-300"></div>
                <img
                  className="w-full h-full object-cover rounded-xl p-2 border-4 border-transparent group-hover:border-[#13aea1]/50 transition-all duration-300 transform group-hover:scale-105" 
                  alt={service.title}
                  src={service.image}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1599553233824-a550a2e99d34?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="w-16 h-0.5 bg-gray-200 group-hover:bg-[#13aea1] mx-auto mb-4 transition-colors duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <motion.button
                onClick={handleBooking}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#13aea1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0e8c81] transition-colors duration-300"
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;