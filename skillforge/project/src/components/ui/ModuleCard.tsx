import React from 'react';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Module } from '../../types';
import { motion } from 'framer-motion';

interface ModuleCardProps {
  module: Module;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-success text-white';
    case 'intermediate':
      return 'bg-accent text-primary';
    case 'advanced':
      return 'bg-primary text-white';
    default:
      return 'bg-coolGray text-primary';
  }
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
      className="glass-card overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(module.difficulty)}`}>
            {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
          </div>
          <div className="flex items-center text-sm text-primary-light">
            <Users size={14} className="mr-1" />
            <span>{module.completions.toLocaleString()} students</span>
          </div>
        </div>
        
        <h3 className="font-poppins text-lg font-semibold text-primary mb-2">{module.title}</h3>
        <p className="text-primary-light text-sm mb-4 flex-grow">{module.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {module.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-coolGray bg-opacity-50 rounded-full text-xs text-primary-light">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-primary-light mb-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{module.estimatedTime}</span>
          </div>
          <div className="flex items-center">
            <Award size={14} className="mr-1" />
            <span>{module.xpReward} XP</span>
          </div>
        </div>
        
        <Link 
          to={`/modules/${module.id}`} 
          className="btn-primary flex items-center justify-center mt-auto"
        >
          Start Learning
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ModuleCard;