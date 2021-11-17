import React, { useEffect } from 'react';
import chelseaLogo from './assets/chelseaLogo.png'
import './App.css';
import './components/Social'
import Social from './components/Social';
import CurrentDate from './components/CurrentDate';
import About from './components/About';
import CodingCV from './components/CodingCV';
import SLPCV from './components/SLPCV';
import Gallery from './components/Gallery';


function App() {
  // const [home, setHome] = useState(true)
  // const [about, setAbout] = useState(false)
  // const [codingcv, setCodingCV] = useState(false)
  // const [slpcv, setSLPCV] = useState(false)
  // const [gallery, setGallery] = useState(false)
  const [currentPage, setCurrentPage] = React.useState('home')
  
  // setting to refresh current page instead of returning home. 
  React.useEffect(() => {
  });

const clickPage = (page) => {
  setCurrentPage(page) 
}


  return (
    <div className="App">
      <div className="Navigation">
        <span className="Link" onClick={() => clickPage('home')}>Home</span>
        <span className="Link" onClick={() => clickPage('about')}>About</span>
        <span className="Link" onClick={() => clickPage('codingcv')}>Coding CV</span>
        <span className="Link" onClick={() => clickPage('slpcv')}>SLP CV</span>
        <span className="Link" onClick={() => clickPage('gallery')}>Gallery</span>
      </div>

      { currentPage == 'home' &&
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={chelseaLogo} className="App-chelseaLogo" alt="chelseaLogo" />
        <h1 id="myname">
          Chelsea Avery 
        </h1>
      </header>
      }

      { currentPage == 'about' && <About />}

      { currentPage == 'codingcv' && <CodingCV />}

      { currentPage == 'slpcv' && <SLPCV />}

      { currentPage == 'gallery' && <Gallery />}

      {currentPage == 'home' &&
      <footer>
      <Social />
      <CurrentDate />
      </footer>
      }
    </div>



  );

}

export default App;
