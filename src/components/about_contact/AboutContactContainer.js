import './AboutContactContainer.css';

export default function AboutContactContainer({ setIsContactVisible }) {
    return (
        <div id='about-contact-container'>
            <span>BRING YOUR VISION TO LIFE</span>
            <h5>Let's Collaborate!</h5>
            <button className='my-default-btn' onClick={() => setIsContactVisible(true)}>Connect Now</button>
        </div>
    )
}