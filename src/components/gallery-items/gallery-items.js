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
        offset: 210,
        newItemLoading: false,

    }

    MarvelService = new MarvelService();


  componentDidMount(){
    this.onRequest();
  }


  onRequest = (offset) =>{
        this.charListLoading();
        this.MarvelService.getAllCharacters(offset)
            .then(this.charListLoaded)
            .catch(this.onError)
            
  }

  charListLoading = () =>{
    this.setState({
        newItemLoading: true,
    })
  }

    charListLoaded = (newCharList) =>{
    this.setState(({offset, charList}) => ({
        charList: [...newCharList],
        loading: false,
        newItemLoading: false,
        offset: offset + 9,
    }))
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
                    style = {imgStyle}
                    onClick = {() => this.props.onCharSelected(item.id)} >
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


    }

    render(){

        const {charList, loading, error, newItemLoading, offset} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spiner className="center"/> : null;
        const item = this.renderWithoutImg(charList);


        return(
            <div className="gallery-container">
             {spinner}
             {errorMessage}
             {item}
            <button id="galleryBtn"
            disabled={newItemLoading}
            onClick={() => this.onRequest(offset)}
            >
                REFRESH</button>
            </div>
        )
    }


}

export default GalleryItems;