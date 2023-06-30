// import images
// import Hero_person from "./assets/images/Hero/person.png";
// import Hero_person from "./assets/images/Hero/gech1.png";
import Hero_person from "./assets/images/Hero/gech.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import ts from "./assets/images/Skills/ts.png";
import next from "./assets/images/Skills/next.png";
import flutter from "./assets/images/Skills/flutter.png";
import native from "./assets/images/Skills/native.jpg";
import js from "./assets/images/Skills/js.png";
import mui from "./assets/images/Skills/mui.png";
import tail from "./assets/images/Skills/tail.jpg";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/mob.png";
import services_logo3 from "./assets/images/Services/back.png";

// import project1 from "./assets/images/projects/img1.jpg";
// import project2 from "./assets/images/projects/img2.jpg";
// import project3 from "./assets/images/projects/img3.png";
// import project4 from "./assets/images/Projects/img4.jpg";
// import project5 from "./assets/images/Projects/img5.jpg";
// import project6 from "./assets/images/Projects/img6.png";
// import project7 from "./assets/images/Projects/img7.png";
import person_project from "./assets/images/projects/gech.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "Getachew",
    LastName: "Derib",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in fullstack development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Javascript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "Typescript",
        para: "Lorem ipsum text  dummy",
        logo: ts,
      },

      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Next Js",
        para: "Lorem ipsum text  dummy",
        logo: next,
      },
      {
        name: "React Native",
        para: "Lorem ipsum text  dummy",
        logo: native,
      },
      {
        name: "Flutter",
        para: "Lorem ipsum text  dummy",
        logo: flutter,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },

      {
        name: "Tailwind Css",
        para: "Lorem ipsum text  dummy",
        logo: tail,
      },
      {
        name: "MUI",
        para: "Lorem ipsum text  dummy",
        logo: mui,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Create visually appealing and user-friendly websites using modern design principles and development technologies. integrate third-party APIs (Application Programming Interfaces) to enhance website functionality, such as social media integration, payment gateways, mapping services, or email marketing platforms.",
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: "Design and develop robust and scalable APIs (Application Programming Interfaces) that allow different systems, applications, or services to communicate and exchange data. Design and implement efficient and optimized database structures using technologies like SQL or NoSQL databases (e.g., MySQL, PostgreSQL, MongoDB), ensuring data integrity and performance. ",
        logo: services_logo3,
      },
      {
        title: "Mobile Development",
        para: "Build mobile apps using frameworks like React Native, Flutter, allowing you to write code once and deploy it on multiple platforms, saving time and resources. Assist clients in submitting their apps to the Apple App Store and Google Play Store, ensuring compliance with store guidelines and optimizing app listings for maximum visibility.",
        logo: services_logo2,
      },

    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Digital Marketing",
        // image: project1,
        link:"https://shemeta.netlify.app/"
      },
      {
        title: "Life App",
        // image: project2,
        link:"https://github.com/gechderib/Life_App.git"
      },
      {
        title: "Portfolio",
        // image: project7,
        link:"https://github.com/gechderib/portfolio.git"
      },
      {
        title: "Email Announcement",
        // image: project6,
        link:""
      },

      {
        title: "Hospital Management System",
        // image: project4,
        link:"https://github.com/SolomonKassahun/-front-end-with-browser-local-storage-Hospital-Mangment-System.git"
      },
      {
        title: "Dating App",
        // image: project5,
        link:"https://github.com/gechderib/Dating_app_RustPlusApi.git"
      },
      {
        title: "Maintenance",
        // image: project3,
        link:"https://github.com/gechderib/Maintenance_Nodejs_Backend.git"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Getachew listened to my ideas and incorporated them well into the content, he worked hard to deliver quality Development services for my websites. Great communication, great skills, project finished way ahead of schedule. I would be glad to work again with Getachew.”",
        img: avatar1,
        name: "Saim Ahmed",
      },
      {
        review:
          "“he is a very good developer and cares about the clients a lot, even he will not push the timelines. delivers on time”",
        img: avatar2,
        name: "Karthik Varma",
      },
      {
        review:
          "“Perfect game developing! According the document freelancer made all successfully!”",
        img: avatar3,
        name: "Viego Kastradze",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a skilled and experienced full-stack developer to bring your project to life? Look no further! Hi, I'm Getachew Derib, a highly proficient full-stack developer with 4 years of experience in building robust and scalable web applications. I specialize in both front-end and back-end development, offering end-to-end solutions that meet your unique business requirements.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "gechderib1221@gmail.com",
        icon: GrMail,
        link: "mailto:gechderib1221@gmail.com",
      },
      {
        text: "+251 95389 0542",
        icon: MdCall,
        link: "https://wa.me/0953890542",
      },
      {
        text: "getachewderib",
        icon: BsInstagram,
        link: "https://www.instagram.com/getachewderibgetie/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
