import { galleryArray } from '../constants/gallery.js'

function Gallery() {
    console.log(galleryArray)
    return (

        <div className="Gallery">
            {galleryArray.map((pic) => {
                return <span className="Gallery-card"><img width="400px" height="400px" src={pic.path}></img></span>

            })}
        </div>

    );
}

export default Gallery;