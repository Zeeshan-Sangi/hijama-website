
    import React from 'react';
    import { Link, NavLink, useNavigate } from 'react-router-dom';
    import { LayoutDashboard, PenSquare, Users, Package, LogOut, X } from 'lucide-react';
    import { useAuth } from '@/hooks/use-auth.jsx';
    import { motion } from 'framer-motion';

    const AdminSidebar = ({ open = false, onClose }) => {
      const { logout } = useAuth();
      const navigate = useNavigate();

      const handleLogout = () => {
        logout();
        navigate('/admin/login');
      };

      const navItems = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Blog Posts', path: '/admin/blog', icon: PenSquare },
        { name: 'Leads', path: '/admin/leads', icon: Users },
        { name: 'Packages', path: '/admin/packages', icon: Package },
      ];

      return (
        <aside
          className={`fixed z-40 inset-y-0 left-0 w-72 bg-white/90 backdrop-blur text-gray-800 flex flex-col border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:rounded-2xl lg:shadow-md lg:m-3 lg:border lg:border-gray-100 ${open ? 'translate-x-0' : '-translate-x-full'}`}
          aria-hidden={!open}
        >
          <div className="p-6 text-center border-b border-gray-200">
             <Link to="/" className="flex items-center justify-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#13aea1] to-[#0e8c81] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">H</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
            </Link>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 lg:hidden" aria-label="Close sidebar">
              <X size={18} />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/admin'}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                        isActive
                          ? 'bg-gradient-to-r from-[#13aea1] to-[#0e8c81] text-white shadow'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`
                    }
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-colors duration-200 font-medium shadow"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </motion.button>
          </div>
        </aside>
      );
    };

    export default AdminSidebar;
  