import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import AboutPreview from '@/components/home/AboutPreview';
import TreatmentBenefits from '@/components/home/TreatmentBenefits';
import PricingSection from '@/components/home/PricingSection';
import AppointmentSection from '@/components/home/AppointmentSection';
import Testimonials from '@/components/home/Testimonials';
import BookingWidget from '@/components/home/BookingWidget';

const Home = () => {
  const location = useLocation();

  // Handle hash navigation to booking widget
  useEffect(() => {
    if (location.hash === '#booking-widget') {
      // Wait a bit for page to render
      setTimeout(() => {
        const el = document.getElementById('booking-widget');
        if (el) {
          // Scroll with offset for fixed navbar
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Westend Hijama Clinic - Traditional Cupping Therapy & Natural Healing</title>
        <meta name="description" content="Experience authentic Hijama cupping therapy at our professional center. Traditional healing methods for wellness, pain relief, and natural health restoration." />
        <meta property="og:title" content="Westend Hijama Clinic - Traditional Cupping Therapy & Natural Healing" />
        <meta property="og:description" content="Experience authentic Hijama cupping therapy at our professional center. Traditional healing methods for wellness, pain relief, and natural health restoration." />
      </Helmet>

      <HeroSection />
      <div id="booking-widget">
        <BookingWidget />
      </div>
      <FeaturedServices />
      <AboutPreview />
      <TreatmentBenefits />
      <PricingSection />
      <AppointmentSection />
      <Testimonials />
    </>
  );
};

export default Home;