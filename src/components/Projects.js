import React from 'react';
import projectsArray from '../constants/projects';

function Projects() {
  return (
    <div className="Gallery">
      {projectsArray.map((project) => {
        return (
          <a className="Gallery-card" href={project.link} target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" width="400px" height="400px" srcSet={project.webp} />
              <source type="image/jpeg" width="400px" height="400px" srcSet={project.png} />
              <img src={project.png} width="400px" height="400px" alt={project.title} />
            </picture>
          </a>
        );
      })}
    </div>
  );
}

export default Projects;
