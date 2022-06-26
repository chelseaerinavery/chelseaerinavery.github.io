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
    link: `https://www.chelsea-avery.com/calculator/`
  },
  {
    title: 'Weather',
    png: WeatherPNG,
    webp: Weather,
    link: `https://www.chelsea-avery.com/weather/`
  },
  { title: 'To-Do', png: ToDoPNG, webp: ToDo, link: `https://todofe.herokuapp.com/` },
  {
    title: 'Feed My Vibe',
    png: fmvPNG,
    link: `https://feedmyvibe.herokuapp.com/`
  }
];

export default projectsArray;
