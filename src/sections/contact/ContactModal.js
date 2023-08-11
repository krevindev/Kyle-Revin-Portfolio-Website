import './ContactModal.css';

export default function ContactModal({ setIsContactVisible }) {
    return (
        <div id="contact-modal" onClick={() => setIsContactVisible(false)}>

            <div id='contact-content-container'>
                <h2>Get In Touch</h2>
                <div id='contact-content'>
                    <div id='contact-form'>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}