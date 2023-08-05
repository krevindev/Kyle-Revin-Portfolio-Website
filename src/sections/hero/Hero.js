import useWindowSize from '../../hooks/useWindowSize';
import './Hero.css';

export default function Hero() {

    const isMobile = useWindowSize().width <= 500;

    return (
        <div id="hero-section" className='main-section'>
            {!isMobile && <div id='socials-container'>

            </div>}
            <div id='hero-main-content-container'>
                <div id='hero-name-container'>
                    <h1>Kyle Revin</h1>
                    <h1>Alimpuangon</h1>
                </div>
                <div id='hero-p-container'>
                    <p>Passionate and innovative developer with a flair for creating captivating digital experiences.</p>
                </div>
                <div id='hero-cta-container'>
                    <button id='hero-cta-btn' className='my-default-btn'>Have a Project?</button>
                </div>
            </div>
            <div id='hero-featured-container'>
                <div id='hero-featured-content' />
            </div>
        </div>
    )
}