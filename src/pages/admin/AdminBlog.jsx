
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { useToast } from '@/components/ui/use-toast';
    import { Plus, Trash2, Edit, Image as ImageIcon } from 'lucide-react';
    import RichTextEditor from '@/components/admin/RichTextEditor';
    import { getSeedBlogPosts } from '@/lib/seedBlogPosts';
    import { upsertBlogPost, fetchBlogPosts } from '@/lib/firebase';

    const AdminBlog = () => {
      const { toast } = useToast();
      const [posts, setPosts] = useState([]);
      const stripDataUris = (html) => {
        if (typeof html !== 'string') return html;
        return html.replace(/src=\"data:[^\"]+\"/g, 'src=\"\"');
      };

      const savePostsSafely = (toSave) => {
        try {
          localStorage.setItem('blogPosts', JSON.stringify(toSave));
          return true;
        } catch (err) {
          // Attempt to sanitize large inline images and retry
          try {
            const sanitized = toSave.map(p => ({
              ...p,
              content: stripDataUris(p.content),
              featuredImage: (p.featuredImage && p.featuredImage.startsWith('data:')) ? '' : p.featuredImage,
            }));
            localStorage.setItem('blogPosts', JSON.stringify(sanitized));
            setPosts(sanitized);
            toast({ title: 'Storage limit reached', description: 'Large inline images were removed to save your changes. Use image URLs instead of uploads for persistence.', variant: 'destructive' });
            return true;
          } catch (e2) {
            console.error('Failed to save blog posts:', e2);
            toast({ title: 'Save failed', description: 'Browser storage is full. Delete older posts or remove large images and try again.', variant: 'destructive' });
            return false;
          }
        }
      };

      React.useEffect(() => {
        (async () => {
          try {
            console.log('📝 Loading blog posts...');
            // Try Firestore first
            const cloud = await fetchBlogPosts().catch((err) => {
              console.error('❌ Error fetching from Firebase:', err);
              return [];
            });
            
            console.log('📝 Cloud posts:', cloud?.length || 0);
            
            if (cloud && cloud.length > 0) {
              console.log('✅ Using Firebase posts:', cloud.length);
              setPosts(cloud);
              savePostsSafely(cloud);
              
              // Also save existing localStorage posts to Firebase (migration)
              const existing = JSON.parse(localStorage.getItem('blogPosts') || '[]');
              if (existing.length > 0) {
                console.log('📝 Found', existing.length, 'local posts, migrating to Firebase...');
                for (const post of existing) {
                  try {
                    await upsertBlogPost(post);
                  } catch (err) {
                    console.error('❌ Failed to migrate post:', post.id, err);
                  }
                }
                console.log('✅ Migration complete');
              }
              
              return;
            }
            
            // Fallback to local storage
            console.log('📝 No Firebase posts, checking localStorage...');
            const existing = JSON.parse(localStorage.getItem('blogPosts') || '[]');
            if (existing.length > 0) {
              console.log('✅ Using localStorage posts:', existing.length);
              setPosts(existing);
              
              // Migrate all to Firebase
              console.log('📝 Migrating local posts to Firebase...');
              for (const post of existing) {
                try {
                  await upsertBlogPost(post);
                } catch (err) {
                  console.error('❌ Failed to migrate post:', post.id, err);
                }
              }
              console.log('✅ Migration complete');
            } else {
              console.log('📝 No local posts, using seed data...');
              const seeded = getSeedBlogPosts();
              setPosts(seeded);
              savePostsSafely(seeded);
              
              // Migrate seed data to Firebase
              console.log('📝 Migrating seed posts to Firebase...');
              for (const post of seeded) {
                try {
                  await upsertBlogPost(post);
                } catch (err) {
                  console.error('❌ Failed to migrate seed post:', post.id, err);
                }
              }
              console.log('✅ Seed migration complete');
            }
          } catch (err) {
            console.error('❌ Failed to load blog posts:', err);
          }
        })();
      }, []);

      React.useEffect(() => {
        if (!posts || posts.length === 0) return;
        savePostsSafely(posts);
      }, [posts]);
      const [isEditing, setIsEditing] = useState(null);
      const [newPostTitle, setNewPostTitle] = useState('');
      const [newPostContent, setNewPostContent] = useState('');
      const [featuredImage, setFeaturedImage] = useState('');
      const [featuredImagePreview, setFeaturedImagePreview] = useState('');

      const handleEditClick = (post) => {
        setIsEditing(post.id);
        setNewPostTitle(post.title);
        setNewPostContent(post.content);
        setFeaturedImage(post.featuredImage || '');
        setFeaturedImagePreview(post.featuredImage || '');
      };

      const handleCancelEdit = () => {
        setIsEditing(null);
        setNewPostTitle('');
        setNewPostContent('');
        setFeaturedImage('');
        setFeaturedImagePreview('');
      };

      const handleSubmit = async () => {
        if (!newPostTitle.trim() || !newPostContent.trim()) {
          toast({ title: "Error", description: "Title and content cannot be empty.", variant: "destructive" });
          return;
        }

        if (isEditing) {
          const updated = posts.map(p => p.id === isEditing ? { 
            ...p,
            title: newPostTitle,
            content: newPostContent,
            featuredImage: featuredImage || p.featuredImage,
            date: p.date
          } : p);
          setPosts(updated);
          try { 
            await upsertBlogPost(updated.find(p => p.id === isEditing));
            console.log('✅ Blog post updated in Firebase');
          } catch (error) {
            console.error('❌ Failed to update blog post in Firebase:', error);
            toast({ title: "Warning", description: "Post updated locally but failed to save to database.", variant: "destructive" });
          }
          toast({ title: "Success!", description: "Blog post updated." });
        } else {
          const newPost = {
            id: Date.now(),
            title: newPostTitle,
            content: newPostContent,
            featuredImage,
            date: new Date().toLocaleDateString(),
          };
          setPosts([newPost, ...posts]);
          try { 
            await upsertBlogPost(newPost);
            console.log('✅ Blog post saved to Firebase');
          } catch (error) {
            console.error('❌ Failed to save blog post to Firebase:', error);
            toast({ title: "Warning", description: "Post published locally but failed to save to database.", variant: "destructive" });
          }
          toast({ title: "Success!", description: "New blog post published." });
        }

        handleCancelEdit();
      };

      const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id));
        toast({ title: "Post Deleted", description: "The blog post has been removed.", variant: "destructive" });
      };

      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Manage Blog Posts</h1>
          <p className="text-gray-500 mb-8">Write posts with rich text and images</p>
          
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
            <div className="flex flex-col gap-4">
              <input 
                type="text"
                placeholder="Post Title"
                value={newPostTitle}
                onChange={e => setNewPostTitle(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] transition-shadow"
              />
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://..."
                      value={featuredImage}
                      onChange={(e) => {
                        setFeaturedImage(e.target.value);
                        setFeaturedImagePreview(e.target.value);
                      }}
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13aea1] transition-shadow"
                    />
                    <label className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <ImageIcon size={18} /> Upload
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          // Convert to data URL instead of uploading to Firebase Storage
                          const reader = new FileReader();
                          reader.onload = () => {
                            setFeaturedImage(String(reader.result));
                            setFeaturedImagePreview(String(reader.result));
                          };
                          reader.readAsDataURL(file);
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div className="md:justify-self-end">
                  <div className="w-40 h-28 border rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    {featuredImagePreview ? (
                      <img src={featuredImagePreview} alt="Featured preview" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400 text-sm">No image</span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <RichTextEditor value={newPostContent} onChange={setNewPostContent} />
              </div>
              <div className="flex items-center gap-4">
                <button onClick={handleSubmit} className="bg-[#13aea1] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center self-start hover:bg-[#0e8c81] transition-colors">
                  <Plus size={20} className="mr-2"/>
                  {isEditing ? 'Update Post' : 'Add Post'}
                </button>
                {isEditing && (
                  <button onClick={handleCancelEdit} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Published Posts</h2>
            <div className="space-y-4">
              {posts.map(post => (
                <div key={post.id} className="flex justify-between items-start p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{post.title}</h3>
                    {post.featuredImage && (
                      <img src={post.featuredImage} alt="Featured" className="w-full max-w-md h-40 object-cover rounded-lg my-3" />
                    )}
                    <p className="text-gray-600 mt-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                    <p className="text-xs text-gray-400 mt-2">{post.date}</p>
                  </div>
                  <div className="flex gap-2 items-center flex-shrink-0 ml-4">
                    <button onClick={() => handleEditClick(post)} className="text-blue-500 hover:text-blue-700 p-2 rounded-full hover:bg-blue-100 transition-colors">
                      <Edit size={18}/>
                    </button>
                    <button onClick={() => deletePost(post.id)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors">
                      <Trash2 size={18}/>
                    </button>
                  </div>
                </div>
              ))}
              {posts.length === 0 && <p className="text-center text-gray-500 py-8">No posts yet. Write one above!</p>}
            </div>
          </div>
        </motion.div>
      );
    };

    export default AdminBlog;
  