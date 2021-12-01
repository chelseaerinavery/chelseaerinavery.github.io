import React from 'react';
import galleryArray from '../constants/gallery';

function Gallery() {
  return (
    <div className="Gallery">
      {galleryArray.map((pic) => {
        return (
          <span className="Gallery-card">
            <img alt="artwork" width="400px" height="400px" src={pic.path} />
          </span>
        );
      })}
    </div>
  );
}

export default Gallery;
