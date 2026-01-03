import React from 'react';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  const practicePoints = [
    {
      id: 1,
      title: 'Certified Practitioners',
      description: 'Our team consists of highly trained and certified professionals dedicated to your well-being.'
    },
    {
      id: 2,
      title: 'Sterile & Safe',
      description: 'We adhere to the strictest hygiene standards, using single-use equipment for every session.'
    },
    {
      id: 3,
      title: 'Personalized Plans',
      description: 'Each treatment is tailored to your unique health needs and wellness goals for optimal results.'
    }
  ];

  return (
    <section className="section-padding overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Clinic ambiance background"
          src="https://horizons-cdn.hostinger.com/e647f7e2-6ec4-4d72-8596-d82a32853efe/5eecd749a945f71210f7ec33986e7e8c.jpg?auto=format&fit=crop&w=1920&q=80&fm=webp"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80&fm=webp';
          }}
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] lg:min-h-[550px]"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-2xl fade-to-right" 
              alt="Traditional hijama therapy tools and setup" 
              src="/images/hijama tools.webp"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1678356163587-6bb3afb89679?auto=format&fit=crop&w=800&q=80&fm=webp';
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ancient Wisdom,
              <span className="gradient-text block">Modern Practice</span>
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              We combine time-honored Hijama techniques with contemporary standards of safety and care to ensure you receive the best possible treatment.
            </p>
            <div className="space-y-8">
              {practicePoints.map((point, index) => (
                <motion.div 
                  key={point.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border-2 border-[#13aea1] flex items-center justify-center text-[#13aea1] font-bold text-xl">
                    {point.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{point.title}</h3>
                    <p className="text-gray-300">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;