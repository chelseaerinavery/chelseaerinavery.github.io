import React from 'react';
import instagramLogo from '../assets/instagramLogo.png';
import facebookLogo from '../assets/facebookLogo.png';
import tiktokLogo from '../assets/tiktokLogo.png';
import githubLogo from '../assets/githubLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import '../App.css';

function Social() {
  return (
    <div>
      <a
        className="App-link"
        href="https://www.instagram.com/chelseaavery_/"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={instagramLogo} className="App-instagramLogo" alt="my instagram" />
      </a>
      <a
        className="App-link"
        href="https://www.facebook.com/chelsea.avery1/"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={facebookLogo} className="App-facebookLogo" alt="my facebook" />
      </a>
      <a
        className="App-link"
        href="https://www.tiktok.com/@jupiterthesammy?lang=en"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={tiktokLogo} className="App-tiktokLogo" alt="my tiktok" />
      </a>
      <a
        className="App-link"
        href="https://github.com/chelseaerinavery"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={githubLogo} className="App-github" alt="my github" />
      </a>
      <a
        className="App-link"
        href="https://www.linkedin.com/in/chelseaavery/"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={linkedinLogo} className="App-linkedin" alt="my linkedin" />
      </a>
    </div>
  );
}

export default Social;
