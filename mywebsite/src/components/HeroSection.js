import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>HI, I'M CLIFFORD</h1>
      <p>Cyber-Security Specialist</p>
      <div className='hero-btn'>
        {/*<Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Download Resume
        </Button>*/}
        <Button
          className='btn'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         HIRE ME <i className='' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;