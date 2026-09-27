// src/data/portfolioData.js
// Centralized portfolio data for Nitish - NITISH//X

export const PERSONAL_INFO = {
  name: "Nitish",
  brand: "NITISH//X",
  tagline: "Build • Think • Create",
  title: "Computer Science Student & Aspiring Software Engineer",
  headlines: [
    "Building Ideas. Writing Code. Creating Impact.",
    "Turning Code into Real-World Solutions."
  ],
  bio: [
    "I'm Nitish, a Computer Science student and aspiring Software Engineer passionate about building practical, real-world solutions through technology.",
    "I enjoy developing projects, exploring software development, solving programming problems, and continuously improving my technical skills.",
    "I'm always eager to learn, build, and turn ideas into working products."
  ],
  aboutDetailed: {
    lead: "I'm Nitish, a Computer Science student and aspiring Software Engineer passionate about technology, software development, and solving real-world problems through code.",
    paragraph2: "I enjoy building practical projects, experimenting with new technologies, participating in hackathons, and continuously improving my programming and problem-solving abilities.",
    goal: "My goal is to grow into a skilled software engineer capable of designing, developing, and delivering meaningful technology solutions."
  },
  stats: [
    { label: "Role", value: "CS Student", sub: "B.Tech CSE" },
    { label: "Focus", value: "Aspiring SWE", sub: "Software Systems" },
    { label: "Portfolio", value: "3 Featured", sub: "Practical Projects" },
    { label: "Experience", value: "Hackathons", sub: "Active Participant" },
  ],
  contact: {
    email: "nitishkumar741188@gmail.com",
    linkedin: "https://www.linkedin.com/in/nitish1046",
    github: "https://github.com/nitish1046",
    hackerrank: "https://www.hackerrank.com/profile/nitishkumar74111",
    location: "Jaipur, Rajasthan, India",
    status: "Available for Internships & Projects"
  }
};

export const EDUCATION = {
  degree: "B.Tech — Computer Science and Engineering",
  institution: "Arya College of Engineering, Jaipur",
  graduation: "Expected Graduation: 2029",
  status: "In Progress",
  highlights: [
    "Core focus on Algorithms, Object-Oriented Design, and Software Systems",
    "Hands-on development of software solutions and real-world system architecture",
    "Active involvement in collegiate developer communities and coding challenges"
  ]
};

export const SKILLS_CATEGORIES = [
  {
    id: "programming",
    name: "Programming",
    icon: "Code2",
    skills: [
      { name: "C++", level: "Core Strength", desc: "Object-oriented systems, STL vectors, memory management", badge: "Primary" },
      { name: "C", level: "Foundational", desc: "Low-level system concepts, pointers, memory architectures", badge: "Core" },
      { name: "Python", level: "Applied", desc: "Scripting, rapid prototyping, data handling, and backend logic", badge: "Versatile" },
    ]
  },
  {
    id: "cs",
    name: "Computer Science",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: "Problem Solving", desc: "Arrays, Linked Lists, Trees, Stacks, Queues, Sorting & Searching", badge: "Analytical" },
      { name: "Object-Oriented Programming", level: "System Design", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, Clean Code", badge: "Architecture" },
    ]
  },
  {
    id: "web",
    name: "Web Development",
    icon: "Globe",
    skills: [
      { name: "HTML", level: "Standard", desc: "Semantic markup, accessibility structure, SEO tags", badge: "Markup" },
      { name: "CSS", level: "Styling", desc: "Responsive layouts, Flexbox, Grid, Glassmorphism, animations", badge: "Styling" },
    ]
  },
  {
    id: "tools",
    name: "Developer Tools",
    icon: "Terminal",
    skills: [
      { name: "Git", level: "Version Control", desc: "Branching, commit conventions, merge management", badge: "Essential" },
      { name: "GitHub", level: "Collaboration", desc: "Remote repositories, code hosting, open-source workflow", badge: "Platform" },
    ]
  }
];

export const CURRENTLY_EXPLORING = [
  {
    title: "Advanced C++",
    category: "Systems & Performance",
    desc: "Modern C++ features, advanced STL, smart pointers, and concurrency patterns.",
    icon: "Zap"
  },
  {
    title: "Data Structures & Algorithms",
    category: "Algorithmic Problem Solving",
    desc: "Complex dynamic programming, graph algorithms, and competitive coding optimization.",
    icon: "Network"
  },
  {
    title: "JavaScript",
    category: "Dynamic Web",
    desc: "Modern ES6+, asynchronous programming, event loop mechanics, and DOM APIs.",
    icon: "FileCode"
  },
  {
    title: "Backend Development",
    category: "Server Architecture",
    desc: "RESTful API engineering, server lifecycle, middleware, and request/response pipelines.",
    icon: "Server"
  },
  {
    title: "Full-Stack Development",
    category: "End-to-End Systems",
    desc: "Bridging responsive user interfaces with performant database persistence layers.",
    icon: "Layers"
  },
  {
    title: "Cloud Technologies",
    category: "Scalable Infrastructure",
    desc: "Cloud service primitives, serverless deployment concepts, and distributed systems.",
    icon: "Cloud"
  }
];

export const PROJECTS = [
  {
    id: "surplus-to-shelter",
    title: "SurplusToShelter",
    tagline: "Food-Rescue & Distribution Network Platform",
    featured: true,
    category: "Web Application / Social Impact",
    description: "A food-rescue platform designed to connect surplus food donors with NGOs/shelters and volunteer drivers, helping coordinate food donation, matching, pickup, delivery, and impact tracking.",
    contribution: "Frontend Development + Database",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
    features: [
      "Food donation management & verification flow",
      "Donation location tracking & geocoded shelters",
      "Automated food-to-shelter matching engine",
      "Pickup and delivery coordination for volunteer drivers",
      "Real-time social impact metrics dashboard",
      "Live donation lifecycle & status tracking"
    ],
    githubUrl: "https://github.com/nitish1046/surplus-to-shelter",
    accentColor: "from-emerald-500/20 to-cyan-500/20",
    glowColor: "rgba(16, 185, 129, 0.4)",
    themeBadge: "Food Rescue & Logistics",
    visualType: "foodRescue"
  },
  {
    id: "smart-ev-charging",
    title: "Smart EV Charging Management System",
    tagline: "Automated Electric Vehicle Station & Slot Manager",
    featured: true,
    category: "Systems Software / C++",
    description: "A C++-based EV charging management system designed to manage charging stations, available slots, vehicle information, booking, release, and billing.",
    contribution: "OOP Concepts + C++ Development",
    technologies: ["C++", "Object-Oriented Programming", "File Handling", "STL / Vectors"],
    features: [
      "EV vehicle registration & authentication",
      "Charging station network management",
      "Real-time slot availability tracking",
      "Automated slot booking & schedule reservation",
      "Charging session release & timer handling",
      "Dynamic kWh consumption calculation & billing"
    ],
    githubUrl: "https://github.com/nitish1046/smart-ev-charging-system",
    accentColor: "from-cyan-500/20 to-blue-600/20",
    glowColor: "rgba(6, 182, 212, 0.4)",
    themeBadge: "C++ Systems / Smart Grid",
    visualType: "evCharging"
  },
  {
    id: "waste-segregation-system",
    title: "Waste Segregation Monitoring System",
    tagline: "Smart Urban Waste Segregation & Environmental Monitor",
    featured: true,
    category: "Environmental Tech / Urban IoT",
    description: "A technology-oriented project focused on improving waste segregation and monitoring in local urban environments.",
    contribution: "Monitoring Architecture & System Integration",
    technologies: ["Python", "Environmental Logic", "Sensor Systems", "Data Monitoring"],
    features: [
      "Automated segregation tracking & classification logic",
      "Urban collection point fill-level monitoring",
      "Alert mechanism for overflow detection",
      "Environmental impact logging and reporting",
      "Localized collection route optimization indicators"
    ],
    githubUrl: "https://github.com/nitish1046/waste-segregation-monitoring",
    accentColor: "from-purple-500/20 to-indigo-600/20",
    glowColor: "rgba(168, 85, 247, 0.4)",
    themeBadge: "Environmental Tech",
    visualType: "wasteMonitoring"
  }
];

export const ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "Hackathon Participant",
    organization: "Collegiate & Tech Innovation Hackathons",
    date: "2024 - Present",
    category: "Hackathon",
    badge: "Active Competitor",
    description: "Actively brainstorming, designing, and coding real-world prototypes within tight deadlines alongside peer engineering teams.",
    isEditable: false
  },
  {
    id: "cert-1",
    title: "Object-Oriented Programming & C++",
    organization: "Technical Learning Platform",
    date: "Self-Paced / In Progress",
    category: "Certification",
    badge: "Core Software",
    description: "Focusing on modular software design, inheritance, polymorphism, and efficient C++ standard library structures.",
    isEditable: true
  },
  {
    id: "cert-2",
    title: "Data Structures & Algorithmic Problem Solving",
    organization: "Computer Science Foundation",
    date: "Ongoing",
    category: "Certification",
    badge: "Algorithms",
    description: "Mastering array manipulation, tree traversal, recursion, time-space complexity optimization, and problem modeling.",
    isEditable: true
  }
];

export const CODING_PROFILES = [
  {
    name: "GitHub",
    username: "nitish1046",
    url: "https://github.com/nitish1046",
    handle: "github.com/nitish1046",
    description: "Repositories, open source exploration, project version control, and codebase documentation.",
    icon: "Github",
    color: "#38bdf8",
    badge: "Code Repositories"
  },
  {
    name: "LinkedIn",
    username: "nitish1046",
    url: "https://www.linkedin.com/in/nitish1046",
    handle: "linkedin.com/in/nitish1046",
    description: "Professional networking, tech industry insights, hackathon milestones, and engineering growth.",
    icon: "Linkedin",
    color: "#0a84ff",
    badge: "Professional Network"
  },
  {
    name: "HackerRank",
    username: "@nitishkumar74111",
    url: "https://www.hackerrank.com/profile/nitishkumar74111",
    handle: "@nitishkumar74111",
    description: "Competitive programming problems, C/C++ problem sets, logic puzzles, and core algorithm exercises.",
    icon: "Terminal",
    color: "#34d399",
    badge: "Problem Solving"
  }
];

export const HOBBIES = [
  { name: "Cricket", icon: "Activity", category: "Sports", desc: "Strategy, teamwork, and agility under pressure." },
  { name: "Coding", icon: "Code", category: "Passion", desc: "Building side projects and solving algorithmic puzzles." },
  { name: "Music", icon: "Music", category: "Creative", desc: "Focus rhythms and soundscapes for deep programming flow." },
  { name: "Photography", icon: "Camera", category: "Visuals", desc: "Capturing architecture, light balance, and perspective." },
  { name: "Traveling", icon: "Compass", category: "Exploration", desc: "Discovering new environments and fresh cultures." },
  { name: "Gaming", icon: "Gamepad2", category: "Strategy", desc: "Fast decision-making, logic mechanics, and immersive worlds." },
  { name: "Dance", icon: "Sparkles", category: "Art", desc: "Rhythm, expression, creative discipline, and movement." },
  { name: "Fitness", icon: "Dumbbell", category: "Discipline", desc: "Daily physical training, endurance, and mental clarity." },
];
