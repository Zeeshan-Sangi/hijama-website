
    import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { X, User, Mail, Phone, Calendar, Clock, Check } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const AppointmentPopup = ({ isOpen, onClose }) => {
        const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '' });
        const [isSubmitted, setIsSubmitted] = useState(false);
        const { toast } = useToast();

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!formData.name || !formData.email || !formData.date || !formData.time) {
                toast({
                    title: "Missing Information",
                    description: "Please fill out all required fields.",
                    variant: "destructive",
                });
                return;
            }
            
            const newLead = { 
              id: Date.now(), 
              ...formData, 
              type: 'appointment',
              source: 'appointment_popup',
              timestamp: new Date().toISOString()
            };
            const existingLeads = JSON.parse(localStorage.getItem('appointmentLeads') || '[]');
            localStorage.setItem('appointmentLeads', JSON.stringify([...existingLeads, newLead]));
            
            try {
              console.log('📞 Appointment Popup: Saving to Firebase...', newLead);
              const { saveLead } = await import('@/lib/firebase');
              const leadId = await saveLead(newLead);
              console.log('✅ Appointment Popup: Saved to Firebase with ID:', leadId);
            } catch (error) {
              console.error('❌ Appointment Popup: Error saving lead:', error);
              console.error('❌ Error details:', {
                message: error.message,
                code: error.code,
                stack: error.stack
              });
              // Don't block user flow, just log error
            }

            setIsSubmitted(true);
            toast({
                title: "Appointment Requested!",
                description: "We've received your request and will be in touch soon.",
            });
        };

        const handleClose = () => {
            onClose();
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', date: '', time: '' });
                setIsSubmitted(false);
            }, 300);
        };

        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10">
                                <X size={24} />
                            </button>
                            
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="p-8 md:p-12 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', delay: 0.2 }}
                                            className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6"
                                        >
                                            <Check className="text-green-600" size={40} />
                                        </motion.div>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
                                        <p className="text-gray-600">Your appointment request has been sent. We'll contact you shortly to confirm.</p>
                                        <button onClick={handleClose} className="mt-8 bg-[#13aea1] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0e8c81] transition-colors duration-300">
                                            Close
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="p-8 md:p-12"
                                    >
                                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Book an Appointment</h2>
                                        <p className="text-gray-500 mb-8">Fill in your details and we'll get back to you.</p>
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"/>
                                            </div>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"/>
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"/>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                    <input type="date" name="date" onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"/>
                                                </div>
                                                <div className="relative">
                                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                    <input type="time" name="time" onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"/>
                                                </div>
                                            </div>
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full mt-4 bg-[#13aea1] text-white py-3.5 rounded-lg font-semibold hover:bg-[#0e8c81] transition-colors duration-300 shadow-lg"
                                            >
                                                Request Appointment
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };

    export default AppointmentPopup;
  