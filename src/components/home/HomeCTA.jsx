import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const HomeCTA = () => {
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: "🚧 Booking System",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="section-padding bg-[#2c3e50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="gradient-text block">Healing Journey?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Book your consultation today and experience the transformative power of traditional hijama therapy.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBooking}
            className="bg-[#13aea1] text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-[#0e8c81] transition-colors duration-300"
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;