import "./gallery-items.scss"
import React, { Component } from "react";
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
        charEnded : false

    }

    MarvelService = new MarvelService();


  componentDidMount(){
    this.onRequest();
  
  }

  itemRefs = [];

  focusOnItem = (id) =>{
    this.itemRefs.forEach(item => {
        item.classList.remove("Char__selected");
        
    })
    this.itemRefs[id].classList.add("Char__selected");
    this.itemRefs[id].focus();
  }

  setRef = (ref) => {
    this.itemRefs.push(ref);
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
        let ended = false;
        if (newCharList.length < 9){
            ended = true;
        }

    this.setState(({offset, charList}) => ({
        charList: [...newCharList],
        loading: false,
        newItemLoading: false,
        offset: offset + 9,
        charEnded: ended
    }))
    }   

    onError = () =>{
        this.setState({
            loading: false,
            error: true,
        })
    }

    renderWithoutImg(arr){
        const items = arr.map((item, i) =>{
            let imgStyle = {"objectFit": "cover"}
            if(item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                imgStyle = {"objectFit": "unset"};
            }
            return(
                <div className="gallery-item" 
                    key={item.id}
                    style = {imgStyle}
                    onClick = {() => {
                        this.props.onCharSelected(item.id)
                        this.focusOnItem(i)
                    
                     
                     
                    }} 
                    ref={this.setRef}
                   >
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

        const {charList, loading, error, newItemLoading, offset, charEnded} = this.state;
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
            style={{"display" : charEnded ? "none" : "block"}}
            >
                REFRESH</button>
            </div>
        )
    }


}

export default GalleryItems;