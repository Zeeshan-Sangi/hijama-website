import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { XCircle, Calendar, Clock, Tag, RefreshCw, Home, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { savePackageSubmission, saveLead } from '@/lib/firebase';

const BookingCancelled = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package');
  const customerName = searchParams.get('name');
  const customerEmail = searchParams.get('email');
  const [isSaving, setIsSaving] = useState(true);

  useEffect(() => {
    // Save cancelled booking to Firebase
    const saveCancelledBooking = async () => {
      if (!customerName || !customerEmail) {
        setIsSaving(false);
        return;
      }

      try {
        const cancelledBooking = {
          name: decodeURIComponent(customerName),
          email: decodeURIComponent(customerEmail),
          package: packageName ? decodeURIComponent(packageName) : '',
          type: 'booking',
          source: 'booking_widget',
          paymentStatus: 'cancelled',
          cancellationReason: 'User cancelled payment',
          timestamp: new Date().toISOString(),
        };

        console.log('❌ Payment Cancelled: Saving to Firebase...', cancelledBooking);

        // Save to both collections
        const submissionId = await savePackageSubmission(cancelledBooking);
        console.log('✅ Cancelled booking saved to package_submissions, ID:', submissionId);

        const leadId = await saveLead(cancelledBooking);
        console.log('✅ Cancelled booking saved to leads, ID:', leadId);
      } catch (error) {
        console.error('❌ Error saving cancelled booking:', error);
      } finally {
        setIsSaving(false);
      }
    };

    saveCancelledBooking();
  }, [customerName, customerEmail, packageName]);

  return (
    <>
      <Helmet>
        <title>Payment Cancelled - Westend Hijama Clinic</title>
        <meta name="description" content="Your payment was cancelled. You can try again anytime." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          >
            {/* Cancelled Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
              className="w-24 h-24 bg-red-100 rounded-full mx-auto flex items-center justify-center mb-6"
            >
              <XCircle className="text-red-600" size={48} />
            </motion.div>

            {/* Message */}
            <h1 className="text-4xl font-bold text-[#2c3e50] mb-4">
              Payment Cancelled
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your payment was not completed. No charges have been made to your account.
            </p>

            {isSaving ? (
              <div className="py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#13aea1] mx-auto"></div>
                <p className="mt-4 text-gray-500">Saving information...</p>
              </div>
            ) : (
              <>
                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
                  <div className="flex items-start">
                    <AlertCircle className="text-blue-600 mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Your booking information has been saved</li>
                        <li>• You can complete your payment anytime</li>
                        <li>• No charges were made to your account</li>
                        <li>• Feel free to try again when you're ready</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Booking Details (if available) */}
                {packageName && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left space-y-4 mb-8">
                    {packageName && (
                      <div className="flex items-center">
                        <Tag className="text-[#13aea1] mr-3" size={20} />
                        <span className="font-semibold text-gray-800">
                          {decodeURIComponent(packageName)} Package
                        </span>
                      </div>
                    )}
                    <p className="text-sm text-gray-600">
                      You can complete this booking by selecting the same package and proceeding with payment.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => navigate('/#booking-widget')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#13aea1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0e8c81] transition-colors duration-300 flex items-center justify-center"
                  >
                    <RefreshCw className="mr-2" size={20} />
                    Try Again
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Home className="mr-2" size={20} />
                    Back to Home
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

export default BookingCancelled;

