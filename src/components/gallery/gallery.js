
import "./gallery.scss"
import { useState } from "react";
import GalleryCard from "../gallery-card/gallery-card";
import GalleryRandom from "../gallery-random/gallery-random";
import GalleryItems from "../gallery-items/gallery-items";
import ErrorBoundary from "../error-boundary/error-boundary";

 const Gallery = () => {

    const [selectedChar, setChar] = useState(null);




   const onCharSelected = (id) =>{
       setChar(id);
        
    }


        return(
            <div className="gallery">
                   <ErrorBoundary>
                        <GalleryRandom/>
                   </ErrorBoundary>
                  
                <div className="gallery_wrapper">
                
                    <ErrorBoundary>
                        <GalleryItems onCharSelected={onCharSelected}/>
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <GalleryCard charId={selectedChar}/>
                    </ErrorBoundary>
                </div>
                
             
               
            </div>
            
        )
    };
export default Gallery;