import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, HeartHandshake } from 'lucide-react';

const stats = [
  {
    icon: <Award className="w-8 h-8 text-[#13aea1]" />,
    title: 'Time-Tested Practice',
    description: 'A therapy method practiced for centuries, delivered with modern clinical care.',
  },
  {
    icon: <UserCheck className="w-8 h-8 text-[#13aea1]" />,
    title: 'Certified Practitioners',
    description: 'Our team consists of trained and certified professionals.',
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-[#13aea1]" />,
    title: 'Professional Care',
    description: 'Trusted by clients seeking natural wellness solutions.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const HeroStats = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
        >
          <div className="flex justify-center mb-4">{stat.icon}</div>
          <h3 className="text-lg font-bold text-white mb-2">{stat.title}</h3>
          <p className="text-sm text-gray-300">{stat.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;