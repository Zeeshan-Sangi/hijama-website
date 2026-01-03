import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { saveLead } from '@/lib/firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceInterest: formData.service,
      message: formData.message,
      source: 'Contact Form',
      timestamp: new Date().toISOString(),
    };

    try {
      console.log('📧 Contact Form: Saving to Firebase...', leadData);
      // Save to Firebase
      const leadId = await saveLead(leadData);
      console.log('✅ Contact Form: Saved to Firebase with ID:', leadId);
      
      // Also save to localStorage as backup
      const existingLeads = JSON.parse(localStorage.getItem('hijamaLeads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('hijamaLeads', JSON.stringify(existingLeads));

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Success - no alert, just log
      console.log('✅ Contact form submitted successfully');
    } catch (error) {
      console.error('❌ Contact Form: Error saving lead:', error);
      console.error('❌ Error details:', {
        message: error.message,
        code: error.code,
        stack: error.stack
      });
      // Don't show alert, just log error
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+44 7535 062244'],
      description: 'Call us for immediate assistance',
      link: 'tel:+447535062244'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['contact@westendhijamaclinic.co.uk'],
      description: 'Send us your questions anytime',
      link: 'mailto:contact@westendhijamaclinic.co.uk'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Wellness St, West End, London'],
      description: 'Visit our modern facility',
      link: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9am - 6pm'],
      description: 'We are here when you need us',
      link: null
    }
  ];

  const services = [
    'Wet Cupping (Hijama)',
    'Dry Cupping',
    'Fire Cupping',
    'Massage Cupping',
    'Facial Cupping',
    'Sports Cupping',
    'General Consultation'
  ];

  const faqs = [
    {
      question: 'Is hijama therapy safe?',
      answer: 'Yes, when performed by certified practitioners using sterile equipment and proper techniques, hijama is very safe.'
    },
    {
      question: 'How often should I get hijama treatment?',
      answer: 'Treatment frequency depends on your individual needs. Generally, monthly sessions are recommended for maintenance.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit includes a consultation, health assessment, and explanation of the treatment process before beginning therapy.'
    },
    {
      question: 'Are there any side effects?',
      answer: 'Minor bruising or marks are normal and typically fade within a few days. Serious side effects are rare with proper technique.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Westend Hijama Clinic - Book Appointment | Traditional Cupping Therapy</title>
        <meta name="description" content="Contact our hijama center to book appointments, ask questions, or learn more about traditional cupping therapy. Professional consultation available." />
        <meta property="og:title" content="Contact Westend Hijama Clinic - Book Appointment | Traditional Cupping Therapy" />
        <meta property="og:description" content="Contact our hijama center to book appointments, ask questions, or learn more about traditional cupping therapy. Professional consultation available." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20"
            alt="Close-up of hijama cupping therapy on a person's back during a session"
            src="https://images.unsplash.com/photo-1627113302629-498a547826fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80';
            }}
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
                Get in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aea1] to-[#15c5b5]">
                  Touch With Us
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
              >
                Ready to start your healing journey? We're here to answer your questions and book your consultation.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
              Contact <span className="gradient-text">Information</span>
            </h2>
            <p className="text-lg text-[#7f8c8d] max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-custom hover-lift p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#13aea1] to-[#0e8c81] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, i) => (
                    info.link ? (
                      <a key={i} href={info.link} className="text-[#7f8c8d] font-medium hover:text-[#13aea1] transition-colors">
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-[#7f8c8d] font-medium">{detail}</p>
                    )
                  ))}
                </div>
                <p className="text-sm text-[#7f8c8d]">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-custom p-8"
            >
              <h3 className="text-3xl font-bold text-[#2c3e50] mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#2c3e50] font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#2c3e50] font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#2c3e50] font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2c3e50] font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[#2c3e50] font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] focus:border-transparent resize-none"
                    placeholder="Tell us about your health concerns or questions..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#13aea1] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#0e8c81] transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-custom overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-[#13aea1] to-[#0e8c81] flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{/* Changed to h4 */}Visit Our Center</h4>
                    <p>123 Wellness Street, Health City, HC 12345</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#2c3e50] mb-3">{/* Changed to h4 */}Easy to Find</h4>
                  <p className="text-[#7f8c8d] mb-4">
                    Located in the heart of the wellness district, our center is easily accessible 
                    by public transport and has ample parking available.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-[#7f8c8d]">
                      <div className="w-2 h-2 bg-[#13aea1] rounded-full"></div>
                      <span>Free parking available</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-[#7f8c8d]">
                      <div className="w-2 h-2 bg-[#13aea1] rounded-full"></div>
                      <span>Wheelchair accessible</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-[#7f8c8d]">
                      <div className="w-2 h-2 bg-[#13aea1] rounded-full"></div>
                      <span>Near public transport</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-2xl shadow-custom p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#2c3e50]">{/* Changed to h4 */}Emergency Contact</h4>
                    <p className="text-[#7f8c8d]">24/7 Support Available</p>
                  </div>
                </div>
                <p className="text-[#7f8c8d] mb-3">
                  For urgent health concerns or emergency consultations, 
                  call our dedicated emergency line.
                </p>
                <a href="tel:+447535062244" className="text-xl font-bold text-[#13aea1] hover:opacity-80 transition-opacity">
                  +44 7535 062244
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-[#7f8c8d] max-w-3xl mx-auto">
              Quick answers to common questions about our hijama therapy services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-custom p-6"
              >
                <h4 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center">
                  <MessageCircle size={20} className="text-[#13aea1] mr-3" />
                  {faq.question}
                </h4>
                <p className="text-[#7f8c8d] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#13aea1] to-[#0e8c81]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block text-white/90">Healing Journey?</span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Don't wait to take control of your health. Contact us today and discover 
              the transformative power of traditional hijama therapy.
            </p>
            <motion.button
                onClick={() => window.location.href = '/#booking-widget'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#13aea1] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
              >
                Book Appointment Now <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;