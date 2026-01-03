
import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Droplets, Newspaper, Users, Package, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
  { name: 'Services', icon: Droplets, path: '/admin/services' },
  { name: 'Blog Posts', icon: Newspaper, path: '/admin/blog' },
  { name: 'Leads', icon: Users, path: '/admin/leads' },
  { name: 'Packages', icon: Package, path: '/admin/packages' },
];

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="h-20 flex items-center justify-center border-b border-gray-700">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#13aea1] to-[#0e8c81] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold">Admin Panel</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#13aea1] text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="px-4 py-6 border-t border-gray-700">
          <Link
            to="/"
            className="flex items-center px-4 py-2.5 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Exit Admin</span>
          </Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-20 bg-white border-b border-gray-200 flex items-center px-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Admin!</h1>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
