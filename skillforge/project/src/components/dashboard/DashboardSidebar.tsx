import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Code, Trophy, Users, Home, Settings, LogOut } from 'lucide-react';
import { useAppStore } from '../../store';
import { motion } from 'framer-motion';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAppStore();
  
  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: Home },
    { name: 'Modules', path: '/dashboard/modules', icon: BookOpen },
    { name: 'Projects', path: '/dashboard/projects', icon: Code },
    { name: 'Leaderboard', path: '/dashboard/leaderboard', icon: Trophy },
    { name: 'Community', path: '/dashboard/community', icon: Users },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];
  
  return (
    <div className="glass-card p-6 sticky top-24 h-[calc(100vh-120px)]">
      <div className="flex flex-col items-center mb-8">
        <img 
          src={user?.avatar} 
          alt={user?.name} 
          className="h-20 w-20 rounded-full object-cover border-4 border-accent mb-4"
        />
        <h3 className="font-poppins font-semibold text-primary text-xl">{user?.name}</h3>
        <p className="text-primary-light text-sm">{user?.college}</p>
        
        <div className="mt-4 flex space-x-4">
          <div className="text-center">
            <p className="font-semibold text-primary">{user?.level}</p>
            <p className="text-xs text-primary-light">Level</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-primary">{user?.xp.toLocaleString()}</p>
            <p className="text-xs text-primary-light">XP</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-primary">{user?.skillCoins}</p>
            <p className="text-xs text-primary-light">Coins</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link to={item.path} key={item.name}>
              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-primary text-white' 
                    : 'text-primary hover:bg-coolGray hover:bg-opacity-50'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{item.name}</span>
                {isActive && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-accent animate-pulse" />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
      
      <div className="absolute bottom-6 left-6 right-6">
        <button 
          onClick={() => logout()}
          className="flex items-center space-x-3 py-3 px-4 w-full rounded-lg text-error hover:bg-error hover:bg-opacity-10 transition-colors duration-200"
        >
          <LogOut size={18} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;