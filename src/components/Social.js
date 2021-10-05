import instagramLogo from '../instagramLogo.png'
import facebookLogo from '../facebookLogo.png'
import tiktokLogo from '../tiktokLogo.png'
import githubLogo from '../githubLogo.jpeg'
import linkedinLogo from '../linkedinLogo.png'
import '../App.css';

function Social() {
  return (
    <div>
        <a
          className="App-link"
          href="https://www.instagram.com/chelseaavery_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height="80" src={instagramLogo} class="App-instagramLogo" alt="my instagram" />
        </a>
        <a
          className="App-link"
          href="https://www.facebook.com/chelsea.avery1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height="80" src={facebookLogo} class="App-facebookLogo" alt="my facebook" />
        </a>
        <a
          className="App-link"
          href="https://www.tiktok.com/@jupiterthesammy?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height="80" src={tiktokLogo} class="App-tiktokLogo" alt="my tiktok" />
        </a>
        <a
          className="App-link"
          href="https://github.com/chelseaerinavery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height="80" src={githubLogo} class="App-github" alt="my github" />
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/chelseaavery/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height="80" src={linkedinLogo} class="App-linkedin" alt="my linkedin" />
          </a>
    </div>
  );
}

export default Social;
