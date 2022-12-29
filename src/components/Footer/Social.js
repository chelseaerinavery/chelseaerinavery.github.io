import React from 'react';
import githubLogo from '../../assets/Logos/githubLogo.png';
import linkedinLogo from '../../assets/Logos/linkedinLogo.png';
import emailLogo from '../../assets/Logos/emailLogo.png';
import '../../App.css';

function Social() {
  return (
    <div className="socials">
      <a
        className="app-link"
        href="mailto:chelseaavery.js@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={emailLogo} alt="my github" />
      </a>
      <a
        className="app-link"
        href="https://github.com/chelseaerinavery"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={githubLogo} alt="my github" />
      </a>
      <a
        className="app-link"
        href="https://www.linkedin.com/in/chelseaavery/"
        target="_blank"
        rel="noopener noreferrer">
        <img height="80" src={linkedinLogo} alt="my linkedin" />
      </a>
    </div>
  );
}

export default Social;
