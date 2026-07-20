export interface Skill {
  name: string
  proficiency: number
  icon?: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export interface ProjectGithubRepo {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  features: string[]
  image: string
  gradient: string
  category: 'web' | 'erp' | 'ecommerce'
  technologies: string[]
  liveUrl?: string
  githubRepos?: ProjectGithubRepo[]
}

export interface TimelineItem {
  id: string
  type: 'experience' | 'freelance' | 'project' | 'education'
  title: string
  organization: string
  period: string
  description: string
  technologies?: string[]
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  contacts:string
  avatar: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
  image?: string
  distinction?: string
  description?: string
  partners?: string[]
}

export const site = {
  name: 'TGirma.dev',
  logo: '/logo.png',
  logoAlt: 'TGirma.dev — Full-Stack Developer',
}

export const profile = {
  name: 'TGirma',
  title: 'Full-Stack Developer & Software Engineer',
  tagline:
    'Building responsive, scalable web applications with React.js, Vue.js, Laravel, and TypeScript',
  email: 'tiegistgirma12@gmail.com',
  phone: '+251968164845',
  location: 'Addis Ababa, Ethiopia',
  linkedin: 'https://linkedin.com/in/tiegist-girma',
  github: 'https://github.com/Tiegist',
  telegram: 'https://t.me/EsperanceG',
  cvUrl: 'https://drive.google.com/file/d/1C_yCt1vyzSgiBN5m9ed7qvtWE1gIpXpB/view?usp=sharing',
  avatar: '/avatar.svg',
  highlightTech: ['React.js', 'Vue.js', 'Laravel', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  roles: [
    'Full-Stack Developer',
    'React.js Developer',
    'Vue.js Developer',
    'Laravel Developer',
    'Software Engineer',
    'Frontend Developer',
  ],
  about: {
    intro: `Full-Stack Developer and Software Engineer with over two years of professional experience building responsive, scalable, and high-performance web applications. Proficient in React.js, Vue.js, Laravel, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Pinia, and RESTful API integration.`,
    journey: `I've delivered production systems across the React and Vue.js ecosystems — from reusable UI components and admin dashboards to Laravel-powered REST APIs, authentication, role-based access control, and ERP workflows. Experienced collaborating with UI/UX designers, backend developers, and QA teams throughout the software development lifecycle, with a strong foundation in Git, Agile development, debugging, and maintainable code.`,
    expertise: [
      'Vue.js & React.js frontend development',
      'Laravel REST API & backend development',
      'Enterprise ERP & inventory management systems',
      'Role-based access control & authentication',
      'RESTful API integration & database design',
      'Performance optimization & Agile delivery',
    ],
    interests: [
      'Full-Stack Development with Vue.js & Laravel',
      'React.js, Next.js & TypeScript frontends',
      'ERP systems & business process automation',
      'Component-based architecture & UI/UX collaboration',
    ],
  },
}

export const stats: Stat[] = [
  { label: 'Years of Experience', value: 2, suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Technologies Used', value: 15, suffix: '+' },
  { label: 'Team Projects', value: 5, suffix: '+' },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', proficiency: 90 },
      { name: 'Vue.js', proficiency: 93 },
      { name: 'JavaScript (ES6+)', proficiency: 92 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'Next.js', proficiency: 82 },
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS3', proficiency: 88 },
      { name: 'Tailwind CSS', proficiency: 90 },
      { name: 'Material UI', proficiency: 78 },
      { name: 'Responsive Web Design', proficiency: 92 },
      { name: 'Cross-Browser Compatibility', proficiency: 85 },
    ],
  },
  {
    id: 'state-management',
    title: 'State Management',
    skills: [
      { name: 'Context API', proficiency: 85 },
      { name: 'Pinia', proficiency: 88 },
    ],
  },
  {
    id: 'backend-apis',
    title: 'Backend & Full-Stack',
    skills: [
      { name: 'Laravel', proficiency: 93 },
      { name: 'PHP', proficiency: 88 },
      { name: 'RESTful API Development', proficiency: 92 },
      { name: 'RESTful API Integration', proficiency: 92 },
      { name: 'Authentication & RBAC', proficiency: 90 },
      { name: 'MySQL', proficiency: 88 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', proficiency: 92 },
      { name: 'npm', proficiency: 90 },
      { name: 'Vite', proficiency: 88 },
      { name: 'Postman', proficiency: 88 },
      { name: 'VS Code', proficiency: 95 },
    ],
  },
  {
    id: 'practices',
    title: 'Testing & Practices',
    skills: [
      { name: 'Frontend Testing Fundamentals', proficiency: 80 },
      { name: 'Debugging & Troubleshooting', proficiency: 88 },
      { name: 'Performance Optimization', proficiency: 86 },
      { name: 'Component-Based Architecture', proficiency: 90 },
      { name: 'Reusable UI Component Development', proficiency: 92 },
      { name: 'Technical Documentation', proficiency: 84 },
      { name: 'Agile/Scrum Development', proficiency: 87 },
      { name: 'CI/CD Fundamentals', proficiency: 78 },
    ],
  },
  {
    id: 'professional',
    title: 'Professional Skills',
    skills: [
      { name: 'Problem Solving', proficiency: 92 },
      { name: 'Analytical Thinking', proficiency: 90 },
      { name: 'Time Management', proficiency: 88 },
      { name: 'Communication', proficiency: 90 },
      { name: 'Team Collaboration', proficiency: 92 },
      { name: 'Adaptability', proficiency: 91 },
      { name: 'Attention to Detail', proficiency: 89 },
      { name: 'Continuous Learning', proficiency: 94 },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'criminal-management',
    title: 'Criminal Management System',
    description: 'Comprehensive Vue.js and Laravel system for criminal justice administration with role-based access control.',
    longDescription:
      'A full-featured criminal management system designed for law enforcement agencies. Built with a Vue.js admin dashboard and Laravel REST API, handling prisoner lifecycle management from registration through release, with integrated medical and court history tracking.',
    features: [
      'Prisoner registration & profile management',
      'Medical history tracking & alerts',
      'Court history & case management',
      'User role & permission management',
    ],
    image: '/projects/criminal-management.png',
    gradient: 'from-violet-600/40 via-purple-500/20 to-fuchsia-600/30',
    category: 'erp',
    technologies: ['Vue.js', 'Laravel', 'React.js', 'MySQL', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://criminal.kalkidan.net/',
    githubRepos: [
      { label: 'Backend', url: 'https://github.com/kalkidansolomon16/criminalback' },
      { label: 'Frontend', url: 'https://github.com/Tiegist/criminal-dashboard' },
    ],
  },
  {
    id: 'adera-shop',
    title: 'Adera Shop E-commerce Platform',
    description: 'Modern e-commerce platform with product catalog, cart, and secure order management.',
    longDescription:
      'A production-ready e-commerce solution built with Vue.js and Laravel. Features a responsive product catalog, shopping cart with persistent sessions, secure checkout flow, and a comprehensive order management dashboard backed by RESTful APIs.',
    features: [
      'Dynamic product catalog with filters',
      'Shopping cart & wishlist',
      'Order management & tracking',
      'Secure authentication & authorization',
    ],
    image: '/projects/adera-shop.png',
    gradient: 'from-cyan-600/40 via-blue-500/20 to-indigo-600/30',
    category: 'ecommerce',
    technologies: ['Vue.js', 'Laravel', 'React.js', 'MySQL', 'Tailwind CSS'],
    liveUrl: 'https://adera-shop-front.kalkidan.net/',
    githubRepos: [
      { label: 'Backend', url: 'https://github.com/Tiegist/e-commerce-back' },
      { label: 'Frontend', url: 'https://github.com/Tiegist/e-commerce-front' },
    ],
  },
  {
    id: 'leather-ordering',
    title: 'Leather Product Ordering System',
    description: 'Specialized ordering platform for leather products.',
    longDescription:
      'A bespoke ordering system for leather product businesses built with Vue.js and Laravel. Features rich product showcases, a customer ordering portal, and order fulfillment tracking connected to a PHP/Laravel backend.',
    features: [
      'Product showcase with galleries',
      'Customer ordering portal',
      'Order fulfillment tracking',
    ],
    image: '/projects/leather-ordering.png',
    gradient: 'from-amber-600/40 via-orange-500/20 to-red-600/30',
    category: 'web',
    technologies: ['Vue.js', 'Laravel', 'React.js', 'MySQL', 'PHP', 'REST API'],
    liveUrl: 'https://leather.kalkidan.net/',
    githubRepos: [
      { label: 'GitHub', url: 'https://github.com/Tiegist/make-leather' },
    ],
  },
  {
    id: 'heryakos-static',
    title: 'Heryakos Technology Website',
    description: 'Modern company landing page built during internship for a technology solutions provider.',
    longDescription:
      'A responsive website for Heryakos Technology showcasing their tech solutions and web development services. Built during my software engineering internship with a clean hero section, service highlights, and contact call-to-action.',
    features: [
      'Responsive landing page design',
      'Services & company overview sections',
      'Modern UI with brand-focused layout',
      'Contact and demo call-to-action',
    ],
    image: '/projects/heryakos-static.png',
    gradient: 'from-purple-600/40 via-violet-500/20 to-indigo-600/30',
    category: 'web',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://heryakos-technology.github.io/heryakos-static-page/',
    githubRepos: [
      { label: 'GitHub', url: 'https://github.com/Heryakos-Technology/heryakos-static-page' },
    ],
  },
]

export const timeline: TimelineItem[] = [
  {
    id: 'exp-1',
    type: 'experience',
    title: 'Full-Stack Developer',
    organization: 'Software Development Company',
    period: '2025 — Present',
    description:
      'Developing and maintaining enterprise-level ERP systems with Vue.js and React.js frontends and Laravel backends. Building scalable RESTful APIs, reusable components, role-based access control, inventory management workflows, authentication systems, and business automation features.',
    technologies: [
      'Vue.js',
      'Laravel',
      'React.js',
      'Next.js',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'REST API',
    ],
  },

  {
    id: 'exp-2',
    type: 'experience',
    title: 'Software Engineering Intern',
    organization: 'Internship Program',
    period: '2024 — 2025',
    description:
      'Contributed to web-based management systems during my internship and academic projects. Built Vue.js and React.js interfaces, Laravel REST APIs, and full-stack features — from requirements gathering and database design through testing and deployment.',
    technologies: [
      'Vue.js',
      'Laravel',
      'React.js',
      'Next.js',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Git',
    ],
  },

  {
    id: 'proj-1',
    type: 'project',
    title: 'Criminal Management System',
    organization: 'University Capstone Project',
    period: '2025',
    description:
      'Designed and developed a prison management platform with a Vue.js dashboard and Laravel API for prisoner records, court histories, medical histories, and user roles. Conducted field research with prison officials to gather requirements and improve operational efficiency.',
    technologies: [
      'Vue.js',
      'Laravel',
      'React.js',
      'Next.js',
      'MySQL',
      'Tailwind CSS',
      'REST API',
    ],
  },

  {
    id: 'proj-2',
    type: 'project',
    title: 'Adera Shop E-Commerce Platform',
    organization: 'Personal Project',
    period: '2025',
    description:
      'Developed a modern e-commerce platform with Vue.js frontend and Laravel backend — product catalogs, shopping cart, order management, and customer authentication with RESTful API integration.',
    technologies: [
      'Vue.js',
      'Laravel',
      'React.js',
      'Next.js',
      'MySQL',
      'Tailwind CSS',
      'Cloudinary',
    ],
  },

  {
    id: 'proj-3',
    type: 'project',
    title: 'LeatherCraft Product Showcase Platform',
    organization: 'Business Solution',
    period: '2024',
    description:
      'Developed a Vue.js and Laravel platform for leather businesses to showcase products and receive orders — product catalog, detailed product pages, and an order submission system backed by a Laravel REST API.',
    technologies: [
      'Vue.js',
      'Laravel',
      'React.js',
      'Next.js',
      'MySQL',
      'Tailwind CSS',
    ],
  },

  {
    id: 'proj-4',
    type: 'project',
    title: 'ERP & Inventory Management Solutions',
    organization: 'Professional Experience',
    period: '2024 — Present',
    description:
      'Contributed to ERP modules with Vue.js dashboards and Laravel services — inventory management, product tracking, permissions management, reporting dashboards, and business workflow automation.',
    technologies: [
      'Vue.js',
      'Laravel',
      'React.js',
      'Next.js',
      'MySQL',
      'REST API',
      'Role Management',
    ],
  },

  {
    id: 'edu-2',
    type: 'education',
    title: 'Kifiya AI Mastery Training Program (KAIM)',
    organization: '10 Academy · Kifiya Financial Technology',
    period: '2025 — March 2026',
    description:
      'Completed the 12-week SAFEE KAIM intensive program with distinction. Trained in Machine Learning Engineering, Data Engineering, and Financial Analysis for the fintech sector in Ethiopia — delivered in partnership with Kifiya Financial Technology and the Mastercard Foundation.',
    technologies: [
      'Machine Learning',
      'Data Engineering',
      'Financial Analysis',
      'Python',
    ],
  },

  {
    id: 'edu-1',
    type: 'education',
    title: 'Bachelor of Science in Software Engineering',
    organization: 'University',
    period: '2021 — 2025',
    description:
      'Specialized in software development, system analysis and design, software architecture, database systems, web technologies, software testing, project management, and enterprise application development. Completed multiple full-stack projects using Vue.js, Laravel, React.js, and modern web technologies.',
    image: '/education/degree-letter.png',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amare Dessalegn',
    role: 'CTO & Software Developer',
    company: 'Qelem Meda Technologies PLC',
    contacts:'abuchu9019@gmail.com, +251927720829',
    content:
      'I had the privilege of mentoring Tiegist during her internship at Qelem Meda Technologies. She demonstrated exceptional dedication, quickly adapted to new technologies, and consistently delivered high-quality work. Her passion for software development, technical skills, and strong work ethic make her a valuable asset to any development team.',
    avatar: '',
  },

]

export const achievements: Stat[] = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Technologies Mastered', value: 15, suffix: '+' },
  { label: 'Open Source Contributions', value: 50, suffix: '+' },
  { label: 'Learning Milestones', value: 100, suffix: '+' },
]

export const certifications: Certification[] = [
  {
    name: 'Kifiya AI Mastery Training Program (KAIM)',
    issuer: '10 Academy',
    year: '2026',
    distinction: 'With Distinction',
    image: '/certificates/kaim-certificate.png',
    description:
      '3-month intensive, project-based program covering Machine Learning Engineering, Data Engineering, and Financial Analysis for Ethiopia\'s fintech sector.',
    partners: ['Kifiya Financial Technology', 'Mastercard Foundation'],
  },
]

export const resumeSummary = `Full-Stack Developer and Software Engineer with over two years of professional experience designing and developing responsive, scalable, and high-performance web applications. Proficient in React.js, Vue.js, Laravel, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Pinia, and RESTful API integration. Experienced building Vue.js and React.js frontends, Laravel REST APIs, ERP systems, reusable components, role-based access control, and database-driven business workflows. Skilled at collaborating with UI/UX designers, backend developers, and QA teams throughout the software development lifecycle, with a strong foundation in Git, Agile development, debugging, and delivering clean, maintainable code focused on user experience and software quality.`

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]
