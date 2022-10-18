import "./gallery-card.scss"
import Spiner from "../spinner/spinner";
import ErrorMessage from "../erorr-message/erorr-message";
import MarvelService from "../../services/marvel-service";
import Skeleton from "../app/skeleton/skeleton";
import PropTypes from "prop-types"
import { Component } from "react";
import "./gallery-card.scss"



    // const comics = [
    // "All-Winners Squad: Band of Heroes (2011) #3",
    // "Alpha Flight (1983) #50",
    //     "Amazing Spider-Man (1999) #503",
    //     "Amazing Spider-Man (1999) #504",
    //     "AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)",
    // ];


    // const comicsList = comics.map((item, i) => {
    //     return(
    //         <li key={i}>{item}</li>
    //     )
    // })



    class GalleryCard extends Component{

        state = {
            char: null,
            loading: false,
            error: false,
        }

        marvelService = new MarvelService();

        componentDidMount(){
            this.updateChar();
        }

        componentDidUpdate(prevProps){
            if(this.props.charId !== prevProps.charId){
                this.updateChar();
            }
       
        }

     

        updateChar = () =>{
            const {charId} = this.props;
            if (!charId){
                return;
            }
            this.onCharLoading();
            this.marvelService
                .getCharacter(charId)
                .then(this.onCharLoaded)
                .catch(this.onError);

        }

        onCharLoading = () =>{
            this.setState({
                loading: true,
            })
        }

        onCharLoaded = (char) =>{
            this.setState({
                char,
                loading: false,
            })
        }

        onError = () =>{
            this.setState({
                error: true,
                loading: false,
            })
        }

        render(){
      
            const {char, loading, error} = this.state

            const skeleton = char || loading || error ? null : <Skeleton/>;
            const errorMessage = error ? <ErrorMessage/> : null;
            const spiner = loading ? <Spiner/> : null;
            const content = !(loading || error || !char) ? <View char={char}/> : null
            console.log(content);

            return(

                <div className="gallery_card">
                  
                    {skeleton}
                   {spiner}
                   {errorMessage}
                   {content}
                  
                </div>
        
        
            )
        }
    }


    const View = ({char}) => {
        const {name,description, thumbnail, homepage, wiki, comics} = char;
       
       
        let imgStyle = {'objectFit' : 'cover'};
        if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'contain'};
        }
        return(
            <>
             <div className="gallery_cardDescr">
                    <div className="gallery_header">
                        <img src={thumbnail} alt={name} />
                        <div className="gallery_btns">
                            <h2>{name}</h2>
                            <a href={homepage}>Homepage</a>
                            <a href={wiki}>Wiki</a>
                        </div>
                    </div>
                
                        <p>{description}</p>
                    <h2>Comics:</h2>
                    <ul className="comics_list">
                        {comics.length > 0 ? null : "There is no comics with this hero"}
                        {
                            comics.map((item, i) =>{
                                if(i > 6){
                                    return
                                }
                           
                                console.log(item)
                                return(
                                    <li key={i} style={imgStyle}>{item.name}</li>
                                )
                            }
                        )
                        }
                    </ul>
                </div>
            </>
        )
    }


    GalleryCard.propTypes = {
        charId: PropTypes.number
    }

    export default GalleryCard;