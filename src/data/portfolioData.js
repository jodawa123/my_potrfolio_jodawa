// src/data/portfolioData.js
import asili from "../assets/asili.png"; 
import calories from "../assets/calories.png";
import Communityservice from "../assets/community1.png";
import thrift from "../assets/thrift.png";
import Cardvault from "../assets/vault.png";
import verse from "../assets/vault.png";

export const portfolioData = {
  personalInfo: {
    name: "Jane",
    title: "Software Developer",
    location: "Nairobi, Kenya",
    email: "odawajane@gmail.com",
    phone: "+254 713 250 419",
    linkedin: "https://www.linkedin.com/in/jane-odawa-382457267/",
    github: "https://github.com/jodawa123",
    catchy:
      "Blending logic and creativity to connect ideas, inspire innovation, and build meaningful solutions. ${/* console.log('Hello World'); */}",
    summary:
      "Creative and detail-oriented Front-End Developer with a strong foundation in building responsive, accessible, and user-focused web interfaces. Passionate about clean UI/UX design and crafting scalable digital experiences.",
  },

  about: {
    info: `
    For me, tech is a journey of learning and improving every day. 
    It’s not always fun or perfect, but it’s about getting things done — 
    building better ideas, cleaner solutions, and smarter systems.

    I value teamwork, communication, and shared problem-solving. 
    Good projects are built by people who listen, learn, and grow together.
    `,
  },

  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "DOM Manipulation", "UI/UX Design"],
    backend: ["Node.js", "MySQL", "Firebase Realtime Database", "Mongodb"],
    mobile: ["Android (Java)"],
    cloud: ["AWS (Foundational)", "Firebase"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Docker"],
    ml: ["Regression", "Classification", "ANN"],
  },

  projects: [
    {
      id: 1,
      title: "Community Service Android App",
      description:
        "Developed an Android app to digitize community service tracking at USIU. Inspired by real challenges faced during service at Brook Center, the app streamlines student logging, enables real-time supervisor sign-off, and reduces paperwork delays.",
      technologies: ["Java", "Firebase Realtime Database"],
      category: "mobile",
      image: Communityservice,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Calorie Estimation App",
      description:
        "Built and deployed a web-based calorie prediction tool using machine learning. Integrated a simple, intuitive UI with backend Flask services.",
      technologies: ["Python", "Scikit-learn", "Flask", "HTML/CSS"],
      category: "web",
      image: calories,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Credit Card Vault",
      description:
        "Engineered a secure backend for encrypted credit card data storage with role-based access controls and AES encryption for data integrity.",
      technologies: ["Node.js", "MySQL", "AES Encryption", "RBAC"],
      category: "backend",
      image: Cardvault,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Asili",
      description:
        "A simple web app for African local artisans to showcase their craft and reach broader markets through curated digital storefronts.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      category: "web",
      image: asili,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "CRUD-On-Firebase",
      description:
        "A public project demonstrating Create, Read, Update, and Delete operations using Firebase Firestore as the backend.",
      technologies: ["Java", "Firebase"],
      category: "mobile",
      image: verse,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "Thrift Delivery Management System",
      description:
        "Collaborated on a delivery management application for thrift-store owners to assign riders, track deliveries, and manage orders efficiently.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React"],
      category: "web",
      image: thrift,
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 7,
      title: "Plushies API",
      description:
        "A RESTful API for managing plushies and stuffed toy inventory, featuring CRUD endpoints and MongoDB integration.",
      technologies: ["Express.js", "MongoDB", "Postman"],
      category: "backend",
      image: "#",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 8,
      title: "Simple Vegetation Inventory Database",
      description:
        "A lightweight MySQL database system for tracking plant products, suppliers, stock levels, and inventory movements across categories.",
      technologies: ["MySQL", "SQL"],
      category: "backend",
      image: "#",
      githubUrl: "#",
      liveUrl: "#",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Network Support Intern",
      company: "VGG Connect Kenya",
      location: "Nairobi",
      period: "May 2024 - August 2024",
      responsibilities: [
        "Installed and configured internet setups for residential and commercial clients",
        "Resolved network connectivity issues, maintaining 98% service uptime",
        "Collaborated during major service outages to restore systems under pressure and meet SLA targets",
      ],
    },
  ],
};
