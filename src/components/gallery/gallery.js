
import "./gallery.scss"

import GalleryCard from "../gallery-card/gallery-card";
import GalleryRandom from "../gallery-random/gallery-random";
import GalleryItems from "../gallery-items/gallery-items";

function Gallery() {

    return(
        <div className="gallery">
               <GalleryRandom/>
            <div className="gallery_wrapper">
             
                <GalleryItems/>
                <GalleryCard/>
               
            </div>
            
         
           
        </div>
        
    )
};
export default Gallery;