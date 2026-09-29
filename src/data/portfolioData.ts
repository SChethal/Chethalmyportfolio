export interface Project {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  description: string;
  keyFeatures: string[];
  image: string;
  category: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  status?: string;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string;
  pipelineStages: { label: string; desc: string }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  category: string;
}

export const PERSONAL_INFO = {
  name: "S CHETHAL",
  role: "Full Stack Developer",
  statusBadge: "COMPUTER SCIENCE ENGINEERING STUDENT",
  headline: "Hi, I'm S Chethal.",
  supportingHeadline: "Full Stack Developer · Building practical web applications with Java, Python & modern web technologies.",
  tagline: "Turning ideas into functional software.",
  concept: "Building practical software with code, creativity, and technology.",
  objective: "Motivated and detail-oriented Full Stack Developer and Computer Science undergraduate with hands-on experience in building robust web applications and backend systems using Java, Python, and modern web frameworks. Eager to leverage technical skills in a dynamic software engineering role.",
  location: "Bangalore, K.G.F, Karnataka, India",
  locationShort: "Bangalore, K.G.F",
  email: "schethalshetty@gmail.com",
  phone: "+91 XXXXXXXXXX",
  degree: "B.E. Computer Science and Engineering",
  institution: "Alva's Institute of Engineering and Technology",
  expectedGraduation: "2028",
  cgpa: "7.6",
  careerFocusStatement: "Focused on growing as a Full Stack Developer while strengthening my skills in software engineering, backend development, databases, data science, and modern application development.",
  linkedInUrl: "#linkedin-placeholder",
  gitHubUrl: "#github-placeholder",
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "Alva's Institute of Engineering and Technology",
    period: "August 2024 – Present",
    cgpa: "7.6",
    status: "Expected Graduation: 2028",
    details: "Foundational computer science curriculum focusing on algorithms, database management, backend architecture, and software development methodologies."
  },
  {
    degree: "PUC (12th Grade)",
    institution: "Sri Bhagavan Mahaveer Jain College",
    period: "Completed",
    status: "Completed",
    details: "Pre-University coursework building quantitative problem-solving and rigorous scientific analytical capabilities."
  },
  {
    degree: "SSLC (10th Grade)",
    institution: "Sri BVN Central Public School",
    period: "Completed",
    status: "Completed",
    details: "Secondary school education laying core mathematical, computational, and scientific reasoning foundations."
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Languages",
    description: "Core languages used for robust systems and web applications",
    skills: ["Python", "Java", "JavaScript (ES6)", "SQL", "Swift", "HTML5", "CSS3"]
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Designing modern, fluid, responsive user interfaces",
    skills: ["HTML5", "Tailwind CSS", "Vanilla JavaScript", "Responsive Web Design"]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Building scalable server applications and communication layers",
    skills: ["Flask", "Spring Boot", "RESTful APIs"]
  },
  {
    id: "database",
    title: "Database",
    description: "Relational schema design, normalization, and efficient retrieval",
    skills: ["MySQL"]
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Developer tooling, version control, and API testing environments",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"]
  }
];

export const HERO_FLOATING_TECHS = [
  { name: "Java", role: "Enterprise Backend" },
  { name: "Python", role: "Data & Systems" },
  { name: "JavaScript", role: "Web Engine" },
  { name: "Spring Boot", role: "Microservices" },
  { name: "Flask", role: "API Framework" },
  { name: "MySQL", role: "Relational DB" },
  { name: "GitHub", role: "Version Control" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "hostel-management",
    title: "Hostel Management System",
    subtitle: "End-to-end administrative & resident management platform",
    technologies: ["Java", "MySQL", "Core Java"],
    category: "Full Stack Application",
    description: "Developed a comprehensive management system to handle student records, room allocations, fee tracking, and administrative reports efficiently.",
    keyFeatures: [
      "Student Records Management: centralized student profile handling with seamless data integrity",
      "Room Allocation Engine: organized tracking of room capacities, occupancy status, and allocations",
      "Fee Tracking Module: systematic fee status, payment recording, and balance reconciliation",
      "Administrative Reporting: fast generation of summary reports for warden and administrative audits"
    ],
    image: "/src/assets/images/hostel_system_abstract_1790664271102.jpg"
  },
  {
    id: "crime-database",
    title: "Crime Database Management System",
    subtitle: "Secure relational records platform with high-speed query retrieval",
    technologies: ["Java", "MySQL", "SQL Queries"],
    category: "Database & Security System",
    description: "Built a secure database application for tracking and managing crime records, suspect profiles, and case details with fast retrieval capabilities.",
    keyFeatures: [
      "Suspect & Case Tracking: structured relational schema linking incident reports with suspect dossiers",
      "Fast SQL Retrieval: optimized query pipelines for instant lookups across cases, dates, and locations",
      "Secure Record Architecture: relational integrity constraints safeguarding judicial and incident history",
      "Case Status Pipeline: clear tracking of open, pending, and resolved legal investigation files"
    ],
    image: "/src/assets/images/crime_db_abstract_1790664285778.jpg"
  }
];

export const EXPERIENCE_DATA: ExperienceItem = {
  role: "AI & Data Science Intern",
  company: "Data Alcott Systems",
  period: "August 31, 2026 – September 30, 2026",
  responsibilities: "Working on data analysis pipelines, processing datasets, and exploring machine learning methodologies.",
  pipelineStages: [
    { label: "Data Ingestion", desc: "Acquiring raw data feeds and validating structural integrity" },
    { label: "Dataset Processing", desc: "Cleaning, normalizing, and structuring datasets for modeling" },
    { label: "ML Exploration", desc: "Investigating feature distributions and foundational ML models" },
    { label: "Analytics Insights", desc: "Synthesizing quantitative results for evaluation pipelines" }
  ]
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Full-Stack Java Developer with Spring & Spring Boot Specialization",
    issuer: "Board Infinity",
    date: "August 2026",
    category: "Backend & Enterprise Java"
  },
  {
    id: "cert-2",
    title: "Python for Data Science and AI",
    date: "October 2025",
    category: "Data Science & Machine Learning"
  },
  {
    id: "cert-3",
    title: "Meta iOS UI Development Specialization",
    category: "Mobile Architecture & UI"
  },
  {
    id: "cert-4",
    title: "Introduction to iOS Mobile Application Development",
    category: "Mobile Development Foundations"
  },
  {
    id: "cert-5",
    title: "Advanced Programming in Swift",
    category: "Object-Oriented & Swift Paradigms"
  }
];

export const SOFT_SKILLS = [
  { name: "Communication", desc: "Articulating technical architecture and collaborating across teams clearly." },
  { name: "Leadership", desc: "Guiding project initiatives with disciplined ownership and vision." },
  { name: "Teamwork", desc: "Synergizing with peers in code reviews and multi-disciplinary milestones." },
  { name: "Problem Solving", desc: "Decomposing complex engineering challenges into clean algorithmic solutions." },
  { name: "Time Management", desc: "Delivering milestones reliably through planned execution and prioritization." },
  { name: "Quick Learner", desc: "Rapidly absorbing new paradigms, frameworks, and developer toolchains." }
];

export const LANGUAGES_DATA = [
  { name: "Telugu", script: "తెలుగు" },
  { name: "Tamil", script: "தமிழ்" },
  { name: "English", script: "English" },
  { name: "Kannada", script: "ಕನ್ನಡ" }
];

export const HIGHLIGHTS_DATA = [
  "Computer Science and Engineering undergraduate",
  "CGPA: 7.6 at Alva's Institute of Engineering and Technology",
  "Hands-on full-stack development projects (Hostel & Crime DB Systems)",
  "AI & Data Science internship experience at Data Alcott Systems",
  "Full-stack Java / Spring / Spring Boot specialization (Board Infinity)",
  "Python for Data Science and AI certification",
  "iOS development & Advanced Swift programming credentials"
];

export const CAREER_FOCUS_AREAS = [
  {
    title: "Software Engineering & Code",
    desc: "Writing clean, modular, maintainable code adhering to solid object-oriented design and design patterns.",
    icon: "Code"
  },
  {
    title: "Backend Development",
    desc: "Architecting high-throughput REST APIs and business logic using Java Spring Boot and Python Flask.",
    icon: "Server"
  },
  {
    title: "Databases & Storage",
    desc: "Designing relational schemas in MySQL with optimized indexing, transactions, and query performance.",
    icon: "Database"
  },
  {
    title: "Data Science & AI",
    desc: "Building data analysis pipelines, preparing datasets, and exploring modern machine learning methodologies.",
    icon: "LineChart"
  },
  {
    title: "Mobile Development",
    desc: "Building native iOS user experiences and modern component-driven mobile interfaces using Swift.",
    icon: "Smartphone"
  }
];
