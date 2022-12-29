import React, { useState } from 'react';
import galleryArray from '../../constants/gallery';
import Footer from '../Footer';

function Gallery() {
  const [modalPic, setModalPic] = useState(null);

  return (
    <>
      <div className="gallery">
        {galleryArray.map((pic) => {
          return (
            <span role="button" className="gallery-card" onClick={() => setModalPic(pic)}>
              <picture>
                <source type="image/webp" srcSet={pic.webp} />
                <source type="image/jpeg" srcSet={pic.png} />
                <img src={pic.png} alt={pic.title} />
              </picture>
            </span>
          );
        })}
      </div>

      {modalPic && (
        <div id="pic-modal-container">
          <div id="pic-modal" className="gallery-card">
            <span role="button" id="close-out" onClick={() => setModalPic(null)}>
              X
            </span>
            <picture>
              <source type="image/webp" srcSet={modalPic.webpFullSize} />
              <source type="image/jpeg" srcSet={modalPic.pngFullSize} />
              <img src={modalPic.pngFullSize} alt={modalPic.title} />
            </picture>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Gallery;
