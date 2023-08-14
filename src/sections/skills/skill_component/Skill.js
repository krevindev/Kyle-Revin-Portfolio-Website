import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import './Skill.css';

function Skill({ skillName, imgSrc, overallStop, delay, level, description }) {

    const [isHovered, setIsHovered] = useState(false);
    const [hasSlammed, setHasSlammed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const slamTimeout = setTimeout(() => {
            setHasSlammed(true);
        }, overallStop * 500);

        return () => clearTimeout(slamTimeout);
    }, []);

    const prevClass = "skill-preview-container";

    return (
        <div
            className='skill'
            style={{
                animationDelay: delay * .5 + 's',
                border: !hasSlammed && 'none'
            }}
            onMouseEnter={() => hasSlammed && setIsHovered(true)}
            onMouseLeave={() => hasSlammed && setIsHovered(false)}
        >
            {
                isHovered && < div className="skill-projector-dot" />
            }
            <div className='skill-level'>
                <motion.div
                    className='skill-level-fill'
                    initial={{ width: 0 }}
                    animate={{ width: level + '%' }}
                    transition={{ delay: overallStop - .5, duration: .8 }}
                />
            </div>

            <img
                src={imgSrc}
                style={{
                    transform: !hasSlammed ? "translateY(-50%) scale(1.2)" : "translateY(0) scale(1)",
                }}
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