import React, { useEffect, useState } from 'react';
import chelseaLogo from './assets/chelseaLogo.png';
import './App.css';
import Social from './components/Social';
import CurrentDate from './components/CurrentDate';
import About from './components/About';
import Projects from './components/Projects';
import CodingCV from './components/CodingCV';
import SLPCV from './components/SLPCV';
import Gallery from './components/Gallery';

function App() {
  // const [home, setHome] = useState(true)
  // const [about, setAbout] = useState(false)
  // const [codingcv, setCodingCV] = useState(false)
  // const [slpcv, setSLPCV] = useState(false)
  // const [gallery, setGallery] = useState(false)
  const [currentPage, setCurrentPage] = useState('home');

  // setting to refresh current page instead of returning home.
  useEffect(() => {});

  const clickPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1 id="myname">Chelsea Avery</h1>
      <div className="Navigation">
        <span role="link" className="Link" onClick={() => clickPage('home')}>
          Home
        </span>
        <span role="link" className="Link" onClick={() => clickPage('about')}>
          About
        </span>
        <span role="link" className="Link" onClick={() => clickPage('projects')}>
          Projects
        </span>
        <span role="link" className="Link" onClick={() => clickPage('codingcv')}>
          Resume
        </span>
        <span role="link" className="Link" onClick={() => clickPage('gallery')}>
          Artwork
        </span>
        <span role="link" className="Link" onClick={() => clickPage('slpcv')}>
          SLP
        </span>
      </div>

      {currentPage === 'home' && (
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={chelseaLogo} className="App-chelseaLogo" alt="chelseaLogo" />
        </header>
      )}

      {currentPage === 'about' && <About />}

      {currentPage === 'projects' && <Projects />}

      {currentPage === 'codingcv' && <CodingCV />}

      {currentPage === 'gallery' && <Gallery />}

      {currentPage === 'slpcv' && <SLPCV />}

      {currentPage === 'home' && (
        <footer>
          <Social />
          <CurrentDate />
        </footer>
      )}
    </div>
  );
}

export default App;
