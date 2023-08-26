import './AboutContactContainer.css';

export default function AboutContactContainer({ setIsContactVisible }) {
    return (
        <div id='about-contact-container'>
            <span>LET'S BRING YOUR VISION TO LIFE</span>
            <h5>Turn your concepts into a distinctive and impactful brand.</h5>
            <button className='my-default-btn' onClick={() => setIsContactVisible(true)}>Let's Talk</button>
        </div>
    )
}