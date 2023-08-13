import './Header.css'

import useWindowSize from '../../hooks/useWindowSize';
import ContactModal from '../../sections/contact/ContactModal';

import krLogo from '../../res/images/svg/kr-logo.svg';
import navBtnIcon from '../../res/images/svg/nav-btn.svg';
import { useEffect, useState } from 'react';

export default function Header() {

    const [isModalNavVisible, setIsModalNavVisible] = useState(false);
    const isMobile = useWindowSize().width <= 600;

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const sections = Array.from(document.querySelectorAll('.main-section')).map(element => element.id);
    const [activeSection, setActiveSection] = useState('hero-section');

    const [isContactVisible, setIsContactVisible] = useState(false);

    const [isHero, setIsHero] = useState(true);


    useEffect(() => {
        console.log(activeSection)
    }, [activeSection]);

    // Checks if a section is visible in the viewport and set the section as the active section
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

    // Hide the header on scroll down and reappear on scroll up
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            setIsHeaderVisible(true);
        }
        else {
            if (!isModalNavVisible && !isModalNavVisible) {
                setIsHeaderVisible(false);
            };
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // Navlinks Data
    const navlinksData = [
        { name: 'Home', targetID: 'hero-section' },
        { name: 'Skills', targetID: 'skills-section' },
        { name: 'Portfolio', targetID: 'portfolio-section' },
        { name: 'About Me', targetID: 'about-section' },
    ];
    const navlinks = navlinksData.map((nLink, index) => (
        <NavLink
            index={index}
            name={nLink.name}
            isMobile={isMobile}
            targetID={nLink.targetID}
            setIsModalNavVisible={setIsModalNavVisible}
            activeSection={activeSection}
        />
    ));

    return (
        <header id="header" className={isHeaderVisible ? "" : 'scroll-hide'}
            style={activeSection != 'hero-section' ? {
                backdropFilter: !isMobile && 'blur(10px)',
                background: !isMobile ? 'rgba(17,17,17,0.3)' : 'rgba(17,17,17,0.9)',
                borderBottom: '1px solid rgba(70, 70, 70, .5)'
            } : {}}
        >
            {
                !isMobile ? <>
                    <div id='header-logo-container'>
                        <img src={krLogo} onClick={() => window.location.assign('/')} />
                    </div>
                    <nav id='header-nav-container'>
                        {
                            navlinks
                        }
                    </nav>
                    <div id='header-contact-container'>
                        <button id='header-contact-btn' className='my-default-btn' onClick={() => setIsContactVisible(true)}>Contact</button>
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
                    <nav id='mobile-modal-nav-content'>
                        {
                            navlinks
                        }
                        <button>Contact</button>
                    </nav>
                </div>
            }

            {
                isContactVisible && <ContactModal setIsContactVisible={setIsContactVisible} />
            }
        </header>
    )
}


// Helper function to scroll to sections
function scrollToSection(sectionId, isMobile, setIsModalNavVisible) {
    const section = document.getElementById(sectionId);

    if (sectionId === 'hero-section') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    if (isMobile) setIsModalNavVisible(false);
}


function NavLink({ index, name, isMobile, targetID, setIsModalNavVisible, activeSection }) {
    return (
        <a
            onClick={() => scrollToSection(targetID, isMobile, setIsModalNavVisible)}
            className={activeSection === targetID ? 'active' : ''}
        >
            <li
                style={
                    {
                        animation: !isMobile ? 'headerLiAnim .5s forwards' : 'portfolioAnim .5s forwards',
                        animationDelay: index * 0.1 + 's',
                    }
                }
            >
                {name}
            </li>
        </a>
    )
}