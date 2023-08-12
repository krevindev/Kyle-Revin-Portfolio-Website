import React from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from 'react';

import './ContactModal.css';

export default function ContactModal({ setIsContactVisible }) {
    return (
        <div id="contact-modal" onClick={e => { if (e.target.id == 'contact-modal') setIsContactVisible(false) }}>

            <div id='contact-content-container'>
                <h2>Get In Touch</h2>
                <div id='contact-content'>
                    <form>
                        <MDBInput type='text' label='Name' />
                        <MDBInput type='email' className='mdmd' label='Email address' />
                        <MDBInput type='password' label='Password' />
                        <MDBBtn type='submit' block>
                            Sign in
                        </MDBBtn>
                    </form>
                </div>
            </div>

        </div>
    )
}

const FloatingLabelInput = ({ label, value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`input-container ${isFocused ? 'focused' : ''}`}>
            <label className={`label ${isFocused || value ? 'float' : ''}`}>
                {label}
            </label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};