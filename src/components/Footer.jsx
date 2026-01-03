import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

// TikTok Icon Component
const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fillRule="evenodd" clipRule="evenodd"/>
  </svg>
);

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Newsletter subscription handled silently
  };

  const footerLinks = {
    'Explore': [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Blog', path: '/blog' },
    ],
    'Services': [
      { name: 'Wet Cupping (Hijama)' },
      { name: 'Dry Cupping', path: null },
      { name: 'Massage Cupping', path: null },
      { name: 'Facial Cupping', path: null },
    ],
  };

  const socialIcons = [
    { icon: <Facebook size={20} />, href: 'https://web.facebook.com/profile.php?id=61583118651737' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/westendhijamaclinic/' },
    { icon: <TikTokIcon size={20} />, href: 'https://www.tiktok.com/@westendhijamaclininc?lang=en-GB' },
  ];

  const contactInfo = [
    { icon: <MapPin size={16} className="text-[#13aea1] mt-1" />, text: '123 Wellness St, West End, London', link: null },
    { icon: <Phone size={16} className="text-[#13aea1] mt-1" />, text: '+44 7535 062244', link: 'tel:+447535062244' },
    { icon: <Mail size={16} className="text-[#13aea1] mt-1" />, text: 'contact@westendhijamaclinic.co.uk', link: 'mailto:contact@westendhijamaclinic.co.uk' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-2xl md:text-3xl font-bold text-white">Subscribe to Our Newsletter</span>
              <p className="mt-2 text-gray-400">Stay updated with our latest news, offers, and wellness tips.</p>
            </div>
            <form 
              onSubmit={handleSubscribe} 
              className="flex flex-col sm:flex-row gap-3"
            >
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-[#13aea1] focus:outline-none transition-shadow" required />
              <Button type="submit" className="bg-gradient-to-r from-[#13aea1] to-[#0e8c81] text-white font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="/images/hijama-logo.png" 
                alt="Westend Hijama Clinic Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
              <div>
                <span className="text-2xl font-bold text-white block">Westend Hijama Clinic</span>
                <p className="text-sm text-gray-400">Traditional Healing</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Reviving ancient wisdom for modern well-being through professional Hijama therapy.</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <span className="font-bold text-lg text-white tracking-wider uppercase">{title}</span>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link to={link.path} className="text-sm text-gray-400 hover:text-[#13aea1] hover:pl-2 transition-all duration-200">
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <span className="font-bold text-lg text-white tracking-wider uppercase">Contact Us</span>
            <ul className="mt-4 space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  {item.icon}
                  {item.link ? (
                    <a href={item.link} className="text-sm text-gray-400 hover:text-[#13aea1] transition-colors duration-200">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-400">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} <a href="https://westendhijamaclinic.co.uk/" target="_blank" rel="noopener noreferrer" className="text-[#13aea1] hover:underline">Westend Hijama Clinic</a>. All Rights Reserved. Designed by <a href="https://onixs.ai" target="_blank" rel="noopener noreferrer" className="text-[#13aea1] hover:underline">Onixs AI</a></p>
          <div className="flex items-center space-x-4">
             <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#13aea1] hover:text-white transition-colors duration-200 hover:scale-105"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);