
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import BookingSuccess from '@/pages/BookingSuccess';
import BookingCancelled from '@/pages/BookingCancelled';
import AppointmentPopup from '@/components/AppointmentPopup';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminBlog from '@/pages/admin/AdminBlog';
import AdminLeads from '@/pages/admin/AdminLeads';
import AdminPackages from '@/pages/admin/AdminPackages';
import { AuthProvider } from '@/hooks/use-auth.jsx';
import PackageSubmissions from '@/pages/admin/PackageSubmissions';
import { preloadCriticalImages } from '@/lib/imagePreloader';

    const AppContent = () => {
      const [isPopupOpen, setIsPopupOpen] = useState(false);
      const location = useLocation();
      const isAdminRoute = location.pathname.startsWith('/admin');

      useEffect(() => {
        preloadCriticalImages();
      }, []);

      return (
        <div className={isAdminRoute ? "bg-gray-50" : "bg-white"}>
          {!isAdminRoute && <Navbar onBookAppointment={() => setIsPopupOpen(true)} />}
          <main className={!isAdminRoute ? "flex-grow pt-24" : ""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking-success" element={<BookingSuccess />} />
              <Route path="/booking-cancelled" element={<BookingCancelled />} />
              
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="blog" element={<AdminBlog />} />
                <Route path="leads" element={<AdminLeads />} />
                <Route path="packages" element={<AdminPackages />} />
                <Route path="packages/submissions" element={<PackageSubmissions />} />
              </Route>
            </Routes>
          </main>
          {!isAdminRoute && <Footer />}
          <Toaster />
          {!isAdminRoute && <AppointmentPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />}
        </div>
      );
    }

    function App() {
      return (
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </Router>
      );
    }

    export default App;
  