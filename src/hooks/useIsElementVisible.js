import { useState, useEffect, useRef } from 'react';

const useIsElementVisible = (ref, options = { threshold: 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
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
  }, [ref, options]);

  return isVisible;
};

export default useIsElementVisible;
