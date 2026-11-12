import {
  Project,
  ProjectArchitecture,
  Skill,
  ExperienceItem,
  EducationItem,
  CredentialItem,
  ContactInfo
} from '../types/portfolio';

export const HERO_DATA = {
  name: 'Vishal Srinivasan',
  role: 'MERN Stack Developer',
  status: 'Available for Full-Stack Opportunities',
  bio: 'Computer Science graduate specializing in building robust full-stack applications with React, Node.js, Express, MongoDB, and Python. Focused on clean architecture, secure authentication, and sleek, responsive user interfaces.',
  stats: [
    {
      number: 'MERN',
      title: 'Stack Core Focus',
      desc: 'MongoDB, Express, React & Node.js',
      icon: 'stack'
    },
    {
      number: '6+ Mos',
      title: 'Hands-on Full-Stack',
      desc: 'Certified by Nucaza Innovations',
      icon: 'briefcase'
    },
    {
      number: 'Secure',
      title: 'Auth & Architecture',
      desc: 'JWT, Bcrypt, Protected Routes',
      icon: 'shield'
    },
    {
      number: 'Python',
      title: 'Foundation & OOP',
      desc: 'Internship & Scripting experience',
      icon: 'code'
    }
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/Vishalsrinivasan007',
      title: 'GitHub - Vishalsrinivasan007',
      icon: 'github'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vishal-srinivasan-78654326a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEjPAzQmvSXaMb7J1%2Fb5L3Q%3D%3D',
      title: 'LinkedIn Profile',
      icon: 'linkedin'
    },
    {
      label: 'rsvishalgeetha@gmail.com',
      href: 'mailto:rsvishalgeetha@gmail.com',
      title: 'Send email to rsvishalgeetha@gmail.com',
      icon: 'email'
    },
    {
      label: '+91 7708800758',
      href: 'tel:+917708800758',
      title: 'Call or contact +91 7708800758',
      icon: 'phone'
    }
  ]
};

export const ABOUT_DATA = {
  tag: 'Profile Overview',
  title: 'About Me',
  subtitle: 'Dedicated developer turning complex requirements into clean, performant web applications.',
  philosophyTitle: 'Engineering Philosophy',
  paragraphs: [
    'I am a motivated Computer Science graduate with strong fundamentals in MERN stack development and Python. My development journey centers around writing clean, maintainable code, architecting reliable RESTful APIs, and crafting intuitive user interfaces.',
    'During my 6-month hands-on MERN stack development program with Nucaza Innovations, I built full-stack applications from scratch—handling MongoDB schemas, Express middleware, secure JWT authentication with bcrypt, and component-driven React frontends.',
    'I am eager to contribute to a collaborative, high-performance engineering team, apply best practices, and continuously scale my technical abilities in a fast-paced environment.'
  ],
  chips: [
    'Clean Code',
    'RESTful APIs',
    'JWT Auth',
    'State Management',
    'Responsive UI',
    'Version Control'
  ],
  features: [
    {
      title: 'Full-Stack Integration',
      description: 'Bridging the frontend and backend smoothly with Axios, structured REST endpoints, and decoupled component architecture.',
      icon: 'layers'
    },
    {
      title: 'Security-First Practices',
      description: 'Implementation of cryptographic password hashing (bcrypt), token validation middleware, and protected API routes.',
      icon: 'lock'
    },
    {
      title: 'Database Architecture',
      description: 'Efficient MongoDB data models, schema validations with Mongoose, and reliable CRUD query optimization.',
      icon: 'database'
    },
    {
      title: 'Python & Problem Solving',
      description: 'Solid grasp of OOP, data structures, modular programming, and algorithmic fundamentals honed through internship training.',
      icon: 'terminal'
    }
  ]
};

export const SKILLS_DATA: Skill[] = [
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    level: 'Core Frontend',
    description: 'Component-driven UI, hooks (useState, useEffect), props, conditional rendering, and dynamic state management.'
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    level: 'Backend Runtime',
    description: 'Asynchronous event-driven server runtime, npm package management, and robust environment configuration.'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 'REST Framework',
    description: 'Building REST APIs, custom routing, error handling middleware, request validation, and CORS setup.'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'backend',
    level: 'NoSQL Database',
    description: 'Schema modeling with Mongoose, complex document queries, indexing, and persistent CRUD operations.'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'languages',
    level: 'Language',
    description: 'Arrow functions, destructuring, Promises, async/await, array methods (map, filter, reduce), and DOM API.'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 'Language',
    description: 'Object-Oriented Programming (classes, inheritance), modular scripting, exception handling, and algorithms.'
  },
  {
    id: 'jwt-bcrypt',
    name: 'JWT & Bcrypt Auth',
    category: 'backend',
    level: 'Security',
    description: 'Token generation, verification middleware, password salting/hashing, protected routes, and session integrity.'
  },
  {
    id: 'vite-axios',
    name: 'Vite & Axios',
    category: 'frontend',
    level: 'Frontend Tooling',
    description: 'Lightning-fast HMR build workflows, Axios HTTP interceptors, automated error handling, and API integration.'
  },
  {
    id: 'html-css',
    name: 'HTML5 & Modern CSS3',
    category: 'frontend',
    level: 'UI Styling',
    description: 'Semantic markup, Flexbox, CSS Grid, media queries, CSS variables, accessible forms, and smooth responsive layouts.'
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Version Control',
    description: 'Branching workflows, commits, pull requests, resolving conflicts, and managing codebases across repositories.'
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    level: 'API Testing',
    description: 'Testing HTTP verbs (GET, POST, PUT, DELETE), inspecting JSON payloads, validating status codes, and managing auth tokens.'
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    level: 'Development IDE',
    description: 'Efficient debugging, integrated terminal workflows, ESLint, Prettier, and productivity extensions.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mern-auth',
    title: 'MERN-Authentication System',
    primaryBadge: 'Full-Stack MERN',
    secondaryBadge: 'Security & Auth',
    secondaryBadgeType: 'success',
    summary: 'A secure, enterprise-grade authentication system built with Node.js, Express, MongoDB, and React. Implements standard industry authentication protocols with tokenized sessions.',
    features: [
      {
        title: 'JWT Implementation',
        desc: 'Stateless JSON Web Token creation on verified user login and signup.'
      },
      {
        title: 'Bcrypt Hashing',
        desc: 'Multi-round salt hashing for password encryption prior to database persistence.'
      },
      {
        title: 'Protected Middleware',
        desc: 'Custom Express middleware verifying auth headers before granting route access.'
      },
      {
        title: 'React Auth State',
        desc: 'Client-side route protection redirecting unauthenticated users cleanly.'
      }
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Bcrypt', 'REST API'],
    githubUrl: 'https://github.com/Vishalsrinivasan007/mern-authentication',
    hasArchitecture: true,
    modalId: 'auth-modal',
    isHighlight: true
  },
  {
    id: 'notes-app',
    title: 'Full-Stack Notes Application',
    primaryBadge: 'Full-Stack MERN',
    secondaryBadge: 'Productivity & CRUD',
    secondaryBadgeType: 'info',
    summary: 'An interactive, responsive full-stack note-taking platform providing rapid note capture, editing, title search filtering, and categorized organization.',
    features: [
      {
        title: 'Complete CRUD Pipeline',
        desc: 'Create, Read, Update, and Delete notes with real-time UI synchronisation.'
      },
      {
        title: 'Live Search & Filter',
        desc: 'Client-side instant query matching on title and note description.'
      },
      {
        title: 'Responsive UI in React',
        desc: 'Dynamic card layout, modal editors, and fluid grid supporting any viewport size.'
      },
      {
        title: 'Backend Integration',
        desc: 'Express REST endpoints connected with MongoDB Mongoose schema models.'
      }
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Axios', 'CSS3'],
    githubUrl: 'https://github.com/Vishalsrinivasan007/notes-app-project',
    hasArchitecture: true,
    modalId: 'notes-modal',
    isHighlight: true
  },
  {
    id: 'python-toolkit',
    title: 'Python Core Logic & OOP Modules',
    primaryBadge: 'Python 3',
    secondaryBadge: 'OOP & Core Logic',
    secondaryBadgeType: 'warning',
    summary: 'Modular Python applications implementing Object-Oriented Programming (OOP), custom exception handlers, algorithmic operations, and structured file manipulation.',
    features: [
      {
        title: 'OOP Architecture',
        desc: 'Encapsulation, inheritance, and modular code organization across modules.'
      },
      {
        title: 'Defensive Programming',
        desc: 'Comprehensive try-except blocks handling edge cases gracefully.'
      }
    ],
    tags: ['Python 3', 'OOP', 'Error Handling', 'Data Structures'],
    githubUrl: 'https://github.com/Vishalsrinivasan007',
    hasArchitecture: false
  },
  {
    id: 'rest-api-service',
    title: 'Scalable REST API Backend Services',
    primaryBadge: 'Node & Express',
    secondaryBadge: 'REST API Architecture',
    secondaryBadgeType: 'info',
    summary: 'Structured MVC pattern backend architecture featuring standard HTTP status codes, structured JSON responses, and verified with Postman test collections.',
    features: [
      {
        title: 'MVC Architecture',
        desc: 'Distinct separation of Models, Controllers, and Routes for code scalability.'
      },
      {
        title: 'Postman Verified',
        desc: 'Full coverage testing of request payloads, headers, auth tokens, and error states.'
      }
    ],
    tags: ['Express.js', 'Node.js', 'MongoDB', 'Postman', 'MVC'],
    githubUrl: 'https://github.com/Vishalsrinivasan007',
    hasArchitecture: false
  }
];

export const ARCHITECTURES_DATA: Record<string, ProjectArchitecture> = {
  'auth-modal': {
    id: 'auth-modal',
    title: 'MERN Authentication System Architecture',
    badgeText: 'Technical Deep-Dive',
    badgeType: 'primary',
    overview: 'This system serves as a scalable boilerplate and authentication foundation for production MERN web applications. It enforces state-of-the-art cryptographic safeguards to preserve user credentials and prevent unauthorized endpoint access.',
    steps: [
      {
        step: '01. Signup & Encryption',
        description: 'User submits credentials. Password is salted with 10 bcrypt salt rounds and hashed prior to MongoDB persistence.'
      },
      {
        step: '02. Login & Token Grant',
        description: 'Bcrypt comparison verifies credentials against database hash. Signed JWT is minted containing user payload & expiry.'
      },
      {
        step: '03. Route Protection',
        description: 'Express middleware intercepts incoming requests, verifies Bearer token validity via jwt.verify, and attaches authenticated user to req.user.'
      },
      {
        step: '04. React Context Sync',
        description: 'Client application stores token in memory/HTTP-only cookies and synchronizes auth state across protected views.'
      }
    ],
    endpoints: [
      {
        method: 'POST',
        endpoint: '/api/auth/register',
        access: 'Public',
        description: 'Validates user data, hashes password, creates document'
      },
      {
        method: 'POST',
        endpoint: '/api/auth/login',
        access: 'Public',
        description: 'Validates credentials, returns JWT token & user profile'
      },
      {
        method: 'GET',
        endpoint: '/api/auth/profile',
        access: 'Protected',
        description: 'Retrieves authenticated user profile via JWT Bearer header'
      }
    ],
    githubUrl: 'https://github.com/Vishalsrinivasan007/mern-authentication'
  },
  'notes-modal': {
    id: 'notes-modal',
    title: 'Full-Stack Notes Application Architecture',
    badgeText: 'Technical Deep-Dive',
    badgeType: 'info',
    overview: 'A responsive, reactive productivity suite that enables users to record, categorize, search, edit, and organize notes with instant UI response and reliable MongoDB database synchronization.',
    steps: [
      {
        step: '01. Real-Time Search',
        description: 'Instant client-side filter querying both note titles and content with zero network overhead for active collections.'
      },
      {
        step: '02. RESTful CRUD',
        description: 'Complete HTTP API supporting POST (create), GET (list), PUT (update), and DELETE operations with MongoDB validation.'
      },
      {
        step: '03. Optimistic UI Updates',
        description: 'Immediate feedback when deleting or editing notes in React state, providing a desktop-app quality user experience.'
      },
      {
        step: '04. Clean Mobile-First Grid',
        description: 'Adaptive CSS Grid layout ensuring comfortable readability across smartphones, tablets, and desktop displays.'
      }
    ],
    schemaSnippet: {
      title: 'Mongoose Schema Architecture',
      code: `const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  tags: [{ type: String, trim: true }],
  isPinned: { type: Boolean, default: false }
}, { timestamps: true });`
    },
    githubUrl: 'https://github.com/Vishalsrinivasan007/notes-app-project'
  }
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Python Programming Intern',
    company: 'Livewire Training Services Pvt, Ltd',
    startDate: 'Jun 2023',
    startDateTime: '2023-06',
    endDate: 'Jul 2023',
    endDateTime: '2023-07',
    location: 'Tiruchengode, Tamil Nadu, India',
    points: [
      'Completed an intensive compression Python internship focusing on core programming foundations and basic to advanced syntax.',
      'Gained in-depth hands-on experience with Object-Oriented Programming (OOP), classes, objects, and method abstraction.',
      'Developed robust error-handling mechanisms using custom exceptions and built modular multi-file Python applications.'
    ],
    techs: ['Python', 'OOP', 'Error Handling', 'Modules']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Bharathiar University',
    startDate: 'July 2026',
    startDateTime: '2026-07',
    endDate: 'July 2028',
    endDateTime: '2028-07',
    location: 'Coimbatore, Tamil Nadu',
    description: 'Advanced post-graduate studies covering distributed web architectures, enterprise application development, algorithm analysis, and software engineering methodologies.',
    techs: ['Computer Applications', 'Advanced Web Tech', 'Software Architecture']
  },
  {
    degree: 'Bachelor of Computer Science (B.Sc CS)',
    institution: 'Sengunthar Arts and Science College',
    startDate: 'Oct 2021',
    startDateTime: '2021-10',
    endDate: 'April 2024',
    endDateTime: '2024-04',
    location: 'Namakkal, Tamil Nadu',
    cgpa: '7.587 / 10',
    description: 'Comprehensive study of computer science fundamentals, data structures, relational database management systems, object-oriented concepts, and web development basics.',
    techs: ['Computer Science', 'Data Structures', 'RDBMS', 'Web Basics']
  }
];

export const CREDENTIALS_DATA: CredentialItem[] = [
  {
    title: 'MERN Stack Development',
    issuer: 'Nucaza Innovations Pvt. Ltd.',
    badgeText: 'Professional Certification (6 Months)',
    isHighlight: true,
    type: 'cert',
    description: 'Comprehensive 6-month hands-on full-stack training covering MongoDB, React, Node.js, and Express.js through project-driven development, building REST APIs, and modern frontend design.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Full-Stack Projects']
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'Novitech',
    badgeText: 'Technical Workshop (1 Month)',
    badgeVariant: 'neutral',
    type: 'workshop',
    description: 'One-month intensive workshop exploring artificial intelligence principles, core algorithmic foundations, problem formulation, and real-world AI applications.',
    tags: ['AI Fundamentals', 'Algorithms', 'Applied Concepts']
  },
  {
    title: 'Python Programming',
    issuer: 'Besant Technologies',
    badgeText: 'Hands-on Workshop',
    badgeVariant: 'neutral',
    type: 'workshop',
    description: 'Covered Python syntax, core data types, conditional loops, functions, data structures, and practical coding exercises emphasizing algorithmic clarity.',
    tags: ['Python Syntax', 'Data Types', 'Loops & Functions', 'Coding Exercises']
  }
];

export const CONTACT_CARDS_DATA: ContactInfo[] = [
  {
    iconType: 'email',
    label: 'Direct Email',
    value: 'rsvishalgeetha@gmail.com',
    href: 'mailto:rsvishalgeetha@gmail.com',
    copyText: 'rsvishalgeetha@gmail.com'
  },
  {
    iconType: 'phone',
    label: 'Phone & WhatsApp',
    value: '+91 7708800758',
    href: 'tel:+917708800758',
    copyText: '+917708800758'
  },
  {
    iconType: 'linkedin',
    label: 'LinkedIn Profile',
    value: 'in/r-s-vishal-srinivasan',
    href: 'https://www.linkedin.com/in/vishal-srinivasan-78654326a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEjPAzQmvSXaMb7J1%2Fb5L3Q%3D%3D',
    hint: 'Connect for professional inquiries',
    isExternal: true
  },
  {
    iconType: 'github',
    label: 'GitHub Repositories',
    value: 'github.com/Vishalsrinivasan007',
    href: 'https://github.com/Vishalsrinivasan007',
    hint: 'Explore code samples & projects',
    isExternal: true
  }
];
