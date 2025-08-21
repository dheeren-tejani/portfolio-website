import React, { useEffect, useState, useRef } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-dheeren.png';

const NetflixTitle = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preload audio
  useEffect(() => {
    audioRef.current = new Audio(netflixSound);
    audioRef.current.preload = 'auto';
    audioRef.current.volume = 0.8; // Set a reasonable volume
    
    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleClick = () => {
    if (hasStarted) return;
  
    setHasStarted(true);
  
    const logo = document.querySelector('.netflix-logo');
    if (logo) {
      logo.classList.remove('animate'); // remove old state
      void (logo as HTMLElement).offsetWidth; // force reflow
      logo.classList.add('animate'); // add again to restart animation
    }
  
    setIsAnimating(true);
  
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => console.error("Audio error:", error));
    }
  
    setTimeout(() => {
      navigate('/browse');
    }, 3000);
  };
  

  return (
    <div 
      className="netflix-container" 
      onClick={handleClick}
      style={{ 
        cursor: hasStarted ? 'default' : 'pointer',
        userSelect: 'none' 
      }}
    >
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isAnimating ? 'animate' : ''}`}
        draggable={false}
      />
    </div>
  );
};

export default NetflixTitle;