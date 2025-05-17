import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Github as GitHub, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Layers className="h-8 w-8 text-accent" />
              <span className="text-xl font-poppins font-bold">
                Skill<span className="text-accent">Forge</span>
              </span>
            </Link>
            <p className="text-coolGray-light text-sm">
              A hands-on learning platform for engineering students. Learn by building, not just watching.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">
                <GitHub className="h-5 w-5" />
              </a>
              <a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/modules" className="text-coolGray-light hover:text-accent transition-colors duration-200">Modules</Link></li>
              <li><Link to="/projects" className="text-coolGray-light hover:text-accent transition-colors duration-200">Projects</Link></li>
              <li><Link to="/community" className="text-coolGray-light hover:text-accent transition-colors duration-200">Community</Link></li>
              <li><Link to="/leaderboard" className="text-coolGray-light hover:text-accent transition-colors duration-200">Leaderboard</Link></li>
              <li><Link to="/dashboard" className="text-coolGray-light hover:text-accent transition-colors duration-200">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">Tutorials</a></li>
              <li><a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">Engineering Blogs</a></li>
              <li><a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">Career Resources</a></li>
              <li><a href="#" className="text-coolGray-light hover:text-accent transition-colors duration-200">Hackathons</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-coolGray-light">Email: info@skillforge.edu</li>
              <li className="text-coolGray-light">Phone: +91 9876543210</li>
              <li className="text-coolGray-light">Address: Tech Park, Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coolGray-light text-sm">
            &copy; {new Date().getFullYear()} SkillForge. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-coolGray-light text-sm hover:text-accent transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-coolGray-light text-sm hover:text-accent transition-colors duration-200">Terms of Service</Link>
            <Link to="/faq" className="text-coolGray-light text-sm hover:text-accent transition-colors duration-200">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;