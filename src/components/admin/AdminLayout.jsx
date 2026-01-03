
    import React, { useState } from 'react';
    import { Navigate, Outlet, useLocation } from 'react-router-dom';
    import { useAuth } from '@/hooks/use-auth.jsx';
    import AdminSidebar from '@/components/admin/AdminSidebar';
    import { Menu } from 'lucide-react';

    const AdminLayout = () => {
      const { isAuthenticated } = useAuth();
      const [sidebarOpen, setSidebarOpen] = useState(false);
      const location = useLocation();

      if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex">
          {/* Sidebar */}
          <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* Mobile overlay */}
          {sidebarOpen && (
            <div
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
            />
          )}

          {/* Content area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Topbar */}
            <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
              <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="inline-flex lg:hidden items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
                    aria-label="Open sidebar"
                  >
                    <Menu size={22} />
                  </button>
                  <div className="truncate">
                    <div className="text-sm text-gray-500">Admin</div>
                    <div className="font-semibold text-gray-800 truncate">
                      {location.pathname.replace('/admin', '') || 'Dashboard'}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#13aea1]/10 text-[#0e8c81]">
                    Online
                  </span>
                </div>
              </div>
            </header>

            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              <Outlet />
            </main>
          </div>
        </div>
      );
    };

    export default AdminLayout;
  