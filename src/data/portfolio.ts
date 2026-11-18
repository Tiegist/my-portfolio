export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export interface ProjectGithubRepo {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  /** Short line shown above the title, e.g. "Personal project · 2025" */
  context: string
  description: string
  longDescription: string
  features: string[]
  image: string
  technologies: string[]
  liveUrl?: string
  githubRepos?: ProjectGithubRepo[]
}

/** One row in the Experience section (used for both work and education) */
export interface TimelineItem {
  id: string
  title: string
  organization: string
  period: string
  description: string
  technologies?: string[]
  /** Small badge next to the organization, e.g. "With Distinction" */
  highlight?: string
  /** Certificate or letter that opens in a popup */
  document?: {
    label: string
    image: string
  }
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

export const site = {
  name: 'TGirma.dev',
  logo: '/logo.png',
  logoAlt: 'TGirma.dev — Full-Stack Developer',
}

export const profile = {
  name: 'Tiegist Girma',
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
  /** Each entry is one paragraph in the About section */
  about: [
    `I'm a Full-Stack Developer and Software Engineer with over two years of professional experience building responsive, scalable, and high-performance web applications.`,
    `I've delivered production systems across the React and Vue.js ecosystems — from reusable UI components and admin dashboards to Laravel-powered REST APIs, authentication, role-based access control, and ERP workflows. I'm experienced collaborating with UI/UX designers, backend developers, and QA teams throughout the software development lifecycle, with a strong foundation in Git, Agile development, debugging, and maintainable code.`,
  ],
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
      'React.js',
      'Vue.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',
      'Responsive Web Design',
      'Cross-Browser Compatibility',
    ],
  },
  {
    id: 'state-management',
    title: 'State Management',
    skills: ['Context API', 'Pinia'],
  },
  {
    id: 'backend-apis',
    title: 'Backend & Full-Stack',
    skills: [
      'Laravel',
      'PHP',
      'RESTful API Development',
      'RESTful API Integration',
      'Authentication & RBAC',
      'MySQL',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: ['Git & GitHub', 'npm', 'Vite', 'Postman', 'VS Code'],
  },
  {
    id: 'practices',
    title: 'Testing & Practices',
    skills: [
      'Frontend Testing Fundamentals',
      'Debugging & Troubleshooting',
      'Performance Optimization',
      'Component-Based Architecture',
      'Reusable UI Component Development',
      'Technical Documentation',
      'Agile/Scrum Development',
      'CI/CD Fundamentals',
    ],
  },
  {
    id: 'professional',
    title: 'Professional Skills',
    skills: [
      'Problem Solving',
      'Analytical Thinking',
      'Time Management',
      'Communication',
      'Team Collaboration',
      'Adaptability',
      'Attention to Detail',
      'Continuous Learning',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'criminal-management',
    title: 'Criminal Management System',
    context: 'University capstone · 2025',
    description: 'Comprehensive Vue.js and Laravel system for criminal justice administration with role-based access control.',
    longDescription:
      'A full-featured criminal management system designed for law enforcement agencies. Built with a Vue.js admin dashboard and Laravel REST API, handling prisoner lifecycle management from registration through release, with integrated medical and court history tracking. Requirements were gathered through field research with prison officials.',
    features: [
      'Prisoner registration & profile management',
      'Medical history tracking & alerts',
      'Court history & case management',
      'User role & permission management',
    ],
    image: '/projects/criminal-management.png',
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
    context: 'Personal project · 2025',
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
    technologies: ['Vue.js', 'Laravel', 'React.js', 'MySQL', 'Tailwind CSS', 'Cloudinary'],
    liveUrl: 'https://adera-shop-front.kalkidan.net/',
    githubRepos: [
      { label: 'Backend', url: 'https://github.com/Tiegist/e-commerce-back' },
      { label: 'Frontend', url: 'https://github.com/Tiegist/e-commerce-front' },
    ],
  },
  {
    id: 'leather-ordering',
    title: 'Leather Product Ordering System',
    context: 'Business solution · 2024',
    description: 'Specialized ordering platform for leather products.',
    longDescription:
      'A bespoke ordering system for leather product businesses built with Vue.js and Laravel. Features rich product showcases, a customer ordering portal, and order fulfillment tracking connected to a PHP/Laravel backend.',
    features: [
      'Product showcase with galleries',
      'Customer ordering portal',
      'Order fulfillment tracking',
    ],
    image: '/projects/leather-ordering.png',
    technologies: ['Vue.js', 'Laravel', 'React.js', 'MySQL', 'PHP', 'REST API'],
    liveUrl: 'https://leather.kalkidan.net/',
    githubRepos: [
      { label: 'GitHub', url: 'https://github.com/Tiegist/make-leather' },
    ],
  },
  {
    id: 'heryakos-static',
    title: 'Heryakos Technology Website',
    context: 'Internship project',
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
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://heryakos-technology.github.io/heryakos-static-page/',
    githubRepos: [
      { label: 'GitHub', url: 'https://github.com/Heryakos-Technology/heryakos-static-page' },
    ],
  },
]

export const experience: TimelineItem[] = [
  {
    id: 'exp-1',
    title: 'Full-Stack Developer',
    organization: 'Software Development Company',
    period: '2025 — Present',
    description:
      'Developing and maintaining enterprise-level ERP systems with Vue.js and React.js frontends and Laravel backends. Building scalable RESTful APIs, reusable components, role-based access control, inventory management workflows, reporting dashboards, authentication systems, and business automation features.',
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
]

export const education: TimelineItem[] = [
  {
    id: 'edu-2',
    title: 'Kifiya AI Mastery Training Program (KAIM)',
    organization: '10 Academy · Kifiya Financial Technology',
    period: '2025 — March 2026',
    highlight: 'With Distinction',
    description:
      'Completed the 12-week SAFEE KAIM intensive program with distinction. Trained in Machine Learning Engineering, Data Engineering, and Financial Analysis for the fintech sector in Ethiopia — delivered in partnership with Kifiya Financial Technology and the Mastercard Foundation.',
    technologies: [
      'Machine Learning',
      'Data Engineering',
      'Financial Analysis',
      'Python',
    ],
    document: {
      label: 'View certificate',
      image: '/certificates/kaim-certificate.png',
    },
  },
  {
    id: 'edu-1',
    title: 'Bachelor of Science in Software Engineering',
    organization: 'University',
    period: '2021 — 2025',
    description:
      'Specialized in software development, system analysis and design, software architecture, database systems, web technologies, software testing, project management, and enterprise application development. Completed multiple full-stack projects using Vue.js, Laravel, React.js, and modern web technologies.',
    document: {
      label: 'View degree letter',
      image: '/education/degree-letter.png',
    },
  },
]

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

export const navLinks = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]
