import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Droplets, HeartPulse, Smile, Activity, Shield, Zap } from 'lucide-react';

const TreatmentBenefits = () => {
  const treatments = [
    { title: 'Detoxification', Icon: Droplets },
    { title: 'Pain Relief', Icon: HeartPulse },
    { title: 'Stress Reduction', Icon: Smile },
    { title: 'Improved Circulation', Icon: Activity },
    { title: 'Immune Boost', Icon: Shield },
    { title: 'Energy Balance', Icon: Zap },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(3);

  useEffect(() => {
    const updateSlidesPerPage = () => {
      const newSlidesPerPage = window.innerWidth < 768 ? 1 : 3;
      setSlidesPerPage(newSlidesPerPage);
      setCurrentSlide(0); // Reset to first slide when layout changes
    };

    updateSlidesPerPage();
    window.addEventListener('resize', updateSlidesPerPage);
    return () => window.removeEventListener('resize', updateSlidesPerPage);
  }, []);

  const totalSlides = Math.ceil(treatments.length / slidesPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-[#13aea1] font-semibold mb-2">What We Provide</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50]">
            Our Treatment Benefits
          </h2>
        </motion.div>
        <div className="relative">
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className={`flex-shrink-0 w-full grid gap-8 ${slidesPerPage === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
                {treatments.slice(slideIndex * slidesPerPage, (slideIndex + 1) * slidesPerPage).map((treatment, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-center items-center mb-6">
                      <div className="icon-container">
                        <treatment.Icon className="w-12 h-12 text-[#13aea1]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{treatment.title}</h3>
                    <div className="w-12 h-0.5 bg-gray-200 group-hover:bg-[#13aea1] mx-auto transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
          {totalSlides > 1 && (
            <>
              <button 
                onClick={prevSlide} 
                className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 sm:-ml-4 md:-ml-8 lg:-ml-12 bg-white shadow-lg rounded-full p-3 sm:p-2 hover:bg-gray-100 transition-colors z-20 border border-gray-200"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#13aea1]" />
              </button>
              <button 
                onClick={nextSlide} 
                className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-0 sm:-mr-4 md:-mr-8 lg:-mr-12 bg-white shadow-lg rounded-full p-3 sm:p-2 hover:bg-gray-100 transition-colors z-20 border border-gray-200"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#13aea1]" />
              </button>
            </>
          )}
        </div>
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-[#13aea1]' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentBenefits;