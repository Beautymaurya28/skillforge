import { User, Module, Project, ForumThread, LeaderboardEntry, SkillPath } from '../types';

export const mockUser: User = {
  id: 'u1',
  name: 'Ravi Kumar',
  email: 'ravi.kumar@example.com',
  avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
  xp: 2750,
  skillCoins: 350,
  level: 8,
  college: 'Dr. DY Patil Institute of Technology',
  city: 'Pune',
  badges: [
    {
      id: 'b1',
      name: 'Code Ninja',
      description: 'Completed 10 coding challenges',
      icon: 'code',
      unlockedAt: '2023-08-15'
    },
    {
      id: 'b2',
      name: 'Circuit Wizard',
      description: 'Built 5 electronics projects',
      icon: 'cpu',
      unlockedAt: '2023-09-22'
    },
    {
      id: 'b3',
      name: 'Team Player',
      description: 'Helped 20 students in forums',
      icon: 'users',
      unlockedAt: '2023-10-10'
    }
  ],
  joinedAt: '2023-06-15'
};

export const mockModules: Module[] = [
  {
    id: 'm1',
    title: 'Arduino Basics: LED Control',
    description: 'Learn the fundamentals of Arduino programming by controlling LEDs with digital pins.',
    difficulty: 'beginner',
    category: 'Electronics',
    tags: ['arduino', 'electronics', 'beginner'],
    xpReward: 150,
    coinReward: 25,
    estimatedTime: '2 hours',
    completions: 1287,
    prerequisites: [],
    steps: [
      {
        id: 's1',
        title: 'Understanding Arduino Basics',
        type: 'theory',
        content: 'Introduction to Arduino, its components, and setup instructions.'
      },
      {
        id: 's2',
        title: 'LED Blinking Project',
        type: 'practice',
        content: 'Create a simple circuit to blink an LED using digital output.'
      }
    ]
  },
  {
    id: 'm2',
    title: 'Web Development Fundamentals',
    description: 'Get started with HTML, CSS, and JavaScript to build your first website.',
    difficulty: 'beginner',
    category: 'Web Development',
    tags: ['html', 'css', 'javascript', 'webdev'],
    xpReward: 200,
    coinReward: 30,
    estimatedTime: '4 hours',
    completions: 2163,
    prerequisites: [],
    steps: [
      {
        id: 's1',
        title: 'HTML Basics',
        type: 'theory',
        content: 'Introduction to HTML tags, elements, and document structure.'
      },
      {
        id: 's2',
        title: 'CSS Styling',
        type: 'practice',
        content: 'Learn to style your HTML pages with CSS.'
      }
    ]
  },
  {
    id: 'm3',
    title: 'Machine Learning with Python',
    description: 'Introduction to machine learning concepts using Python and scikit-learn.',
    difficulty: 'intermediate',
    category: 'AI & ML',
    tags: ['python', 'machine-learning', 'ai'],
    xpReward: 300,
    coinReward: 50,
    estimatedTime: '8 hours',
    completions: 843,
    prerequisites: ['m2'],
    steps: [
      {
        id: 's1',
        title: 'Python for Data Science',
        type: 'theory',
        content: 'Essential Python libraries for data science: NumPy, Pandas, and Matplotlib.'
      },
      {
        id: 's2',
        title: 'Building a Classifier',
        type: 'project',
        content: 'Create a simple classification model using scikit-learn.'
      }
    ]
  },
  {
    id: 'm4',
    title: 'IoT Sensor Network',
    description: 'Build an IoT sensor network using ESP8266 modules and MQTT protocol.',
    difficulty: 'advanced',
    category: 'IoT',
    tags: ['iot', 'esp8266', 'mqtt', 'sensors'],
    xpReward: 350,
    coinReward: 60,
    estimatedTime: '10 hours',
    completions: 412,
    prerequisites: ['m1', 'm3'],
    steps: [
      {
        id: 's1',
        title: 'IoT Architecture',
        type: 'theory',
        content: 'Understanding IoT network architecture and communication protocols.'
      },
      {
        id: 's2',
        title: 'ESP8266 Programming',
        type: 'practice',
        content: 'Programming ESP8266 for WiFi connectivity and sensor data collection.'
      }
    ]
  }
];

export const mockProjects: Project[] = [
  {
    id: 'p1',
    title: 'Smart Home Automation System',
    description: 'A DIY smart home system using Arduino, ESP8266, and custom mobile app for controlling lights, fans, and appliances.',
    userId: 'u2',
    userName: 'Priya Sharma',
    userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    tags: ['iot', 'arduino', 'mobile-app'],
    likes: 87,
    comments: 24,
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2023-10-15'
  },
  {
    id: 'p2',
    title: 'College Event Management Portal',
    description: 'A web application for managing college events, registrations, and ticketing with admin dashboard.',
    userId: 'u3',
    userName: 'Amit Patel',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    tags: ['webdev', 'react', 'nodejs'],
    likes: 65,
    comments: 18,
    imageUrl: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2023-11-05'
  },
  {
    id: 'p3',
    title: 'Disease Prediction using Machine Learning',
    description: 'An ML model that predicts diseases based on symptoms with 89% accuracy using Random Forest algorithm.',
    userId: 'u4',
    userName: 'Deepa Krishnan',
    userAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100',
    tags: ['machine-learning', 'healthcare', 'python'],
    likes: 112,
    comments: 31,
    imageUrl: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=500',
    createdAt: '2023-09-28'
  }
];

export const mockThreads: ForumThread[] = [
  {
    id: 't1',
    title: 'How to implement JWT authentication in a React + Node.js app?',
    content: 'I\'m building a web application using React for frontend and Node.js for backend. I need to implement JWT authentication but I\'m facing issues with token refresh strategy. Any suggestions?',
    userId: 'u5',
    userName: 'Rahul Mehta',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    tags: ['react', 'nodejs', 'authentication', 'jwt'],
    upvotes: 28,
    comments: 15,
    createdAt: '2023-11-10'
  },
  {
    id: 't2',
    title: 'Best microcontroller for robotics projects?',
    content: 'I\'m starting a robotics club at my college and need advice on which microcontroller to choose for beginner to intermediate projects. Arduino, Raspberry Pi, or something else?',
    userId: 'u6',
    userName: 'Neha Singh',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    tags: ['robotics', 'arduino', 'raspberry-pi', 'hardware'],
    upvotes: 42,
    comments: 23,
    createdAt: '2023-10-25'
  },
  {
    id: 't3',
    title: 'Resources for learning computer vision with Python',
    content: 'Can someone recommend good books, courses or YouTube channels for learning computer vision using Python and OpenCV? I have intermediate Python skills but new to CV.',
    userId: 'u7',
    userName: 'Karthik Reddy',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    tags: ['computer-vision', 'python', 'opencv', 'learning'],
    upvotes: 35,
    comments: 19,
    createdAt: '2023-11-15'
  }
];

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: 'u8',
    userName: 'Ananya Desai',
    userAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
    college: 'VIT Vellore',
    city: 'Vellore',
    xp: 8750,
    level: 21,
    badges: 15
  },
  {
    rank: 2,
    userId: 'u9',
    userName: 'Siddharth Kapoor',
    userAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100',
    college: 'BIT Mesra',
    city: 'Ranchi',
    xp: 7820,
    level: 19,
    badges: 12
  },
  {
    rank: 3,
    userId: 'u10',
    userName: 'Zoya Khan',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    college: 'Manipal Institute of Technology',
    city: 'Manipal',
    xp: 7540,
    level: 18,
    badges: 14
  },
  {
    rank: 4,
    userId: 'u1',
    userName: 'Ravi Kumar',
    userAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
    college: 'Dr. DY Patil Institute of Technology',
    city: 'Pune',
    xp: 2750,
    level: 8,
    badges: 3
  }
];

export const mockSkillPath: SkillPath = {
  id: 'sp1',
  title: 'Web Development Journey',
  description: 'Complete path to become a full-stack web developer',
  nodes: [
    {
      id: 'n1',
      title: 'HTML & CSS Basics',
      description: 'Learn the fundamentals of web markup and styling',
      moduleId: 'm2',
      status: 'completed',
      position: { x: 100, y: 100 }
    },
    {
      id: 'n2',
      title: 'JavaScript Essentials',
      description: 'Master the core concepts of JavaScript programming',
      moduleId: 'm5',
      status: 'available',
      position: { x: 250, y: 100 }
    },
    {
      id: 'n3',
      title: 'React Fundamentals',
      description: 'Build interactive UIs with React',
      moduleId: 'm6',
      status: 'locked',
      position: { x: 400, y: 100 }
    },
    {
      id: 'n4',
      title: 'Node.js Backend',
      description: 'Create server-side applications with Node.js',
      moduleId: 'm7',
      status: 'locked',
      position: { x: 550, y: 100 }
    },
    {
      id: 'n5',
      title: 'Database Integration',
      description: 'Work with SQL and NoSQL databases',
      moduleId: 'm8',
      status: 'locked',
      position: { x: 400, y: 250 }
    },
    {
      id: 'n6',
      title: 'Full Stack Project',
      description: 'Build a complete web application',
      moduleId: 'm9',
      status: 'locked',
      position: { x: 550, y: 250 }
    }
  ],
  connections: [
    { source: 'n1', target: 'n2' },
    { source: 'n2', target: 'n3' },
    { source: 'n3', target: 'n4' },
    { source: 'n3', target: 'n5' },
    { source: 'n4', target: 'n6' },
    { source: 'n5', target: 'n6' }
  ]
};