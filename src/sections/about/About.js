import { useRef } from 'react';
import useIsElementVisible from '../../hooks/useIsElementVisible';
import myPic from '../../res/images/screenshots/my-picture.jpg';
import './About.css';

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
                                <span>Education:</span> <p>
                                    Bachelor of Science in Computer Science at Iloilo Science and Technology University
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='about-me-right'>
                        <div id='about-me-title-header'>
                            <h3>About Me</h3>
                        </div>
                        <div id='about-me-details-container'>
                            <p>Hello! I'm</p>
                            <h1>Kyle Revin Alimpuangon</h1>
                            <p>
                                I'm an enthusiastic Full-Stack Web Developer with a creative mindset and a strong passion for crafting digital experiences that leave a lasting impression. As a computer science graduate, I've honed my skills and cultivated a unique approach to web development that seamlessly blends the technical with the artistic.
                            </p>


                        </div>
                    </div>
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