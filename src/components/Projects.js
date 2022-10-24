import React from 'react';
import projectsArray from '../constants/projects';

function Projects() {
  return (
    <div className="Gallery">
      {projectsArray.map((project) => {
        return (
          <a className="Gallery-card" href={project.link} target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" srcSet={project.webp} />
              <source type="image/jpeg" srcSet={project.png} />
              <img src={project.png} alt={project.title} />
            </picture>
          </a>
        );
      })}
    </div>
  );
}

export default Projects;
