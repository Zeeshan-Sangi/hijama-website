
    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
import { Mail, Phone, Inbox, Calendar, MessageSquare, CreditCard, CheckCircle } from 'lucide-react';
import { fetchLeads } from '@/lib/firebase';

    const LeadCard = ({ lead, index }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className={`bg-white p-5 rounded-xl shadow-sm border ${
          lead.paymentStatus === 'paid' ? 'border-green-200 bg-green-50/30' : 'border-gray-200'
        }`}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-gray-800">{lead.name}</h3>
          <div className="flex items-center gap-2">
            {lead.paymentStatus === 'paid' && (
              <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full flex items-center gap-1">
                <CheckCircle size={12} />
                Paid
              </span>
            )}
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
        {lead.timestamp ? new Date(lead.timestamp).toLocaleDateString() : 
         lead.createdAt ? (lead.createdAt.seconds ? new Date(lead.createdAt.seconds * 1000).toLocaleDateString() : new Date(lead.createdAt).toLocaleDateString()) : 'Recent'}
          </span>
          </div>
        </div>
    <p className="text-sm text-[#13aea1] font-medium my-1 flex items-center gap-2">
      <Mail size={14}/> {lead.email}
    </p>
    {lead.phone && (
      <p className="text-sm text-gray-600 flex items-center gap-2">
        <Phone size={14}/> {lead.phone}
      </p>
    )}
    {lead.therapyType && (
      <p className="text-sm text-gray-600 flex items-center gap-2">
        <Calendar size={14}/> {lead.therapyType}
      </p>
    )}
    {lead.healthConcern && (
      <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
        <p className="flex items-start gap-2">
          <MessageSquare size={14} className="mt-0.5 flex-shrink-0"/>
          <span><strong>Health Concern:</strong> {lead.healthConcern}</span>
        </p>
      </div>
    )}
    {lead.message && (
      <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
        <p className="flex items-start gap-2">
          <MessageSquare size={14} className="mt-0.5 flex-shrink-0"/>
          <span><strong>Message:</strong> {lead.message}</span>
        </p>
      </div>
    )}
    {lead.serviceInterest && (
      <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
        <p className="flex items-center gap-2">
          <Calendar size={14}/>
          <span><strong>Service Interest:</strong> {lead.serviceInterest}</span>
        </p>
        </div>
    )}
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
          {lead.package && (
            <p><strong>Package:</strong> {lead.package} {lead.packagePrice && `(${lead.packagePrice})`}</p>
          )}
          {lead.date && lead.time && (
            <p><strong>Appointment:</strong> {lead.date} at {lead.time}</p>
          )}
          {lead.stripeSessionId && (
            <p className="text-gray-500 mt-1">Session: {lead.stripeSessionId.substring(0, 20)}...</p>
          )}
        </div>
      </div>
    )}
    
    {/* Booking Information (if not payment lead) */}
    {lead.package && lead.paymentStatus !== 'paid' && (
      <div className="mt-3 pt-3 border-t border-gray-200 text-sm space-y-1">
        <p className="font-semibold text-gray-700">Package: {lead.package}</p>
        {lead.packagePrice && <p>Price: {lead.packagePrice}</p>}
        {lead.date && <p>Date: {lead.date}</p>}
        {lead.time && <p>Time: {lead.time}</p>}
      </div>
    )}
    
    {lead.source && (
      <p className="text-xs text-gray-400 mt-2">Source: {lead.source}</p>
    )}
      </motion.div>
    );

    const AdminLeads = () => {
      const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

      useEffect(() => {
    const loadLeads = async () => {
      setLoading(true);
      
      try {
        console.log('📋 ===== LOADING LEADS =====');
        
        // Try to fetch from Firebase first
        const firebaseLeads = await fetchLeads();
        
        console.log('📋 ===== FETCH RESULT =====');
        console.log('📋 Firebase leads received:', firebaseLeads);
        console.log('📋 Type:', typeof firebaseLeads);
        console.log('📋 Is Array:', Array.isArray(firebaseLeads));
        console.log('📋 Length:', firebaseLeads?.length || 0);
        
        if (firebaseLeads && Array.isArray(firebaseLeads)) {
          if (firebaseLeads.length > 0) {
            console.log('✅ Found', firebaseLeads.length, 'leads!');
            console.log('📋 First lead:', firebaseLeads[0]);
            
            // Filter out booking-related leads (they should only show in Package Submissions)
            const nonBookingLeads = firebaseLeads.filter(lead => {
              // Exclude leads with type: 'booking' or source from booking_widget/stripe_checkout
              const isBooking = 
                lead.type === 'booking' ||
                lead.source === 'booking_widget' ||
                lead.source === 'stripe_checkout' ||
                (lead.package && lead.packagePrice); // Has package info
              
              if (isBooking) {
                console.log('📦 Filtered out booking lead:', lead.name, lead.source || lead.type);
              }
              
              return !isBooking;
            });
            
            console.log('📋 After filtering bookings:', nonBookingLeads.length, 'non-booking leads');
            
            // Sort leads by date (newest first)
            const sortedLeads = nonBookingLeads.sort((a, b) => {
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
            
            console.log('✅ Sorted leads:', sortedLeads.length);
            console.log('✅ Setting leads state...');
            setLeads(sortedLeads);
            console.log('✅ Leads state updated!');
          } else {
            console.warn('⚠️ Firebase returned empty array');
            setLeads([]);
          }
        } else {
          console.error('❌ Firebase did not return an array!');
          console.error('❌ Received:', firebaseLeads);
          setLeads([]);
        }
      } catch (error) {
        console.error('❌ ===== ERROR LOADING LEADS =====');
        console.error('❌ Error:', error);
        console.error('❌ Error message:', error.message);
        console.error('❌ Error code:', error.code);
        console.error('❌ Error stack:', error.stack);
        setLeads([]);
      } finally {
        console.log('📋 ===== LOADING COMPLETE =====');
        setLoading(false);
      }
    };

    loadLeads();
    
    // Auto-refresh every 60 seconds (1 minute) - reduced frequency to prevent constant refreshing
    // Users can manually refresh the page if needed
    const interval = setInterval(() => {
      loadLeads(); // Silent refresh
    }, 60000);
    return () => clearInterval(interval);
      }, []);


      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Appointment Leads</h1>
          <p className="text-gray-500">Recent submissions from your booking forms (Auto-synced to Firebase)</p>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#13aea1] mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading leads...</p>
        </div>
      ) : leads.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leads.map((lead, index) => (
            <LeadCard key={lead.id || index} lead={lead} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-100"
            >
              <Inbox size={60} className="mx-auto text-gray-300"/>
              <h2 className="mt-6 text-2xl font-semibold text-gray-700">No leads yet!</h2>
          <p className="mt-2 text-gray-500">Submissions from your booking forms will appear here.</p>
            </motion.div>
          )}
        </motion.div>
      );
    };

    export default AdminLeads;
  