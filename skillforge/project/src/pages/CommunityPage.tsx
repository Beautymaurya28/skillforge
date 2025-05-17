import React, { useEffect } from 'react';
import { useAppStore } from '../store';
import ForumThreadCard from '../components/ui/ForumThreadCard';
import { Filter, Search, PlusCircle, TrendingUp, MessageCircle, Users } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const { threads, fetchThreads } = useAppStore();
  
  useEffect(() => {
    fetchThreads();
  }, [fetchThreads]);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-poppins font-semibold text-3xl text-primary mb-2">Community Forum</h1>
            <p className="text-primary-light">Connect, learn, and grow with fellow engineering students</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search discussions..."
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
              New Thread
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-primary mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <p className="text-sm text-primary-light">Active Users</p>
                    <p className="font-semibold text-primary">1,234</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <p className="text-sm text-primary-light">Total Threads</p>
                    <p className="font-semibold text-primary">456</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <p className="text-sm text-primary-light">Discussions Today</p>
                    <p className="font-semibold text-primary">78</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="font-semibold text-primary mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-coolGray bg-opacity-50 rounded-full text-sm text-primary-light">#webdev</span>
                <span className="px-3 py-1 bg-coolGray bg-opacity-50 rounded-full text-sm text-primary-light">#arduino</span>
                <span className="px-3 py-1 bg-coolGray bg-opacity-50 rounded-full text-sm text-primary-light">#python</span>
                <span className="px-3 py-1 bg-coolGray bg-opacity-50 rounded-full text-sm text-primary-light">#machinelearning</span>
                <span className="px-3 py-1 bg-coolGray bg-opacity-50 rounded-full text-sm text-primary-light">#robotics</span>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {threads.map(thread => (
              <ForumThreadCard key={thread.id} thread={thread} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;