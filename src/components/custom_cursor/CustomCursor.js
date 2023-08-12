import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(-20);
  const [cursorY, setCursorY] = useState(-20);
  const [hoveredElement, setHoveredElement] = useState(<span></span>);
  const [isExpanded, setIsExpanded] = useState(false);

  // useEffect(() => {
  //   if (['LI', 'IMG', 'A'].includes(hoveredElement.tagName)) {
  //     setIsExpanded(true);
  //   } else {
  //     setIsExpanded(false);
  //   }
  // }, [hoveredElement]);

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
