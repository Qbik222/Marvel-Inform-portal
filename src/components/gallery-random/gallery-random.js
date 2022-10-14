import Spiner from "../spinner/spinner";
import { Component } from "react";
import MarvelService from '../../services/marvel-service';
import ErrorMessage from "../erorr-message/erorr-message";

import "./gallery-random.scss"

import mjolnir from "../../img/headerRandom.png"

class GalleryRandom extends Component{
    constructor(props){
        super(props);
        this.updateCharacter();
    }
    state = {
        char: {},
        loading: true,
        error: false,
    }
    marvelService = new MarvelService();

    onCharLoaded = (char) =>{
        this.setState({
            char,
            loading: false
        })
    }

    onError = () =>{
        this.setState({
            loading: false,
            error: true,
        })
    }

    updateCharacter = () =>{
        const id = Math.floor(Math.random() * (1011400 - 1011000) +1011000)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }



    render(){

        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spiner = loading ? <Spiner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return(
            <div className="random_info">
                {errorMessage}
                {spiner}
                {content}
                <div className="random_change">
                    <p>Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p>Or choose another one</p>
                    <span id="refreshHero"
                          onClick={this.updateCharacter}  >TRY IT</span>
                    <img src={mjolnir} alt="mjolnir" id="mjolnir" />
                </div>
            </div>
        )
    }
}

const View = ({char}) =>{
    const {name, description, thumbnail, homepage, wiki} = char;
    const descr = () =>{
        if(description === ""){
            return "Nothing info not found in our data base, please follow the link Wiki"
        }else{return description}
    }

    return (
        <div className="random_hero">
            <img src={thumbnail} alt="random hero" />
            <div className="random_descr">
                <h2>{name}</h2>
                <p>{descr()}</p>
                <div className="random_btns">
                    <a href={homepage}>Homepage</a>
                    <a href={wiki}>Wiki</a>
                </div>
                
            </div>
    </div>
    )
}

export default GalleryRandom;