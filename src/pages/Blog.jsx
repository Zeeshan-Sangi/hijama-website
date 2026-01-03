import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { getSeedBlogPosts } from '@/lib/seedBlogPosts';

const Blog = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState([]);

  const handleReadMore = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    if (existing.length > 0) {
      setPosts(existing);
    } else {
      const seeded = getSeedBlogPosts();
      localStorage.setItem('blogPosts', JSON.stringify(seeded));
      setPosts(seeded);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Hijama Blog - Expert Insights on Cupping Therapy & Natural Healing</title>
        <meta name="description" content="Read expert articles about hijama cupping therapy, treatment guides, research insights, and wellness tips from certified practitioners." />
        <meta property="og:title" content="Hijama Blog - Expert Insights on Cupping Therapy & Natural Healing" />
        <meta property="og:description" content="Read expert articles about hijama cupping therapy, treatment guides, research insights, and wellness tips from certified practitioners." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20"
            alt="Close-up of hijama cupping therapy on a person's back during a session"
            src="https://images.unsplash.com/photo-1627113302629-498a547826fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
                Our Latest
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13aea1] to-[#15c5b5]">
                  Blog Posts
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
              >
                Expert knowledge, research insights, and practical guidance on hijama therapy and natural healing.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group"
              >
                <div className="relative">
                  <img  
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt={post.title}
                    src={post.featuredImage || post.image} 
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#13aea1]" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <User size={14} />
                    <span>By {post.author || 'Admin'}</span>
                    <span className="text-gray-300">|</span>
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || (typeof post.content === 'string' ? post.content.replace(/<[^>]*>?/gm, '').slice(0, 160) + '…' : '')}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 mb-5">
                    {(post.tags || []).map((tag, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link to={`/blog/${post.id}`} className="block">
                      <Button
                        variant="outline"
                        className="w-full border-[#13aea1] text-[#13aea1] hover:bg-[#13aea1] hover:text-white transition-colors duration-300"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;