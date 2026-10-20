/**
 * PORTFOLIO DATA SOURCE OF TRUTH
 * Personal information, skills, projects, and milestones for Harshita Doddagoudar.
 */

export const PERSONAL_INFO = {
  name: "Harshita Doddagoudar",
  role: "Aspiring Software Engineer | Computer Science Engineering Student",
  college: "New Horizon College of Engineering, Bengaluru",
  degree: "Bachelor of Engineering in Computer Science and Engineering",
  graduationYear: "2028",
  cgpa: "8.89",
  email: "harshitadoddagoudar@gmail.com",
  github: "https://github.com/HarshitaDoddagoudar",
  linkedin: "https://www.linkedin.com/in/harshita-doddagoudar-b342a3332",
  resumeUrl: "./Harshita_Doddagoudar_Resume.pdf",
  
  // Headlines and Taglines
  headline: "Curious about technology. Passionate about what I can create with it.",
  tagline: "Learning by building. Growing by experimenting.",
  
  // Quotes
  quotes: [
    "Learning by building. Growing by experimenting.",
    "Curiosity starts the idea. Code brings it to life."
  ],

  // Short introduction
  intro: {
    greeting: "Hi, I'm Harshita.",
    paragraphs: [
      "I'm a Computer Science Engineering student who loves exploring technology, experimenting with new ideas, and building projects that make everyday experiences a little better.",
      "From web development to Android applications, I enjoy discovering new tools, understanding how things work, and turning ideas into something people can interact with.",
      "I'm still learning, and that's what makes the journey exciting."
    ]
  },

  // About Section exact text
  about: {
    story: [
      "I'm Harshita, a third-year Computer Science Engineering student at New Horizon College of Engineering, Bengaluru.",
      "I'm an aspiring software engineer who enjoys exploring different areas of technology, learning by doing, and bringing ideas to life through code. From web development to Android applications, I like experimenting with different tools and understanding how technology can solve real-world problems.",
      "I believe the best way to learn is to build something, make mistakes, try again, and keep improving. I'm still discovering the areas of software engineering I enjoy most, and I'm excited to keep growing through personal projects, collaboration, and new challenges.",
      "Outside coding, I'm involved in NCC, which has helped me develop discipline, teamwork, and a sense of responsibility.",
      "I'm always open to learning from others, collaborating on interesting ideas, and exploring opportunities to grow as a developer."
    ]
  }
};

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "Kotlin"]
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Vite", "Svelte", "SvelteKit", "Tailwind CSS"]
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart", "Android", "Jetpack Compose"]
  },
  {
    category: "Databases",
    skills: ["SQL", "MongoDB"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Visual Studio Code", "Android Studio"]
  }
];

// Highlighted skills for the Hero overview badges
export const HERO_HIGHLIGHT_SKILLS = [
  { label: "Kotlin", category: "Mobile" },
  { label: "Jetpack Compose", category: "Android" },
  { label: "React", category: "Web" },
  { label: "Vite", category: "Web" },
  { label: "Flutter", category: "Mobile" },
  { label: "Java", category: "Languages" },
  { label: "Python", category: "Languages" },
  { label: "SvelteKit", category: "Web" },
  { label: "SQL", category: "Databases" },
  { label: "Tailwind CSS", category: "Web" },
  { label: "Git", category: "Tools" }
];

export const PROJECTS = [
  {
    id: "nnotes",
    title: "Nnotes",
    subtitle: "Handwritten Notes and PDF Annotation Suite",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Android"],
    status: "Published on Google Play",
    isPublished: true,
    description: "Co-created an Android productivity application designed for handwritten note-taking, PDF annotation, and study management.",
    keyFeatures: [
      "Handwriting tools, multiple pen styles, highlighters, and erasers.",
      "PDF import, annotation, and export.",
      "Stylus support and handwriting-related tools.",
      "Study productivity features, including a Pomodoro timer and study streak tracking.",
      "Local-first, offline-capable note-taking without requiring an account."
    ],
    links: {
      repository: "https://github.com/HarshitaDoddagoudar/Nnotes/tree/main",
      googlePlay: "https://play.google.com/store/apps/details?id=com.nnote.Drn",
      collaborator: "https://github.com/DrNitz",
      myGithub: "https://github.com/HarshitaDoddagoudar"
    },
    collaborationNotice: "Co-created in collaboration with Dr. Nitz"
  },
  {
    id: "h-mart",
    title: "H-Mart",
    subtitle: "Korean Grocery E-Commerce Website",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    status: "Under development",
    isInDevelopment: true,
    description: "A responsive e-commerce website concept for Korean groceries, snacks, fresh produce, and K-beauty products. The project focuses on presenting products through a clean, user-friendly shopping interface. Backend integration, payment processing, and an admin dashboard are planned.",
    keyFeatures: [
      "Clean product presentation for Korean snacks, fresh groceries, and K-beauty.",
      "Modern shopping cart experience with category filtering.",
      "Responsive UI built with React, Vite, and Tailwind CSS.",
      "Planned roadmap: backend integration, payment gateway, and merchant dashboard."
    ],
    links: {
      repository: "https://github.com/HarshitaDoddagoudar/H-Mart-Demo",
      liveDemo: "https://harshitadoddagoudar.github.io/H-Mart-Demo/"
    }
  },
  {
    id: "tab-remind",
    title: "TabRemind",
    subtitle: "Medication Reminder and Management App",
    technologies: ["Flutter", "Dart"],
    status: "In Development",
    isInDevelopment: true,
    noPublicRepo: true,
    description: "A medication management app in development, designed around scheduled reminders, recurring medication routines, and dose tracking. Interactive blister-pack animations are in progress. A patient–doctor portal is a possible future extension.",
    keyFeatures: [
      "Scheduled reminders and recurring dose routines.",
      "Tactile blister-pack interactive animations for tracking taken medication.",
      "Daily medication compliance overview.",
      "Future roadmap: patient–doctor health portal and prescription syncing."
    ],
    links: {}
  },
  {
    id: "p2p-companion",
    title: "P2P Companion",
    subtitle: "Cryptocurrency Price Comparison Platform",
    technologies: ["SvelteKit", "Svelte", "JavaScript"],
    status: "Developed / Deployed",
    isDeployed: true,
    description: "A web application designed to help users compare cryptocurrency prices across exchanges, including Binance, Bitget, Bybit, OKX, MEXC, and KuCoin.",
    keyFeatures: [
      "Side-by-side cryptocurrency pricing across multiple major exchanges.",
      "Fast, lightweight client-side reactivity built using SvelteKit and Svelte.",
      "Clear exchange comparison view for price evaluation."
    ],
    links: {
      repository: "https://github.com/HarshitaDoddagoudar/P2P-Companion-main"
    }
  }
];

export const EDUCATION = [
  {
    institution: "New Horizon College of Engineering, Bengaluru",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "Expected graduation: 2028",
    score: "CGPA: 8.89",
    highlight: "Current"
  },
  {
    institution: "K. H. Patil PU Science College, Hubli",
    degree: "Pre-University Education — Science",
    period: "Completed in 2023",
    score: "Score: 92.8%",
    highlight: "Distinction"
  }
];

export const EXPERIENCE_ACTIVITIES = [
  {
    title: "National Cadet Corps (NCC)",
    role: "Rank: Sergeant",
    category: "Leadership & Service",
    description: "An important part of my journey beyond academics, where I've developed discipline, teamwork, leadership, and responsibility."
  },
  {
    title: "Smart India Hackathon (SIH)",
    role: "Participant",
    category: "Hackathons",
    description: "Collaborated in a nationwide competitive hackathon solving real-world problem statements under time-constrained sprint environments."
  },
  {
    title: "Vibethon",
    role: "Participant",
    category: "Hackathons",
    description: "Engineered innovative application prototypes in a collaborative team sprint, exploring rapid prototyping and technical problem solving."
  },
  {
    title: "Peer & Student Tutoring",
    role: "Part-Time Tutor",
    category: "Communication & Mentorship",
    description: "Part-time tutoring experience that has helped me develop patience, communication skills, and the ability to explain concepts clearly."
  }
];

export const CERTIFICATIONS = [
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    badge: "Certified"
  },
  {
    name: "Git",
    issuer: "IIT Bombay Spoken Tutorial",
    badge: "Certified"
  },
  {
    name: "Linux",
    issuer: "IIT Bombay Spoken Tutorial",
    badge: "Certified"
  }
];

export const SPOKEN_LANGUAGES = [
  { language: "English", level: "Fluent" },
  { language: "Hindi", level: "Conversational" },
  { language: "Kannada", level: "Native / Fluent" },
  { language: "German", level: "Basic" }
];
