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
import axios from 'axios';

import './ContactModal.css';

export default function ContactModal({ setIsContactVisible }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {};

        const formElements = e.target.elements;

        Array.from(formElements).forEach(elem => {
            if (['INPUT', 'TEXTAREA'].includes(elem.tagName)) {
                formData[elem.name] = elem.value;
            }
        })

        try {
            // const response = axios.post('https://rev-mailer.glitch.me/send-mail', formData
            axios.post('localhost:4000/eh', formData)
                .then(res => {
                    console.log('Email Sent Successfully!', res.data);
                })
                .catch(err => {
                    console.log(err);
                })
                ;
        } catch (error) {
            console.log(error);
        }

    };


    return (
        <div id="contact-modal" onClick={e => { if (e.target.id == 'contact-modal') setIsContactVisible(false) }}>
            <div id='contact-content-container'>
                <div className='half-border' />
                <div className='half-border' />
                <h2>Get In Touch</h2>
                <div id='contact-content'>
                    <form onSubmit={e => handleSubmit(e)}>
                        <MDBInput name='name' type='text' label='Name' required />
                        <MDBInput name='email' type='email' className='mdmd' label='Email address' />
                        <MDBInput name='company' type='text' label='Company/Organization' />
                        <MDBInput name='details' type='text' label='Additional Details' />
                        <MDBTextArea name='message' type='text' label='Message' className='input-message' />
                        <MDBBtn type='submit' block>
                            Sign in
                        </MDBBtn>
                    </form>
                </div>
            </div>

            <div id="warning-message">This Feature is still under development</div>
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