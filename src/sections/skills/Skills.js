import { useEffect, useRef, useState } from 'react';
import useIsElementVisible from '../../hooks/useIsElementVisible';
import './Skills.css';

import reactLogo from '../../../src/res/images/svg/tech_stack/react-logo.svg';
import nodeJsLogo from '../../../src/res/images/svg/tech_stack/nodejs-logo.svg';
import html5Logo from '../../../src/res/images/svg/tech_stack/html5-logo.svg';
import firebaseLogo from '../../../src/res/images/svg/tech_stack/firebase-logo.svg';
import expressJsLogo from '../../../src/res/images/svg/tech_stack/expressjs-logo.svg';
import javascriptLogo from '../../../src/res/images/svg/tech_stack/javascript-logo.svg';
import cssLogo from '../../../src/res/images/svg/tech_stack/css-logo.svg';
import pythonLogo from '../../../src/res/images/svg/tech_stack/python-logo.svg';
import jQueryLogo from '../../../src/res/images/svg/tech_stack/jquery-logo.svg';
import mongoDB from '../../../src/res/images/svg/tech_stack/mongoDB-logo.svg';

import photoshopLogo from '../../../src/res/images/svg/tools/photoshop-logo.svg';
import figmaLogo from '../../../src/res/images/svg/tools/figma-logo.svg';
import postmanLogo from '../../../src/res/images/svg/tools/postman-logo.svg';
import githubLogo from '../../../src/res/images/svg/tools/github-logo.svg';


import { motion } from 'framer-motion';

export default function Skills() {

    const skillsData = {
        techStack: [
            {
                skillName: 'HTML5',
                imgSrc: html5Logo
            },
            {
                skillName: 'CSS',
                imgSrc: cssLogo
            },
            {
                skillName: 'JavaScript',
                imgSrc: javascriptLogo
            },
            {
                skillName: 'ReactJS',
                imgSrc: reactLogo
            },
            {
                skillName: 'NodeJS',
                imgSrc: nodeJsLogo
            },
            {
                skillName: 'MongoDB',
                imgSrc: mongoDB
            },
            {
                skillName: 'Firebase',
                imgSrc: firebaseLogo
            },
            {
                skillName: 'ExpressJS',
                imgSrc: expressJsLogo
            },
            {
                skillName: 'Python',
                imgSrc: pythonLogo
            },
            {
                skillName: 'JQuery',
                imgSrc: jQueryLogo
            }

        ],
        tools: [
            {
                skillName: 'Adobe Photoshop',
                imgSrc: photoshopLogo
            },
            {
                skillName: 'Figma',
                imgSrc: figmaLogo
            },
            {
                skillName: 'Postman',
                imgSrc: postmanLogo
            }
            ,
            {
                skillName: 'Github',
                imgSrc: githubLogo
            }
        ]
    }
    const skills = {};

    skills['techStack'] = skillsData.techStack.map((techSkill, i) => {
        return (
            <Skill key={i} i={i} skillName={techSkill.skillName} imgSrc={techSkill.imgSrc} />
        )
    })

    skills['tools'] = skillsData.tools.map((techSkill, i) => {
        return (
            <Skill key={i} i={i} skillName={techSkill.skillName} imgSrc={techSkill.imgSrc} />
        )
    })

    // for (let i = 0; i <= 20; i++) {
    //     skills.push(<Skill key={i} i={i} name={'skill'} />);
    // }

    const generalSkillsData = [
        'Full-Stack Web Development',
        'Web Design',
        'Web Scraping',
        'Digital Art',
        'Chatbot Development',
        'Computer Vision'
    ];
    const generalSkills = generalSkillsData.map((skill, index) => {
        return (
            <motion.li
                className='text-skill'
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'tween', delay: index * .2 + 1.5 }}
            >
                <div className='line' /> {skill}
            </motion.li>
        )
    })

    return (
        <div id="skills-section" className='main-section'>

            <div className='page-signal' style={{ position: 'absolute' }} />

            <div className='page-title-container' >
                <span>Skills</span>
            </div>

            <SkillContainer headingText="Skills" >
                {
                    generalSkills
                }
            </SkillContainer>

            <SkillContainer headingText="Tech Stack">
                {
                    skills.techStack
                }
            </SkillContainer>

            <SkillContainer headingText="Other Tools" >
                {
                    skills.tools
                }
            </SkillContainer>


        </div>
    )
}

function SkillContainer({ headingText, children, isText }) {

    const skillContainerRef = useRef(null);
    const skillContainerVisible = useIsElementVisible(skillContainerRef);

    const [hasContainerLoaded, sethasContainerLoaded] = useState(false);


    // TEST: If the page is loaded, disable animating again
    useEffect(() => {
        if (skillContainerVisible && !hasContainerLoaded) {
            sethasContainerLoaded(true);
        }
    }, [skillContainerVisible, hasContainerLoaded]);

    return (
        <div className='skills-container-container' ref={skillContainerRef}>
            <div className='indicator' />
            {
                (skillContainerVisible || hasContainerLoaded) && <>
                    <div className={isText ? 'skill-categ-container text' : 'skill-categ-container'}>
                        <motion.h4
                            initial={{ left: -100 }}
                            animate={{ left: 0 }}
                            transition={{ delay: 1 }}
                        >{headingText}
                        </motion.h4>
                    </div>

                    <div className='skills-container'>
                        {children}
                    </div>
                </>
            }
        </div>
    )
}


// DEMO: Skill Component Sample
function Skill({ skillName, i, imgSrc }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className='skill'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', bounce: .5, delay: i * .1 + 1, duration: 2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
        >


            <motion.img
                src={imgSrc}
                animate={isHovered ? { scale: 1.2, y: -30, x: 0 } : {}}
                transition={{ type: 'spring', bounce: .4, duration: .5 }}
            />

            <motion.h5
                initial={{ y: -30 }}
                animate={isHovered ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
                transition={{ type: 'spring', bounce: .3 }}
            >{skillName}</motion.h5>
        </motion.div >
    )
}