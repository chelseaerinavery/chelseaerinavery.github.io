import Calculator from '../assets/Projects/calculator.webp';
import Weather from '../assets/Projects/weather.webp';
import ToDo from '../assets/Projects/todo.webp';
import CalculatorPNG from '../assets/Projects/calculator.png';
import WeatherPNG from '../assets/Projects/weather.png';
import ToDoPNG from '../assets/Projects/todo.png';
import fmvPNG from '../assets/Projects/fmv.jpg';
import Epc from '../assets/Projects/epc.webp';
import EpcPNG from '../assets/Projects/epc.png';
import Tictactoe from '../assets/Projects/tictactoe.webp';
import TictactoePNG from '../assets/Projects/tictactoe.png';

const projectsArray = [
  {
    title: 'Calculator',
    png: CalculatorPNG,
    webp: Calculator,
    description:
      'A simple calculator application built with HTML/CSS/JS for executing simple calculations.',
    technologies: 'Vanilla JS, CSS, HTML5',
    link: `https://www.chelsea-avery.com/calculator/`,
    repo: 'https://github.com/chelseaerinavery/calculator'
  },
  {
    title: 'Weather',
    png: WeatherPNG,
    webp: Weather,
    description:
      'React application integrating OpenWeather Map API endpoints. User can search by city or zip code.',
    technologies: 'React.js, CSS',
    link: `https://www.chelsea-avery.com/weather/`,
    repo: 'https://github.com/chelseaerinavery/weather'
  },
  {
    title: 'To-Do',
    png: ToDoPNG,
    webp: ToDo,
    description:
      'Full stack application featuring full CRUD API endpoints, implementing Node with MySQL and Express middleware, React, and FontAwesome.',
    technologies: 'React.js, Node.js, Express.js, MySQL, Rest API, FontAwesome',
    link: `https://todofe.onrender.com`,
    repo: 'https://github.com/chelseaerinavery/todo_frontend'
  },
  {
    title: 'Feed My Vibe',
    png: fmvPNG,
    description:
      'Feed My Vibe utilizes GPT-3: a powerful AI model created by OpenAI. Here, AI generates recipes based on your mood input using a prompt sent through Rest API',
    technologies: 'React.js, CSS',
    link: `https://feedmyvibe.herokuapp.com/`,
    repo: 'https://github.com/chelseaerinavery/feedmyvibe'
  },
  {
    title: 'EPC',
    png: EpcPNG,
    webp: Epc,
    description: 'A simple static website for a counseling center.',
    technologies: 'HTML, CSS, HTML5 UP',
    link: `https://golden-dasik-bf6527.netlify.app/`
  },
  {
    title: 'Tic-Tac-Toe',
    png: TictactoePNG,
    webp: Tictactoe,
    description:
      'A lightweight tic-tac-toe game built using the tutorial from React documentation, re-organized, re-styled, and converted from class to functional components using React Hooks.',
    technologies: 'React.js, CSS',
    link: `https://www.chelsea-avery.com/tic-tac-toe/`,
    repo: 'https://github.com/chelseaerinavery/tic-tac-toe'
  }
];

export default projectsArray;
