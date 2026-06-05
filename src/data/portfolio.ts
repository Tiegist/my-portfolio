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
  title: 'Full-Stack Software Developer',
  tagline: 'Building scalable web applications & ERP systems with Vue.js and Laravel',
  email: 'tiegistgirma12@gmail.com',
  location: 'Addis Ababa, Ethiopia',
  linkedin: 'https://linkedin.com/in/tiegist-girma',
  github: 'https://github.com/Tiegist',
  telegram: 'https://t.me/EsperanceG',
  cvUrl: 'https://drive.google.com/file/d/1C_yCt1vyzSgiBN5m9ed7qvtWE1gIpXpB/view?usp=sharing',
  avatar: '/avatar.svg',
  roles: [
    'Full-Stack Developer',
    'Vue.js Developer',
    'Laravel Developer',
    'ERP System Developer',
    'Software Engineer',
  ],
  about: {
    intro: `I'm a passionate Full-Stack Software Developer with deep expertise in Vue.js, Laravel, and enterprise-grade ERP systems. I transform complex business requirements into elegant, performant web applications that deliver real value.`,
    journey: `My journey began with PHP and quickly evolved into full-stack development. I've architected criminal management systems, e-commerce platforms, and custom ERP solutions — always prioritizing clean code, security, and exceptional user experience.`,
    expertise: [
      'Full-stack web application development',
      'Enterprise Resource Planning (ERP) systems',
      'RESTful API design & implementation',
      'Role-based access control & authentication',
      'Database architecture & optimization',
    ],
    interests: [
      'Full-Stack Web Application Development',
      'Backend Engineering & RESTful APIs',
      'Enterprise Resource Planning (ERP) Systems',
      'Business Process Automation',
    ],
  },
}

export const stats: Stat[] = [
  { label: 'Years of Experience', value: 2, suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Technologies Used', value: 5, suffix: '+' },
  { label: 'Team Projects', value: 5, suffix: '+' },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'Vue.js', proficiency: 95 },
      { name: 'JavaScript', proficiency: 92 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'Tailwind CSS', proficiency: 90 },
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS3', proficiency: 88 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Laravel', proficiency: 93 },
      { name: 'PHP', proficiency: 85 },
      { name: 'REST APIs', proficiency: 92 },
      { name: 'Authentication Systems', proficiency: 88 },
      { name: 'Role & Permission Management', proficiency: 93 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    skills: [
      { name: 'MySQL', proficiency: 90 },
      // { name: 'PostgreSQL', proficiency: 75 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', proficiency: 92 },
      { name: 'GitHub', proficiency: 90 },
      // { name: 'Docker', proficiency: 70 },
      { name: 'Postman', proficiency: 88 },
      { name: 'Figma', proficiency: 75 },
      { name: 'jira', proficiency: 90},
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'criminal-management',
    title: 'Criminal Management System',
    description: 'Comprehensive system for criminal justice administration with role-based access control.',
    longDescription:
      'A full-featured criminal management system designed for law enforcement agencies. Handles prisoner lifecycle management from registration through release, with integrated medical and court history tracking.',
    features: [
      'Prisoner registration & profile management',
      'Medical history tracking & alerts',
      'Court history & case management',
      'User role & permission management',
    ],
    image: '/projects/criminal-management.png',
    gradient: 'from-violet-600/40 via-purple-500/20 to-fuchsia-600/30',
    category: 'erp',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'REST API'],
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
      'A production-ready e-commerce solution featuring a responsive product catalog, shopping cart with persistent sessions, secure checkout flow, and comprehensive order management dashboard.',
    features: [
      'Dynamic product catalog with filters',
      'Shopping cart & wishlist',
      'Order management & tracking',
      'Secure authentication & authorization',
    ],
    image: '/projects/adera-shop.png',
    gradient: 'from-cyan-600/40 via-blue-500/20 to-indigo-600/30',
    category: 'ecommerce',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
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
      'A bespoke ordering system for leather product businesses featuring rich product showcases, customer order.',
    features: [
      'Product showcase with galleries',
      'Customer ordering portal',
      'Order fulfillment tracking',
    ],
    image: '/projects/leather-ordering.png',
    gradient: 'from-amber-600/40 via-orange-500/20 to-red-600/30',
    category: 'web',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'PHP', 'REST API'],
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
      'Developing and maintaining enterprise-level ERP systems using Vue.js and Laravel. Building scalable RESTful APIs, implementing role-based access control, inventory management workflows, authentication systems, and business automation features.',
    technologies: [
      'Vue.js',
      'Laravel',
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
      'Contributed to the design and development of web-based management systems during my internship and academic projects. Participated in requirements gathering, database design, frontend development, backend API implementation, testing, and deployment while working on real-world software solutions.',
    technologies: [
      'Vue.js',
      'Laravel',
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
      'Designed and developed a prison management platform for managing prisoner records, court histories, medical histories, and user roles. Conducted field research with prison officials to gather system requirements and improve operational efficiency.',
    technologies: [
      'Vue.js',
      'Laravel',
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
      'Developed a modern e-commerce platform featuring product catalogs, shopping cart functionality, order management, customer authentication.',
    technologies: [
      'Vue.js',
      'Laravel',
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
      'Developed a web platform for leather businesses to showcase their products online and receive customer orders. Built an intuitive product catalog, detailed product pages, and an order submission system to help businesses improve their online presence and customer engagement.',
    technologies: [
      'Vue.js',
      'Laravel',
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
      'Contributed to ERP modules including inventory management, product tracking, permissions management, reporting dashboards, and business workflow automation.',
    technologies: [
      'Vue.js',
      'Laravel',
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
      'Specialized in software development, system analysis and design, software architecture, database systems, web technologies, software testing, project management, and enterprise application development. Completed multiple full-stack projects using modern web technologies.',
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
    avatar: '/images/testimonials/amare.jpg',
  },

]

export const achievements: Stat[] = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Technologies Mastered', value: 5, suffix: '+' },
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

export const resumeSummary = `Results-driven Full-Stack Software Developer with 4+ years of experience building scalable web applications and ERP systems. Expert in Vue.js, Laravel, PHP, and MySQL with a proven track record of delivering enterprise-grade solutions. Passionate about clean code, performance optimization, and creating exceptional user experiences.`

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]
