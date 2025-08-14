import "./SkillsSection.css";
import Skill from "./skill_component/Skill";
import SkillsContainer from "./skills_container/SkillsContainer";

import { motion } from "framer-motion";

const techPath = "/res/images/svg/tech_stack/";
const toolPath = "/res/images/svg/tools/";

export default function Skills() {
  const skillsData = {
    techStack: [
      {
        skillName: "HTML5",
        imgFilename: "html5-logo.svg",
        level: 80,
        description:
          "HTML5 is the modern standard for structuring web content.",
      },
      {
        skillName: "CSS3",
        imgFilename: "css-logo.svg",
        level: 80,
        description:
          "CSS3 is the latest version of Cascading Style Sheets, bringing advanced styling and layout features to enhance web design.",
      },
      {
        skillName: "JavaScript",
        imgFilename: "javascript-logo.svg",
        level: 75,
        description:
          "JavaScript is a versatile scripting language for web development, enabling interactive and dynamic website functionality.",
      },
      {
        skillName: "TypeScript",
        imgFilename: "typescript-logo.svg",
        level: 40,
        description:
          "A powerful superset of JavaScript that brings static typing, enhanced tooling, and improved scalability to your web development projects.",
      },
      {
        skillName: "ReactJS",
        imgFilename: "react-logo.svg",
        level: 60,
        description:
          "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      },
      {
        skillName: "NodeJS",
        imgFilename: "nodejs-logo.svg",
        level: 65,
        description:
          "Runtime environment that lets you execute JavaScript on the server side, enabling dynamic web content.",
      },
      {
        skillName: "MongoDB",
        imgFilename: "mongoDB-logo.svg",
        level: 60,
        description:
          "NoSQL database solution used to store, retrieve, and manage data in flexible, JSON-like documents.",
      },
      {
        skillName: "Firebase",
        imgFilename: "firebase-logo.svg",
        level: 35,
        description:
          "Platform offering tools and services to develop high-quality web and mobile apps, including authentication, real-time databases, and hosting.",
      },
      {
        skillName: "ExpressJS",
        imgFilename: "expressjs-logo.svg",
        level: 60,
        description:
          " Minimalist web application framework for Node.js, simplifying the creation of server-side applications.",
      },
      {
        skillName: "Python",
        imgFilename: "python-logo.svg",
        level: 76,
        description:
          " General-purpose programming language known for its readability and versatility, suitable for various applications, from web development to data analysis.",
      },
      {
        skillName: "JQuery",
        imgFilename: "jquery-logo.svg",
        level: 30,
        description:
          "JavaScript library simplifying web development tasks and interactions.",
      },
      {
        skillName: "NextJS",
        imgFilename: "nextjs-logo.svg",
        level: 20,
        description:
          "React framework for building server-rendered and optimized web applications.",
      },
      {
        skillName: "PHP",
        imgFilename: "php-logo.svg",
        level: 15,
        description:
          "Server-side scripting language for dynamic web content and application development.",
      },
      {
        skillName: "SQL",
        imgFilename: "sqlLogo.svg",
        level: 40,
        description:
          "Structured Query Language used for managing and querying relational databases.",
      },
      {
        skillName: "Tailwind CSS",
        imgFilename: "tailwind-logo.svg",
        level: 20,
        description:
          "Tailwind CSS is a utility-first CSS framework utilized for efficiently styling web interfaces.",
      },
    ],
    tools: [
      {
        skillName: "Adobe Photoshop",
        imgFilename: "photoshop-logo.svg",
        level: 80,
        description:
          " Industry-standard software for image editing and graphic design.",
      },
      {
        skillName: "Adobe Illustrator",
        imgFilename: "illustrator-logo.svg",
        level: 20,
        description:
          "Graphic designers use Illustrator to create vector graphics.",
      },
      {
        skillName: "Figma",
        imgFilename: "figma-logo.svg",
        level: 70,
        description:
          "Collaborative design tool used for creating user interfaces and prototypes.",
      },
      {
        skillName: "Postman",
        imgFilename: "postman-logo.svg",
        level: 70,
        description:
          " API development and testing platform for simplifying API interactions.",
      },
      {
        skillName: "Github",
        imgFilename: "github-logo.svg",
        level: 55,
        description:
          "Web-based platform for version control and collaborative software development.",
      },
      {
        skillName: "Git",
        imgFilename: "git-logo.svg",
        level: 40,
        description:
          " Distributed version control system widely used for tracking changes in code, enabling collaboration, and managing software development workflows.",
      },
      {
        skillName: "Glitch",
        imgFilename: "glitch-logo.svg",
        level: 50,
        description:
          "Online platform for building and deploying web applications collaboratively.",
      },
      {
        skillName: "Canva",
        imgFilename: "canva-logo.svg",
        level: 30,
        description:
          "Graphic design tool offering templates for various visual content.",
      },
      {
        skillName: "Vercel",
        imgFilename: "vercel-logo.svg",
        level: 30,
        description:
          "Hosting platform for deploying and managing web applications.",
      },
      {
        skillName: "Netlify",
        imgFilename: "netlify-logo.svg",
        level: 30,
        description:
          "Web hosting and serverless platform for modern development workflows.",
      },
      {
        skillName: "NPM",
        imgFilename: "npm-logo.svg",
        level: 60,
        description:
          "Node Package Manager, used for installing and managing JavaScript packages and libraries.",
      },
      {
        skillName: "Render",
        imgFilename: "render-logo.svg",
        level: 40,
        description:
          "Render, a cloud platform used for hosting and managing web applications, APIs, and static sites.",
      },
    ],
  };

  const skills = {};

  Object.keys(skillsData).forEach((skillKey) => {
    skills[skillKey] = skillsData[skillKey].map((techSkill, i) => {
      const delAdd = 0.2;

      return (
        <Skill
          index={i}
          skillName={techSkill.skillName}
          imgSrc={
            (skillKey == "tools" ? toolPath : techPath) + techSkill.imgFilename
          }
          overallStop={skillsData[skillKey].length * delAdd}
          delay={i * delAdd}
          level={techSkill.level}
          description={techSkill.description}
        />
      );
    });
  });

  const generalSkillsData = [
    "Front-End Web Development",
    "Back-End Web Development",
    "UI / UX Design and Prototype",
    // 'Web Scraping',
    "Digital Art",
    "Graphic Design",
    // 'Chatbot Development',
    // 'API Utilization'
  ];
  const generalSkills = generalSkillsData.map((skill, index) => {
    return (
      <motion.li
        key={index}
        className="text-skill"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", delay: index * 0.2 + 1 }}
      >
        <div className="line" /> {skill}
      </motion.li>
    );
  });

  return (
    <div id="skills-section" className="main-section">
      <div className="section-indicator"></div>

      <div className="page-title-container">
        <span>Skills Page</span>
      </div>

      <SkillsContainer headingText="Skills and Services" isText={true}>
        {generalSkills}
      </SkillsContainer>

      <SkillsContainer headingText="Tech Stack">
        {skills.techStack}
      </SkillsContainer>

      <SkillsContainer headingText="Other Tools">
        {skills.tools}
      </SkillsContainer>
    </div>
  );
}
