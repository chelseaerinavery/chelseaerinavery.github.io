import React from 'react';
import galleryArray from '../constants/gallery';

function Gallery() {
  return (
    <div className="Gallery">
      {galleryArray.map((pic) => {
        return (
          <span className="Gallery-card">
            <picture>
              <source type="image/webp" srcSet={pic.webp} />
              <source type="image/jpeg" srcSet={pic.png} />
              <img src={pic.png} alt={pic.title} />
            </picture>
          </span>
        );
      })}
    </div>
  );
}

export default Gallery;
