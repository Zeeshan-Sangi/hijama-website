import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import AppointmentSection from '@/components/home/AppointmentSection';

const About = () => {
  const { toast } = useToast();
  
  const handleBookingClick = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every client with empathy, understanding, and genuine care for their wellbeing.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Strict hygiene protocols and sterile equipment ensure your safety throughout treatment.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous learning and improvement to provide the highest quality hijama therapy.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community focused on natural healing and wellness.'
    }
  ];

  const team = [
    {
      name: 'Dr. Ahmad Rahman',
      role: 'Lead Hijama Practitioner',
      experience: '15+ Years Experience',
      imageAlt: 'Professional hijama practitioner Dr Ahmad Rahman in a clinical setting',
      imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      name: 'Sarah Al-Zahra',
      role: 'Senior Therapist & Wellness Coach',
      experience: '10+ Years Experience',
      imageAlt: 'Portrait of senior hijama therapist Sarah Al-Zahra smiling warmly',
      imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
      name: 'Omar Hassan',
      role: 'Consultant & Hijama Specialist',
      experience: '8+ Years Experience',
      imageAlt: 'Wellness consultant Omar Hassan in a professional environment',
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const milestones = [
    { year: '2009', event: 'Westend Hijama Clinic Founded', description: 'Our journey began with a vision to revive ancient healing in a modern, professional setting.' },
    { year: '2015', event: 'Expanded to a New Facility', description: 'To better serve our growing community, we moved to a larger, state-of-the-art center.' },
    { year: '2021', event: '10,000+ Happy Clients', description: 'A major milestone celebrating thousands of lives touched and improved through our care.' },
    { year: '2025', event: 'Leading Regional Center', description: 'Recognized as a leading center for traditional healing, known for excellence and compassionate care.' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Westend Hijama Clinic | Traditional Cupping Therapy Experts</title>
        <meta name="description" content="Learn about our experienced hijama practitioners, traditional healing methods, and commitment to natural wellness. 15+ years of expertise in cupping therapy." />
        <meta property="og:title" content="About Us - Westend Hijama Clinic | Traditional Cupping Therapy Experts" />
        <meta property="og:description" content="Learn about our experienced hijama practitioners, traditional healing methods, and commitment to natural wellness. 15+ years of expertise in cupping therapy." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20"
            alt="Abstract background of a serene therapy room with soft light"
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80&fm=webp"
            loading="eager"
            fetchpriority="high"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 min-h-[90vh] flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight"
              >
                Our Journey in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aea1] to-[#15c5b5]">
                  Holistic Healing
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
              >
                Reviving ancient wisdom with a modern touch. Our mission is your holistic well-being and long-term health.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col items-start">
                <p className="text-lg font-semibold italic text-[#2c3e50]">Our Mission</p>
                <div className="w-16 h-0.5 bg-[#13aea1] mt-1 mb-4"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50]">
                Our <span className="gradient-text">Founding Story</span>
              </h2>
              <p className="text-lg text-[#7f8c8d] leading-relaxed">
                Founded in 2009, our Westend Hijama Clinic began as a small practice with a big vision: 
                to bring the ancient healing art of cupping therapy to modern wellness seekers. 
              </p>
              <p className="text-lg text-[#7f8c8d] leading-relaxed">
                Over the years, we've helped thousands of clients achieve better health through 
                natural healing methods. Our commitment to excellence, safety, and authentic 
                traditional practices has made us a trusted name in the community.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#13aea1] to-[#0e8c81] text-white font-bold text-lg py-7 px-8 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md"
                  >
                    Meet Us Better
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="p-2 bg-gray-300 rounded-lg shadow-lg">
                <img 
                  className="w-full h-auto rounded-md" 
                  alt="A close-up of a cupping therapy session on a person's back, showing cups applied to the skin."
                 src="https://images.unsplash.com/photo-1683226170046-a6794c48eefb" />
              </div>
              <div className="absolute -bottom-16 -left-16 w-2/3 sm:w-1/2 p-1.5 bg-white rounded-lg shadow-2xl">
                <img 
                  className="w-full h-auto rounded" 
                  alt="A close-up of a cupping therapy session on a person's back, showing cups applied to the skin."
                 src="https://images.unsplash.com/photo-1683226170046-a6794c48eefb" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding relative bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?fit=crop&w=1400&h=800&q=80')` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              These are the principles that guide our every action and define our approach to healing.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect-dark rounded-xl p-8 text-center flex flex-col items-center hover-lift"
              >
                <value.icon size={36} className="text-[#13aea1] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm flex-grow">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-lg text-[#7f8c8d] max-w-3xl mx-auto">
              Our certified practitioners bring years of experience and deep knowledge of traditional healing.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-custom hover-lift overflow-hidden group"
              >
                <div className="relative">
                  <img
                    className="w-full h-80 object-cover" 
                    alt={member.imageAlt}
                    src={member.imageSrc} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#13aea1] font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#7f8c8d] italic mb-4">"{member.experience}"</p>
                  <div className="flex justify-start items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-[#13aea1] fill-current" />
                    ))}
                    <span className="text-sm text-[#7f8c8d] ml-2">(5.0 Rating)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
              Our <span className="gradient-text">Journey & Milestones</span>
            </h2>
            <p className="text-lg text-[#7f8c8d] max-w-3xl mx-auto">
              Tracing our path from a humble beginning to a beacon of traditional wellness.
            </p>
          </motion.div>
          <div className="relative flex flex-col items-center">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#13aea1] to-[#0e8c81] transform -translate-y-1/2"></div>
            
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between w-full relative z-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col items-center w-1/4 px-2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="w-8 h-8 bg-white rounded-full border-4 border-[#13aea1] flex items-center justify-center mb-4">
                     <div className="w-3 h-3 bg-[#13aea1] rounded-full"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#13aea1] text-center"
                  >
                    <h3 className="text-2xl font-bold text-[#13aea1] mb-2">{milestone.year}</h3>
                    <p className="text-lg font-semibold text-[#2c3e50] mb-2">{milestone.event}</p>
                    <p className="text-[#7f8c8d] text-sm">{milestone.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden w-full space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-8 h-8 bg-white rounded-full border-4 border-[#13aea1] flex items-center justify-center">
                       <div className="w-3 h-3 bg-[#13aea1] rounded-full"></div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#13aea1] flex-1"
                  >
                    <h3 className="text-2xl font-bold text-[#13aea1] mb-2">{milestone.year}</h3>
                    <p className="text-lg font-semibold text-[#2c3e50] mb-2">{milestone.event}</p>
                    <p className="text-[#7f8c8d] text-sm">{milestone.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AppointmentSection />
    </>
  );
};

export default About;