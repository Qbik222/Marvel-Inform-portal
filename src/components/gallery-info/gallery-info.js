
import "./gallery-info.scss"

import thor from "../../img/headerHero.png"
import mjolnir from "../../img/headerRandom.png"

function GalleryInfo(){
    return(
        <div className="gallery_info">
            <div className="gallery_hero">
                <img src={thor} alt="thor" />
                <div className="gallery_descr">
                    <h2>Thor</h2>
                    <p> As the Norse God of thunder and lightning, 
                        Thor wields one of the greatest weapons ever 
                        made, the enchanted hammer Mjolnir.While others 
                        have described Thor as an over - muscled, oafish
                         imbecile, he 's quite smart and compassionate...
                    </p>
                    <div className="gallery_btns">
                        <a href="asd">Homepage</a>
                        <a href="asd">Wiki</a>
                    </div>
                    
                </div>
            </div>
            <div className="gallery_random">
                <p>Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p>Or choose another one</p>
                <a href="asdas">TRY IT</a>
                <img src={mjolnir} alt="mjolnir" id="mjolnir" />
            </div>
        </div>
    )
}

export default GalleryInfo;