import './SplashScreen.css';
import krLogo from '../../res/images/svg/kr-logo.svg';
import loadingCircle from '../../res/images/svg/loading-circle.svg';
import { useEffect, useState } from 'react';
import Header from '../header/Header';
import App from '../../App';

import useImagePreloader from '../../hooks/useImagePreloader';


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
import phpLogo from '../../../src/res/images/svg/tech_stack/php-logo.svg';
import sqlLogo from '../../../src/res/images/svg/tech_stack/sqlLogo.svg';
import npmLogo from '../../../src/res/images/svg/tech_stack/npm-logo.svg';

import photoshopLogo from '../../../src/res/images/svg/tools/photoshop-logo.svg';
import figmaLogo from '../../../src/res/images/svg/tools/figma-logo.svg';
import postmanLogo from '../../../src/res/images/svg/tools/postman-logo.svg';
import githubLogo from '../../../src/res/images/svg/tools/github-logo.svg';
import gitLogo from '../../../src/res/images/svg/tools/git-logo.svg';
import vercelLogo from '../../../src/res/images/svg/tools/vercel-logo.svg';
import glitchLogo from '../../../src/res/images/svg/tools/glitch-logo.svg';
import canvaLogo from '../../../src/res/images/svg/tools/canva-logo.svg';
import netlifyLogo from '../../../src/res/images/svg/tools/netlify-logo.svg';

import myPic from '../../res/images/screenshots/my-picture.jpg';

export default function SplashScreen() {

    const imagesToPreload = [
        krLogo,
        loadingCircle,
        reactLogo,
        nodeJsLogo,
        html5Logo,
        firebaseLogo,
        expressJsLogo,
        javascriptLogo,
        css3Logo,
        pythonLogo,
        jQueryLogo,
        mongoDB,
        nextJs,
        phpLogo,
        sqlLogo,
        npmLogo,
        photoshopLogo,
        figmaLogo,
        postmanLogo,
        githubLogo,
        gitLogo,
        vercelLogo,
        glitchLogo,
        canvaLogo,
        netlifyLogo,
        myPic
    ];

    const [isLoading, setIsLoading] = useState(false);

    const isLoaded = useImagePreloader(imagesToPreload);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(true);
        }, 5000);

        return () => clearTimeout(loadingTimeout);
    }, []);

    if (isLoading && isLoaded) {
        return (
            <>
                <Header />
                <App />
            </>
        )
    } else {
        return (
            <div id="splash-screen">

                {/* <VantaDotsBackground /> */}
                <img id='splash-kr-logo' src={krLogo} />

                <img id='splash-loading-circle' src={loadingCircle} />

            </div>
        )
    }
}