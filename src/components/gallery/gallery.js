
import "./gallery.scss"

import GalleryCard from "../gallery-card/gallery-card";
import GalleryInfo from "../gallery-info/gallery-info";
import GalleryItems from "../gallery-items/gallery-items";

function Gallery() {

    return(
        <div className="gallery">
               <GalleryInfo/>
            <div className="gallery_wrapper">
             
                <GalleryItems/>
                <GalleryCard/>
               
            </div>
            
         
           
        </div>
        
    )
};
export default Gallery;