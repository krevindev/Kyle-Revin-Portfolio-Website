import React, { useState, useEffect, useRef } from 'react';

const useIsElementVisible = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const observer = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // Adjust the threshold as needed (0.1 means 10% visible)
        };

        if (ref.current) {
            observer.current = new IntersectionObserver(([entry]) => {
                setIsVisible(entry.isIntersecting);
            }, options);

            observer.current.observe(ref.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [ref]);

    return isVisible;
};

export default useIsElementVisible;
