import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ServiceCard = ({ service, index }) => {
  const { toast } = useToast();

  const imageSources = [
    "https://images.unsplash.com/photo-1599553233824-a550a2e99d34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Wet Cupping
    "https://images.unsplash.com/photo-1594024687935-aeb653eb0012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dry Cupping
    "https://images.unsplash.com/photo-1598618433941-866810b80a13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Fire Cupping
    "https://images.unsplash.com/photo-1631551079373-745d314057e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Massage Cupping
    "https://images.unsplash.com/photo-1631551079546-a4c3f5e5b38a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Facial Cupping
    "https://images.unsplash.com/photo-1618359461109-c19535c36324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Sports Cupping
    "https://horizons-cdn.hostinger.com/e647f7e2-6ec4-4d72-8596-d82a32853efe/9fe556ed488869601bd09b43d97f8632.jpg" // Light Cupping
  ];

  const imageUrl = service.imageUrl || imageSources[index % imageSources.length];

  const handleLearnMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl shadow-custom hover-lift overflow-hidden group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={service.altText}
          src={imageUrl}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1627113302629-498a547826fc?auto=format&fit=crop&w=1600&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">{service.title}</h3>
      </div>

      <div className="p-6">
        <p className="text-gray-600 leading-relaxed mb-4">
          {service.description}
        </p>
        
        {service.duration && (
          <div className="flex items-center text-gray-800 mb-3">
            <Clock className="w-5 h-5 mr-2 text-[#13aea1]" />
            <span className="font-semibold">Duration:</span> {service.duration}
          </div>
        )}

        {service.benefits && service.benefits.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Benefits:</h4>
            <ul className="space-y-1">
              {service.benefits.slice(0, 3).map((benefit, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-[#13aea1] flex-shrink-0" />
                  {benefit}
                </li>
              ))}
              {service.benefits.length > 3 && (
                <li className="text-gray-600 text-sm italic">...and more!</li>
              )}
            </ul>
          </div>
        )}

        <Button
          onClick={handleLearnMore}
          className="w-full bg-[#13aea1] text-white hover:bg-[#0e8c81] transition-colors duration-300"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;