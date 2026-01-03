
    import React, { useState, useEffect } from 'react';
    import { Link, useLocation, useNavigate } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Menu, X, Phone, Mail, UserCog } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const Navbar = ({ onBookAppointment }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const location = useLocation();
      const navigate = useNavigate();

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isOpen]);

      const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
      ];

      const linkVariants = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { staggerChildren: 0.05 } },
        exit: { y: -20, opacity: 0 }
      };
      
      const isHomePage = location.pathname === '/';

      const handleAdminClick = () => {
        navigate('/admin');
      };

      return (
        <div className="fixed top-0 left-0 right-0 z-[100]">
          <div className="bg-[#13aea1] text-white py-2 hidden lg:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <a href="tel:+447535062244" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <Phone size={14} />
                  <span>+44 7535 062244</span>
                </a>
                <a href="mailto:contact@westendhijamaclinic.co.uk" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <Mail size={14} />
                  <span>contact@westendhijamaclinic.co.uk</span>
                </a>
              </div>
              <div className="text-sm">
                Open Mon - Sat: 9am - 6pm
              </div>
            </div>
          </div>

          <motion.nav
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            className={`w-full transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                : 'bg-white/95 backdrop-blur-md shadow-lg'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20 w-full py-2">
                <Link to="/" className="flex items-center space-x-3 flex-shrink-0 h-full">
                  <img 
                    src="/images/hijama-logo.png" 
                    alt="Westend Hijama Clinic Logo" 
                    className="h-16 md:h-20 w-auto object-contain pt-1 pb-1"
                  />
                  <div className="flex flex-col justify-center">
                        <h2 className={`text-2xl font-bold transition-colors duration-300 text-[#2c3e50]`} style={{ fontFamily: "'Dancing Script', cursive" }}>
                          Westend Hijama Clinic
                        </h2>
                    <p className={`text-sm transition-colors duration-300 text-[#7f8c8d]`}>
                      Traditional Healing
                    </p>
                  </div>
                </Link>

                <div className="hidden lg:flex flex-1 justify-center min-w-0">
                  <div className="flex items-center gap-6 xl:gap-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`relative whitespace-nowrap font-medium transition-colors duration-300 ${
                          location.pathname === item.path
                            ? 'text-[#13aea1]'
                            : 'text-[#2c3e50] hover:text-[#13aea1]' 
                        }`}
                      >
                        {item.name}
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#13aea1]"
                          />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                  <motion.button
                    onClick={() => {
                      // If on home page, scroll to booking widget
                      if (location.pathname === '/') {
                        const el = document.getElementById('booking-widget');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      } else {
                        // If on other page, navigate to home with hash
                        navigate('/#booking-widget');
                        // After navigation, scroll to booking widget
                        // Use a longer timeout to ensure page has loaded
                        setTimeout(() => {
                          const el = document.getElementById('booking-widget');
                          if (el) {
                            // Scroll with offset for fixed navbar
                            const yOffset = -100;
                            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }, 300);
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    Book Your Session
                  </motion.button>
                  <motion.button
                    onClick={handleAdminClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#13aea1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0e8c81] transition-colors duration-300 flex items-center whitespace-nowrap"
                  >
                    <UserCog size={16} className="mr-2" />
                    Admin
                  </motion.button>
                </div>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`lg:hidden p-2 rounded-lg z-50 transition-colors duration-300 text-[#2c3e50] hover:bg-gray-100`}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden fixed inset-0 bg-white z-[9999] flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 bg-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#13aea1] to-[#0e8c81] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">H</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[#2c3e50]" style={{ fontFamily: "'Dancing Script', cursive" }}>
                          Westend Hijama Clinic
                        </h2>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Menu Items - Takes remaining space */}
                  <div className="flex-1 px-6 py-8 bg-white">
                    <nav className="space-y-6">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between py-3 text-lg font-medium transition-colors duration-300 ${
                              location.pathname === item.path
                                ? 'text-[#13aea1]'
                                : 'text-gray-800 hover:text-[#13aea1]'
                            }`}
                          >
                            <span>{item.name}</span>
                            <span className="text-gray-400">›</span>
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* Bottom Button - Fixed at bottom */}
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => {
                        setIsOpen(false);
                        // If on home page, scroll to booking widget
                        if (location.pathname === '/') {
                          const el = document.getElementById('booking-widget');
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        } else {
                          // If on other page, navigate to home with hash
                          navigate('/#booking-widget');
                          // After navigation, scroll to booking widget
                          // Use a longer timeout to ensure page has loaded
                          setTimeout(() => {
                            const el = document.getElementById('booking-widget');
                            if (el) {
                              // Scroll with offset for fixed navbar
                              const yOffset = -100;
                              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                              window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                          }, 300);
                        }
                      }}
                      className="w-full bg-[#13aea1] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#0e8c81] transition-colors duration-300"
                    >
                      Book Your Session
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      );
    };

    export default Navbar;
  