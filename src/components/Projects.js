import React from 'react';
import projectsArray from '../constants/projects';
import Footer from './Footer';

function Projects() {
  return (
    <>
      <div className="projects">
        {projectsArray.map((project) => {
          return (
            <div className="projects-card">
              <a
                title={project.description}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer">
                <picture>
                  <source type="image/webp" srcSet={project.webp} />
                  <source type="image/jpeg" srcSet={project.png} />
                  <img src={project.png} alt={project.title} />
                </picture>
                <p>{project.description}</p>
                <span className="caption">Technologies:</span>
                <p>{project.technologies}</p>
              </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
