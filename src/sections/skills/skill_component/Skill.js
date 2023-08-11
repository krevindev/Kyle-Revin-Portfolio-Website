import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import './Skill.css';

function Skill({ skillName, imgSrc, overallStop, delay, level, description }) {

    const [isHovered, setIsHovered] = useState(false);
    const [hasSlammed, setHasSlammed] = useState(false);

    useEffect(() => {
        const slamTimeout = setTimeout(() => {
            setHasSlammed(true);
        }, overallStop * 1000);

        return () => clearTimeout(slamTimeout);
    }, []);

    const prevClass = "skill-preview-container";

    return (
        <div
            className='skill'
            style={{
                animationDelay: delay + 's'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {
                isHovered && < div className="skill-projector-dot" />
            }
            <div className='skill-level'>
                <div
                    className='skill-level-fill'
                    style={{
                        width: level + '%'
                    }}
                />
            </div>

            <motion.img
                src={imgSrc}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: overallStop, type: 'spring', bounce: .4, duration: .4 }}
            />

            {
                !hasSlammed && <h5
                >{skillName}</h5>
            }

            <div className={isHovered ? prevClass + " in" : prevClass + " out"}>
                <div className="skill-preview-header">
                    <h3>{skillName}</h3>
                    <img src={imgSrc} />
                </div>
                <div className="skill-preview-body">
                    <p>
                        {description || 'NO INFO'}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Skill;