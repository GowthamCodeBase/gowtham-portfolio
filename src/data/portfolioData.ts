import smartSpeakerImg from '../assets/projects/smart-speaker/1.jpg'
import cloudsyncImg from '../assets/projects/cloudsync-suite/1.jpg'
import luminaImg from '../assets/projects/lumina/1.jpg'
import coffeeImg from '../assets/projects/coffee-brand/1.jpg'
import zenithImg from '../assets/projects/zenith-wellness/1.jpg'
import nourishImg from '../assets/projects/nourish/1.jpg'

export interface WorkData {
  slug: string
  title: string
  client: string
  category: string
  featuredImage: string
  isFeatured: boolean
  description: string
  metrics?: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
}

export const candidateInfo = {
  name: "Gowtham R.",
  title: "Frontend Developer & Full Stack Engineer",
  tagline: "Building production-grade, interactive web applications and scalable developer tools with clean architecture and high performance.",
  location: "Bengaluru, Karnataka, India",
  email: "gowthamdax@gmail.com",
  phone: "+91-6374133796",
  linkedin: "https://www.linkedin.com/in/gowthamdeveloper/",
  github: "https://github.com/GowthamCodeBase",
  shortBio: "Hey there! I specialize in building high-performance, responsive web applications and developer tools that translate complex challenges into robust digital experiences.",
  aboutStory: "I'm a full stack and frontend engineer with 2+ years of hands-on experience building production-grade web applications, interactive developer tools, and high-concurrency enterprise portals. Skilled in React 19, TypeScript, Next.js, Tailwind CSS, Express.js, and MySQL. Driven by clean component architecture, strict type safety, measurable performance optimization, and intuitive UI/UX design.",
  extendedStory: "When I'm not coding, you'll find me exploring emerging AI toolchains, optimizing algorithmic patterns, or experimenting with modern typography and brutalist aesthetics. I believe the best engineering comes from deep domain empathy and relentless attention to detail."
}

export const portfolioWorks: WorkData[] = [
  {
    slug: "dsa-learning-tool-ai",
    title: "DSA Learning Tool AI",
    client: "AI Developer Tool",
    category: "Full Stack AI",
    featuredImage: smartSpeakerImg,
    isFeatured: true,
    description: "Architected a zero-cost Bring-Your-Own-Key (BYOK) web application utilizing React 19, TypeScript, and Google Gemini API. Integrated Monaco Editor with custom syntax handling and interactive algorithm step visualizers for Two Pointers, Sliding Window, and Binary Search with bilingual intuition breakdowns (English & Thanglish).",
    metrics: "↓65% problem-understanding time",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Monaco Editor", "Gemini API"],
    liveUrl: "https://gowtham-dsa-learning-tool.vercel.app/",
    githubUrl: "https://github.com/GowthamCodeBase/Gowtham-DSA-Learning-Tool"
  },
  {
    slug: "enterprise-attendance-portal",
    title: "Enterprise Attendance Portal",
    client: "DHAN Foundation / Enterprise",
    category: "Web & Mobile",
    featuredImage: cloudsyncImg,
    isFeatured: true,
    description: "Built an administrative web portal featuring 15+ interactive dashboards, 5 role-based access tiers, and automated 3-tier approval workflows. Engineered a companion React Native field application deployed to Google Play Store serving 1,000+ field employees across 10+ Indian states.",
    metrics: "3 days → <2 hrs leave processing · 99.9% uptime",
    techStack: ["React.js", "React Native", "Express.js", "MySQL", "Docker", "Nginx"],
    liveUrl: "http://122.165.125.56:3005/",
    githubUrl: "https://shorturl.at/7Fy7w"
  },
  {
    slug: "shg-guardian-ai",
    title: "SHG Guardian AI",
    client: "FinTech Risk Engine",
    category: "AI / Multi-Agent",
    featuredImage: luminaImg,
    isFeatured: true,
    description: "Engineered a Planner → Worker → Evaluator multi-agent AI system for microfinance risk auditing and loan delinquency prediction. Built a responsive Gradio interface deployed on Hugging Face Spaces with persistent SQLite state, interactive audit log tables, and natural language audit querying.",
    metrics: "↓70% audit duration · 99.5% accuracy",
    techStack: ["Python", "Gradio", "SQLite", "Hugging Face", "REST APIs"],
    liveUrl: "https://huggingface.co/spaces/GowthamDeveloper/shg-guardian-ai",
    githubUrl: "https://github.com/gowthamdax/shg-guardian-ai"
  },
  {
    slug: "cloudsync-suite",
    title: "CloudSync Infrastructure Suite",
    client: "Internal Dev Tooling",
    category: "DevOps & Cloud",
    featuredImage: coffeeImg,
    isFeatured: true,
    description: "Automated high-throughput database connection pooling and asynchronous scheduled reporting jobs for 60+ endpoints. Replaced third-party geolocation endpoints with custom Haversine algorithm calculations, cutting recurring annual operational costs.",
    metrics: "$3,000+/yr infrastructure cost saved",
    techStack: ["Node.js", "Express.js", "MySQL", "Docker", "Node-cron"],
    liveUrl: "https://github.com/GowthamCodeBase",
    githubUrl: "https://github.com/GowthamCodeBase"
  },
  {
    slug: "zenith-realtime-dashboard",
    title: "Zenith Real-Time Metrics",
    client: "Analytics Platform",
    category: "Frontend Architecture",
    featuredImage: zenithImg,
    isFeatured: false,
    description: "Scalable real-time operational dashboard with dynamic filtering, live chart visualizers, and state machine transitions for field reporting monitoring.",
    metrics: "Sub-50ms render latency across 10k data points",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://github.com/GowthamCodeBase",
    githubUrl: "https://github.com/GowthamCodeBase"
  },
  {
    slug: "nourish-design-system",
    title: "Nourish Component System",
    client: "Open Source / Design",
    category: "UI/UX Engineering",
    featuredImage: nourishImg,
    isFeatured: false,
    description: "Comprehensive accessible component library engineered with WCAG 2.1 AA compliance, custom keyboard navigation hooks, and dark/light token bindings.",
    metrics: "100% TypeScript coverage & WCAG AA certified",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    liveUrl: "https://github.com/GowthamCodeBase",
    githubUrl: "https://github.com/GowthamCodeBase"
  }
]

export const services = [
  {
    title: "Frontend Engineering",
    text: "Architecting responsive, high-performance web applications using React 19, Next.js, and TypeScript. Specializing in component design systems, state management, and sub-second load times."
  },
  {
    title: "Full Stack Development",
    text: "Building resilient RESTful backend services, database schema architectures, and high-concurrency Node.js/Express APIs with robust pooling and authentication."
  },
  {
    title: "AI Integration & Developer Tools",
    text: "Designing interactive BYOK (Bring-Your-Own-Key) AI tools, multi-agent evaluation workflows, and code intelligence platforms using Google Gemini and OpenAI APIs."
  },
  {
    title: "UI/UX & Brutalist Web Design",
    text: "Crafting distinctive, bold, and memorable web experiences blending brutalist typography, micro-interactions, responsive grids, and high-conversion layouts."
  }
]

export const faqs = [
  {
    title: "What is your primary tech stack?",
    text: "My core expertise is centered around React 19, TypeScript, Next.js, and Tailwind CSS on the frontend, alongside Node.js, Express.js, MySQL, PostgreSQL, and Docker for scalable backend infrastructure."
  },
  {
    title: "Are you available for full-time or contract roles?",
    text: "Yes! I am currently available for full-time software engineering roles as well as select high-impact frontend and full stack contract projects. Response time: within 24 hours."
  },
  {
    title: "How do you approach application performance?",
    text: "I prioritize measurable performance: bundle splitting, memoization, virtualization for large data sets, automated connection pooling, caching strategies, and strict Core Web Vitals targets."
  },
  {
    title: "Do you work with distributed and remote teams?",
    text: "Absolutely. I have extensive experience collaborating across remote and multi-location engineering teams using Git, GitHub Actions, asynchronous RFCs, and agile sprint cycles."
  },
  {
    title: "Can you build AI-powered features into existing products?",
    text: "Yes. From structured schema parsing and streaming LLM responses to custom multi-agent review flows and Monaco-based live playgrounds, I integrate generative AI securely and reliably."
  }
]

export const experienceData = [
  {
    title: "Full Stack Developer",
    place: "DHAN Foundation (ICT-INAYAM)",
    period: "June 2024 – August 2026",
    text: "• Engineered and shipped production-grade mobile applications and web portal dashboards serving 1,000+ active field personnel across 10+ states.\n• Architected high-concurrency Express.js backends and optimized MySQL connection pools across 28 relational tables, reducing API response latency by 200ms with 99.9% uptime.\n• Replaced third-party geolocation endpoints with a custom Haversine algorithm engine, cutting recurring operational costs by over $3,000/year.\n• Containerized services with Docker and Nginx reverse proxies, cutting deployment friction and runtime failures by 90%."
  },
  {
    title: "Frontend Developer & AI Tool Architect",
    place: "Independent / Open Source",
    period: "2024 – Present",
    text: "• Architected DSA Learning Tool AI with Monaco Editor and real-time algorithmic dry-run execution tables powered by Gemini 2.0 Flash.\n• Designed and published open source developer utilities with 100% TypeScript type safety and zero runtime dependencies.\n• Conducted technical workshops on modern React patterns and full stack performance optimization."
  }
]

export const educationData = [
  {
    title: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    place: "Anna University",
    period: "2020 – 2024",
    text: "Graduated First Class with Distinction (8.42 CGPA). Core coursework in Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, and Distributed Software Architecture."
  },
  {
    title: "Professional Certifications & Cloud Foundations",
    place: "Meta, AWS & Google Cloud",
    period: "2023 – 2024",
    text: "• Meta Frontend Developer Professional Certificate\n• AWS Cloud Practitioner Certification\n• Google Cloud Computing Foundations & Generative AI Architecture"
  }
]
