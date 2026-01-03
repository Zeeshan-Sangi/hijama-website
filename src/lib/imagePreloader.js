// Image preloader for critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    'https://images.unsplash.com/photo-1627113302629-498a547826fc?auto=format&fit=crop&w=1920&q=80&fm=webp',
    'https://horizons-cdn.hostinger.com/e647f7e2-6ec4-4d72-8596-d82a32853efe/0c5ec20c67fd65fccbce26995a293664.jpg?auto=format&fit=crop&w=1920&q=80&fm=webp',
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
