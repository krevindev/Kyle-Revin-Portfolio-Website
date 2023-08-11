import './SplashScreen.css';
import krLogo from '../../res/images/svg/kr-logo.svg';
import VantaDotsBackground from '../VantaBackground';
import loadingCircle from '../../res/images/svg/loading-circle.svg';
import { useEffect, useRef, useState } from 'react';

export default function SplashScreen() {

    const loadingFillRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fillPercentage, setFillPercentage] = useState(0);

    useEffect(() => {
        const fillInterval = setInterval(() => {
            const randomDecimal = Math.random();
            const randomNumberInRange = Math.floor(randomDecimal * 4);

            setFillPercentage(prev => prev + randomNumberInRange);
        }, 20);

        return () => clearInterval(fillInterval);
    }, []);

    useEffect(() => {
        if (fillPercentage >= 100) {
            setIsLoading(false);
        }
    }, [fillPercentage]);

    return (
        <div id="splash-screen">
            {
                !isLoading ? <>
                    {/* <VantaDotsBackground /> */}
                    <img id='splash-kr-logo' src={krLogo} />
                    <img id='splash-loading-circle' src={loadingCircle} />
                </>
                    :
                    <div id='splash-loading-container'>
                        <div id='splash-loading-content'>
                            <div ref={loadingFillRef} id='splash-loading-fill' style={{ width: fillPercentage + '%' }} />
                        </div>
                        <h5>Loading ...</h5>
                    </div>
            }

        </div>
    )
}