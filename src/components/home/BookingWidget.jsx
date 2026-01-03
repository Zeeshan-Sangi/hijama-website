
    import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Calendar } from '@/components/ui/calendar';
// Removed StripePayment import - using redirect to Stripe Checkout instead
import { Check, ArrowRight, ArrowLeft, User, Mail, Phone, Calendar as CalendarIcon, Clock, Tag, CreditCard, Shield, Heart, Brain, Sparkles, Zap, Activity, MoreHorizontal } from 'lucide-react';

    const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

    const BookingWidget = () => {
      const [step, setStep] = useState(1);
      const [packages, setPackages] = useState([]);
      const [selectedReason, setSelectedReason] = useState(null);
      const [selectedPackage, setSelectedPackage] = useState(null);
      const [selectedDate, setSelectedDate] = useState(null);
      const [selectedTime, setSelectedTime] = useState(null);
      const [userDetails, setUserDetails] = useState({ name: '', email: '', phone: '' });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const reasonOptions = [
    { 
      label: 'Chronic Pain Relief', 
      icon: Heart,
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50'
    },
    { 
      label: 'Anxiety/Stress/Panic Attacks', 
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50'
    },
    { 
      label: 'Spiritual / Sunnah Practice', 
      icon: Sparkles,
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50'
    },
    { 
      label: 'General Detox & Energy', 
      icon: Zap,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    { 
      label: 'Sports Recovery', 
      icon: Activity,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    { 
      label: 'Other', 
      icon: MoreHorizontal,
      gradient: 'from-gray-500 to-slate-500',
      bgGradient: 'from-gray-50 to-slate-50'
    }
  ];

      useEffect(() => {
        const storedPackages = JSON.parse(localStorage.getItem('hijamaPackages'));
        if (storedPackages) {
          setPackages(storedPackages);
        } else {
          const defaultPackages = [
              { name: "Package 1", title: "Standard", price: "£55", partialPayment: "£20", services: ["Health Consultation", "Massage", "Cupping", "Back/Head"]},
              { name: "Package 2", title: "Large", price: "£70", partialPayment: "£25", services: ["Health Consultation", "Massage", "Cupping", "Inversion", "Full Body"]},
              { name: "Package 3", title: "Dorn", price: "£80", partialPayment: "£30", services: ["Health Consultation", "Massage", "Cupping", "Inversion", "Deep Tissue", "Sports Massage", "Gua Sha Therapy"]}
          ];
          setPackages(defaultPackages);
          localStorage.setItem('hijamaPackages', JSON.stringify(defaultPackages));
        }
      }, []);

      const handlePackageSelect = (pkg) => {
        setSelectedPackage(pkg);
      };

      const handleNextStep = () => {
        if (step === 1 && !selectedReason) {
          return;
        }
        if (step === 2 && (!selectedDate || !selectedTime)) {
      return;
    }
        if (step === 3 && !selectedPackage) {
          return;
        }
        if (step === 4 && (!userDetails.name || !userDetails.email)) {
          return;
        }
        setStep(step + 1);
      };
      
      const handlePrevStep = () => {
        setStep(step - 1);
      };

      const handleInputChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
      };

      const handlePayment = async () => {
        setIsProcessingPayment(true);
        setPaymentError(null);
        
        // Simulate payment processing (replace with actual Stripe integration)
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Process the booking after successful payment
          await handleSubmit();
        } catch (error) {
          console.error('Payment failed:', error);
          setPaymentError('Payment failed. Please try again.');
          setIsProcessingPayment(false);
        }
      };

      const handlePayNow = async () => {
        setIsProcessingPayment(true);
        setPaymentError(null);

        try {
          // FIRST: Save booking data to Firebase with paymentStatus: 'pending'
          // This ensures data is saved even if user cancels payment
          const bookingData = {
            name: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phone || '',
            reason: typeof selectedReason === 'string' ? selectedReason : (selectedReason?.label || String(selectedReason || '')),
            package: selectedPackage?.title,
            packagePrice: selectedPackage?.price,
            partialPayment: selectedPackage?.partialPayment,
            date: selectedDate?.toLocaleDateString(),
            time: selectedTime,
            type: 'booking',
            source: 'booking_widget',
            paymentStatus: 'pending',
            timestamp: new Date().toISOString()
          };

          console.log('💾 Saving booking data before payment...', bookingData);
          
          try {
            const { savePackageSubmission, saveLead } = await import('@/lib/firebase');
            
            // Save to package_submissions collection
            const submissionId = await savePackageSubmission(bookingData);
            console.log('✅ Booking saved to package_submissions (pending payment), ID:', submissionId);
            
            // Also save to leads collection
            const leadId = await saveLead(bookingData);
            console.log('✅ Booking saved to leads (pending payment), ID:', leadId);
            
            // Store IDs for later update
            sessionStorage.setItem('pendingBookingId', submissionId);
            sessionStorage.setItem('pendingLeadId', leadId);
          } catch (firebaseError) {
            console.error('❌ Failed to save booking before payment:', firebaseError);
            // Continue with payment even if save fails - will save on success page
          }

          // Extract amount from partial payment string (e.g., "£25" -> 25)
          const amountStr = selectedPackage?.partialPayment?.replace('£', '') || '0';
          const amount = parseFloat(amountStr);

          if (!amount || amount <= 0) {
throw new Error('Invalid payment amount');
          }

          // Get API base URL
          const { getApiUrl } = await import('@/config');
          const apiUrl = getApiUrl('api/create-checkout-session');
          
          console.log('🔗 API URL being used:', apiUrl);
          console.log('🔗 VITE_API_URL from env:', import.meta.env.VITE_API_URL);
          console.log('🔗 Creating Stripe checkout session...');
          
          // Create checkout session
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify({
              amount: amount,
              currency: 'gbp',
              packageName: selectedPackage?.title,
              packagePrice: selectedPackage?.price,
              date: selectedDate?.toLocaleDateString(),
              time: selectedTime,
              customerName: userDetails.name,
              customerEmail: userDetails.email,
              customerPhone: userDetails.phone || '',
              successUrl: `${window.location.origin}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
              cancelUrl: `${window.location.origin}/booking-cancelled?package=${encodeURIComponent(selectedPackage?.title)}&name=${encodeURIComponent(userDetails.name)}&email=${encodeURIComponent(userDetails.email)}`,
            }),
          });

          if (!response.ok) {
            // Try to parse as JSON, but handle HTML responses (like 404 pages)
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Failed to create payment session');
            } else {
              // Got HTML instead of JSON (backend not available)
              throw new Error('Backend server is not available. Please ensure the backend is deployed.');
            }
          }

          // Check if response is JSON before parsing
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Backend server is not available. Please ensure the backend is deployed and VITE_API_URL is configured.');
          }

          const data = await response.json();

          // Redirect to Stripe Checkout
          if (data.url) {
            window.location.href = data.url;
          } else {
            throw new Error('No checkout URL received');
          }
        } catch (error) {
        console.error('Payment error:', error);
          console.error('Error details:', {
            message: error.message,
            name: error.name,
            stack: error.stack
          });
          
          // Provide more specific error messages
          let errorMessage = 'Failed to initialize payment. Please try again.';
          
          if (error.message) {
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
              errorMessage = 'Unable to connect to payment server. Please check your internet connection and try again.';
            } else if (error.message.includes('JSON')) {
              errorMessage = 'Backend server is not available. Please ensure the backend is deployed and VITE_API_URL is configured.';
            } else if (error.message.includes('CORS')) {
              errorMessage = 'Connection blocked. Please contact support if this issue persists.';
            } else {
              errorMessage = error.message;
            }
          }
          
          setPaymentError(errorMessage);
        setIsProcessingPayment(false);
        }
      };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
        if (!userDetails.name || !userDetails.email) {
           return;
        }
        
        const newLead = {
          id: Date.now(),
          name: userDetails.name,
          email: userDetails.email,
          phone: userDetails.phone,
          reason: typeof selectedReason === 'string' ? selectedReason : (selectedReason?.label || String(selectedReason || '')),
          package: selectedPackage.title,
      packagePrice: selectedPackage.price,
      partialPayment: selectedPackage.partialPayment,
          date: selectedDate.toLocaleDateString(),
          time: selectedTime,
      type: 'booking',
      source: 'booking_widget',
      timestamp: new Date().toISOString()
        };

    // Save to localStorage
        const existingLeads = JSON.parse(localStorage.getItem('bookingLeads') || '[]');
        localStorage.setItem('bookingLeads', JSON.stringify([...existingLeads, newLead]));

    // Auto-save to Firebase - Save to both collections
    try {
      console.log('🔥 Saving to Firebase:', newLead);
      console.log('📝 Selected reason:', selectedReason);
      console.log('📝 Reason in newLead:', newLead.reason);
      const { savePackageSubmission, saveLead } = await import('@/lib/firebase');
      
      // Save to package_submissions collection
      console.log('📦 Saving to package_submissions...');
      const submissionId = await savePackageSubmission(newLead);
      console.log('✅ Saved to package_submissions collection, ID:', submissionId);
      
      // Also save to leads collection
      console.log('📋 Saving to leads...');
      const leadId = await saveLead(newLead);
      console.log('✅ Saved to leads collection, ID:', leadId);
      
      // Success - no alert, just log
      console.log('✅ Booking saved successfully to Firebase');
    } catch (error) {
      console.error('❌ Firebase save failed:', error);
      console.error('❌ Error details:', {
        message: error.message,
        code: error.code,
        stack: error.stack
      });
      // Don't show alert, just log error
    }

    setStep(6);
      };
      
      const resetBooking = () => {
        setStep(1);
        setSelectedReason(null);
        setSelectedPackage(null);
        setSelectedDate(null);
        setSelectedTime(null);
        setUserDetails({ name: '', email: '', phone: '' });
        setPaymentMethod('card');
        setIsProcessingPayment(false);
        setPaymentError(null);
      }

      const stepVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
      };
      
      const renderStep = () => {
        switch (step) {
          case 1:
            return (
              <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                <h3 className="text-3xl font-bold text-center mb-4 text-[#2c3e50] max-w-4xl mx-auto px-4">What is your primary reason for seeking Hijama?</h3>
                <p className="text-center text-gray-600 mb-10 text-lg">Select the option that best describes your needs</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reasonOptions.map((reason, index) => {
                    const IconComponent = reason.icon;
                    const isSelected = selectedReason === reason.label;
                    return (
                      <motion.button
                        key={`reason-${index}-${reason.label}`}
                        onClick={() => {
                          const reasonLabel = String(reason.label);
                          console.log('Selecting reason:', reasonLabel);
                          setSelectedReason(reasonLabel);
                        }}
                        className={`relative p-8 rounded-2xl cursor-pointer border-2 transition-all duration-300 text-left group overflow-hidden ${
                          isSelected
                            ? `border-[#13aea1] bg-[#13aea1] text-white shadow-2xl shadow-[#13aea1]/30 scale-105` 
                            : `border-gray-200 bg-white hover:border-[#13aea1] hover:shadow-xl text-gray-800 hover:scale-105`
                        }`}
                        whileHover={{ y: -5, scale: isSelected ? 1.05 : 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        
                        {/* Check icon */}
                        {isSelected && (
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
                        >
                            <Check size={24} className="text-[#13aea1]" />
                        </motion.div>
                      )}
                        
                        {/* Icon */}
                        <div className="mb-4">
                          <IconComponent size={32} className={isSelected ? 'text-white' : `text-gray-600 group-hover:text-[#13aea1] transition-colors`} />
                        </div>
                        
                        {/* Text */}
                        <span className={`text-lg font-bold leading-tight block ${isSelected ? 'text-white' : 'text-gray-800 group-hover:text-[#13aea1] transition-colors'}`}>
                          {reason.label}
                        </span>
                        
                        {/* Decorative corner accent */}
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            );
          case 2:
            return (
              <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                <h3 className="text-3xl font-bold text-center mb-8 text-[#2c3e50] max-w-4xl mx-auto px-4">2. Select Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.1}}>
                     <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-xl border bg-white shadow-sm p-4"
                        disabled={(date) => date < new Date(new Date().toDateString())}
                      />
                  </motion.div>
                  <motion.div initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.2}}>
                    <h4 className="text-xl font-semibold mb-4 text-[#2c3e50]">Available Slots</h4>
                    <div className="grid grid-cols-3 gap-3 max-h-80 overflow-y-auto pr-2">
                      {timeSlots.map(time => (
                        <motion.button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border-2 text-center font-semibold transition-all duration-300 ${selectedTime === time ? 'bg-[#13aea1] text-white border-[#13aea1] shadow' : 'bg-white border-gray-200 hover:border-[#13aea1]'}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          case 3:
            return (
              <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                <h3 className="text-3xl font-bold text-center mb-8 text-[#2c3e50] max-w-4xl mx-auto px-4">3. Choose Your Package</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <motion.div
                      key={pkg.name}
                      onClick={() => handlePackageSelect(pkg)}
                      className={`relative p-6 rounded-2xl cursor-pointer border-4 transition-all duration-300 ${selectedPackage?.name === pkg.name ? 'border-[#13aea1] bg-white scale-105 shadow-custom' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
                      whileHover={{ y: -5 }}
                    >
                      {selectedPackage?.name === pkg.name && (
                        <motion.div
                          layoutId="check-icon"
                          className="absolute -top-4 -right-4 w-8 h-8 bg-[#13aea1] rounded-full flex items-center justify-center text-white"
                        >
                          <Check size={20} />
                        </motion.div>
                      )}
                      <h4 className="text-2xl font-bold text-[#13aea1]">{pkg.title}</h4>
                      <p className="text-3xl font-extrabold text-[#2c3e50] my-3">{pkg.price}</p>
                      <ul className="space-y-2 text-sm text-[#7f8c8d]">
                        {pkg.services.map((service, i) => (
                          <li key={i} className="flex items-center">
                            <Check size={14} className="text-[#13aea1] mr-2 flex-shrink-0" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          case 4:
            return (
              <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full max-w-lg mx-auto">
                <h3 className="text-3xl font-bold text-center mb-8 text-[#2c3e50] max-w-4xl mx-auto px-4">4. Your Details</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="text" name="name" placeholder="Full Name" value={userDetails.name} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"/>
                  </div>
                   <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="email" name="email" placeholder="Email Address" value={userDetails.email} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"/>
                  </div>
                   <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="tel" name="phone" placeholder="Phone Number (Optional)" value={userDetails.phone} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1]"/>
                  </div>
                </form>
              </motion.div>
            );
          case 5:
             return (
              <motion.div key="step5" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full max-w-lg mx-auto">
                <h3 className="text-3xl font-bold text-center mb-8 text-[#2c3e50] max-w-4xl mx-auto px-4">5. Secure Payment</h3>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-700">Booking Summary</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{selectedPackage?.title} Package</span>
                      <span className="font-semibold">{selectedPackage?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date & Time</span>
                      <span className="font-semibold">{selectedDate?.toLocaleDateString()} at {selectedTime}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between text-lg font-bold text-[#13aea1]">
                        <span>Partial Payment Required</span>
                        <span>{selectedPackage?.partialPayment}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Remaining balance to be paid on arrival</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg bg-white">
                    <CreditCard className="text-[#13aea1]" size={24} />
                    <div>
                      <p className="font-semibold text-gray-800">Credit/Debit Card</p>
                      <p className="text-sm text-gray-500">Secure payment via Stripe</p>
                    </div>
                    <div className="ml-auto">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="card" 
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-[#13aea1] focus:ring-[#13aea1]"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg bg-gray-50 opacity-60">
                    <Shield className="text-gray-400" size={24} />
                    <div>
                      <p className="font-semibold text-gray-600">Bank Transfer</p>
                      <p className="text-sm text-gray-400">Coming soon</p>
                    </div>
                    <div className="ml-auto">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="bank" 
                        disabled
                        className="text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-6">
                    <motion.button
                      onClick={handlePayNow}
                      disabled={isProcessingPayment}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#13aea1] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#0e8c81] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isProcessingPayment ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="mr-2" size={20} />
                          Pay {selectedPackage?.partialPayment} Now
                        </>
                      )}
                    </motion.button>
                    
                    <p className="mt-3 text-sm text-center text-gray-500">
                      You will be redirected to Stripe's secure payment page
                    </p>
                    
                    {paymentError && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg shadow-sm"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-red-800">{paymentError}</p>
                            <p className="mt-1 text-xs text-red-600">If this problem continues, please contact us at <a href="mailto:contact@westendhijamaclinic.co.uk" className="underline hover:text-red-800">contact@westendhijamaclinic.co.uk</a></p>
                          </div>
                      </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          case 6:
             return (
              <motion.div key="step6" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="text-center max-w-xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                  className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6"
                >
                  <Check className="text-green-600" size={48} />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#2c3e50] mb-4">Booking Confirmed!</h3>
                <p className="text-lg text-gray-600 mb-8">Thank you, {userDetails.name}. Your appointment has been confirmed and payment processed successfully.</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left space-y-4">
                   <div className="flex items-center"><Tag className="text-[#13aea1] mr-3" size={20}/> <span className="font-semibold">{selectedPackage?.title} Package - {selectedPackage?.price}</span></div>
                   <div className="flex items-center"><CalendarIcon className="text-[#13aea1] mr-3" size={20}/> <span className="font-semibold">{selectedDate?.toLocaleDateString()}</span></div>
                   <div className="flex items-center"><Clock className="text-[#13aea1] mr-3" size={20}/> <span className="font-semibold">{selectedTime}</span></div>
                   <div className="flex items-center"><CreditCard className="text-[#13aea1] mr-3" size={20}/> <span className="font-semibold">Partial Payment: {selectedPackage?.partialPayment}</span></div>
                </div>
                 <motion.button
                    onClick={resetBooking}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors duration-300"
                  >
                    Book Another Appointment
                  </motion.button>
              </motion.div>
            );
          default:
            return null;
        }
      }

      return (
        <section id="booking-widget" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-300/50 p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Book Your Session in <span className="gradient-text">5 Easy Steps</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Experience our healing therapies by booking your appointment in just a few clicks.
                </p>
              </motion.div>
            
              <div className="min-h-[500px] flex flex-col items-center">
                  {step < 6 && (
                    <div className="w-full max-w-3xl mx-auto mb-12">
                      <div className="flex justify-between items-center relative">
                        <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -translate-y-1/2">
                          <motion.div
                            className="h-full bg-[#13aea1]"
                            initial={{ width: '0%' }}
                            animate={{ width: `${((step - 1) / 4) * 100}%` }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                          />
                        </div>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div key={`step-indicator-${s}`} className="relative z-10">
                            <motion.div
                              className="w-10 h-10 rounded-full flex items-center justify-center font-bold border-2"
                              animate={{
                                backgroundColor: step >= s ? '#13aea1' : '#ffffff',
                                borderColor: step >= s ? '#13aea1' : '#d1d5db',
                                color: step >= s ? '#ffffff' : '#6b7280',
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {step > s ? <Check size={20}/> : s}
                            </motion.div>
                            <p className={`absolute -bottom-7 text-sm font-semibold text-center left-1/2 transform -translate-x-1/2 whitespace-nowrap ${step >= s ? 'text-[#13aea1]' : 'text-gray-500'}`}>
                              {s === 1 ? 'Reason' : s === 2 ? 'Date & Time' : s === 3 ? 'Package' : s === 4 ? 'Details' : 'Payment'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <AnimatePresence mode="wait" key={step}>
                    {renderStep()}
                  </AnimatePresence>

                  {step < 6 && step !== 5 && (
                    <div className="mt-12 flex justify-between w-full max-w-lg mx-auto">
                      <motion.button
                        onClick={handlePrevStep}
                        disabled={step === 1}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back
                      </motion.button>
                      <motion.button
                        onClick={handleNextStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#13aea1] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0e8c81] transition-colors duration-300 flex items-center"
                      >
                        Next Step
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.button>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="mt-12 flex justify-start w-full max-w-lg mx-auto">
                      <motion.button
                        onClick={handlePrevStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors duration-300 flex items-center"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back
                      </motion.button>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default BookingWidget;
  