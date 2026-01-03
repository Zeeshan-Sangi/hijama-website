import React from 'react';
import { motion } from 'framer-motion';

const TreatmentProcess = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial assessment of your health condition and treatment goals.'
    },
    {
      step: '02',
      title: 'Preparation',
      description: 'Sterilization of equipment and preparation of treatment area.'
    },
    {
      step: '03',
      title: 'Treatment',
      description: 'Professional application of hijama therapy techniques.'
    },
    {
      step: '04',
      title: 'Aftercare',
      description: 'Post-treatment guidance and follow-up recommendations.'
    }
  ];

  return (
    <section className="section-padding bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            Treatment <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-[#7f8c8d] max-w-3xl mx-auto">
            Our systematic approach ensures safe, effective, and comfortable treatment experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#13aea1] to-[#0e8c81] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{process.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">{process.title}</h3>
              <p className="text-[#7f8c8d]">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;