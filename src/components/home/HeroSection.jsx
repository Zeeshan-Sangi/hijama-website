import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import HeroStats from '@/components/home/HeroStats';

const heroFeatures = [
  'Certified Practitioners',
  'Medical-Grade Hygiene',
  'Private Treatment Rooms',
];

const HeroSection = () => {
  const handleBooking = () => {
    const bookingWidget = document.getElementById('booking-widget');
    if (bookingWidget) {
      bookingWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20"
          alt="Serene therapy room with soft lighting and comfortable setup"
          src="https://images.unsplash.com/photo-1627113302629-498a547826fc?auto=format&fit=crop&w=1920&q=80&fm=webp"
          loading="eager"
          fetchpriority="high"
          referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight font-['Poppins']"
            >
              Westend Hijama Clinic:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aea1] to-[#15c5b5]">
                Advanced Recovery & Biological Detox
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
            >
              Experience the gold standard in clinical cupping therapy. We optimize blood circulation and relieve chronic pain using certified, evidence-based protocols.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-10"
            >
              <motion.button
                onClick={handleBooking}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(19, 174, 161, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#13aea1] to-[#15c5b5] hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                Book Your Clinical Session
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              {heroFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-700/60 border border-gray-400/50 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-[#13aea1] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white/95 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="mt-24">
            <HeroStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;