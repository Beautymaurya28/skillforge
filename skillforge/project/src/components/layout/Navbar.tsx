import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, LogIn, Layers } from 'lucide-react';
import { useAppStore } from '../../store';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, login, logout } = useAppStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Modules', path: '/modules' },
    { name: 'Projects', path: '/projects' },
    { name: 'Community', path: '/community' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-coolGray shadow-sm">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <Layers className="h-8 w-8 text-primary" />
            <span className="text-xl font-poppins font-bold text-primary">
              Skill<span className="text-accent">Forge</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-primary hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary text-white transition-all duration-200 hover:bg-primary-light"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => logout()}>
                  <img 
                    src={user?.avatar} 
                    alt={user?.name} 
                    className="h-8 w-8 rounded-full object-cover border-2 border-accent"
                  />
                </div>
              </div>
            ) : (
              <button 
                onClick={() => login()} 
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent text-primary font-medium transition-all duration-200 hover:bg-accent-light"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-primary hover:bg-coolGray transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-b border-coolGray"
        >
          <div className="container-custom py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 font-medium ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-primary hover:text-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <div className="pt-4 border-t border-coolGray flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img 
                    src={user?.avatar} 
                    alt={user?.name} 
                    className="h-8 w-8 rounded-full object-cover border-2 border-accent"
                  />
                  <span className="font-medium text-primary">{user?.name}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Link 
                    to="/dashboard" 
                    className="px-3 py-1.5 rounded-lg bg-primary text-white text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }} 
                    className="px-3 py-1.5 rounded-lg bg-coolGray text-primary text-sm"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => {
                  login();
                  setIsOpen(false);
                }} 
                className="w-full mt-4 py-2 rounded-lg bg-accent text-primary font-medium"
              >
                Sign In
              </button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;