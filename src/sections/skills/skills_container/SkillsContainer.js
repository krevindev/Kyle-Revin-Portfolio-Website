import { useRef, useState, useEffect } from "react";
import useIsElementVisible from "../../../hooks/useIsElementVisible";
import { motion } from "framer-motion";

export default function SkillContainer({ headingText, children, isText }) {

    const skillContainerRef = useRef(null);
    const skillContainerVisible = useIsElementVisible(skillContainerRef);

    const [hasContainerLoaded, sethasContainerLoaded] = useState(false);


    // TEST: If the page is loaded, disable animating again
    useEffect(() => {
        if (skillContainerVisible && !hasContainerLoaded) {
            sethasContainerLoaded(true);
        }
    }, [skillContainerVisible, hasContainerLoaded]);

    return (
        <div className='skills-container-container' >

            <>
                <div className={isText ? 'skill-categ-container text' : 'skill-categ-container'}>
                    <motion.h4
                        initial={{ x: '-500%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: .5 }}
                    >{headingText}
                    </motion.h4>
                </div>

                <div className='skills-container'>
                    {
                        (skillContainerVisible || hasContainerLoaded) &&
                        children
                    }

                </div>
            </>

            <div className='indicator' ref={skillContainerRef} />
        </div>
    )
}