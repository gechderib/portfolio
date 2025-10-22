// =============================
// Portfolio Content Configuration (Backend-friendly)
// - Images are represented as URL strings (move assets to `public/` or serve from a CDN for production)
// - Icons are represented by string keys (map to actual icon components in UI layer)
// - Entries include id, slug, createdAt and updatedAt for easier backend storage/serialization
// =============================

const now = new Date().toISOString();

// Helper to build media URL paths. When deploying, consider serving these from your backend or CDN.
const asset = (p) => `/assets/images/${p}`;

export const content = {
  nav: [
    { id: "nav-home", link: "#home", icon: "TbSmartHome" },
    { id: "nav-skills", link: "#skills", icon: "BiUser" },
    { id: "nav-services", link: "#services", icon: "RiServiceLine" },
    { id: "nav-projects", link: "#projects", icon: "RiProjectorLine" },
    { id: "nav-contact", link: "#contact", icon: "MdOutlinePermContactCalendar" },
  ],

  hero: {
    id: "hero",
    slug: "hero-intro",
    title: "Full-Stack Software Engineer",
    firstName: "Getachew",
    lastName: "Derib",
    btnText: "Hire Me",
    image: asset("Hero/gech1.png"),
    media: [{ type: "image", src: asset("Hero/gech1.png"), alt: "Getachew Derib" }],
    hero_content: [
      { id: "hc-1", count: "4+", text: "Years of experience in software engineering and full-stack development" },
      { id: "hc-2", count: "10+", text: "Projects delivered across web, mobile, and backend platforms" },
      { id: "hc-3", count: "3+", text: "FinTech projects: remittance, crowdfunding, insurance & premium financing" },
    ],
    createdAt: now,
    updatedAt: now,
  },

  skills: {
    id: "skills",
    slug: "core-competencies",
    title: "Skills",
    subtitle: "My Core Competencies",
    skills_content: [
      {
        id: "skill-js",
        slug: "javascript-es6",
        name: "JavaScript (ES6+)",
        para: "Proficient in modern JavaScript for building interactive web applications.",
        logo: asset("Skills/js.png"),
        tags: ["javascript", "frontend"],
        skills: [
          "Strong understanding of ES6+ features and asynchronous programming.",
          "Experience with frameworks like React, Vue.js, and Node.js.",
          "RESTful API consumption and AJAX data handling.",
          "Frontend integration with HTML5 and CSS3.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-ts",
        slug: "typescript",
        name: "TypeScript",
        para: "Deep expertise in scalable TypeScript applications.",
        logo: asset("Skills/ts.png"),
        tags: ["typescript", "static-typing"],
        skills: [
          "Static typing, interfaces, generics, and decorators.",
          "Applied in large-scale React and Next.js projects.",
          "Strong type safety for backend services with Node.js.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-py",
        slug: "python-backend",
        name: "Python",
        para: "Advanced backend engineering with Python.",
        logo: asset("Skills/python.png"),
        tags: ["python", "backend"],
        skills: [
          "Building APIs with FastAPI and Django Rest Framework.",
          "Data processing and pipeline automation.",
          "Integration with relational and NoSQL databases.",
          "Secure authentication, authorization, and middleware development.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-node",
        slug: "nodejs-backend",
        name: "Node.js",
        para: "Building fast and scalable backend services.",
        logo: asset("Skills/node.png"),
        tags: ["nodejs", "backend"],
        skills: [
          "RESTful and GraphQL APIs with Express.js and NestJS.",
          "Real-time applications with WebSockets and Kafka.",
          "Database integration with MongoDB, PostgreSQL, MySQL.",
          "Event-driven architecture and microservices.",
          "FinTech experience: remittance, digital wallets, crowdfunding, and insurance APIs.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-fastapi",
        slug: "fastapi",
        name: "FastAPI",
        para: "High-performance APIs with FastAPI.",
        logo: asset("Skills/fastapi.png"),
        tags: ["fastapi", "python"],
        skills: [
          "Asynchronous request handling for high throughput.",
          "Data validation with Pydantic models.",
          "JWT authentication and OAuth2 integration.",
          "Automatic API documentation with Swagger and ReDoc.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-django",
        slug: "django",
        name: "Django",
        para: "Robust web applications with Django framework.",
        logo: asset("Skills/django.png"),
        tags: ["django", "python"],
        skills: [
          "MVC architecture and ORM for database management.",
          "Building RESTful APIs with Django Rest Framework.",
          "User authentication, permissions, and admin interface.",
          "Deployment and scaling on cloud platforms.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-react",
        slug: "reactjs",
        name: "React.js",
        para: "Expert in building dynamic UIs with React.",
        logo: asset("Skills/react.png"),
        tags: ["react", "frontend"],
        skills: [
          "State management with Redux, Zustand, and React Query.",
          "Component-driven development and reusable UI patterns.",
          "Integration with backend services and real-time data feeds.",
          "Performance optimization and code-splitting.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-next",
        slug: "nextjs",
        name: "Next.js",
        para: "Production-ready full-stack web development.",
        logo: asset("Skills/next.png"),
        tags: ["nextjs", "ssr"],
        skills: [
          "Server-side rendering (SSR) and static site generation (SSG).",
          "API routes for backend integration.",
          "Optimized performance and SEO-friendly web apps.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-native",
        slug: "react-native",
        name: "React Native",
        para: "Cross-platform mobile development.",
        logo: asset("Skills/native.jpg"),
        tags: ["react-native", "mobile"],
        skills: [
          "iOS and Android apps with shared codebase.",
          "Integration with mobile payment gateways and wallets.",
          "Push notifications and secure authentication flows.",
        ],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "skill-tailwind",
        slug: "tailwind-css",
        name: "Tailwind CSS",
        para: "Utility-first CSS for modern UIs.",
        logo: asset("Skills/tail.jpg"),
        tags: ["tailwind", "css"],
        skills: ["Responsive and adaptive web design.", "Rapid UI prototyping.", "Custom themes and design consistency."],
        createdAt: now,
        updatedAt: now,
      },
    ],
    icon: "MdArrowForward",
    createdAt: now,
    updatedAt: now,
  },

  services: {
    id: "services",
    slug: "what-i-offer",
    title: "Services",
    subtitle: "What I Offer",
    service_content: [
            {
        id: "svc-backend",
        title: "Backend Engineering",
        para: "Designing secure and scalable APIs, microservices, and real-time systems. Specialization in FinTech workflows: remittance, digital wallets, crowdfunding platforms, premium financing, and insurance systems.",
        logo: asset("Services/back.png"),
        tags: ["backend", "architecture"],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "svc-web",
        title: "Full-Stack Web Development",
        para: "Building robust, scalable, and secure web applications using React, Next.js, Node.js, and Django/FastAPI, including FinTech platforms for remittance, crowdfunding, insurance, and premium financing.",
        logo: asset("Services/logo1.png"),
        tags: ["full-stack", "fintech"],
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "svc-mobile",
        title: "Mobile Development",
        para: "Cross-platform mobile apps with React Native and Flutter, integrated with payment systems, digital wallets, and FinTech backend APIs.",
        logo: asset("Services/mob.png"),
        tags: ["mobile", "payments"],
        createdAt: now,
        updatedAt: now,
      },
    ],
    createdAt: now,
    updatedAt: now,
  },

  Projects: {
    id: "projects",
    slug: "highlighted-work",
    title: "Projects",
    subtitle: "Highlighted Work",
    image: asset("Projects/tttgech.png"),
    project_content: [
      { id: "proj-2", title: "Kacha App (FinTech Wallet)", image: asset("Projects/img8.png"), link: "https://play.google.com/store/search?q=kacha&c=apps", createdAt: now },
      { id: "proj-3", title: "Dire MFI (Crowdfunding & Lending)", image: asset("Projects/img6.png"), link: "https://play.google.com/store/search?q=dire+mfi&c=apps", createdAt: now },
      { id: "proj-4", title: "P2P Kilo Sell", image: asset("Projects/img7.png"), link: "https://adrashapp.netlify.app/dashboard", createdAt: now },
      { id: "proj-8", title: "P2P Betting", image: asset("Projects/img9.png"), link: "https://github.com/gechderib", createdAt: now },
      { id: "proj-1", title: "Digital Marketing Website", image: asset("Projects/img1.jpg"), link: "https://github.com/gechderib", createdAt: now },
      { id: "proj-5", title: "Hospital Management System", image: asset("Projects/img4.jpg"), link: "https://github.com/SolomonKassahun/-front-end-with-browser-local-storage-Hospital-Mangment-System.git", createdAt: now },
      { id: "proj-6", title: "Dating App", image: asset("Projects/img5.jpg"), link: "https://github.com/gechderib/Dating_app_RustPlusApi.git", createdAt: now },
      { id: "proj-7", title: "Maintenance Platform", image: asset("Projects/img3.png"), link: "https://github.com/gechderib/Maintenance_Nodejs_Backend.git", createdAt: now },
    ],
    createdAt: now,
    updatedAt: now,
  },

  Testimonials: {
    id: "testimonials",
    slug: "client-feedback",
    title: "Testimonials",
    subtitle: "Client Feedback",
    testimonials_content: [
      { id: "test-1", review: "Getachew delivered a secure, reliable FinTech solution for our remittance platform. Highly professional and responsive.", img: asset("Testimonials/avatar1.png"), name: "Saim Ahmed", createdAt: now },
      { id: "test-2", review: "A dependable software engineer who understands complex business workflows in insurance and crowdfunding platforms.", img: asset("Testimonials/avatar2.png"), name: "Karthik Varma", createdAt: now },
      { id: "test-3", review: "Perfect implementation of premium financing APIs! The system was scalable and delivered ahead of schedule.", img: asset("Testimonials/avatar3.png"), name: "Viego Kastradze", createdAt: now },
    ],
    createdAt: now,
    updatedAt: now,
  },

  Hireme: {
    id: "hireme",
    slug: "hire-me",
    title: "Hire Me",
    subtitle: "Let’s Build FinTech Solutions Together",
    image1: asset("Hireme/tttperson.png"),
    image2: asset("Hireme/tttperson2.png"),
    para: "I’m Getachew Derib, a full-stack software engineer with 4+ years of experience in web, mobile, and backend development. I specialize in FinTech platforms, including remittance, digital wallets, crowdfunding, premium financing, and insurance systems. I design scalable, secure, and maintainable solutions using React, Next.js, Node.js, FastAPI, and Django.",
    btnText: "Hire Me",
    createdAt: now,
    updatedAt: now,
  },

  Contact: {
    id: "contact",
    slug: "contact-me",
    title: "Contact Me",
    subtitle: "Get In Touch",
    social_media: [
      { id: "sm-1", text: "gechderib1221@gmail.com", icon: "GrMail", link: "mailto:gechderib1221@gmail.com" },
      { id: "sm-2", text: "+251 95389 0542", icon: "MdCall", link: "https://wa.me/251953890542" },
      { id: "sm-3", text: "getachewderib", icon: "BsInstagram", link: "https://www.instagram.com/getachewderibgetie/" },
    ],
    createdAt: now,
    updatedAt: now,
  },

  Footer: {
    id: "footer",
    text: `All © Copy Right Reserved ${new Date().getFullYear()}`,
    createdAt: now,
    updatedAt: now,
  },
};

// Default export: an array of entries suitable for simple API serialization
export default Object.keys(content).map((key) => ({
  id: content[key].id || key,
  type: key,
  data: content[key],
}));
