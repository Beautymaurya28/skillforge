import React, { useEffect } from 'react';
import { useAppStore } from '../store';
import ProjectCard from '../components/ui/ProjectCard';
import { Filter, Search, PlusCircle } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const { projects, fetchProjects } = useAppStore();
  
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-poppins font-semibold text-3xl text-primary mb-2">Student Projects</h1>
            <p className="text-primary-light">Explore projects built by the SkillForge community</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 rounded-lg border border-coolGray focus:outline-none focus:border-accent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-light h-4 w-4" />
            </div>
            
            <button className="btn-primary flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            
            <button className="btn-accent flex items-center">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Project
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;