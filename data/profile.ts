export const profile = {
  name: "Shubham Bramhane",
  title: "Laravel Developer & Full-Stack Engineer",
  tagline: "Building Robust, Scalable Web Applications",
  email: "shubham.bramhane75@gmail.com",
  phone: "+91 8857916707",
  location: "Chandrapur, Maharashtra",
  website: "https://shubhambramhane.in",
  education: "B.E. Computer Engineering (CSE)",
  languages: "English, Hindi, Marathi",
  yearsOfExperience: 4,
  projectsCompleted: 30,
  happyClients: 10,
  bio: "Highly skilled and dedicated Laravel Developer with four years of extensive experience in designing, developing, and maintaining web applications. Proficient in leveraging the Laravel framework to create robust, scalable solutions. Demonstrated expertise in back-end development, database design, RESTful API integration, and front-end collaboration.",
  bioExtended: "Known for a meticulous approach to writing clean, maintainable code and a commitment to following best practices in security and data protection. When not coding, I explore new technologies and build side projects.",
  available: true,
  social: {
    github: "https://github.com/shubham-bramhane",
    linkedin: "https://linkedin.com/in/shubham1602",
    twitter: "https://twitter.com",
    website: "https://shubhambramhane.in",
  },
};

export const skills = [
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "PHP / Laravel", level: 95 },
      { name: "RESTful APIs", level: 92 },
      { name: "MySQL / Database Design", level: 88 },
      { name: "Python", level: 75 },
      { name: "MVC Architecture", level: 90 },
      { name: "Security Best Practices", level: 82 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "Vue.js / Vuex", level: 85 },
      { name: "HTML / CSS / JavaScript", level: 90 },
      { name: "Bootstrap / Tailwind", level: 88 },
      { name: "Blade Templates", level: 92 },
      { name: "Vue Router", level: 83 },
      { name: "Responsive Design", level: 87 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "Linux / cPanel", level: 80 },
      { name: "DevOps Practices", level: 75 },
      { name: "Testing & Debugging", level: 85 },
      { name: "Postman / API Testing", level: 88 },
      { name: "Agile / Team Collab", level: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Oncquest Healthcare",
    description:
      "Led the development of a comprehensive healthcare management system for Oncquest, utilizing Laravel and Vue.js. Built dynamic interfaces with Vuex state management and Vue Router for efficient navigation.",
    tags: ["Laravel", "Vue.js", "Vuex", "MySQL", "RESTful API"],
    category: "web",
    github: "https://github.com/shubham-bramhane",
    live: "#",
    color: "#10b981",
    period: "2023–2024",
  },
  {
    id: 2,
    title: "Krayin CRM Package",
    description:
      "Designed and developed a custom package for Krayin CRM using Vue.js and Laravel to extend core functionalities. Built a reusable, modular package streamlining integration within the CRM ecosystem.",
    tags: ["Laravel", "Vue.js", "CRM", "Package Dev", "MySQL"],
    category: "web",
    github: "https://github.com/shubham-bramhane",
    live: "#",
    color: "#6366f1",
    period: "2023–2024",
  },
  {
    id: 3,
    title: "TMS – Big Basket",
    description:
      "Managed trainer and participant data for a training management system for Big Basket, ensuring effective organization and utilization of resources.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    category: "web",
    github: "https://github.com/shubham-bramhane",
    live: "https://bbtms.zentumsampro.in/",
    color: "#f59e0b",
    period: "2023–2024",
  },
  {
    id: 4,
    title: "Lal Path Labs Website",
    description:
      "Developed and maintained the Lal Path Labs website, ensuring seamless user experience and functionality for one of India's leading diagnostic chains.",
    tags: ["Laravel", "Vue.js", "MySQL", "SEO"],
    category: "web",
    github: "https://github.com/shubham-bramhane",
    live: "https://www.lalpathlabs.com/",
    color: "#f43f5e",
    period: "2023–2024",
  },
  {
    id: 5,
    title: "LPL Bangladesh Admin",
    description:
      "Developed and managed the administrative panel for LPL Bangladesh, including SEO management for enhancing online visibility and search engine rankings.",
    tags: ["Laravel", "PHP", "Admin Panel", "SEO", "MySQL"],
    category: "web",
    github: "https://github.com/shubham-bramhane",
    live: "https://lpl-bangladesh-admin.abyntech.com/admin",
    color: "#8b5cf6",
    period: "2023–2024",
  },
  {
    id: 6,
    title: "Magical Umbrella Website",
    description:
      "Developed and maintained the Magical Umbrella website using Python, ensuring user-friendly design and functionality with optimized SQL queries and RESTful API integrations.",
    tags: ["Python", "Django", "MySQL", "REST API"],
    category: "web",
    github: "https://github.com/shubham-bramhane",
    live: "https://magicalumbrella.com/",
    color: "#06b6d4",
    period: "2020–2021",
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Laravel Developer",
    organization: "Abym Technologies Pvt. Ltd., Noida",
    period: "2023 – Present",
    description:
      "Developed and maintained web applications using the Laravel framework. Collaborated with front-end developers to integrate user-facing elements with server-side logic.",
    highlights: [
      "RESTful API integration",
      "Database optimization",
      "Code reviews & mentorship",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Laravel Developer",
    organization: "Finsoft Technologies Pvt. Ltd., Noida",
    period: "2022 – 2023",
    description:
      "Developed scalable web applications using the Laravel framework, enhancing functionality and user experience. Designed robust database schemas and optimized SQL queries.",
    highlights: [
      "Scalable Laravel apps",
      "SQL query optimization",
      "Third-party APIs",
    ],
  },
  {
    id: 3,
    type: "work",
    title: "Python Developer",
    organization: "Magical Umbrella Pvt. Ltd.",
    period: "2021 – 2022",
    description:
      "Developed scalable web applications using Python, integrating user interfaces with back-end logic and designing robust database schemas.",
    highlights: ["Python web apps", "REST API development", "Database design"],
  },
  {
    id: 4,
    type: "education",
    title: "Bachelor of Engineering (CSE)",
    organization:
      "Shree Sai College of Engineering and Technology, Bhadrawati – 442505",
    period: "2016 – 2020",
    description:
      "Specialized in software development, algorithms, and data structures. Developed a final year project on Virtual Mouse Implementation using OpenCV.",
    highlights: ["Percentage: 74.6%", "Final project: OpenCV", "Hackathons"],
  },
  {
    id: 5,
    type: "education",
    title: "Higher Secondary Certificate (HSC)",
    organization: "Janata Junior College, Ghugus",
    period: "2015 – 2016",
    description:
      "Completed HSC with a focus on Science stream. Achieved strong academic results.",
    highlights: ["Percentage: 71.69%"],
  },
  {
    id: 6,
    type: "education",
    title: "Secondary School Certificate (SSC)",
    organization: "Janata Vidyalaya, Ghugus",
    period: "2013 – 2014",
    description: "Completed SSC with excellent academic performance.",
    highlights: ["Percentage: 72.60%"],
  },
];
