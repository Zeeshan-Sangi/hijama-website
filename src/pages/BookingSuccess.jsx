import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Calendar, Clock, Tag, CreditCard, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { getApiUrl } from '@/config';

const BookingSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Verify payment session
      fetch(getApiUrl(`api/checkout-session/${sessionId}`))
        .then(res => res.json())
        .then(async (data) => {
          if (data.status === 'paid') {
            setSessionData(data);
            
            // Save booking with payment info to Firebase
            try {
              const bookingData = {
                name: data.metadata?.customerName || '',
                email: data.customerEmail || '',
                phone: data.metadata?.customerPhone || '',
                package: data.metadata?.packageName || '',
                packagePrice: data.metadata?.packagePrice || '',
                partialPayment: `£${(data.amountTotal / 100).toFixed(2)}`,
                date: data.metadata?.date || '',
                time: data.metadata?.time || '',
                type: 'booking',
                source: 'stripe_checkout',
                // Payment Information
                paymentStatus: 'paid',
                paymentAmount: data.amountTotal,
                paymentCurrency: data.currency,
                stripeSessionId: sessionId,
                paymentMethod: 'card',
                paymentDate: new Date().toISOString(),
                timestamp: new Date().toISOString(),
              };

              // Check if there's a pending booking to update
              const pendingBookingId = sessionStorage.getItem('pendingBookingId');
              const pendingLeadId = sessionStorage.getItem('pendingLeadId');

              console.log('💳 Payment Success: Saving to Firebase...', bookingData);
              console.log('💳 Found pending booking IDs:', { pendingBookingId, pendingLeadId });

              // Always save as new entry (Firestore doesn't support easy updates without doc ID)
              // The pending entry will remain but we save the paid version
              const { saveLead, savePackageSubmission } = await import('@/lib/firebase');
              
              // Save to both collections
              const leadId = await saveLead(bookingData);
              console.log('✅ Payment Success: Saved to leads collection, ID:', leadId);

              const submissionId = await savePackageSubmission(bookingData);
              console.log('✅ Payment Success: Saved to package_submissions collection, ID:', submissionId);

              // Clear pending IDs
              if (pendingBookingId) sessionStorage.removeItem('pendingBookingId');
              if (pendingLeadId) sessionStorage.removeItem('pendingLeadId');
            } catch (error) {
              console.error('❌ Payment Success: Error saving booking to Firebase:', error);
              console.error('❌ Error details:', {
                message: error.message,
                code: error.code,
                stack: error.stack
              });
              // Don't show error to user on success page, just log it
            }
          }
        })
        .catch(err => {
          console.error('Error verifying session:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  const metadata = sessionData?.metadata || {};

  return (
    <>
      <Helmet>
        <title>Booking Confirmed - Westend Hijama Clinic</title>
        <meta name="description" content="Your booking has been confirmed and payment processed successfully." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
              className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6"
            >
              <Check className="text-green-600" size={48} />
            </motion.div>

            {/* Success Message */}
            <h1 className="text-4xl font-bold text-[#2c3e50] mb-4">
              Payment Successful! 🎉
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your booking has been confirmed and payment processed successfully.
            </p>

            {loading ? (
              <div className="py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#13aea1] mx-auto"></div>
                <p className="mt-4 text-gray-500">Verifying payment...</p>
              </div>
            ) : (
              <>
                {/* Booking Details */}
                {sessionData && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left space-y-4 mb-8">
                    {metadata.packageName && (
                      <div className="flex items-center">
                        <Tag className="text-[#13aea1] mr-3" size={20} />
                        <span className="font-semibold text-gray-800">
                          {metadata.packageName} Package
                          {metadata.packagePrice && ` - ${metadata.packagePrice}`}
                        </span>
                      </div>
                    )}
                    {metadata.date && (
                      <div className="flex items-center">
                        <Calendar className="text-[#13aea1] mr-3" size={20} />
                        <span className="font-semibold text-gray-800">{metadata.date}</span>
                      </div>
                    )}
                    {metadata.time && (
                      <div className="flex items-center">
                        <Clock className="text-[#13aea1] mr-3" size={20} />
                        <span className="font-semibold text-gray-800">{metadata.time}</span>
                      </div>
                    )}
                    {sessionData.amountTotal && (
                      <div className="flex items-center">
                        <CreditCard className="text-[#13aea1] mr-3" size={20} />
                        <span className="font-semibold text-gray-800">
                          Amount Paid: £{(sessionData.amountTotal / 100).toFixed(2)}
                        </span>
                      </div>
                    )}
                    {metadata.packagePrice && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          <strong>Note:</strong> Remaining balance to be paid on arrival.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Additional Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                  <p className="text-sm text-blue-800">
                    <strong>What's next?</strong> You will receive a confirmation email shortly. 
                    Please arrive 10 minutes before your scheduled time.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => navigate('/')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#13aea1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0e8c81] transition-colors duration-300 flex items-center justify-center"
                  >
                    <Home className="mr-2" size={20} />
                    Back to Home
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/#booking-widget')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300"
                  >
                    Book Another Appointment
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>

          {/* Support Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{' '}
              <a href="mailto:support@westendhijama.com" className="text-[#13aea1] hover:underline">
                support@westendhijama.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccess;

