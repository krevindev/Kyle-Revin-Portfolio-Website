import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import './Skill.css';

function Skill({ skillName, imgSrc, overallStop, delay, level }) {

    const [isHovered, setIsHovered] = useState(true);

    useEffect(() => {
        const skillTimeOut = setTimeout(() => {
            if (isHovered) {
                setIsHovered(false);
            }
        }, overallStop * 1000 + 500);

        return () => skillTimeOut
    }, []);

    return (
        <motion.div
            className='skill'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transform: isHovered && 'scale(2.2)' }}
            transition={{ type: 'spring', bounce: .5, delay: delay, duration: 2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => isHovered && setIsHovered(false)}
        >
            <div className='skill-level'>
                <motion.div
                    className='skill-level-fill'
                    initial={{ width: 0 }}
                    animate={{ width: level ? `${level}%` : 0 }}
                    transition={{ duration: 2, delay: overallStop + .7 }}
                />
            </div>


            <motion.img
                src={imgSrc}
                animate={isHovered ? { y: -20, x: 0, scale: .9 } : {}}
                transition={{ type: 'spring', bounce: .5, duration: .5 }}
            />

            <motion.h5
                initial={{ y: -30 }}
                animate={isHovered ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
                transition={{ type: 'spring', bounce: .3 }}
            >{skillName}</motion.h5>
        </motion.div >
    )
}

export default Skill;