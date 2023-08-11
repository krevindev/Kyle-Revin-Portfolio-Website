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
            details: "A Facebook Chatbot designed to keep users informed about updates in their Google Classroom accounts. Receive notifications about new activities and assignments seamlessly. Additionally, users have the convenience of setting reminders for specific tasks.",
            techUsed: [2, 4, 5, 7],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app'
        },
        {
            title: 'Anony - Anonymous Messaging App',
            thumbNailSrc: anonySS,
            details: 'Introducing my anonymous messaging web app. Create chat channels, share them, and chat without revealing your identity. Join discussions on diverse topics while keeping your privacy intact.',
            techUsed: [0, 1, 2, 3, 4, 6],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app'
        },
        {
            title: 'Live Video Text Censorship',
            thumbNailSrc: censorshipSS,
            details: 'My Python program that uses Optical Character Recognition (OCR) to automatically censor inappropriate words in live video feeds.',
            techUsed: [8],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app'
        },
        {
            title: 'FB GPT',
            thumbNailSrc: fbGPTSS,
            details: "A Simple Q&A Facebook Chatbot that uses OpenAI's ChatGPT API to respond to questions.",
            techUsed: [2, 4],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app'
        },
        {
            title: 'E-Commerce Front-End',
            thumbNailSrc: eCommerceSS,
            details: "A school activity where we had to create a single-page front-end E-commerce website. Made using HTML, CSS and Vanilla Javascript. This front-end design may look very familiar since it was based and copied from the design of EPIC Games' Official website.",
            techUsed: [0, 1, 2],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app'
        }, {
            title: 'Unit Converter',
            thumbNailSrc: converterSS,
            details: "A Unit Converter page I've created to practice may Javascript DOM skills. This converter currently has 5 available units, the weight, time, area, volume and length.",
            techUsed: [0, 1, 2],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app'
        }, {
            title: 'Personal Vocabulary Builder',
            thumbNailSrc: vocabSS,
            details: `I've built a Python voice assistant using libraries like "pyttsx3" for text-to-speech, "speech_recognition" for voice-to-text, and "BeautifulSoup" for web scraping. It can check weather, time, play videos, open websites, terminate processes, and define words.`,
            techUsed: [8],
            sourceCodeLink: '',
            previewLink: 'https://anony-post.netlify.app'
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

function PortfolioItem({ i, title, thumbNailSrc, details, techUsed, sourceCodeLink, previewLink }) {

    const handleBtnClick = () => {
        window.open(previewLink, '_blank');
    }

    return (
        <motion.div
            className='portfolio-item'
            style={{ animationDelay: i * 0.2 + 1 + 's' }}
        >
            <div className='portfolio-upper-container'>

                <div className='portfolio-img-container'
                    style={{
                        backgroundImage: `url(${thumbNailSrc})`,
                    }}
                >
                    <div className='cover' />
                </div>
                <div className='portfolio-name-container'>
                    <h3>{title}</h3>
                </div>
                <div className='portfolio-details-container'>
                    <p>{details}</p>
                </div>
                <div className='portfolio-stack-container'>
                    <span>Built with:</span>
                    {
                        techUsed.map(techIndex => {
                            return (
                                <PortfolioTechUsed src={techSkills[techIndex].imgSrc} name={techSkills[techIndex].techName} />
                            )
                        })
                    }
                </div>
            </div>


            <div className='portfolio-btns-container'>
                <button onClick={() => handleBtnClick(sourceCodeLink)}>Source Code</button>
                <button onClick={() => handleBtnClick(previewLink)}>Preview</button>
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