import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    text: 'The hijama therapy here completely transformed my health. I feel more energized and my chronic pain is gone! The team is professional and caring.',
    avatar: 'A professional portrait of a smiling woman in her 30s',
    image: 'https://images.unsplash.com/photo-1669334177298-c6dc4120a10a?auto=format&fit=crop&w=100&q=80&fm=webp'
  },
  {
    name: 'Ahmed Hassan',
    location: 'London, UK',
    text: 'Professional service with authentic traditional methods. I was impressed by the cleanliness and the knowledge of the practitioners. Highly recommend for anyone seeking natural healing.',
    avatar: 'A friendly-looking man with a beard, smiling',
    image: 'https://images.unsplash.com/photo-1527330009132-6e6a97eeda6c?auto=format&fit=crop&w=100&q=80&fm=webp'
  },
  {
    name: 'Maria Rodriguez',
    location: 'Toronto, Canada',
    text: 'Amazing experience! The practitioners are knowledgeable and the facility is very clean and welcoming. I felt comfortable and well-cared for throughout the session.',
    avatar: 'A woman with curly hair smiling warmly at the camera',
    image: 'https://images.unsplash.com/photo-1642303760632-dd6eea57d26f'
  },
  {
    name: 'David Chen',
    location: 'Sydney, Australia',
    text: 'I was skeptical at first, but the results speak for themselves. My mobility has improved significantly after just a few sessions. Thank you!',
    avatar: 'A man in business casual attire smiling',
    image: 'https://images.unsplash.com/photo-1600878459138-e1123b37cb30?auto=format&fit=crop&w=100&q=80&fm=webp'
  },
  {
    name: 'Fatima Al-Sayed',
    location: 'Dubai, UAE',
    text: 'A truly authentic and spiritual healing experience. The atmosphere is serene and the staff are incredibly respectful and attentive. I will definitely be returning.',
    avatar: 'A woman in traditional headscarf with a gentle smile',
    image: 'https://images.unsplash.com/photo-1620581321911-2f5291d6b6b6?auto=format&fit=crop&w=100&q=80&fm=webp'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleAvatarClick = (index) => {
    setActiveIndex(index);
  };

  const activeTestimonial = useMemo(() => testimonialsData[activeIndex], [activeIndex]);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-lg text-primary font-semibold tracking-wider uppercase mb-2" style={{color: '#13aea1'}}>What Our Clients Think</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" style={{backgroundColor: '#13aea1'}}></div>
        </motion.div>

        <div className="flex flex-col items-center">
          <Quote className="text-primary-dark w-16 h-16 mb-6" style={{color: '#0e8c81'}} />

          {/* Testimonial Text - Simplified */}
          <div className="text-center text-lg md:text-xl text-text-light max-w-3xl mx-auto h-32 flex items-center">
            <p className="transition-opacity duration-200">
              {activeTestimonial.text}
            </p>
          </div>
          
          {/* Avatar Grid - Optimized */}
          <div className="flex items-center justify-center space-x-2 md:space-x-4 my-12">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => handleAvatarClick(index)}
                className="cursor-pointer rounded-xl transition-all duration-200 hover:scale-105"
              >
                <div className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${activeIndex === index ? 'border-[#13aea1] scale-110' : 'border-transparent'}`}>
                  <img 
                    className="w-16 h-16 md:w-20 md:h-20 object-cover" 
                    alt={testimonial.avatar} 
                    src={testimonial.image}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Name and Location - Simplified */}
          <div className="text-center transition-opacity duration-200">
            <h4 className="text-xl font-bold text-secondary">{activeTestimonial.name}</h4>
            <p className="text-text-light">{activeTestimonial.location}</p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleAvatarClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${activeIndex === index ? 'bg-[#13aea1]' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;