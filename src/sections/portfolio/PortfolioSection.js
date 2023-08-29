import { useEffect, useRef, useState } from 'react';
import './PortfolioSection.css';
import useIsElementVisible from '../../hooks/useIsElementVisible';
import useWindowSize from '../../hooks/useWindowSize';

import { motion } from 'framer-motion';

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
import typescriptLogo from '../../../src/res/images/svg/tech_stack/typescript-logo.svg';
import tailwindLogo from '../../../src/res/images/svg/tech_stack/tailwind-logo.svg';

import anonySS from '../../../src/res/images/screenshots/anony-ss.PNG';
import censorshipSS from '../../../src/res/images/screenshots/censorship-ss.PNG';
import eCommerceSS from '../../../src/res/images/screenshots/e-commerce-ss.PNG';
import converterSS from '../../../src/res/images/screenshots/converter-ss.PNG';
import noteyFiSS from '../../../src/res/images/screenshots/notey-fi-ss.PNG';
import fbGPTSS from '../../../src/res/images/screenshots/fb-gpt-ss.PNG';
import vocabSS from '../../../src/res/images/screenshots/vocab-ss.PNG';
import voiceSS from '../../../src/res/images/screenshots/voice-ss.PNG';
import idkSS from '../../../src/res/images/screenshots/idk-ss.PNG';
import uiKitSS from '../../../src/res/images/screenshots/ui-kit-ss.PNG';
import mntnSS from '../../../src/res/images/screenshots/mntn-ss.PNG';
import krUISS from '../../../src/res/images/screenshots/kr-ui-ss.PNG';
import trailwiseSS from '../../../src/res/images/screenshots/trailwise-ss.PNG';


const techSkills = [
    {
        techName: 'HTML5',
        imgSrc: html5Logo
    },
    {
        techName: 'CSS3',
        imgSrc: css3Logo
    },
    {
        techName: 'JavaScript',
        imgSrc: javascriptLogo
    },
    {
        techName: 'ReactJS',
        imgSrc: reactLogo
    },
    {
        techName: 'NodeJS',
        imgSrc: nodeJsLogo
    },
    {
        techName: 'MongoDB',
        imgSrc: mongoDB
    },
    {
        techName: 'Firebase',
        imgSrc: firebaseLogo
    },
    {
        techName: 'ExpressJS',
        imgSrc: expressJsLogo
    },
    {
        techName: 'Python',
        imgSrc: pythonLogo
    },
    {
        techName: 'JQuery',
        imgSrc: jQueryLogo
    }
    ,
    {
        techName: 'NextJS',
        imgSrc: nextJs
    }, {
        techName: 'TypeScript',
        imgSrc: typescriptLogo
    }, {
        techName: 'Tailwind CSS',
        imgSrc: tailwindLogo
    }

]

export default function Portfolio() {

    const portRef = useRef(null);
    const isVisible = useIsElementVisible(portRef, {
        root: null,
        rootMargin: '200px',
        threshold: 0.5
    });
    const [hasLoaded, setHasLoaded] = useState(false);

    const isMobile = useWindowSize().width <= 600;

    useEffect(() => {
        if (isVisible && !hasLoaded) {
            setHasLoaded(true);
        }
    }, [isVisible, hasLoaded]);

    const portfolioData = [
        {
            title: 'Notey-Fi',
            thumbNailSrc: noteyFiSS,
            details: "A Facebook Chatbot: Get Google Classroom updates, activity alerts, assignments, and set task reminders effortlessly.",
            techUsed: [2, 4, 5, 7],
            sourceCodeLink: 'https://github.com/krevindev/NOTEY-FI',
            previewLink: null,
            notice: 'Private',
            noticeColor: 'orange',
        },
        {
            title: 'Anony - Anonymous Messaging App',
            thumbNailSrc: anonySS,
            details: 'A simple anonymous messaging web app for creating chat channels, sharing, and discussing without revealing identities',
            techUsed: [0, 1, 2, 3, 4, 6],
            sourceCodeLink: 'https://github.com/krevindev/Anony',
            previewLink: 'https://anony-post.netlify.app',
            notice: '',
            noticeColor: ''
        },
        {
            title: 'Live Video Text Censorship',
            thumbNailSrc: censorshipSS,
            details: 'My Python program utilizes Optical Character Recognition (OCR) to automatically censor inappropriate words in real-time video feeds.',
            techUsed: [8],
            sourceCodeLink: 'https://github.com/krevindev/AutoTextCensor-OpenCV-Pytesseract',
            previewLink: null,
            notice: ''
        },
        {
            title: 'FB GPT',
            thumbNailSrc: fbGPTSS,
            details: "A Simple Q&A Facebook Chatbot that uses OpenAI's ChatGPT API to respond to questions.",
            techUsed: [2, 4, 7],
            sourceCodeLink: 'https://github.com/krevindev/FB-GPT',
            previewLink: null,
            notice: 'Request Limit Reached',
            noticeColor: 'red'
        }, {
            title: 'MNTN',
            thumbNailSrc: mntnSS,
            details: "A hiking guide website from a web design template",
            techUsed: [0, 1, 2, 3, 4],
            sourceCodeLink: 'https://github.com/krevindev/MNTN---Website',
            previewLink: 'https://mntn-website.vercel.app/',
            notice: 'Unfinished',
            noticeColor: 'orange'
        },
        {
            title: 'UI Design Kit Store',
            thumbNailSrc: uiKitSS,
            details: "A simple landing page from a Ari Shakur's website design template.",
            techUsed: [0, 1, 2, 3, 4],
            sourceCodeLink: 'https://github.com/krevindev/UI-Design-Kit---Landing-Page',
            previewLink: 'https://ui-design-kit.vercel.app/',
        },
        {
            title: 'IDK - Anonymous Posting',
            thumbNailSrc: idkSS,
            details: `Simple anonymous posting website.`,
            techUsed: [0, 1, 2, 3, 4, 5, 7],
            sourceCodeLink: 'https://github.com/krevindev/IDK---Posting',
            previewLink: 'https://idk-posting.netlify.app/',
            notice: 'Unfinished',
            noticeColor: 'orange'
        }, {
            title: 'TrailWise',
            thumbNailSrc: trailwiseSS,
            details: `Find passenger vehicles to get to a target destination. (Prototype)`,
            techUsed: [0, 1, 2, 3, 4, 11, 12],
            sourceCodeLink: 'https://github.com/krevindev/TrailWise',
            previewLink: 'https://trail-wise.vercel.app',
            notice: 'Prototype',
            noticeColor: 'orange'
        }, {
            title: 'KR React Components Kit',
            thumbNailSrc: krUISS,
            details: `A planned open-source React UI Components Kit website created as part of my TypeScript practice.`,
            techUsed: [0, 1, 2, 3, 4, 11],
            sourceCodeLink: 'https://github.com/krevindev/KR-UI-Kit',
            previewLink: 'https://kr-ui.vercel.app/',
            notice: 'Unfinished',
            noticeColor: 'orange'
        },
        {
            title: 'Unit Converter',
            thumbNailSrc: converterSS,
            details: "In my early days of learning JavaScript, I built a Unit Converter web page to enhance my JavaScript DOM skills. It offers conversions for 5 units: weight, time, area, volume, and length.",
            techUsed: [0, 1, 2],
            sourceCodeLink: 'https://github.com/batchy-bot/unitconverter1',
            previewLink: 'https://batchy-bot.github.io/unitconverter1/',
            notice: ''
        },
        {
            title: 'E-Commerce Front-End',
            thumbNailSrc: eCommerceSS,
            details: "I developed a one-page E-commerce website for a school activy using HTML, CSS, and Vanilla Javascript. The design was inspired by EPIC Games' website.",
            techUsed: [0, 1, 2],
            sourceCodeLink: null,
            previewLink: 'https://batchy-bot.github.io/REV-Game-Store/',
            notice: 'Non-Responsive',
            noticeColor: 'orange'
        },
        {
            title: 'Personal Vocabulary Builder',
            thumbNailSrc: vocabSS,
            details: `Using Python and the "Pickle" library as a micro-database, I developed a personal program to remember newly encountered words.`,
            techUsed: [8],
            sourceCodeLink: 'https://drive.google.com/drive/folders/1n5Df_B8cvR9VorFfR-u-7orrvQ5W0WkQ',
            previewLink: null,
            notice: ''
        }, {
            title: 'Personal Voice Assistant',
            thumbNailSrc: voiceSS,
            details: `Created a Python voice assistant using "pyttsx3" for text-to-speech, "speech_recognition" for voice-to-text, and "BeautifulSoup" for web scraping. It can check weather, time, play videos, open websites, terminate processes, and define words.`,
            techUsed: [8],
            sourceCodeLink: 'https://github.com/krevindev/Voice-Assistant',
            previewLink: null,
            notice: ''
        }

    ]

    const portfolioItems = portfolioData.map((port, index) => {
        return (
            <PortfolioItem
                i={index}
                title={port.title}
                thumbNailSrc={port.thumbNailSrc}
                details={port.details}
                techUsed={port.techUsed}
                sourceCodeLink={port.sourceCodeLink}
                previewLink={port.previewLink}
                notice={port.notice}
                noticeColor={port.noticeColor}
                isMobile={isMobile}
            />
        )
    })


    return (
        <div id="portfolio-section" className="main-section" ref={portRef} >
            <div className='section-indicator'></div>
            <div className='page-title-container' >
                <span>Portfolio Page</span>
            </div>
            <h1 id='portfolio-header'>WEB AND SOFTWARE DEVELOPMENT PORTFOLIO</h1>
            {
                (isVisible || hasLoaded) && <div id='projects-container' >{portfolioItems}</div>
            }
        </div >
    )
}

function PortfolioItem(props) {

    const isSourceLinkValid = !['', null, undefined].includes(props.sourceCodeLink);
    const isPreviewLinkValid = !['', null, undefined].includes(props.previewLink);
    const isNoticeValid = !['', null, undefined].includes(props.notice);

    const colorValue = {
        orange: '#CD5A07',
        red: '#E3031E'
    }

    const noticeColor = colorValue[props.noticeColor];

    const handleBtnClick = passedLink => {
        window.open(passedLink, '_blank');
    };

    return (
        <motion.div
            key={props.index}
            className={isNoticeValid ? 'portfolio-item glitching-portfolio' : 'portfolio-item'}
            style={{ animationDelay: props.i * 0.2 + 1 + 's', backdropFilter: !props.isMobile && 'blur(10px)' }}
        >
            <div className='portfolio-upper-container'>

                <div className='portfolio-img-container'
                    style={{
                        backgroundImage: `url(${props.thumbNailSrc})`,
                    }}
                >
                    <div className='cover' />
                </div>

                <div className='portfolio-name-container'>
                    <h3>{props.title}</h3>
                </div>
                <div className='portfolio-notice-container'>
                    {
                        isNoticeValid && <>
                            <h5 className='portfolio-notice'>Notice:</h5>
                            <p style={{
                                background: noticeColor,
                                borderRadius: '5px',
                                padding: '2px 5px',
                                color: 'white',
                                fontSize: '10px'
                            }} className='portfolio-notice'>{props.notice}</p>
                        </>
                    }
                </div>

                <div className='portfolio-details-container'>
                    <p>{props.details}</p>
                </div>
                <div className='portfolio-stack-container'>
                    {
                        props.techUsed.map(techIndex => {
                            return (
                                <PortfolioTechUsed src={techSkills[techIndex].imgSrc} name={techSkills[techIndex].techName} />
                            )
                        })
                    }
                </div>
            </div>


            <div className='portfolio-btns-container'>

                <button
                    className={!isSourceLinkValid && 'invalid-link'}
                    onClick={() => isSourceLinkValid && handleBtnClick(props.sourceCodeLink)}
                >
                    Source Code
                </button>

                <button
                    className={!isPreviewLinkValid && 'invalid-link'}
                    onClick={() => isPreviewLinkValid && handleBtnClick(props.previewLink)}
                >
                    Live Demo
                </button>

            </div>

        </motion.div >
    )
}

function PortfolioTechUsed({ src, name }) {

    return (
        <div
            className='tech-used'
        >
            <img src={src} />
            <p >{name}</p>
        </div>
    )
}