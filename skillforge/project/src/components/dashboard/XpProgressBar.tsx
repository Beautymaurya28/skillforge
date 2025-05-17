import React from 'react';
import { motion } from 'framer-motion';

interface XpProgressBarProps {
  xp: number;
  nextLevelXp: number;
  level: number;
}

const XpProgressBar: React.FC<XpProgressBarProps> = ({ xp, nextLevelXp, level }) => {
  const progressPercentage = (xp / nextLevelXp) * 100;
  
  return (
    <div className="glass-card p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="bg-primary text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-2">
            {level}
          </div>
          <span className="font-poppins font-medium text-primary">Level {level}</span>
        </div>
        <div className="text-sm text-primary-light">
          {xp.toLocaleString()} / {nextLevelXp.toLocaleString()} XP
        </div>
      </div>
      
      <div className="xp-bar">
        <motion.div 
          className="xp-progress"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      
      <div className="flex justify-between mt-2">
        <div className="text-xs text-primary-light">Current</div>
        <div className="text-xs text-primary-light">Next Level</div>
      </div>
    </div>
  );
};

export default XpProgressBar;