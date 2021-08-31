import React from 'react';
import galleryArray from '../constants/gallery';

function Gallery() {
  return (
    <div className="Gallery">
      {galleryArray.map((pic) => {
        return (
          <span className="Gallery-card">
            <picture>
              <source type="image/webp" width="400px" height="400px" srcSet={pic.webp} />
              <source type="image/jpeg" width="400px" height="400px" srcSet={pic.png} />
              <img src={pic.png} width="400px" height="400px" alt={pic.title} />
            </picture>
          </span>
        );
      })}
    </div>
  );
}

export default Gallery;
