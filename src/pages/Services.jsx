import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AppointmentSection from '@/components/home/AppointmentSection';
import { servicesData as servicesFromPublic } from '@/lib/servicesData';

const Services = () => {
  const navigate = useNavigate();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const servicesData = servicesFromPublic;
  
  const handleBookService = () => {
    // Scroll to AppointmentSection on the same page
    const appointmentSection = document.getElementById('appointment-section');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const activeService = servicesData[activeServiceIndex];

  return (
    <>
      <Helmet>
        <title>Hijama Services - Traditional Cupping Therapy | Wet & Dry Cupping</title>
        <meta name="description" content="Comprehensive hijama cupping therapy services including wet cupping, dry cupping, fire cupping, and specialized treatments. Professional, safe, and effective." />
        <meta property="og:title" content="Hijama Services - Traditional Cupping Therapy | Wet & Dry Cupping" />
        <meta property="og:description" content="Comprehensive hijama cupping therapy services including wet cupping, dry cupping, fire cupping, and specialized treatments. Professional, safe, and effective." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20"
            alt="Close-up of hijama cupping therapy on a person's back"
            src="https://images.unsplash.com/photo-1627113302629-498a547826fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          />
        </div>
        <div className="relative z-10 min-h-[90vh] flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight"
              >
                Our Healing
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aea1] to-[#15c5b5]">
                  Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
              >
                Comprehensive hijama therapy services tailored to your unique healing needs.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Tabs Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {servicesData.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveServiceIndex(index)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#13aea1] ${
                  activeServiceIndex === index
                    ? 'bg-gray-800 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeServiceIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-96 lg:h-full w-full">
                <img
                  src={activeService.imageUrl}
                  alt={activeService.altText}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1594024687935-aeb653eb0012?auto=format&fit=crop&w=1200&q=80&fm=webp';
                  }}
                />
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-6 mb-6">
                   <div className="w-24 h-24 rounded-full p-1 border-2 border-[#13aea1]">
                        <img
                            src={activeService.smallImageUrl}
                            alt={activeService.altText}
                            className="w-full h-full object-cover rounded-full"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1618359461109-c19535c36324?auto=format&fit=crop&w=300&q=80';
                            }}
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800">{activeService.title}</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#13aea1] to-[#15c5b5] mt-2"></div>
                    </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeService.description}
                </p>
                <Button 
                    onClick={handleBookService}
                    className="bg-[#13aea1] text-white hover:bg-[#0e8c81] transition-colors duration-300 px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl"
                >
                  Book This Service
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div id="appointment-section">
      <AppointmentSection />
      </div>
    </>
  );
};

export default Services;