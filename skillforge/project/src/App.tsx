import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ModulesPage from './pages/ModulesPage';
import ProjectsPage from './pages/ProjectsPage';
import CommunityPage from './pages/CommunityPage';
import LeaderboardPage from './pages/LeaderboardPage';

const App: React.FC = () => {
  const { isAuthenticated, login, fetchModules, fetchProjects, fetchLeaderboard, fetchThreads } = useAppStore();
  
  useEffect(() => {
    // Pre-fetch data for demo purposes
    login();
    fetchModules();
    fetchProjects();
    fetchLeaderboard();
    fetchThreads();
  }, [login, fetchModules, fetchProjects, fetchLeaderboard, fetchThreads]);
  
  // A simple protected route component
  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
  };
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Dashboard routes */}
            <Route 
              path="/dashboard/modules" 
              element={
                <ProtectedRoute>
                  <div className="min-h-screen pt-24 pb-16 container-custom">
                    <h1 className="text-2xl font-semibold">Dashboard Modules</h1>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/projects" 
              element={
                <ProtectedRoute>
                  <div className="min-h-screen pt-24 pb-16 container-custom">
                    <h1 className="text-2xl font-semibold">Dashboard Projects</h1>
                  </div>
                </ProtectedRoute>
              } 
            />
            
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;