// API Configuration
// In production, this will use the backend URL
// In development, it uses localhost (Vite proxy handles it)

const getApiBaseUrl = () => {
  // In development, ALWAYS use relative path (Vite proxy will handle it)
  // This avoids CORS issues in development
  if (import.meta.env.DEV) {
    console.log('🔧 Development mode: Using relative paths (Vite proxy)');
    return '';
  }
  
  // In production, use VITE_API_URL if set
  if (import.meta.env.VITE_API_URL) {
    console.log('🌐 Production: Using VITE_API_URL:', import.meta.env.VITE_API_URL);
    return import.meta.env.VITE_API_URL;
  }
  
  // In production without VITE_API_URL, show error
  console.warn('⚠️ VITE_API_URL not set in production! Backend calls will fail.');
  return '';
};

export const API_BASE_URL = getApiBaseUrl();

// Helper function to build API URLs
export const getApiUrl = (endpoint) => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  
  // If we have API_BASE_URL, use it
  if (API_BASE_URL) {
    const fullUrl = `${API_BASE_URL}/${cleanEndpoint}`;
    console.log('🔗 API URL:', fullUrl);
    return fullUrl;
  }
  
  // Otherwise use relative path (for dev with proxy)
  const relativeUrl = `/${cleanEndpoint}`;
  console.log('🔗 API URL (relative):', relativeUrl);
  return relativeUrl;
};

export default API_BASE_URL;

