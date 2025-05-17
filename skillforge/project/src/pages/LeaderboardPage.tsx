import React, { useEffect } from 'react';
import { useAppStore } from '../store';
import LeaderboardRow from '../components/ui/LeaderboardRow';
import { Search, Filter, Trophy, Award, Users } from 'lucide-react';

const LeaderboardPage: React.FC = () => {
  const { leaderboard, fetchLeaderboard, user } = useAppStore();
  
  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-poppins font-semibold text-3xl text-primary mb-2">Leaderboard</h1>
            <p className="text-primary-light">See how you rank among other students</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 rounded-lg border border-coolGray focus:outline-none focus:border-accent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-light h-4 w-4" />
            </div>
            
            <button className="btn-primary flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-primary mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <p className="text-sm text-primary-light">Your Rank</p>
                    <p className="font-semibold text-primary">#4</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <p className="text-sm text-primary-light">Total XP</p>
                    <p className="font-semibold text-primary">{user?.xp.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <p className="text-sm text-primary-light">Active Students</p>
                    <p className="font-semibold text-primary">5,678</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="font-semibold text-primary mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-primary-light">College</label>
                  <select className="w-full mt-1 p-2 rounded-lg border border-coolGray">
                    <option>All Colleges</option>
                    <option>VIT Vellore</option>
                    <option>BIT Mesra</option>
                    <option>Manipal Institute of Technology</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-primary-light">City</label>
                  <select className="w-full mt-1 p-2 rounded-lg border border-coolGray">
                    <option>All Cities</option>
                    <option>Vellore</option>
                    <option>Ranchi</option>
                    <option>Manipal</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-primary-light">Time Period</label>
                  <select className="w-full mt-1 p-2 rounded-lg border border-coolGray">
                    <option>All Time</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Leaderboard List */}
          <div className="lg:col-span-3 space-y-4">
            {leaderboard.map(entry => (
              <LeaderboardRow 
                key={entry.userId} 
                entry={entry} 
                isCurrentUser={entry.userId === user?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;