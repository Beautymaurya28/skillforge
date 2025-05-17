import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppStore } from '../store';
import { Layers, BookOpen, Users, Award, ArrowRight, Cpu, Code, Zap } from 'lucide-react';
import ModuleCard from '../components/ui/ModuleCard';
import ProjectCard from '../components/ui/ProjectCard';

const LandingPage: React.FC = () => {
  const { modules, projects, fetchModules, fetchProjects } = useAppStore();
  
  useEffect(() => {
    fetchModules();
    fetchProjects();
  }, [fetchModules, fetchProjects]);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-success blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Don't Just Learn.{' '}
                <span className="text-accent">Build.</span>
              </h1>
              
              <p className="text-coolGray-light text-lg md:text-xl mb-8 md:max-w-md">
                A hands-on learning platform for engineering students. Master real-world skills through interactive projects and community learning.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/modules" className="btn-accent px-6 py-3 text-base">
                  Start Learning
                </Link>
                <Link to="/projects" className="btn text-white border border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 text-base">
                  Explore Projects
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-success rounded-2xl blur opacity-30"></div>
                <div className="glass-card p-6 relative">
                  <div className="bg-primary p-4 rounded-lg mb-4">
                    <pre className="text-xs text-accent font-mono overflow-x-auto">
<code>{`function blinkyLED() {
  pinMode(13, OUTPUT);
  
  while(true) {
    digitalWrite(13, HIGH);
    delay(1000);
    digitalWrite(13, LOW);
    delay(1000);
  }
}`}</code>
                    </pre>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-2/3">
                      <div className="h-2.5 bg-coolGray rounded-full w-5/6 mb-2"></div>
                      <div className="h-2.5 bg-coolGray rounded-full w-full"></div>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-success text-white px-3 py-1 rounded-full text-xs font-semibold">Run</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-success rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <div className="h-2.5 bg-coolGray rounded-full w-24 mb-1.5"></div>
                      <div className="h-2 bg-coolGray rounded-full w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-white mb-1">50+ Modules</h3>
              <p className="text-coolGray-light text-sm">Hands-on learning experiences</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-white mb-1">20+ Technologies</h3>
              <p className="text-coolGray-light text-sm">Industry-relevant skills</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-white mb-1">100+ Projects</h3>
              <p className="text-coolGray-light text-sm">Real-world applications</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-white mb-1">5K+ Students</h3>
              <p className="text-coolGray-light text-sm">Active learning community</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Modules Section */}
      <section className="section bg-coolGray-light">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-poppins font-semibold text-3xl text-primary mb-2">Featured Modules</h2>
              <p className="text-primary-light">Start your journey with these popular learning paths</p>
            </div>
            <Link to="/modules" className="hidden md:flex items-center text-accent hover:text-accent-dark font-medium transition-colors duration-200">
              View All Modules
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.slice(0, 3).map(module => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
          
          <div className="md:hidden mt-8 text-center">
            <Link to="/modules" className="btn-primary inline-flex items-center">
              View All Modules
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-semibold text-3xl text-primary mb-2">How SkillForge Works</h2>
            <p className="text-primary-light max-w-xl mx-auto">Our learning platform is designed to help you master real-world skills through practical application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card p-8 text-center"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-accent bg-opacity-10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-4">Learn by Doing</h3>
              <p className="text-primary-light">Hands-on interactive modules with real-time feedback and guidance</p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-8 text-center"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-success bg-opacity-10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <Code className="h-10 w-10 text-success" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-4">Build Projects</h3>
              <p className="text-primary-light">Apply your knowledge by building real-world projects that matter</p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-8 text-center"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary bg-opacity-10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-4">Earn & Grow</h3>
              <p className="text-primary-light">Gain XP, earn badges, and track your progress as you level up your skills</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Student Projects Section */}
      <section className="section bg-coolGray-light">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-poppins font-semibold text-3xl text-primary mb-2">Student Projects</h2>
              <p className="text-primary-light">See what our community has built using SkillForge</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-accent hover:text-accent-dark font-medium transition-colors duration-200">
              View All Projects
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="md:hidden mt-8 text-center">
            <Link to="/projects" className="btn-primary inline-flex items-center">
              View All Projects
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-success blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to start your engineering journey?
            </h2>
            <p className="text-coolGray-light text-lg md:max-w-2xl mx-auto mb-8">
              Join thousands of students who are building real-world skills through hands-on learning.
            </p>
            <Link to="/modules" className="btn-accent px-8 py-3 text-lg">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;