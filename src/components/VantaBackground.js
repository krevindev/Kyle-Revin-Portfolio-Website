import React, { useRef, useEffect } from 'react';
import DOTS from 'vanta/dist/vanta.dots.min'; // Import the "Dots" effect
import WAVES from 'vanta/dist/vanta.waves.min';

const VantaDotsBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize the Vanta.js "Dots" effect with custom properties
    if (vantaRef.current) {

      // const effect = WAVES({
      //   el: vantaRef.current,
      //   mouseControls: true,
      //   touchControls: true,
      //   gyroControls: false,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: 0xe0e0e,
      //   shininess: 10.00,
      //   waveHeight: 10.00,
      //   waveSpeed: 0.30,
      //   zoom: 0.65
      // })
      const effect = DOTS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x191919,
        color: 0xF10047,
        color2: 0xae6f45,
        showLines: false
      });

      // Clean up the effect when the component is unmounted
      return () => {
        if (effect) {
          effect.destroy();
        }
      };
    }
  }, []);

  return <div ref={vantaRef} className="vanta-container"/>
};

export default VantaDotsBackground;
