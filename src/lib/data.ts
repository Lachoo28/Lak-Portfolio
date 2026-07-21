export type Role = {
  label: string;
  icon: "code" | "palette" | "layout" | "server" | "globe";
  color: string;
};

export const roles: Role[] = [
  { label: "Software Engineer", icon: "code", color: "#5B7FFF" },
  { label: "UI/UX Designer", icon: "palette", color: "#8B5CF6" },
  { label: "Frontend Developer", icon: "layout", color: "#5B7FFF" },
  { label: "MERN Stack Engineer", icon: "server", color: "#8B5CF6" },
  { label: "WordPress Developer", icon: "globe", color: "#5B7FFF" },
  { label: "Graphic Designer" , icon: "palette", color: "#8B5CF6" }
];

export const profile = {
  name: "Lakshan",
  roles: roles.map((r) => r.label),
  tagline: "I build beautiful digital products that people actually enjoy using.",
  available: true,
  email: "lakshanpulendran@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/pulendran-lakshan-1999py",
    github: "https://github.com/Lachoo28",
    figma: "https://equinox-epoch-09b.notion.site/Lakshan-Pulendran-df8ce5e76c7c45aa857c86b70e07205a?pvs=4",
  },
  resumeUrl: "../tech/Resume.pdf",
};

export type Category =
  | "All"
  | "UI Design"
  | "Frontend"
  | "Full Stack"
  | "WordPress"
  | "Graphic Design";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: Category[];
  tags: string[];
  year: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  gradient: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  
 {
    id: "passlak",
    title: "PassLak",
    description:
      "A responsive educational platform providing students with an accessible and engaging learning experience through a clean interface and modern frontend development.",
    category: ["Full Stack"],
    tags: ["React", "Tailwind CSS", "Supabase"],
    year: "2025",
    role: "Frontend Developer",
    liveUrl: "https://pass-lak.vercel.app/",
    githubUrl: "https://github.com/Lachoo28/PassLak",
    gradient: "from-[#8B5CF6] to-[#6D4AFF]",
  },

  {
    id: "esltb-redesign",
    title: "SLTB Bus Booking Redesign",
    description:
      "Redesigned the Sri Lanka Transport Board (SLTB) bus booking experience with a modern, user-friendly interface focused on simplifying ticket booking, improving navigation, and enhancing the passenger experience.",
    category: ["UI Design"],
    tags: ["Figma", "Miro", "UX Research", "Prototype"],
    year: "2025",
    role: "UI/UX Designer",
    figmaUrl:
      "https://www.figma.com/design/XazwSEMShiZacGYVoIRlHl/Assignment?node-id=319-531",
    gradient: "from-[#5B7FFF] to-[#8B5CF6]",
  },

  {
    id: "secureshare",
    title: "SecureShare",
    description:
      "A secure file-sharing platform enabling users to upload, organize, and share files through a modern and intuitive interface with a focus on usability and security.",
    category: ["Full Stack"],
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    year: "2025",
    role: "Full Stack Developer",
    liveUrl: "https://secure-share-riqk.vercel.app/",
    githubUrl: "https://github.com/Lachoo28/SecureShare",
    gradient: "from-[#5B7FFF] to-[#3D5AFE]",
  },
  {
  id: "belgian-waffle",
  title: "Belgian Waffle",
  description:
    "A modern restaurant landing page designed for a Belgian waffle brand, featuring an immersive full-screen video hero, smooth scrolling experience, responsive layouts, and visually engaging sections to showcase the menu and brand identity.",
  category: ["Frontend"],
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design"
  ],
  year: "2025",
  role: "Frontend Developer",
  liveUrl: "https://papaya-fudge-c44550.netlify.app/",
  githubUrl: "#",
  gradient: "from-[#8B5CF6] to-[#5B7FFF]",
},
{
    id: "foodshare",
    title: "FoodShare",
    description:
      "An AI-enhanced full-stack food redistribution platform connecting surplus food donors with special-needs child care homes. Developed intelligent donation matching based on quantity, capacity, and location, alongside authentication, donation management, and an admin verification system.",
    category: ["Full Stack"],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Machine Learning",
    ],
    year: "2026",
    role: "Full Stack Developer",
    liveUrl: "https://foodedthings-front.vercel.app/",
    githubUrl: "https://github.com/Lachoo28/Foodedthings",
    gradient: "from-[#5B7FFF] to-[#8B5CF6]",
  },
  {
    id: "digibox",
    title: "DigiBox",
    description:
      "Designed an animated smart logistics landing page introducing an IoT-based courier monitoring solution that detects package damage during transit. The interface features modern layouts, storytelling sections, and scroll-based interactions.",
    category: ["UI Design"],
    tags: ["Figma", "Miro", "Landing Page", "Interaction Design"],
    year: "2025",
    role: "UI/UX Designer",
    figmaUrl:
      "https://www.figma.com/design/6m4g3G8VUYrbx2cr90zyXg/Just?node-id=1-1933",
    gradient: "from-[#5B7FFF] to-[#3D5AFE]",
  },

  {
    id: "bank-insight",
    title: "Bank Insight",
    description:
      "A modern banking dashboard designed to visualize financial insights through interactive charts, analytics, and reusable dashboard components with a clean user experience.",
    category: ["Frontend", "UI Design"],
    tags: ["React", "Tailwind CSS", "Dashboard"],
    year: "2025",
    role: "Frontend Developer",
    liveUrl: "https://bank-insight-self.vercel.app/",
    githubUrl: "https://github.com/Lachoo28/Bank-Insight",
    gradient: "from-[#8B5CF6] to-[#5B7FFF]",
  },

  {
    id: "edutake",
    title: "EduTake Landing Page",
    description:
      "Designed a modern course enrollment landing page that promotes online learning through clear information hierarchy, strong calls-to-action, and a conversion-focused user experience.",
    category: ["UI Design"],
    tags: ["Figma", "Miro", "Landing Page"],
    year: "2025",
    role: "UI/UX Designer",
    figmaUrl:
      "https://www.figma.com/design/b3puoscncSL4zRJVcM2g97/Projects?node-id=191-2",
    gradient: "from-[#8B5CF6] to-[#5B7FFF]",
  },
  

  

  {
    id: "velxgen-brand",
    title: "Velxgen Brand Identity",
    description:
      "Designed the logo and brand identity for Velxgen, an IT solutions startup, creating a modern visual identity that represents innovation, professionalism, and technology.",
    category: ["Graphic Design",],
    tags: ["Adobe Illustrator", "Photoshop", "Canva"],
    year: "2025",
    role: "Graphic Designer",
    gradient: "from-[#8B5CF6] to-[#5B7FFF]",
    imageUrl: "/tech/Velxgen.jpg",
  },

  {
    id: "rathanco",
    title: "Rathan & Co.",
    description:
      "A responsive corporate website developed for a real business client using HTML, CSS, and JavaScript, focusing on professional branding, performance, and responsive layouts.",
    category: ["Frontend"],
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    role: "Frontend Developer",
    liveUrl: "https://rathan-co.netlify.app/",
    githubUrl: "#",
    gradient: "from-[#5B7FFF] to-[#8B5CF6]",
  },

  {
    id: "brightpath-logo",
    title: "Bright Path Association Logo",
    description:
      "Created the logo and visual identity for a university association, developing a memorable design aligned with the organization's purpose and community values.",
    category: ["Graphic Design"],
    tags: ["Adobe Illustrator", "Photoshop"],
    year: "2025",
    role: "Graphic Designer",
    gradient: "from-[#5B7FFF] to-[#8B5CF6]",
    imageUrl: "/tech/Brightpath.jpg",
  },

  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A modern portfolio website showcasing freelance work, UI/UX case studies, and development projects with responsive layouts, reusable components, and smooth user interactions.",
    category: ["Frontend"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    role: "Frontend Developer",
    liveUrl: "#",
    githubUrl: "https://github.com/Lachoo28/Portfolio-Client",
    gradient: "from-[#8B5CF6] to-[#5B7FFF]",
  },

  {
    id: "marketing-posters",
    title: "Marketing Poster Collection",
    description:
      "Designed promotional posters for consumer products including a smartwatch campaign and food advertising design, focusing on typography, visual hierarchy, and engaging brand communication.",
    category: ["Graphic Design"],
    tags: ["Adobe Photoshop", "Illustrator", "Canva"],
    year: "2025",
    role: "Graphic Designer",
    gradient: "from-[#8B5CF6] to-[#6D4AFF]",
    imageUrl: "/tech/socialmediaposter.jpg",
  },
];


export const categories: Category[] = [
  "All",
  "UI Design",
  "Frontend",
  "Full Stack",
  "WordPress",
  "Graphic Design",
];

export const techStack = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Node.js", "Express.js", "MongoDB", "Tailwindcss",
  "Figma", "Framer", "WordPress", "Canva", "Supabase"
];

export const experience = [
  {
    year: "2024 - 2025",
    title: "UI/UX Design Intern",
    org: "Parallax Technologies (Pvt) Ltd.",
    description:
      "During my internship, I gained valuable insights into UI/UX design principles, including color theory and alignment techniques. I learned various design methods and best practices for utilizing components effectively. Additionally, I developed skills in managing project timelines, ensuring that design tasks were completed efficiently and on schedule. This experience enhanced my understanding of user-centered design and improved my ability to create visually appealing and functional interfaces",
  },
  {
    year: "2025 – 2026",
    title: "Freelance Full Stack Developer/Designer",
    org: "Self-employed",
    description:
      "Designed and developed production-ready web applications for clients while building independent products to strengthen technical expertise. Delivered Figma designs, responsive frontend interfaces, and scalable full-stack applications including business websites, portfolios, dashboards, e-commerce platforms, and secure web tools.",
  }
];

export const education = [
  {
    year: "2021 – 2025",
    title: "B.Sc (Honours) in Software Engineering - (2nd Upper Division)",
    org: "NSBM Green University, Homagama",
    description:
      "Core coursework in data structures, distributed systems, and human-computer interaction. Final-year project on real-time collaborative tooling.",
  },
  {
    year: "2018",
    title: "Diploma in IT and English",
    org: "Esoft Metro Campus",
    description:
      "Formalized design process — user research, wireframing, prototyping, and usability testing.",
  },
];

export const stats = [
  { value: 12, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies & Tools Used" },
  { value: 1, suffix: "", label: "Industry Internship" },
  { value: 2, suffix: "+", label: "Client Projects" },
]
