// atoms/BackgroundMesh.jsx

import React, { useEffect, useRef } from 'react';

const BackgroundMesh = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameId;

    // Function to set the color of a pixel
    const col = (x, y, r, g, b) => {
      context.fillStyle = `rgb(${r},${g},${b})`;
      context.fillRect(x, y, 1, 1);
    };

    // Function to calculate the Red component
    // Base Value: Adjusts the starting brightness (0 - 255). Higher = Brighter.
    // Range Value: Adjusts the range of color variation. Smaller = Less Intense.
    const R = (x, y, t) => Math.floor(192 + 63 * Math.cos((x * x - y * y) / 300 + t));

    // Function to calculate the Green component
    const G = (x, y, t) => Math.floor(192 + 63 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));

    // Function to calculate the Blue component
    const B = (x, y, t) => Math.floor(192 + 63 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));

    // Time variable creating dynamic effect
    let t = 0;

    // Animation function
    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }

      // Increment of 't' controls speed of color transitions
      // Reduce this value for slower transitions
      t += 0.01;

      frameId = window.requestAnimationFrame(run);
    };

    run();

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      width="32" 
      height="32" 
      style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, opacity: 0.4}} 
    />
  );
};

export default BackgroundMesh;

