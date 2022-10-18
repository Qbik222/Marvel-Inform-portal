
import "./gallery.scss"
import { Component } from "react";
import GalleryCard from "../gallery-card/gallery-card";
import GalleryRandom from "../gallery-random/gallery-random";
import GalleryItems from "../gallery-items/gallery-items";
import ErrorBoundary from "../error-boundary/error-boundary";

class Gallery extends Component {

    state = {
        selectedChar: null,
    }

    onCharSelected = (id) =>{
        this.setState({
            selectedChar: id,
        })
    }

    render(){
        return(
            <div className="gallery">
                   <ErrorBoundary>
                        <GalleryRandom/>
                   </ErrorBoundary>
                  
                <div className="gallery_wrapper">
                
                    <ErrorBoundary>
                        <GalleryItems onCharSelected={this.onCharSelected}/>
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <GalleryCard charId={this.state.selectedChar}/>
                    </ErrorBoundary>
                </div>
                
             
               
            </div>
            
        )
    }


};
export default Gallery;