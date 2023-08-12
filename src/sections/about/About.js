import { useRef } from 'react';
import useIsElementVisible from '../../hooks/useIsElementVisible';
import myPic from '../../res/images/screenshots/my-picture.jpg';
import './About.css';
import { motion } from 'framer-motion';

export default function About() {

    const aboutRef = useRef(null);
    const isVisible = useIsElementVisible(aboutRef);

    return (
        <div id="about-section" className="main-section" ref={aboutRef}>
            <div className='section-indicator'></div>

            {
                isVisible && <div id='about-me-container'>
                    <div id='about-me-left'>
                        <div
                            id='about-me-img-container'
                            style={{ backgroundImage: 'url(' + myPic + ')' }}
                        >
                            <div className='cover' />
                            <div className='half-border' />
                            <div className='half-border' />
                            <div className='half-border' />
                            <div className='half-border' />
                        </div>
                        <div id='about-me-info-container'>
                            <div className='about-info'>
                                <span className='about-info-categ'>Education:</span>
                                <div className='about-info-container'>
                                    <li><span className='about-info-key'>Degree: </span><p>Bachelor of Science in Computer Science</p></li>
                                    <li><span className='about-info-key'>University: </span><p>Iloilo Science and Technology University</p></li>
                                    <li><span className='about-info-key'>YEAR: </span><p>2019-2023</p></li>
                                </div>
                            </div>
                            <div className='about-info'>
                                <span className='about-info-categ'>Experience:</span>
                                <div className='about-info-container'>
                                    <li><span className='about-info-key'>Intern: </span><p>Front-End Developer Intern at Prometheus - Marketing Agency</p></li>
                                    <li><span className='about-info-key'>YEAR: </span><p>2023</p></li>
                                </div>
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
                                I'm an enthusiastic <span className='underline'>Full-Stack Web Developer</span> with a creative mindset and a strong passion for crafting digital experiences that leave a lasting impression. As a computer science graduate, I've honed my skills and cultivated a unique approach to web development that seamlessly blends the technical with the artistic.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            }

            <div id='about-contact-container'>
                <span>Have a Project in Mind?</span>
                <h5>You're on your way to building a standout brand!</h5>
                <button className='my-default-btn'>Let's Talk</button>
            </div>
        </div>
    )
}