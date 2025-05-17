import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppStore } from '../store';
import { BookOpen, Code, Trophy, ArrowRight, Zap, Calendar } from 'lucide-react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import XpProgressBar from '../components/dashboard/XpProgressBar';
import ModuleCard from '../components/ui/ModuleCard';
import SkillPathView from '../components/SkillPathView';

const Dashboard: React.FC = () => {
  const { user, modules, fetchModules, fetchSkillPath, skillPath } = useAppStore();
  
  useEffect(() => {
    fetchModules();
    fetchSkillPath();
  }, [fetchModules, fetchSkillPath]);
  
  // Calculate next level XP (just a placeholder formula)
  const nextLevelXp = (user?.level ?? 0) * 1000;
  
  // Filter recommended modules (just using the first 2 for demo)
  const recommendedModules = modules.slice(0, 2);
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-coolGray-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <DashboardSidebar />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Message */}
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="font-poppins font-semibold text-2xl text-primary mb-2">
                    Welcome back, {user?.name}!
                  </h1>
                  <p className="text-primary-light">
                    Continue your learning journey and start building amazing projects.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <div className="flex items-center space-x-1 text-primary font-medium mr-4">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>{user?.skillCoins} SkillCoins</span>
                  </div>
                  <Link 
                    to="/dashboard/modules" 
                    className="btn-primary"
                  >
                    Continue Learning
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <XpProgressBar xp={user?.xp ?? 0} nextLevelXp={nextLevelXp} level={user?.level ?? 1} />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-accent bg-opacity-20 rounded-full p-3">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-light text-sm">Modules Completed</p>
                    <p className="font-poppins font-semibold text-2xl text-primary">7 / 50</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-success bg-opacity-20 rounded-full p-3">
                    <Code className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-primary-light text-sm">Projects Built</p>
                    <p className="font-poppins font-semibold text-2xl text-primary">3</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary bg-opacity-20 rounded-full p-3">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-light text-sm">Badges Earned</p>
                    <p className="font-poppins font-semibold text-2xl text-primary">{user?.badges.length ?? 0}</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* SkillPath */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-poppins font-semibold text-xl text-primary">Your Skill Path</h2>
                <Link 
                  to="/dashboard/skill-path" 
                  className="flex items-center text-accent hover:text-accent-dark transition-colors duration-200 text-sm font-medium"
                >
                  View Full Path
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              
              <SkillPathView skillPath={skillPath} />
            </div>
            
            {/* Recommended Modules */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-poppins font-semibold text-xl text-primary">Recommended for You</h2>
                <Link 
                  to="/modules" 
                  className="flex items-center text-accent hover:text-accent-dark transition-colors duration-200 text-sm font-medium"
                >
                  View All Modules
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedModules.map(module => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </div>
            </div>
            
            {/* Weekly Challenge */}
            <div className="glass-card overflow-hidden">
              <div className="bg-primary p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-poppins font-semibold text-xl text-white">Weekly Challenge</h3>
                  <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full flex items-center">
                    <Calendar size={14} className="text-white mr-1" />
                    <span className="text-white text-xs">5 days left</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                  Build a Weather Station with Arduino
                </h4>
                <p className="text-primary-light mb-4">
                  Create a weather monitoring station using Arduino, DHT11 sensor, and LCD display to track temperature and humidity.
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-center">
                    <p className="text-xs text-primary-light">Reward</p>
                    <p className="font-semibold text-primary flex items-center">
                      <Trophy size={14} className="text-accent mr-1" />
                      300 XP
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-primary-light">Bonus</p>
                    <p className="font-semibold text-primary flex items-center">
                      <Zap size={14} className="text-accent mr-1" />
                      50 Coins
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-primary-light">Participants</p>
                    <p className="font-semibold text-primary">127</p>
                  </div>
                </div>
                
                <button className="btn-accent w-full">
                  Accept Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;