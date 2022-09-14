import React from 'react';
import githubLogo from '../assets/githubLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import emailLogo from '../assets/emailLogo.png';
import '../App.css';

function Social() {
  return (
    <div className="Socials">
      <a
        className="App-link"
        href="mailto:chelseaavery.js@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={emailLogo} className="App-github" alt="my github" />
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
