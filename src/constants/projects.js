import Calculator from '../assets/projects/calculator.webp';
import Weather from '../assets/projects/weather.webp';
import ToDo from '../assets/projects/todo.webp';
import CalculatorPNG from '../assets/projects/calculator.png';
import WeatherPNG from '../assets/projects/weather.png';
import ToDoPNG from '../assets/projects/todo.png';
import fmvPNG from '../assets/projects/fmv.jpg';

const projectsArray = [
  {
    title: 'Calculator',
    png: CalculatorPNG,
    webp: Calculator,
    description:
      'A simple calculator application built with HTML/CSS/JS for executing simple calculations.',
    technologies: 'Vanilla JS, CSS, HTML5',
    link: `https://www.chelsea-avery.com/calculator/`
  },
  {
    title: 'Weather',
    png: WeatherPNG,
    webp: Weather,
    description:
      'React application integrating OpenWeather Map API endpoints. User can search by city or zip code.',
    technologies: 'React.js, CSS',
    link: `https://www.chelsea-avery.com/weather/`
  },
  {
    title: 'To-Do',
    png: ToDoPNG,
    webp: ToDo,
    description:
      'Full stack application featuring full CRUD API endpoints, implementing Node with MySQL and Express middleware, React, and FontAwesome.',
    technologies: 'React.js, Node.js, Express.js, MySQL, Rest API, FontAwesome',
    link: `https://todofe.herokuapp.com/`
  },
  {
    title: 'Feed My Vibe',
    png: fmvPNG,
    description:
      'Feed My Vibe utilizes GPT-3: a powerful AI model created by OpenAI. Here, AI generates recipes based on your mood input using a prompt sent through Rest API',
    technologies: 'React.js, CSS',
    link: `https://feedmyvibe.herokuapp.com/`
  }
];

export default projectsArray;
