import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(-20);
  const [cursorY, setCursorY] = useState(-20);
  const [hoveredElement, setHoveredElement] = useState(<span></span>);
  const [isExpanded, setIsExpanded] = useState(false);

  // expand the cursor if these conditions are met
  useEffect(() => {
    if (['IMG', 'A', 'BUTTON'].includes(hoveredElement.tagName) && !Array.from(hoveredElement.classList).includes('invalid-link')) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [hoveredElement]);

  // 
  const handleMouseMove = (event) => {
    setCursorX(event.clientX);
    setCursorY(event.clientY);

    const target = document.elementFromPoint(event.clientX, event.clientY);
    setHoveredElement(target || <span></span>);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={isExpanded ? "custom-cursor expanded" : "custom-cursor"}
      style={{
        left: cursorX + 'px',
        top: cursorY + 'px',
      }}
    />
  );
};

export default CustomCursor;
