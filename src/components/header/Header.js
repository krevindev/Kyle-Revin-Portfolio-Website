import './Header.css'

import useWindowSize from '../../hooks/useWindowSize';

import krLogo from '../../res/images/svg/kr-logo.svg';
import navBtnIcon from '../../res/images/svg/nav-btn.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header({ isFlashScreen }) {

    const [isModalNavVisible, setIsModalNavVisible] = useState(false);
    const isMobile = useWindowSize().width <= 600;

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const sections = Array.from(document.querySelectorAll('.main-section')).map(element => element.id);
    const [activeSection, setActiveSection] = useState('hero-section');

    const [isHero, setIsHero] = useState(true);

    useEffect(() => {
        if (activeSection != 'hero-section') {
            setIsHero(true);
        } else {
            setIsHero(false);
        }
    }, [activeSection]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '100px',
            threshold: 0.5
        }

        const handleIntersection = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const parentElementId = entry.target.parentElement.id;
                    setActiveSection(parentElementId);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId).querySelector('.section-indicator');

            if (element) {
                observer.observe(element);
            };
        });

        return () => sections.map(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) { observer.unobserve(element) };
        })

    });

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            setIsHeaderVisible(true);
        }
        else {
            if (!isModalNavVisible & !isMobile) setIsHeaderVisible(false);
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // Navlinks
    const navlinksData = [
        { name: 'Home', href: '#hero-section' },
        { name: 'Skills', href: '#skills-section' },
        { name: 'Portfolio', href: '#portfolio-section' },
        { name: 'About Me', href: '#about-section' },
    ]
    const navlinks = navlinksData.map(((nLink, index) => {
        const handleClick = () => {
            isMobile && setIsModalNavVisible(false);
        }
        const m = nLink.href.substring(1, nLink.href.length);

        return (
            <a
                href={nLink.href}
                onClick={handleClick}
                className={activeSection == m && 'active'}
            >
                <li
                    style={
                        {
                            animation: !isMobile ? 'headerLiAnim .5s forwards' : 'portfolioAnim .5s forwards',
                            animationDelay: index * 0.1 + (isMobile ? 0 : 3) + 's',
                        }
                    }
                >{nLink.name}</li>
            </a>
        )
    }));

    return (
        <div id="header" className={isHeaderVisible ? "" : 'scroll-hide'}
            style={isHero ? { backdropFilter: !isMobile && 'blur(10px)', background: !isMobile ? 'rgba(17,17,17,0.3)' : 'rgba(17,17,17,0.9)' } : {}}
        >
            {
                !isMobile ? <>
                    <div id='header-logo-container'>
                        <img src={krLogo} onClick={() => window.location.assign('/')} />
                    </div>
                    <div id='header-nav-container'>
                        {
                            navlinks
                        }
                    </div>
                    <div id='header-contact-container'>
                        <button id='header-contact-btn' className='my-default-btn'>Contact</button>
                    </div></> :
                    <div id='mobile-header-container'>
                        <div id='header-logo-container'>
                            <img src={krLogo} onClick={() => window.location.assign('/')} />
                        </div>
                        <div id='header-nav-btn-container'>
                            <img src={navBtnIcon} onClick={() => setIsModalNavVisible(!isModalNavVisible)} />
                        </div>
                    </div>
            }

            {
                isMobile && isModalNavVisible && <div id='mobile-modal-nav-container' onClick={e => { if (e.target.id == 'mobile-modal-nav-container') setIsModalNavVisible(false) }}>
                    <div id='mobile-modal-nav-content'>
                        {
                            navlinks
                        }
                    </div>
                </div>
            }
        </div>
    )
}