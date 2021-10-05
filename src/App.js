import logo from './logo.svg';
import chelseaLogo from './chelseaLogo.png'
import instagramLogo from './instagramLogo.png'
import facebookLogo from './facebookLogo.png'
import tiktokLogo from './tiktokLogo.png'
import githubLogo from './githubLogo.jpeg'
import linkedinLogo from './linkedinLogo.png'
import './App.css';
import './components/Social'
import Social from './components/Social';
import CurrentDate from './components/CurrentDate';

function App() {
  return (
    <div className="App">
      <div className="Navigation">
        <span className="Link">Home</span>
        <span className="Link">About</span>
        <span className="Link">Coding CV</span>
        <span className="Link">SLP CV</span>
        <span className="Link">Digital Sketchbook</span>
      </div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={chelseaLogo} className="App-chelseaLogo" alt="chelseaLogo" />
        <h1 id="myname">
          Chelsea Avery 
        </h1>
      </header>

      <footer>
      <Social />
      <CurrentDate />
      </footer>
    </div>
  );
}

export default App;
