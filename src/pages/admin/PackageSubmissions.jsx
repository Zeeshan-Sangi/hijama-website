
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, Clock, Inbox, Tag, RefreshCw, CreditCard, CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { fetchPackageSubmissions } from '@/lib/firebase';

const SubmissionCard = ({ lead, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className={`bg-white p-5 rounded-xl shadow-sm border ${
      lead.paymentStatus === 'paid' ? 'border-green-200 bg-green-50/30' : 'border-gray-200'
    }`}
  >
    <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-800">{lead.name}</h3>
        <div className="flex items-center gap-2">
          {lead.paymentStatus === 'paid' && (
            <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircle size={12} />
              Paid
            </span>
          )}
          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {(() => {
              // Use createdAt field for date
              if (lead.createdAt) {
                // Handle Firestore Timestamp object
                if (lead.createdAt.seconds) {
                  return new Date(lead.createdAt.seconds * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
                }
                // Handle Firestore Timestamp with toDate method
                if (lead.createdAt.toDate && typeof lead.createdAt.toDate === 'function') {
                  return lead.createdAt.toDate().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
                }
                // Handle Date object
                if (lead.createdAt instanceof Date) {
                  return lead.createdAt.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
                }
                // Handle ISO string
                return new Date(lead.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
              }
              // Fallback to timestamp if createdAt not available
              if (lead.timestamp) {
                return new Date(lead.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
              }
              return 'Recent';
            })()}
          </span>
        </div>
    </div>
    <div className="space-y-2 text-gray-600 text-sm">
        <p className="text-[#13aea1] font-medium flex items-center gap-2"><Mail size={14}/> {lead.email}</p>
        {lead.phone && <p className="flex items-center gap-2"><Phone size={14}/> {lead.phone}</p>}
    </div>
    <div className="mt-3 pt-3 border-t border-gray-200 text-sm space-y-2">
        {lead.reason ? (
          <p className="text-[#13aea1] font-semibold flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
            <Heart size={16} className="text-[#13aea1]"/> Reason for Seeking Hijama: <span className="text-gray-700">{lead.reason}</span>
          </p>
        ) : (
          <p className="text-gray-400 italic text-xs mb-2">Reason: Not specified</p>
        )}
        <p className="font-semibold text-gray-700 flex items-center gap-2"><Tag size={14}/> Package: {lead.package}</p>
        {lead.packagePrice && <p className="text-gray-600">Full Price: {lead.packagePrice}</p>}
        <p className="flex items-center gap-2"><Calendar size={14}/> {lead.date}</p>
        <p className="flex items-center gap-2"><Clock size={14}/> {lead.time}</p>
        
        {/* Payment Information */}
        {lead.paymentStatus === 'paid' && (
          <div className="mt-3 pt-3 border-t border-gray-200 bg-green-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="text-green-600" size={16} />
              <span className="text-sm font-semibold text-green-700">Payment Confirmed</span>
            </div>
            <div className="text-xs text-green-700 space-y-1">
              {lead.partialPayment && (
                <p><strong>Amount Paid:</strong> {lead.partialPayment}</p>
              )}
              {lead.paymentAmount && (
                <p><strong>Payment Amount:</strong> £{(lead.paymentAmount / 100).toFixed(2)}</p>
              )}
              {lead.packagePrice && lead.partialPayment && (
                <p className="text-gray-600 mt-1">
                  <strong>Remaining:</strong> £{(parseFloat(lead.packagePrice.replace('£', '')) - parseFloat(lead.partialPayment.replace('£', ''))).toFixed(2)}
                </p>
              )}
              {lead.stripeSessionId && (
                <p className="text-gray-500 mt-1 text-xs">Session ID: {lead.stripeSessionId.substring(0, 20)}...</p>
              )}
            </div>
          </div>
        )}
        
        {lead.source && <p className="text-xs text-gray-400 mt-2">Source: {lead.source}</p>}
    </div>
  </motion.div>
);

const PackageSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadSubmissions = async (forceRefresh = false) => {
    if (forceRefresh) setRefreshing(true);
    else setLoading(true);
    
    try {
      console.log('📦 ===== LOADING PACKAGE SUBMISSIONS =====');
      console.log('📦 Force refresh:', forceRefresh);
      
      const firebaseSubmissions = await fetchPackageSubmissions();
      
      console.log('📦 ===== FETCH RESULT =====');
      console.log('📦 Firebase submissions received:', firebaseSubmissions);
      console.log('📦 Type:', typeof firebaseSubmissions);
      console.log('📦 Is Array:', Array.isArray(firebaseSubmissions));
      console.log('📦 Length:', firebaseSubmissions?.length || 0);
      
      if (firebaseSubmissions && Array.isArray(firebaseSubmissions)) {
        if (firebaseSubmissions.length > 0) {
          console.log('✅ Found', firebaseSubmissions.length, 'submissions!');
          console.log('📦 First submission:', firebaseSubmissions[0]);
          
          // Sort submissions by date (newest first)
          const sortedSubmissions = firebaseSubmissions.sort((a, b) => {
            let dateA = 0;
            let dateB = 0;
            
            // Handle Firestore timestamp
            if (a.createdAt) {
              if (a.createdAt.seconds) {
                dateA = a.createdAt.seconds * 1000;
              } else if (a.createdAt.toDate && typeof a.createdAt.toDate === 'function') {
                dateA = a.createdAt.toDate().getTime();
              } else if (a.createdAt instanceof Date) {
                dateA = a.createdAt.getTime();
              } else {
                dateA = new Date(a.createdAt).getTime();
              }
            } else if (a.timestamp) {
              dateA = new Date(a.timestamp).getTime();
            }
            
            // Handle Firestore timestamp
            if (b.createdAt) {
              if (b.createdAt.seconds) {
                dateB = b.createdAt.seconds * 1000;
              } else if (b.createdAt.toDate && typeof b.createdAt.toDate === 'function') {
                dateB = b.createdAt.toDate().getTime();
              } else if (b.createdAt instanceof Date) {
                dateB = b.createdAt.getTime();
              } else {
                dateB = new Date(b.createdAt).getTime();
              }
            } else if (b.timestamp) {
              dateB = new Date(b.timestamp).getTime();
            }
            
            return dateB - dateA; // Newest first
          });
          
          console.log('✅ Sorted submissions:', sortedSubmissions.length);
          console.log('✅ Setting submissions state...');
          setSubmissions(sortedSubmissions);
          console.log('✅ Submissions state updated!');
        } else {
          console.warn('⚠️ Firebase returned empty array');
          setSubmissions([]);
        }
      } else {
        console.error('❌ Firebase did not return an array!');
        console.error('❌ Received:', firebaseSubmissions);
        setSubmissions([]);
      }
    } catch (error) {
      console.error('❌ ===== ERROR LOADING SUBMISSIONS =====');
      console.error('❌ Error:', error);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error code:', error.code);
      console.error('❌ Error stack:', error.stack);
      setSubmissions([]);
    } finally {
      console.log('📦 ===== LOADING COMPLETE =====');
      setLoading(false);
      if (forceRefresh) setRefreshing(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
    
    // Auto-refresh every 60 seconds (1 minute) - reduced frequency to prevent constant refreshing
    // Users can manually refresh using the Refresh button if needed
    const interval = setInterval(() => {
      loadSubmissions(false); // Silent refresh without loading state
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    loadSubmissions(true);
  };


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Link to="/admin/packages" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <ArrowLeft size={24} className="text-gray-600"/>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Package Submissions</h1>
            <p className="text-gray-500">Leads generated from package interest (Auto-synced to Firebase)</p>
          </div>
        </div>
        
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="bg-[#13aea1] text-white px-4 py-2 rounded-lg hover:bg-[#0e8c81] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#13aea1] mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading submissions...</p>
        </div>
      ) : submissions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {submissions.map((lead, index) => (
            <SubmissionCard key={lead.id || index} lead={lead} index={index} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-100"
        >
          <Inbox size={60} className="mx-auto text-gray-300"/>
          <h2 className="mt-6 text-2xl font-semibold text-gray-700">No submissions yet!</h2>
          <p className="mt-2 text-gray-500">Submissions from your "Book Your Session" form will appear here.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

    export default PackageSubmissions;
  