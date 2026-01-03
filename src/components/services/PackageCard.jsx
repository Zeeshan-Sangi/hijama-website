import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PackageCard = ({ pkg, index }) => {
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: "🚧 Booking System",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative bg-white rounded-2xl shadow-custom hover-lift p-8 text-center ${
        pkg.popular ? 'ring-2 ring-[#13aea1]' : ''
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#13aea1] text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-[#2c3e50] mb-2">{pkg.name}</h3>
      <p className="text-[#7f8c8d] mb-4">{pkg.sessions}</p>
      <div className="mb-4">
        <span className="text-4xl font-bold text-[#13aea1]">{pkg.price}</span>
        <span className="text-lg text-[#7f8c8d] line-through ml-2">{pkg.originalPrice}</span>
      </div>
      <p className="text-[#7f8c8d] mb-6">{pkg.description}</p>
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className="text-[#13aea1] fill-current" />
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleBooking}
        className={`w-full py-3 rounded-full font-semibold transition-colors duration-300 ${
          pkg.popular
            ? 'bg-[#13aea1] text-white hover:bg-[#0e8c81]'
            : 'border-2 border-[#13aea1] text-[#13aea1] hover:bg-[#13aea1] hover:text-white'
        }`}
      >
        Choose Package
      </motion.button>
    </motion.div>
  );
};

export default PackageCard;