export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  xp: number;
  skillCoins: number;
  level: number;
  college: string;
  city: string;
  badges: Badge[];
  joinedAt: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  xpReward: number;
  coinReward: number;
  estimatedTime: string;
  steps: ModuleStep[];
  prerequisites: string[];
  completions: number;
}

export interface ModuleStep {
  id: string;
  title: string;
  type: 'theory' | 'practice' | 'quiz' | 'project';
  content: string;
  resources?: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'documentation' | 'example';
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  userId: string;
  userName: string;
  userAvatar: string;
  module?: string;
  tags: string[];
  likes: number;
  comments: number;
  imageUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
  createdAt: string;
}

export interface ForumThread {
  id: string;
  title: string;
  content: string;
  userId: string;
  userName: string;
  userAvatar: string;
  tags: string[];
  upvotes: number;
  comments: number;
  createdAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  userName: string;
  userAvatar: string;
  college: string;
  city: string;
  xp: number;
  level: number;
  badges: number;
}

export interface SkillPath {
  id: string;
  title: string;
  description: string;
  nodes: SkillNode[];
  connections: Connection[];
}

export interface SkillNode {
  id: string;
  title: string;
  description: string;
  moduleId: string;
  status: 'locked' | 'available' | 'completed';
  position: { x: number; y: number };
}

export interface Connection {
  source: string;
  target: string;
}