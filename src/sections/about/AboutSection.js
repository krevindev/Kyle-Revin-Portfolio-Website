import { useEffect, useRef } from 'react';
import useIsElementVisible from '../../hooks/useIsElementVisible';
// import myPic from '../../res/images/screenshots/my-picture.jpg';
// import pdfLink from '../../res/files/Kyle-Revin-Alimpuangon-Resume.pdf';

import VanillaTilt from 'vanilla-tilt';

import './AboutSection.css';
import { motion } from 'framer-motion';

export default function About() {

    const aboutRef = useRef(null);
    const isVisible = useIsElementVisible(aboutRef);

    const tiltRef = useRef(null);

    const rightContainerRef = useRef(null);
    const isRightContainerVisible = useIsElementVisible(rightContainerRef);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 20,
                speed: 20,
                glare: true,
                reverse: true,
                'max-glare': 0.1,
                perspective: 1000
            });
        }
    });

    return (
        <div id="about-section" className="main-section" ref={aboutRef}>
            <div className='mid' ref={rightContainerRef} />
            <div className='section-indicator'></div>

            {
                isVisible && <div id='about-me-container'>
                    <div id='about-me-left'>

                        <div
                            data-tilt
                            data-tilt-full-page-listening
                            data-tilt-axis="x"
                            ref={tiltRef}
                            id='about-me-img-container'
                            style={{ backgroundImage: 'url(' + `/res/images/screenshots/my-picture2.png` + ')' }}
                        >
                            <div className='cover' />
                            <div className='half-border' />
                            <div className='half-border' />
                            <div className='half-border' />
                            <div className='half-border' />
                        </div>

                        <div id='about-me-info-container' >
                            {/* Will clean this soon */}
                            <div className='about-info' style={{ animationDelay: '1s' }}>
                                <span className='about-info-categ'>Education:</span>
                                <div className='about-info-container'>
                                    <li><span className='about-info-key'>Degree: </span><p>Bachelor of Science in Computer Science</p></li>
                                    <li><span className='about-info-key'>University: </span><p>Iloilo Science and Technology University</p></li>
                                    <li><span className='about-info-key'>YEAR: </span><p>2019-2023</p></li>
                                </div>
                            </div>

                            <div className='about-info' style={{ animationDelay: '1.5s' }}>
                                <span className='about-info-categ'>Experience:</span>
                                <div className='about-info-container'>
                                    <li><span className='about-info-key'>Position: </span><p>Front-End Web Developer Intern</p></li>
                                    <li><span className='about-info-key'>Company: </span><p>Prometheus - Full-Service PR and Marketing Agency</p></li>
                                    <li><span className='about-info-key'>YEAR: </span><p>2023</p></li>
                                </div>
                            </div>
                            <div id='download-cv-container' onClick={() => window.open('/res/files/Kyle-Revin-Alimpuangon-Resume.pdf', '_blank')}>
                                <button id='download-cv-btn'>Download Resume</button>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        id='about-me-right'
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', bounce: .3, duration: 1, delay: .8 }}
                    >

                        <motion.div
                            id='about-me-title-header'
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', bounce: .3, duration: 1, delay: 1 }}
                        >
                            <h3>About Me</h3>
                        </motion.div>
                        <motion.div

                            id='about-me-details-container'
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', bounce: .3, duration: 1, delay: 1.2 }}
                        >
                            <p>Hello! I'm</p>
                            <h1>Kyle Revin</h1>
                            <h1> Alimpuangon</h1>
                            <p>
                                I'm a <span className='underline'>Full-Stack Web Developer</span> with a creative flair. I excel in both front-end and back-end development, and I also bring expertise in UI/UX design and digital art to add a distinctive touch to my projects.
                            </p>
                            <p>
                                My skills involve working with APIs to create dynamic and interactive experiences using various JavaScript libraries. Adapting to new technologies is second nature to me, and I'm enthusiastic about making meaningful contributions to your projects.
                                <br></br>
                                <br></br>
                                <div className='underline'>
                                    Let's collaborate and bring your ideas to life while exploring new possibilities together.
                                </div>
                            </p>
                        </motion.div>

                    </motion.div>


                </div>
            }


        </div>
    )
}