// atoms/BackgroundMesh.jsx

import React, { useEffect, useRef } from 'react';

// BackgroundMesh Component
// This component creates a dynamic, animated background effect using canvas.
// It manipulates pixel colors over time to create a mesmerizing mesh-like pattern.
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

    // Color Calculation Functions
    // These functions calculate RGB components based on coordinates and time,
    // creating a dynamic and evolving color pattern.

    // Red component calculation
    const R = (x, y, t) => Math.floor(192 + 63 * Math.cos((x * x - y * y) / 300 + t));

    // Green component calculation
    const G = (x, y, t) => Math.floor(192 + 63 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));

    // Blue component calculation
    const B = (x, y, t) => Math.floor(192 + 63 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));

    // Time variable for dynamic effect
    let t = 0;

    // Animation Function
    // This function runs the animation by continuously updating the canvas
    // with new pixel colors, creating a flowing color change effect.
    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t += 0.01; // Controls the speed of color transitions
      frameId = window.requestAnimationFrame(run);
    };

    run();

    // Cleanup function to cancel the animation frame on unmount
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
