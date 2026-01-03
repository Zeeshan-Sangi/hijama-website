import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { getSeedBlogPosts } from '@/lib/seedBlogPosts';

const slugify = (text) =>
  (text || '')
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-+/g, '-')
    .replace(/^-+|-+$/g, '');

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    try {
      const existing = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      const all = existing.length > 0 ? existing : getSeedBlogPosts();
      const found = all.find((p) => String(p.id) === String(id));
      if (!found) {
        navigate('/blog');
        return;
      }
      setPost(found);
    } catch (e) {
      navigate('/blog');
    }
  }, [id, navigate]);

  const ogImage = useMemo(() => {
    return post?.featuredImage || 'https://images.unsplash.com/photo-1627113302629-498a547826fc?auto=format&fit=crop&w=1600&q=80';
  }, [post]);

  if (!post) return null;

  const title = post.title || 'Blog Post';
  const description = post.excerpt || (typeof post.content === 'string' ? post.content.replace(/<[^>]*>?/gm, '').slice(0, 160) : '');

  return (
    <div className="bg-white">
      <Helmet>
        <title>{title} | Hijama Blog</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Helmet>

      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            alt={post.title}
            src={ogImage}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <Link to="/blog" className="inline-flex items-center text-gray-200 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 text-gray-300">
              <User size={16} /> <span>{post.author || 'Admin'}</span>
              <span className="text-gray-500">|</span>
              <Calendar size={16} /> <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full rounded-xl shadow mb-8"
              referrerPolicy="no-referrer"
            />
          )}
          <article
            className="prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {(post.tags || []).length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {(post.tags || []).map((tag, i) => (
                <span key={i} className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  <Tag size={12} className="mr-1" /> {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;


