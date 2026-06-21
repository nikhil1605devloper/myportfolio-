// Central content for the portfolio — edit here to update text across both themes.

export const profile = {
  name: "Nikhil Powar",
  title: "Software Engineer",
  email: "powarnikhil2617@gmail.com",
  phone: "+91 76205 05009",
  location: "Pune, Maharashtra",
  languages: "English, Hindi, Marathi",
  linkedin: "#",
  github: "#",
};

export const about = [
  "I'm a Software Engineer with hands-on experience shipping full-stack applications that handle real traffic — live bookings, real payments, real users, not just demos.",
  "At Sanpurnam Infotech, I've architected booking platforms, quotation management systems, and ad-campaign tools — owning everything from database schema to API design to responsive UI.",
  "My working style is surgical: minimal, precise changes that preserve what already works, rather than risky rewrites. It's how production systems stay stable while still shipping fast.",
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "C#", "C", "HTML5", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Vite", "JSX", "Responsive UI"],
  },
  {
    label: "Backend & Frameworks",
    skills: ["Django", "Django REST Framework", "ASP.NET / MVC", "ADO.NET", "Entity Framework"],
  },
  {
    label: "Architecture & Auth",
    skills: ["RESTful APIs", "MVT (Django)", "JWT Auth", "Razorpay Integration", "OTP Verification"],
  },
  {
    label: "Databases & Tools",
    skills: ["MySQL", "SQL Server", "Git", "GitHub", "VS Code"],
  },
];

export const experience = [
  {
    role: "Software Engineer I",
    org: "Sanpurnam Infotech Pvt. Ltd",
    date: "Present",
    points: [
      "Developed a high-performance live room booking system with real-time availability tracking for Kokan Kinara.",
      "Architected dynamic frontends where UI content is fetched live via Django REST APIs.",
      "Integrated SMS-based OTP verification and automated email confirmations for booking flows.",
      "Seamlessly integrated Razorpay Payment Gateway for secure online transactions across multiple projects.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    org: "HRMS — Human Resource Management System",
    date: "Earlier",
    points: [
      "Built and maintained HRMS modules using Django REST Framework and MySQL.",
      "Implemented full CRUD operations for employee and HR data management.",
      "Assisted in database design, ensuring efficient and reliable data handling.",
    ],
  },
];

export const projects = [
  {
    title: "Kokan Kinara",
    file: "kokan-kinara.app",
    desc: "Hotel management & booking platform with real-time room availability, OTP-secured auth, automated email confirmations, and Razorpay payments.",
    tags: ["React.js", "Django", "MySQL", "Razorpay"],
    link: "https://kokankinara.sanpurnam.in/",
  },
  {
    title: "Kitchen Care",
    file: "kitchen-care.app",
    desc: "Centralized admin suite for kitchen service quotation management — multi-option estimation, real-time pricing comparison, and JWT-secured login.",
    tags: ["React.js", "Django", "MySQL", "JWT"],
    link: "https://kitchencare.yourhrms.in/login",
  },
  {
    title: "AdBajao",
    file: "adbajao.app",
    desc: "In-film advertisement placement platform with campaign management, ad slot allocation, performance tracking, and Razorpay payment handling.",
    tags: ["React.js", "Django", "MySQL", "JWT"],
    link: "https://adspice.adbajao.com/",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  detail: "GPA: 75% · Jun '20 — Jun '23",
};

export const certifications = [
  {
    title: "Prompt Engineering for Everyone",
    detail: "IBM Developer Skills Network · Jun '26",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
