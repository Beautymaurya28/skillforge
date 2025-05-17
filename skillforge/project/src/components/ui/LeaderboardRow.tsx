import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { LeaderboardEntry } from '../../types';
import { motion } from 'framer-motion';

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
  isCurrentUser: boolean;
}

const getRankBadge = (rank: number) => {
  switch (rank) {
    case 1:
      return (
        <div className="absolute -left-1 -top-1 flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 border-2 border-white">
          <Trophy size={14} className="text-primary" />
        </div>
      );
    case 2:
      return (
        <div className="absolute -left-1 -top-1 flex items-center justify-center w-7 h-7 rounded-full bg-gray-300 border-2 border-white">
          <Trophy size={12} className="text-primary" />
        </div>
      );
    case 3:
      return (
        <div className="absolute -left-1 -top-1 flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 border-2 border-white">
          <Trophy size={10} className="text-primary" />
        </div>
      );
    default:
      return null;
  }
};

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ entry, isCurrentUser }) => {
  return (
    <motion.div 
      initial={isCurrentUser ? { scale: 1.02 } : { scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`relative glass-card p-4 ${isCurrentUser ? 'border-2 border-accent' : ''}`}
    >
      {getRankBadge(entry.rank)}
      
      <div className="flex items-center">
        <div className="flex-shrink-0 w-16 text-center">
          <span className={`font-poppins font-bold text-xl ${
            entry.rank === 1 ? 'text-yellow-500' :
            entry.rank === 2 ? 'text-gray-400' :
            entry.rank === 3 ? 'text-amber-600' :
            'text-primary'
          }`}>
            #{entry.rank}
          </span>
        </div>
        
        <div className="flex-shrink-0 mr-4">
          <img 
            src={entry.userAvatar} 
            alt={entry.userName} 
            className={`h-12 w-12 rounded-full object-cover border-2 ${
              entry.rank === 1 ? 'border-yellow-400' :
              entry.rank === 2 ? 'border-gray-300' :
              entry.rank === 3 ? 'border-amber-600' :
              'border-coolGray'
            }`}
          />
        </div>
        
        <div className="flex-grow">
          <h3 className="font-medium text-primary">{entry.userName}</h3>
          <p className="text-sm text-primary-light">{entry.college}, {entry.city}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <p className="text-xs text-primary-light">Level</p>
            <p className="font-semibold text-primary">{entry.level}</p>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-primary-light">XP</p>
            <p className="font-semibold text-primary">{entry.xp.toLocaleString()}</p>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-primary-light">Badges</p>
            <div className="flex items-center justify-center">
              <Award size={14} className="text-accent mr-1" />
              <p className="font-semibold text-primary">{entry.badges}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderboardRow;