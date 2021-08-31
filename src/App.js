import logo from './logo.svg';
import chelseaLogo from './chelseaLogo.png'
import instagramLogo from './instagramLogo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={chelseaLogo} className="App-chelseaLogo" alt="chelseaLogo" />
        <p>
          Welcome to my professional, slightly personal landing page. 
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/chelseaavery_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height="80" src="/static/media/instagramLogo.06c041df.png" class="App-instagramLogo" alt="instagramLogo" />
        </a>
      </header>
    </div>
  );
}

export default App;
