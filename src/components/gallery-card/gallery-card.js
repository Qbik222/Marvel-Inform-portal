import "./gallery-card.scss"


import "./gallery-card.scss"

import loki from "../../img/loki.png"


const comics = [
   "All-Winners Squad: Band of Heroes (2011) #3",
   "Alpha Flight (1983) #50",
    "Amazing Spider-Man (1999) #503",
    "Amazing Spider-Man (1999) #504",
    "AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)",
];


const comicsList = comics.map(item => {
    return(
        <li>{item}</li>
    )
})



function GalleryCard(){
    return(

        <div className="gallery_card">
            <div className="gallery_cardDescr">
                <div className="gallery_header">
                    <img src={loki} alt="loki" />
                    <div className="gallery_btns">
                    <h2>Loki</h2>
                        <a href="asd">Homepage</a>
                        <a href="asd">Wiki</a>
                    </div>
                </div>
              
                    <p> As the Norse God of thunder and lightning, 
                        Thor wields one of the greatest weapons ever 
                        made, the enchanted hammer Mjolnir.While others 
                        have described Thor as an over - muscled, oafish
                        imbecile, he 's quite smart and compassionate...
                    </p>
                <h2>Comics:</h2>
                <ul className="comics_list">
                    {comicsList}
                </ul>
            </div>
        </div>


    )
}
export default GalleryCard;