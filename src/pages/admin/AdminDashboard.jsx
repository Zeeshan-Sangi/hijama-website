
    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Users, Package, PenSquare, ArrowRight } from 'lucide-react';
    import { fetchLeads, fetchBlogPosts } from '@/lib/firebase';

    const StatCard = ({ title, value, icon, color, link }) => (
      <Link to={link}>
        <motion.div
          whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(2, 132, 199, 0.15)" }}
          className="bg-white p-6 rounded-2xl shadow-sm flex items-center space-x-4 transition-all duration-300 border border-gray-100 hover:border-[#13aea1]/30"
        >
          <div className={`p-4 rounded-xl ${color} shadow-inner` }>
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
          </div>
        </motion.div>
      </Link>
    );

    const AdminDashboard = () => {
      const [stats, setStats] = useState({ leads: 0, blogPosts: 0, loading: true });

      useEffect(() => {
        const loadStats = async () => {
          try {
            console.log('📊 Loading dashboard stats...');
            
            // Fetch leads from Firebase
            const firebaseLeads = await fetchLeads();
            console.log('📊 Total leads fetched:', firebaseLeads?.length || 0);
            
            // Filter out booking-related leads (same logic as AdminLeads)
            const nonBookingLeads = firebaseLeads ? firebaseLeads.filter(lead => {
              const isBooking = 
                lead.type === 'booking' ||
                lead.source === 'booking_widget' ||
                lead.source === 'stripe_checkout' ||
                (lead.package && lead.packagePrice);
              return !isBooking;
            }) : [];
            
            console.log('📊 Non-booking leads:', nonBookingLeads.length);
            
            // Fetch blog posts from Firebase
            const blogPosts = await fetchBlogPosts();
            console.log('📊 Blog posts fetched:', blogPosts?.length || 0);
            
            setStats({
              leads: nonBookingLeads.length,
              blogPosts: blogPosts?.length || 0,
              loading: false
            });
            
            console.log('✅ Dashboard stats updated:', {
              leads: nonBookingLeads.length,
              blogPosts: blogPosts?.length || 0
            });
          } catch (error) {
            console.error('❌ Error loading dashboard stats:', error);
            setStats({
              leads: 0,
              blogPosts: 0,
              loading: false
            });
          }
        };

        loadStats();
        
        // Auto-refresh every 60 seconds (1 minute) - reduced frequency to prevent constant refreshing
        // Users can manually refresh the page if needed
        const interval = setInterval(() => {
          loadStats(); // Silent refresh
        }, 60000);
        return () => clearInterval(interval);
      }, []);


      return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-500 mb-8">Quick overview of your site metrics</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard 
              title="Total Leads" 
              value={stats.leads}
              icon={<Users className="text-white" size={24} />} 
              color="bg-gradient-to-tr from-sky-500 to-sky-600"
              link="/admin/leads"
            />
            <StatCard 
              title="Manage Packages" 
              value="3" 
              icon={<Package className="text-white" size={24} />} 
              color="bg-gradient-to-tr from-emerald-500 to-emerald-600"
              link="/admin/packages"
            />
            <StatCard 
              title="Blog Posts" 
              value={stats.blogPosts} 
              icon={<PenSquare className="text-white" size={24} />} 
              color="bg-gradient-to-tr from-purple-500 to-purple-600"
              link="/admin/blog"
            />
          </div>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Admin!</h2>
            <p className="text-gray-600 mb-6">
              This is your control center. From here, you can manage your website's content and view submissions.
              Use the sidebar to navigate or the cards above for quick access.
            </p>
            <Link to="/" className="inline-flex items-center font-semibold text-[#13aea1] hover:text-[#0e8c81] transition-colors">
              View Live Site <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      );
    };

    export default AdminDashboard;
  