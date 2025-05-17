import React from 'react';
import { ThumbsUp, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
      className="glass-card overflow-hidden"
    >
      {project.imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="font-poppins text-lg font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-primary-light text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-coolGray bg-opacity-50 rounded-full text-xs text-primary-light">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-2 mb-4">
          <img 
            src={project.userAvatar} 
            alt={project.userName} 
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-primary">{project.userName}</p>
            <div className="flex items-center text-xs text-primary-light">
              <Calendar size={12} className="mr-1" />
              <span>{formatDate(project.createdAt)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center text-primary-light">
              <ThumbsUp size={14} className="mr-1" />
              <span>{project.likes}</span>
            </div>
            <div className="flex items-center text-primary-light">
              <MessageCircle size={14} className="mr-1" />
              <span>{project.comments}</span>
            </div>
          </div>
          
          <Link 
            to={`/projects/${project.id}`} 
            className="text-accent hover:text-accent-dark font-medium text-sm transition-colors duration-200"
          >
            View Project
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;