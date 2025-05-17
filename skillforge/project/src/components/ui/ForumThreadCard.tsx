import React from 'react';
import { ThumbsUp, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ForumThread } from '../../types';
import { motion } from 'framer-motion';

interface ForumThreadCardProps {
  thread: ForumThread;
}

const ForumThreadCard: React.FC<ForumThreadCardProps> = ({ thread }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <motion.div 
      whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.07)' }}
      transition={{ duration: 0.2 }}
      className="glass-card p-6"
    >
      <h3 className="font-poppins text-lg font-semibold text-primary mb-2">
        <Link to={`/community/${thread.id}`} className="hover:text-accent transition-colors duration-200">
          {thread.title}
        </Link>
      </h3>
      
      <p className="text-primary-light text-sm mb-4 line-clamp-2">{thread.content}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {thread.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-coolGray bg-opacity-50 rounded-full text-xs text-primary-light">
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center space-x-2 mb-4">
        <img 
          src={thread.userAvatar} 
          alt={thread.userName} 
          className="h-8 w-8 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-primary">{thread.userName}</p>
          <div className="flex items-center text-xs text-primary-light">
            <Calendar size={12} className="mr-1" />
            <span>{formatDate(thread.createdAt)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div className="flex items-center text-primary-light">
            <ThumbsUp size={14} className="mr-1" />
            <span>{thread.upvotes}</span>
          </div>
          <div className="flex items-center text-primary-light">
            <MessageCircle size={14} className="mr-1" />
            <span>{thread.comments}</span>
          </div>
        </div>
        
        <Link 
          to={`/community/${thread.id}`} 
          className="text-accent hover:text-accent-dark font-medium text-sm transition-colors duration-200"
        >
          View Discussion
        </Link>
      </div>
    </motion.div>
  );
};

export default ForumThreadCard;