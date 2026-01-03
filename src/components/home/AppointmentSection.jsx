import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, HeartPulse, Smile, Stethoscope } from 'lucide-react';
import { saveLead } from '@/lib/firebase';
import { servicesData } from '@/lib/servicesData';

const AppointmentSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const stats = [
        { icon: <Smile size={48} />, number: 250, label: 'Happy Clients' },
        { icon: <Stethoscope size={48} />, number: 75, label: 'Therapies' },
        { icon: <HeartPulse size={48} />, number: 852, label: 'Healed Patients' },
        { icon: <Users size={48} />, number: 103, label: 'Treatments' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const leadData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            therapyType: formData.get('category'),
            healthConcern: formData.get('message'),
            source: 'Appointment Section',
            timestamp: new Date().toISOString(),
        };

        try {
            console.log('📅 Appointment Section: Saving to Firebase...', leadData);
            // Save to Firebase
            const leadId = await saveLead(leadData);
            console.log('✅ Appointment Section: Saved to Firebase with ID:', leadId);
            
            // Also save to localStorage as backup
            const existingLeads = JSON.parse(localStorage.getItem('hijamaLeads') || '[]');
            existingLeads.push(leadData);
            localStorage.setItem('hijamaLeads', JSON.stringify(existingLeads));

            // Reset form
            e.target.reset();
            
            // Success - no alert, just log
            console.log('✅ Appointment request submitted successfully');
        } catch (error) {
            console.error('❌ Appointment Section: Error saving lead:', error);
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

    return (
        <section className="relative section-padding bg-gray-800 text-white overflow-hidden">
            <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Calm Hijama therapy setting with cupping tools"
                  src="https://horizons-cdn.hostinger.com/e647f7e2-6ec4-4d72-8596-d82a32853efe/0c5ec20c67fd65fccbce26995a293664.jpg?auto=format&fit=crop&w=1920&q=80&fm=webp"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1599553233824-a550a2e99d34?auto=format&fit=crop&w=1920&q=80&fm=webp';
                  }}
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-[#13aea1] mb-3">{stat.icon}</div>
                            <p className="text-4xl md:text-5xl font-bold">{stat.number}</p>
                            <div className="w-8 h-0.5 bg-[#13aea1] my-2"></div>
                            <p className="text-lg text-gray-300">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block bg-black/30 backdrop-blur-sm p-4 rounded-lg mb-6">
                        <p className="text-xl text-gray-200">Ready to Embrace Natural Healing?</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">Book Your Session</h2>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name*</label>
                            <input type="text" id="name" name="name" required className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#13aea1] focus:ring-0 outline-none transition duration-300 py-2" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email*</label>
                            <input type="email" id="email" name="email" required className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#13aea1] focus:ring-0 outline-none transition duration-300 py-2" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone*</label>
                            <input type="tel" id="phone" name="phone" required className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#13aea1] focus:ring-0 outline-none transition duration-300 py-2" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-300">Therapy Type</label>
                            <select id="category" name="category" className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#13aea1] focus:ring-0 outline-none transition duration-300 py-2 text-white">
                                <option className="bg-gray-800" value="">Select a therapy...</option>
                                {servicesData.map((service, index) => (
                                    <option key={index} className="bg-gray-800" value={service.title.toLowerCase().replace(/\s+/g, '-')}>
                                        {service.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                             <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Health Concern*</label>
                            <textarea id="message" name="message" rows="4" required className="w-full bg-transparent border-b-2 border-gray-500 focus:border-[#13aea1] focus:ring-0 outline-none transition duration-300 py-2"></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#0e8c81' }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#13aea1] text-white font-bold py-3 px-12 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Book Now'}
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default AppointmentSection;