import "./gallery-items.scss"
import { Component } from "react";
import MarvelService from "../../services/marvel-service";

import ErrorMessage from "../erorr-message/erorr-message";
import Spiner from "../spinner/spinner";





class GalleryItems extends Component{

    state = {
        charList: [],
        loading: true,
        error: false,
    }

    MarvelService = new MarvelService();


  componentDidMount(){
    this.MarvelService.getAllCharacters()
        .then(this.charListLoaded)
        .catch(this.onError)
  }


  
    charListLoaded = (charList) =>{
    this.setState({
        charList,
        loading: false
    })
    }   

    onError = () =>{
        this.setState({
            loading: false,
            error: true,
        })
    }

    renderWithoutImg(arr){
        const items = arr.map((item) =>{
            let imgStyle = {"objectFit": "cover"}
            if(item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                imgStyle = {"objectFit": "unset"};
            }
            return(
                <div className="gallery-item" 
                    key={item.id}
                    style = {imgStyle}>
                        <img src={item.thumbnail} alt={item.name} />
                        <p>{item.name}</p>
                </div>
            )
        })

        return(
            <div className="center">
                {items}
            </div>
        ) 
        // return items;

    }

    render(){

        const {charList, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spiner className="center"/> : null;
        const item = this.renderWithoutImg(charList);


        return(
            <div className="gallery-container">
             {spinner}
             {errorMessage}
             {item}
            <a href="asdas" id="galleryBtn">LOAD MORE</a>
            </div>
        )
    }


}

export default GalleryItems;