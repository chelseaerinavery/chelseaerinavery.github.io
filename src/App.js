import React, { useEffect, useState } from 'react';
// import chelseaLogo from './assets/chelseaLogo.png';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
// import CodingCV from './components/CodingCV';
// import SLPCV from './components/SLPCV';
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
      <header>
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
          {/* <span role="link" className="Link" onClick={() => clickPage('codingcv')}>
          Resume
        </span> */}
          <span role="link" className="Link" onClick={() => clickPage('gallery')}>
            Artwork
          </span>
          {/* <span role="link" className="Link" onClick={() => clickPage('slpcv')}>
          SLP
        </span> */}
        </div>
      </header>

      {currentPage === 'about' && <About />}

      {currentPage === 'projects' && <Projects />}

      {currentPage === 'gallery' && <Gallery />}

      {currentPage === 'home' && <Footer />}
    </div>
  );
}

export default App;
