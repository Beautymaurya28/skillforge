import { create } from 'zustand';
import { User, Module, Project, ForumThread, LeaderboardEntry, SkillPath } from '../types';
import { mockUser, mockModules, mockProjects, mockThreads, mockLeaderboard, mockSkillPath } from '../data/mockData';

interface AppState {
  user: User | null;
  modules: Module[];
  projects: Project[];
  threads: ForumThread[];
  leaderboard: LeaderboardEntry[];
  skillPath: SkillPath;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Auth actions
  login: () => void;
  logout: () => void;
  
  // Data fetching actions
  fetchModules: () => void;
  fetchProjects: () => void;
  fetchThreads: () => void;
  fetchLeaderboard: () => void;
  fetchSkillPath: () => void;
  
  // User actions
  completeModule: (moduleId: string) => void;
  likeProject: (projectId: string) => void;
  upvoteThread: (threadId: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  modules: [],
  projects: [],
  threads: [],
  leaderboard: [],
  skillPath: {
    id: '',
    title: '',
    description: '',
    nodes: [],
    connections: []
  },
  isAuthenticated: false,
  isLoading: false,
  
  // Auth actions
  login: () => {
    set({ 
      user: mockUser,
      isAuthenticated: true 
    });
  },
  
  logout: () => {
    set({ 
      user: null,
      isAuthenticated: false 
    });
  },
  
  // Data fetching actions
  fetchModules: () => {
    set({ 
      modules: mockModules,
      isLoading: false 
    });
  },
  
  fetchProjects: () => {
    set({ 
      projects: mockProjects,
      isLoading: false 
    });
  },
  
  fetchThreads: () => {
    set({ 
      threads: mockThreads,
      isLoading: false 
    });
  },
  
  fetchLeaderboard: () => {
    set({ 
      leaderboard: mockLeaderboard,
      isLoading: false 
    });
  },
  
  fetchSkillPath: () => {
    set({ 
      skillPath: mockSkillPath,
      isLoading: false 
    });
  },
  
  // User actions
  completeModule: (moduleId: string) => {
    set((state) => {
      // Update user XP and coins
      if (!state.user) return state;
      
      const module = state.modules.find(m => m.id === moduleId);
      if (!module) return state;
      
      const updatedUser = {
        ...state.user,
        xp: state.user.xp + module.xpReward,
        skillCoins: state.user.skillCoins + module.coinReward
      };
      
      return { user: updatedUser };
    });
  },
  
  likeProject: (projectId: string) => {
    set((state) => {
      const updatedProjects = state.projects.map(project => {
        if (project.id === projectId) {
          return { ...project, likes: project.likes + 1 };
        }
        return project;
      });
      
      return { projects: updatedProjects };
    });
  },
  
  upvoteThread: (threadId: string) => {
    set((state) => {
      const updatedThreads = state.threads.map(thread => {
        if (thread.id === threadId) {
          return { ...thread, upvotes: thread.upvotes + 1 };
        }
        return thread;
      });
      
      return { threads: updatedThreads };
    });
  },
}));