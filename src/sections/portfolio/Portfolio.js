import { useEffect, useRef } from 'react';
import './Portfolio.css';
import useIsElementVisible from '../../hooks/useIsElementVisible';

import { motion } from 'framer-motion';

export default function Portfolio() {

    const portRef = useRef(null);
    const isVisible = useIsElementVisible(portRef);

    const ports = [];

    for (let i = 0; i < 10; i++) {
        ports.push(
            <motion.li
                className='port'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', bounce: .5, delay: i * 0.1 }}
            >

            </motion.li>
        )
    }

    return (
        <div id="portfolio-section" className="main-section" ref={portRef}>
            <h1 style={{ color: 'white', position: 'absolute' }}>PORTOLIO</h1>


            {
                isVisible && <div id='projects-container' >{ports}</div>
            }
        </div>
    )
}