import "remixicon/fonts/remixicon.css";
import html5 from "../assets/icons/html.png";
import css3 from "../assets/icons/css.png";
import js from "../assets/icons/javascript.png";
import bootstrap from "../assets/icons/bootstrap.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import github from "../assets/icons/github.png";
import redux from "../assets/icons/redux.png";
import project1 from "../assets/projects/project_1.jpg";
import project2 from "../assets/projects/project_2.png";
import project3 from "../assets/projects/project_3.jpg";
import project4 from "../assets/projects/project_4.jpg";
import project5 from "../assets/projects/project_5.jpg";
import project6 from "../assets/projects/project_6.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Paratha Store",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project1,

    link: "https://parathatime.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://sana107.github.io/Weather_app/",
  },
  {
    id: 3,
    title: "Crypto Bazaar",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://crypto-bazaar-hazel.vercel.app/",
  },
  {
    id: 4,
    title: "News App",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "news-app-kaltak.vercel.app",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "todo-material.vercel.app",
  },
  {
    id: 6,
    title: "Dasboard",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "eskillstask.vercel.app",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <img src={html5} width={30} />,
  },
  {
    name: "CSS3",
    icon: <img src={css3} width={30} />,
  },
  {
    name: "JavaScript",
    icon: <img src={js} width={30} />,
  },
  {
    name: "React Js",
    icon: <img src={react} width={30} />,
  },
  {
    name: "Bootstrap",
    icon: <img src={bootstrap} width={30} />,
  },
  {
    name: "Redux",
    icon: <img src={redux} width={30} />,
  },
  {
    name: "Tailwind CSS",
    icon: <img src={tailwind} width={30} />,
  },
  {
    name: "Github",
    icon: <img src={github} width={30} />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Apr 2024 - Present",
    role: "Frontend Developer",
    company: "E-Skills Web ",
    description:
      "Worked extensively with frontend technologies including React.js, Redux, JavaScript, HTML5, and CSS3 to develop dynamic, responsive web applications. Utilized modern UI frameworks like Tailwind CSS and Bootstrap to design seamless, user-friendly interfaces. Integrated various APIs to enhance application functionality and interactivity. Applied efficient state management practices using Redux and Context API for streamlined data handling. Managed version control and collaboration using Git, ensuring smooth project workflows. Deployed applications on Vercel for optimized hosting and continuous integration. Focused on building responsive, user-centric designs to deliver high-quality, impactful web solutions.",
    techStack: [
      "Redux",
      "React Js",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Git",
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Computer Science & Information Technology",
    institution: "Institute of Engineering & Science, IPS Academy",
    duration: "2019 - 2023",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Higher Secondary School",
    institution: "Indira Vidya Mandir H.S. school ",
    duration: "2018 - 2019",
    description:
      "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  },
];

// const [socialMediaLinks, setSocialMediaLinks] = useState([
//   { href: 'https://twitter.com', icon: '🐦' },
//   { href: 'https://facebook.com', icon: '📘' },
//   { href: 'https://instagram.com', icon: '📸' },
// ]);
