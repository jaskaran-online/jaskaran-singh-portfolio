"use client";
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/apps.json'; // Replace with your animation JSON file path

const HeroAnimation = () => {
    const container = useRef(null);
    const animationInstance = useRef(null); // Reference to store the Lottie animation instance

    useEffect(() => {
      // Clean up the existing animation if there is one
      const cleanUpAnimation = () => {
        if (animationInstance.current) {
          animationInstance.current.destroy();
          animationInstance.current = null;
        }
      };

      if (container.current) {
        cleanUpAnimation(); // Clean up any existing animation before creating a new one
        animationInstance.current = lottie.loadAnimation({
          container: container.current,
          animationData: animationData, // Your animation JSON data
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            scaleMode: 'noScale',
            clearCanvas: false,
          },
        });
      }

      // Cleanup function to destroy the Lottie animation instance when the component unmounts
      return cleanUpAnimation;
    }, []);

    return <div ref={container} style={{ width: '100%', height: 'auto' }} />;
};

export default HeroAnimation;
