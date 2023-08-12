import { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import useIsElementVisible from '../../hooks/useIsElementVisible';

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

import anonySS from '../../../src/res/images/screenshots/anony-ss.PNG';
import censorshipSS from '../../../src/res/images/screenshots/censorship-ss.PNG';
import eCommerceSS from '../../../src/res/images/screenshots/e-commerce-ss.PNG';
import converterSS from '../../../src/res/images/screenshots/converter-ss.PNG';
import noteyFiSS from '../../../src/res/images/screenshots/notey-fi-ss.PNG';
import fbGPTSS from '../../../src/res/images/screenshots/fb-gpt-ss.PNG';
import vocabSS from '../../../src/res/images/screenshots/vocab-ss.PNG';


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
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app',
            status: 'Private',
            statusColor: 'red',
        },
        {
            title: 'Anony - Anonymous Messaging App',
            thumbNailSrc: anonySS,
            details: 'An anonymous messaging web app for creating chat channels, sharing, and discussing without revealing identities',
            techUsed: [0, 1, 2, 3, 4, 6],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app',
            status: 'Live'
        },
        {
            title: 'Live Video Text Censorship',
            thumbNailSrc: censorshipSS,
            details: 'My Python program utilizes Optical Character Recognition (OCR) to automatically censor inappropriate words in real-time video feeds.',
            techUsed: [8],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app',
            status: 'Downloadable'
        },
        {
            title: 'FB GPT',
            thumbNailSrc: fbGPTSS,
            details: "A Simple Q&A Facebook Chatbot that uses OpenAI's ChatGPT API to respond to questions.",
            techUsed: [2, 4, 7],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app',
            status: 'Request Limit Reached'
        },
        {
            title: 'E-Commerce Front-End',
            thumbNailSrc: eCommerceSS,
            details: "I developed a one-page E-commerce website for a school project using HTML, CSS, and Vanilla Javascript. The design was inspired by EPIC Games' website.",
            techUsed: [0, 1, 2],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app',
            status: 'Non-Responsive'
        }, {
            title: 'Unit Converter',
            thumbNailSrc: converterSS,
            details: "I built a Unit Converter web page to enhance my JavaScript DOM skills. It offers conversions for 5 units: weight, time, area, volume, and length.",
            techUsed: [0, 1, 2],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app',
            status: 'Live'
        }, {
            title: 'Personal Vocabulary Builder',
            thumbNailSrc: vocabSS,
            details: `Using Python and the "Pickle" library as a micro-database, I developed a personal program to remember newly encountered words.`,
            techUsed: [8],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app',
            status: 'Downloadable'
        }, {
            title: 'Personal Voice Assistant',
            thumbNailSrc: vocabSS,
            details: `Created a Python voice assistant using "pyttsx3" for text-to-speech, "speech_recognition" for voice-to-text, and "BeautifulSoup" for web scraping. It can check weather, time, play videos, open websites, terminate processes, and define words.`,
            techUsed: [8],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app',
            status: 'Downloadable'
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
                status={port.status}
                statusColor={port.statusColor}
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

    const handleBtnClick = () => {
        window.open(props.previewLink, '_blank');
    }

    return (
        <motion.div
            className='portfolio-item'
            style={{ animationDelay: props.i * 0.2 + 1 + 's' }}
        >
            <div className='portfolio-upper-container'>
                <div className='portfolio-status-container'>
                    <h5>Status:</h5><p className='portfolio-status'>{props.status}</p>
                </div>
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

                <div className='portfolio-details-container'>
                    <p>{props.details}</p>
                </div>
                <div className='portfolio-stack-container'>
                    <span>Built with:</span>
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
                <button onClick={() => handleBtnClick(props.sourceCodeLink)}>Source Code</button>
                <button onClick={() => handleBtnClick(props.previewLink)}>Preview</button>
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