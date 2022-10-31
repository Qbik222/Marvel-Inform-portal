import "./gallery-items.scss"
import React, { useState, useEffect, useRef } from "react";
import MarvelService from "../../services/marvel-service";

import ErrorMessage from "../erorr-message/erorr-message";
import Spiner from "../spinner/spinner";





const GalleryItems = (props) => {


    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(250);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [charEnded, setCharEnded] = useState(false);




  const marvelService = new MarvelService();


    useEffect(() =>{
        onRequest();
    }, [])



 const itemRefs = useRef([]);

  const focusOnItem = (id) =>{
    itemRefs.current.forEach(item => {
        item.classList.remove("Char__selected");
    })
    itemRefs[id].classList.add("Char__selected");

  }




 const charListLoading = () =>{
        
    setNewItemLoading(true);
    
  }

   const charListLoaded = (newCharList) =>{
        let ended = false;
        if (newCharList.length < 9){
            ended = true;
        }

        setCharList(charList => [...charList , ...newCharList]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);


    }   

    const onRequest = (offset) =>{
        charListLoading();
        marvelService.getAllCharacters(offset)
            .then(charListLoaded)
            .catch(onError)
            
  }
   const onError = () =>{

        setError(true);
        setLoading(false);
    }

   function renderWithoutImg(arr){
        const items = arr.map((item, i) =>{
            let imgStyle = {"objectFit": "cover"}
            if(item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                imgStyle = {"objectFit": "unset"};
            }
            return(
                <div 
               
                    className="gallery-item" 
                    key={item.id}
                    ref={el => itemRefs.current[i] = el}
                    style = {imgStyle}
                    onClick = {() => {
                        props.onCharSelected(item.id)
                        focusOnItem(i)
                    
                     
                     
                    }} 
                  
                   >
                        <img src={item.thumbnail} alt={item.name} 
                         />
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

        
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spiner className="center"/> : null;
        const item = renderWithoutImg(charList);


        return(
            <div className="gallery-container">
             {spinner}
             {errorMessage}
             {item}
            <button id="galleryBtn"
            disabled={newItemLoading}
            onClick={() => onRequest(offset)}
            style={{"display" : charEnded ? "none" : "block"}}
            >
                LOAD MORE</button>
            </div>
        )



}

export default GalleryItems;