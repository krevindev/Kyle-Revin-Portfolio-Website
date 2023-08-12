import React from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBTextArea
} from 'mdb-react-ui-kit';
import { useState } from 'react';

import './ContactModal.css';
import BorderedPolygon from '../../components/BorderedPolygon';

export default function ContactModal({ setIsContactVisible }) {
    return (
        <div id="contact-modal" onClick={e => { if (e.target.id == 'contact-modal') setIsContactVisible(false) }}>
            <div id='contact-content-container'>
                <div className='half-border' />
                <div className='half-border' />
                <h2>Get In Touch</h2>
                <div id='contact-content'>
                    <form onSubmit={e => e.preventDefault()}>
                        <MDBInput type='text' label='Name' required />
                        <MDBInput type='email' className='mdmd' label='Email address' />
                        <MDBInput type='text' label='Company/Organization' />
                        <MDBInput type='text' label='Additional Details' />
                        <MDBTextArea type='text' label='Message' className='input-message' />
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