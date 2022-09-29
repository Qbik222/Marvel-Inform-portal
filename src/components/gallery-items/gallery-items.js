import "./gallery-items.scss"

import loki from "../../img/loki.png"

const itemDb = [
    {img: loki, name: "LOKI"},
    {img: loki, name: "LOKI"},
    {img: loki, name: "LOKI"},
    {img: loki, name: "LOKI"},
    {img: loki, name: "LOKI"},
    {img: loki, name: "LOKI"},
    {img: loki, name: "LOKI"},
    {img: loki, name: "LOKI"},
    {img: loki, name: "LOKI"},
    
];

const itemGallery = 
    itemDb.map(({img, name}) =>{
        return(
                <div className="gallery-item">
                    <img src={img} alt={name} />
                    <p>{name}</p>
                </div>
        )
    })

function GalleryItems(){
    return(
        <div className="gallery-container">
        {itemGallery}
        <a href="asdas" id="galleryBtn">LOAD MORE</a>
        </div>
    )
}

export default GalleryItems;