import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // setting to refresh current page instead of returning home.
  useEffect(() => {});

  const clickPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <header>
        <h1 id="myname">Chelsea Avery</h1>
        <div className="navigation">
          <span role="link" className="link" onClick={() => clickPage('home')}>
            Home
          </span>
          <span role="link" className="link" onClick={() => clickPage('about')}>
            About
          </span>
          <span role="link" className="link" onClick={() => clickPage('projects')}>
            Projects
          </span>
          <span role="link" className="link" onClick={() => clickPage('gallery')}>
            Artwork
          </span>
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
