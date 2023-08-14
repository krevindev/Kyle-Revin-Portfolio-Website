import useWindowSize from '../../hooks/useWindowSize';
import './Hero.css';

import facebookLogo from '../../res/images/svg/socials/facebook-logo.svg'
import githubLogo from '../../res/images/svg/socials/github-logo.svg'
import instagramLogo from '../../res/images/svg/socials/instagram-logo.svg'
import linkedInLogo from '../../res/images/svg/socials/linked-in-logo.svg'
import behanceLogo from '../../res/images/svg/socials/behance-logo.svg'
import { useEffect } from 'react';
import FeaturedWorks from '../../components/featured_works/FeaturedWorks';
import { Parallax } from '@react-spring/parallax';
import VantaBackground from '../../components/VantaBackground';
import BorderedPolygon from '../../components/BorderedPolygon';

export default function Hero({ setIsContactVisible }) {

    let isMobile = useWindowSize().width <= 650;

    const socialsData = [
        {
            imgSrc: githubLogo,
            link: 'https://github.com/krevindev'
        },
        {
            imgSrc: linkedInLogo,
            link: 'https://www.linkedin.com/in/kyle-revin-alimpuangon-a92b01222/'
        },
        // {
        //     imgSrc: behanceLogo,
        //     link: 'https://www.facebook.com'
        // },
        {
            imgSrc: facebookLogo,
            link: 'https://www.facebook.com/kylerevin.alimpuangon'
        },
        // {
        //     imgSrc: instagramLogo,
        //     link: 'https://www.facebook.com'
        // },
    ]
    const socials = socialsData.map(social => {
        return (
            <div className='social' onClick={() => window.open(social.link, '_blank')}>
                <img src={social.imgSrc} />
            </div >
        )
    })

    return (
        <div id="hero-section" className='main-section' >
            <div className='section-indicator'></div>

            {/* Social Logos Container */}
            {
                !isMobile && <div id='socials-container'>
                    {
                        socials
                    }
                </div>
            }


            {/* Main Content Container */}
            <div id='hero-main-content-container'>
                <div id='hero-name-container'>
                    <h1>Kyle Revin</h1>
                    <h1>Alimpuangon</h1>
                </div>
                <div id='hero-p-container'>
                    <p>Passionate and innovative developer with a flair for creating captivating digital experiences.</p>
                </div>
                <div id='hero-cta-container'>
                    <button onClick={() => setIsContactVisible(true)} id='hero-cta-btn' className='my-default-btn'>
                        Hire Me
                    </button>
                </div>
                {
                    isMobile && <div id='hero-center-socials-container'>
                        {
                            socials
                        }
                    </div>
                }
            </div>



            {/* Featured Projects Container */}
            <div id='hero-featured-container'>
                <FeaturedWorks />
            </div>
        </div >
    )
}