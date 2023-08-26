import './SkillsSection.css';

import reactLogo from '../../../src/res/images/svg/tech_stack/react-logo.svg';
import nodeJsLogo from '../../../src/res/images/svg/tech_stack/nodejs-logo.svg';
import html5Logo from '../../../src/res/images/svg/tech_stack/html5-logo.svg';
import firebaseLogo from '../../../src/res/images/svg/tech_stack/firebase-logo.svg';
import expressJsLogo from '../../../src/res/images/svg/tech_stack/expressjs-logo.svg';
import javascriptLogo from '../../../src/res/images/svg/tech_stack/javascript-logo.svg';
import css3Logo from '../../../src/res/images/svg/tech_stack/css-logo.svg';
import pythonLogo from '../../../src/res/images/svg/tech_stack/python-logo.svg';
import jQueryLogo from '../../../src/res/images/svg/tech_stack/jquery-logo.svg';
import mongoDB from '../../../src/res/images/svg/tech_stack/mongoDB-logo.svg';
import nextJs from '../../../src/res/images/svg/tech_stack/nextjs-logo.svg';
import phpLogo from '../../../src/res/images/svg/tech_stack/php-logo.svg';
import sqlLogo from '../../../src/res/images/svg/tech_stack/sqlLogo.svg';
import npmLogo from '../../../src/res/images/svg/tech_stack/npm-logo.svg';
import typescriptLogo from '../../../src/res/images/svg/tech_stack/typescript-logo.svg';

import photoshopLogo from '../../../src/res/images/svg/tools/photoshop-logo.svg';
import figmaLogo from '../../../src/res/images/svg/tools/figma-logo.svg';
import postmanLogo from '../../../src/res/images/svg/tools/postman-logo.svg';
import githubLogo from '../../../src/res/images/svg/tools/github-logo.svg';
import gitLogo from '../../../src/res/images/svg/tools/git-logo.svg';
import vercelLogo from '../../../src/res/images/svg/tools/vercel-logo.svg';
import glitchLogo from '../../../src/res/images/svg/tools/glitch-logo.svg';
import canvaLogo from '../../../src/res/images/svg/tools/canva-logo.svg';
import netlifyLogo from '../../../src/res/images/svg/tools/netlify-logo.svg';

import Skill from './skill_component/Skill';
import SkillsContainer from './skills_container/SkillsContainer';

import { motion } from 'framer-motion';

export default function Skills() {

    const skillsData = {
        techStack: [
            {
                skillName: 'HTML5',
                imgSrc: html5Logo,
                level: 80,
                description: "HTML5 is the modern standard for structuring web content."
            },
            {
                skillName: 'CSS3',
                imgSrc: css3Logo,
                level: 80,
                description: "CSS3 is the latest version of Cascading Style Sheets, bringing advanced styling and layout features to enhance web design."
            },
            {
                skillName: 'JavaScript',
                imgSrc: javascriptLogo,
                level: 75,
                description: "JavaScript is a versatile scripting language for web development, enabling interactive and dynamic website functionality."
            },
            {
                skillName: 'TypeScript',
                imgSrc: typescriptLogo,
                level: 60,
                description: "A powerful superset of JavaScript that brings static typing, enhanced tooling, and improved scalability to your web development projects."
            },
            {
                skillName: 'ReactJS',
                imgSrc: reactLogo,
                level: 50,
                description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components."
            },
            {
                skillName: 'NodeJS',
                imgSrc: nodeJsLogo,
                level: 65,
                description: "Runtime environment that lets you execute JavaScript on the server side, enabling dynamic web content."
            },
            {
                skillName: 'MongoDB',
                imgSrc: mongoDB,
                level: 60,
                description: "NoSQL database solution used to store, retrieve, and manage data in flexible, JSON-like documents."
            },
            {
                skillName: 'Firebase',
                imgSrc: firebaseLogo,
                level: 60,
                description: "Platform offering tools and services to develop high-quality web and mobile apps, including authentication, real-time databases, and hosting."
            },
            {
                skillName: 'ExpressJS',
                imgSrc: expressJsLogo,
                level: 60,
                description: " Minimalist web application framework for Node.js, simplifying the creation of server-side applications."
            },
            {
                skillName: 'Python',
                imgSrc: pythonLogo,
                level: 76,
                description: " General-purpose programming language known for its readability and versatility, suitable for various applications, from web development to data analysis."
            },
            {
                skillName: 'JQuery',
                imgSrc: jQueryLogo,
                level: 30,
                description: "JavaScript library simplifying web development tasks and interactions."
            }
            ,
            {
                skillName: 'NextJS',
                imgSrc: nextJs,
                level: 20,
                description: "React framework for building server-rendered and optimized web applications."
            }
            ,
            {
                skillName: 'PHP',
                imgSrc: phpLogo,
                level: 15,
                description: "Server-side scripting language for dynamic web content and application development."
            }
            ,
            {
                skillName: 'SQL',
                imgSrc: sqlLogo,
                level: 40,
                description: "Structured Query Language used for managing and querying relational databases."
            }

        ],
        tools: [
            {
                skillName: 'Adobe Photoshop',
                imgSrc: photoshopLogo,
                level: 80,
                description: " Industry-standard software for image editing and graphic design."
            },
            {
                skillName: 'Figma',
                imgSrc: figmaLogo,
                level: 70,
                description: "Collaborative design tool used for creating user interfaces and prototypes."
            },
            {
                skillName: 'Postman',
                imgSrc: postmanLogo,
                level: 70,
                description: " API development and testing platform for simplifying API interactions."
            }
            ,
            {
                skillName: 'Github',
                imgSrc: githubLogo,
                level: 55,
                description: "Web-based platform for version control and collaborative software development."
            }
            ,
            {
                skillName: 'Git',
                imgSrc: gitLogo,
                level: 40,
                description: " Distributed version control system widely used for tracking changes in code, enabling collaboration, and managing software development workflows."
            }, {
                skillName: 'Glitch',
                imgSrc: glitchLogo,
                level: 50,
                description: "Online platform for building and deploying web applications collaboratively."
            }, {
                skillName: 'Canva',
                imgSrc: canvaLogo,
                level: 30,
                description: "Graphic design tool offering templates for various visual content."
            },
            {
                skillName: 'Vercel',
                imgSrc: vercelLogo,
                level: 30,
                description: "Hosting platform for deploying and managing web applications."
            }, {
                skillName: 'Netlify',
                imgSrc: netlifyLogo,
                level: 30,
                description: "Web hosting and serverless platform for modern development workflows."
            },
            {
                skillName: 'NPM',
                imgSrc: npmLogo,
                level: 60,
                description: "Node Package Manager, used for installing and managing JavaScript packages and libraries."
            }
        ]
    }

    const skills = {};

    // for every key in skillsData
    Object.keys(skillsData).forEach(skillKey => {

        // map the skill data
        skills[skillKey] = skillsData[skillKey].map((techSkill, i) => {
            const delAdd = .2;

            return (
                <Skill
                    index={i}
                    skillName={techSkill.skillName}
                    imgSrc={techSkill.imgSrc}
                    overallStop={skillsData[skillKey].length * delAdd}
                    delay={i * delAdd}
                    level={techSkill.level}
                    description={techSkill.description}
                />
            )
        })
    });

    const generalSkillsData = [
        'Front-End Web Development',
        'Back-End Web Development',
        'UI / UX Design and Prototype',
        'Web Scraping',
        // 'Digital Art',
        'Chatbot Development',
        'API Utilization'
    ];
    const generalSkills = generalSkillsData.map((skill, index) => {
        return (
            <motion.li
                key={index}
                className='text-skill'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', delay: index * .2 + 1 }}
            >
                <div className='line' /> {skill}
            </motion.li>
        )
    })

    return (
        <div id="skills-section" className='main-section'>
            <div className='section-indicator'></div>

            <div className='page-title-container'>
                <span>Skills Page</span>
            </div>

            <SkillsContainer headingText="Skills and Services" isText={true}>
                {
                    generalSkills
                }
            </SkillsContainer>

            <SkillsContainer headingText="Tech Stack">
                {
                    skills.techStack
                }
            </SkillsContainer>

            <SkillsContainer headingText="Other Tools" >
                {
                    skills.tools
                }
            </SkillsContainer>

        </div>
    )
}