import { useRef } from 'react';
import useIsElementVisible from '../../hooks/useIsElementVisible';
import './Skills.css';

import { motion } from 'framer-motion';

export default function Skills() {

    const pageRef = useRef(null);
    const isPageVisible = useIsElementVisible(pageRef);

    const skills = [];

    for (let i = 0; i <= 20; i++) {


        skills.push(<Skill i={i} name={'skill'} />);
    }

    return (
        <div id="skills-section" className='main-section' ref={pageRef}>
            <h1 style={{ color: 'white' }} >SKILLS</h1>
            {
                isPageVisible && <div id='skills-container'>
                    {
                        skills
                    }
                </div>
            }
        </div>
    )
}

function Skill({ name, i }) {

    return (
        <motion.div
            className='skill'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', bounce: .2, delay: i * .1 }}
        />
    )
}