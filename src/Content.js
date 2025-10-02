// =============================
// Portfolio Content Configuration
// =============================

// Import images
import Hero_person from "./assets/images/Hero/gech1.png";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import ts from "./assets/images/Skills/ts.png";
import next from "./assets/images/Skills/next.png";
import native from "./assets/images/Skills/native.jpg";
import js from "./assets/images/Skills/js.png";
import mui from "./assets/images/Skills/mui.png";
import tail from "./assets/images/Skills/tail.jpg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/mob.png";
import services_logo3 from "./assets/images/Services/back.png";

import project1 from "./assets/images/Projects/img1.jpg";
import project2 from "./assets/images/Projects/img8.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.jpg";
import project5 from "./assets/images/Projects/img5.jpg";
import project6 from "./assets/images/Projects/img6.png";
import project7 from "./assets/images/Projects/img7.png";
import person_project from "./assets/images/Projects/gech.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// Icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    { link: "#home", icon: TbSmartHome },
    { link: "#skills", icon: BiUser },
    { link: "#services", icon: RiServiceLine },
    { link: "#projects", icon: RiProjectorLine },
    { link: "#contact", icon: MdOutlinePermContactCalendar },
  ],

  hero: {
    title: "Full-Stack Software Engineer",
    firstName: "Getachew",
    lastName: "Derib",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of experience in software engineering and full-stack development",
      },
      {
        count: "10+",
        text: "Projects delivered across web, mobile, and backend platforms",
      },
      {
        count: "3+",
        text: "FinTech projects: remittance, crowdfunding, insurance & premium financing",
      },
    ],
  },

  skills: {
    title: "Skills",
    subtitle: "My Core Competencies",
    skills_content: [
      {
        name: "JavaScript (ES6+)",
        para: "Proficient in modern JavaScript for building interactive web applications.",
        logo: js,
        skills: {
          skill1: "Strong understanding of ES6+ features and asynchronous programming.",
          skill2: "Experience with frameworks like React, Vue.js, and Node.js.",
          skill3: "RESTful API consumption and AJAX data handling.",
          skill4: "Frontend integration with HTML5 and CSS3.",
        },
      },
      {
        name: "TypeScript",
        para: "Deep expertise in scalable TypeScript applications.",
        logo: ts,
        skills: {
          skill1: "Static typing, interfaces, generics, and decorators.",
          skill2: "Applied in large-scale React and Next.js projects.",
          skill3: "Strong type safety for backend services with Node.js.",
        },
      },
      {
        name: "Python",
        para: "Advanced backend engineering with Python.",
        logo: python,
        skills: {
          skill1: "Building APIs with FastAPI and Django Rest Framework.",
          skill2: "Data processing and pipeline automation.",
          skill3: "Integration with relational and NoSQL databases.",
          skill4: "Secure authentication, authorization, and middleware development.",
        },
      },
      {
        name: "Node.js",
        para: "Building fast and scalable backend services.",
        logo: nodejs,
        skills: {
          skill1: "RESTful and GraphQL APIs with Express.js and NestJS.",
          skill2: "Real-time applications with WebSockets and Kafka.",
          skill3: "Database integration with MongoDB, PostgreSQL, MySQL.",
          skill4: "Event-driven architecture and microservices.",
          skill5: "FinTech experience: remittance, digital wallets, crowdfunding, and insurance APIs.",
        },
      },
      {
        name: "React.js",
        para: "Expert in building dynamic UIs with React.",
        logo: reactjs,
        skills: {
          skill1: "State management with Redux, Zustand, and React Query.",
          skill2: "Component-driven development and reusable UI patterns.",
          skill3: "Integration with backend services and real-time data feeds.",
          skill4: "Performance optimization and code-splitting.",
        },
      },
      {
        name: "Next.js",
        para: "Production-ready full-stack web development.",
        logo: next,
        skills: {
          skill1: "Server-side rendering (SSR) and static site generation (SSG).",
          skill2: "API routes for backend integration.",
          skill3: "Optimized performance and SEO-friendly web apps.",
        },
      },
      {
        name: "React Native",
        para: "Cross-platform mobile development.",
        logo: native,
        skills: {
          skill1: "iOS and Android apps with shared codebase.",
          skill2: "Integration with mobile payment gateways and wallets.",
          skill3: "Push notifications and secure authentication flows.",
        },
      },
      {
        name: "Flutter",
        para: "Cross-platform app development with Dart.",
        logo: flutter,
        skills: {
          skill1: "High-performance UI with customizable widgets.",
          skill2: "Multi-platform deployment with single codebase.",
          skill3: "Integration with REST and GraphQL APIs.",
        },
      },
      {
        name: "Tailwind CSS",
        para: "Utility-first CSS for modern UIs.",
        logo: tail,
        skills: {
          skill1: "Responsive and adaptive web design.",
          skill2: "Rapid UI prototyping.",
          skill3: "Custom themes and design consistency.",
        },
      },
      {
        name: "MUI",
        para: "Production-ready UI components.",
        logo: mui,
        skills: {
          skill1: "Material Design implementation.",
          skill2: "Customizable UI for enterprise apps.",
          skill3: "Integration with React and Next.js.",
        },
      },
      {
        name: "Figma",
        para: "Collaborative design and prototyping.",
        logo: figma,
        skills: {
          skill1: "Wireframing and UI/UX design.",
          skill2: "Interactive prototypes for web and mobile.",
          skill3: "Handoff to developers with design tokens.",
        },
      },
    ],
    icon: MdArrowForward,
  },

  services: {
    title: "Services",
    subtitle: "What I Offer",
    service_content: [
      {
        title: "Full-Stack Web Development",
        para: "Building robust, scalable, and secure web applications using React, Next.js, Node.js, and Django/FastAPI, including FinTech platforms for remittance, crowdfunding, insurance, and premium financing.",
        logo: services_logo1,
      },
      {
        title: "Backend Engineering & FinTech Systems",
        para: "Designing secure and scalable APIs, microservices, and real-time systems. Specialization in FinTech workflows: remittance, digital wallets, crowdfunding platforms, premium financing, and insurance systems.",
        logo: services_logo3,
      },
      {
        title: "Mobile Development",
        para: "Cross-platform mobile apps with React Native and Flutter, integrated with payment systems, digital wallets, and FinTech backend APIs.",
        logo: services_logo2,
      },
    ],
  },

  Projects: {
    title: "Projects",
    subtitle: "Highlighted Work",
    image: person_project,
    project_content: [
      {
        title: "Digital Marketing Website",
        image: project1,
        link: "https://shemeta.netlify.app/",
      },
      {
        title: "Kacha App (FinTech Wallet)",
        image: project2,
        link: "https://play.google.com/store/search?q=kacha&c=apps",
      },
      {
        title: "Dire MFI (Crowdfunding & Lending)",
        image: project6,
        link: "https://play.google.com/store/search?q=dire+mfi&c=apps",
      },
      {
        title: "Portfolio Website",
        image: project7,
        link: "https://github.com/gechderib/portfolio.git",
      },
      {
        title: "Hospital Management System",
        image: project4,
        link: "https://github.com/SolomonKassahun/-front-end-with-browser-local-storage-Hospital-Mangment-System.git",
      },
      {
        title: "Dating App",
        image: project5,
        link: "https://github.com/gechderib/Dating_app_RustPlusApi.git",
      },
      {
        title: "Maintenance Platform",
        image: project3,
        link: "https://github.com/gechderib/Maintenance_Nodejs_Backend.git",
      },
    ],
  },

  Testimonials: {
    title: "Testimonials",
    subtitle: "Client Feedback",
    testimonials_content: [
      {
        review:
          "“Getachew delivered a secure, reliable FinTech solution for our remittance platform. Highly professional and responsive.”",
        img: avatar1,
        name: "Saim Ahmed",
      },
      {
        review:
          "“A dependable software engineer who understands complex business workflows in insurance and crowdfunding platforms.”",
        img: avatar2,
        name: "Karthik Varma",
      },
      {
        review:
          "“Perfect implementation of premium financing APIs! The system was scalable and delivered ahead of schedule.”",
        img: avatar3,
        name: "Viego Kastradze",
      },
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "Let’s Build FinTech Solutions Together",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I’m Getachew Derib, a full-stack software engineer with 4+ years of experience in web, mobile, and backend development. I specialize in FinTech platforms, including remittance, digital wallets, crowdfunding, premium financing, and insurance systems. I design scalable, secure, and maintainable solutions using React, Next.js, Node.js, FastAPI, and Django.",
    btnText: "Hire Me",
  },

  Contact: {
    title: "Contact Me",
    subtitle: "Get In Touch",
    social_media: [
      {
        text: "gechderib1221@gmail.com",
        icon: GrMail,
        link: "mailto:gechderib1221@gmail.com",
      },
      {
        text: "+251 95389 0542",
        icon: MdCall,
        link: "https://wa.me/251953890542",
      },
      {
        text: "getachewderib",
        icon: BsInstagram,
        link: "https://www.instagram.com/getachewderibgetie/",
      },
    ],
  },

  Footer: {
    text: `All © Copy Right Reserved ${new Date().getFullYear()}`,
  },
};
