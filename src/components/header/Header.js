import './Header.css'

import useWindowSize from '../../hooks/useWindowSize';

import krLogo from '../../res/images/svg/kr-logo.svg';
import navBtnIcon from '../../res/images/svg/nav-btn.svg';
import { useEffect, useState } from 'react';

export default function Header() {

    const [isModalNavVisible, setIsModalNavVisible] = useState(false);
    const isMobile = useWindowSize().width <= 500;

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);


    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            setIsHeaderVisible(true);
        } else {
            setIsHeaderVisible(false);
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div id="header" className={isHeaderVisible ? "" : 'scroll-hide'}>
            {
                !isMobile ? <>
                    <div id='header-logo-container'>
                        <img src={krLogo} onClick={() => window.location.assign('/')} />
                    </div>
                    <div id='header-nav-container'>
                        <a href='#skills-section'><li>Skills</li></a>
                        <a href='#portfolio-section'><li>Portfolio</li></a>
                        <a href='#about-section'><li>About Me</li></a>
                    </div>
                    <div id='header-contact-container'>
                        <button id='header-contact-btn' className='my-default-btn'>Contact</button>
                    </div></> :
                    <div id='mobile-header-container'>
                        <div id='header-logo-container'>
                            <img src={krLogo} />
                        </div>
                        <div id='header-nav-btn-container'>
                            <img src={navBtnIcon} onClick={() => setIsModalNavVisible(!isModalNavVisible)} />
                        </div>
                    </div>
            }

            {
                isMobile && isModalNavVisible && <div id='mobile-modal-nav-container' onClick={e => { if (e.target.id == 'mobile-modal-nav-container') setIsModalNavVisible(false) }}>
                    <div id='mobile-modal-nav-content'>

                    </div>
                </div>
            }
        </div>
    )
}