import React, { useRef, useEffect } from "react";
import DOTS from "vanta/dist/vanta.dots.min"; // Import the "Dots" effect
import WAVES from "vanta/dist/vanta.waves.min";
import NET from "vanta/dist/vanta.net.min";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

const VantaDotsBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize the Vanta.js "Dots" effect with custom properties
    if (vantaRef.current) {
      // const effect = NET({
      //   el: vantaRef.current,
      //   mouseControls: true,
      //   touchControls: true,
      //   gyroControls: false,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: 0x7e2828,
      //   backgroundColor: 0x222222,
      //   points: 8.00,
      //   maxDistance: 22.00,
      //   spacing: 20.00
      // })

      /* Last official */
      const effect = WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe0e0e,
        shininess: 10.00,
        waveHeight: 10.00,
        waveSpeed: .5,
        zoom: 1.5
      })

      // NEW
      // const effect = WAVES({
      //   el: vantaRef.current,
      //   mouseControls: true,
      //   touchControls: true,
      //   gyroControls: false,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: 0x141414,
      //   shininess: 0.00,
      //   waveHeight: 40.00,
      //   waveSpeed: 0.35,
      //   zoom: 1.01
      // });

      // NEW Topology Test
      // const effect = TOPOLOGY({
      // })

      // const effect = DOTS({
      //   el: vantaRef.current,
      //   mouseControls: true,
      //   touchControls: true,
      //   gyroControls: false,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: 0xF10047,
      //   backgroundColor: 0x191919,
      //   size: 2.10,
      //   spacing: 11.00,
      //   showLines: false
      // });

      // Clean up the effect when the component is unmounted
      return () => {
        if (effect) {
          effect.destroy();
        }
      };
    }
  }, []);

  return <div ref={vantaRef} className="vanta-container" />;
};

export default VantaDotsBackground;
