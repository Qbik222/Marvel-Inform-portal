
import "./gallery.scss"
import { Component } from "react";
import GalleryCard from "../gallery-card/gallery-card";
import GalleryRandom from "../gallery-random/gallery-random";
import GalleryItems from "../gallery-items/gallery-items";

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
                   <GalleryRandom/>
                <div className="gallery_wrapper">
                 
                    <GalleryItems onCharSelected={this.onCharSelected}/>
                    <GalleryCard charId={this.state.selectedChar}/>
                   
                </div>
                
             
               
            </div>
            
        )
    }


};
export default Gallery;