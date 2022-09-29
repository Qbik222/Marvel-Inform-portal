
import img from "../../img/bg asset.png"

import Gallery from "../gallery/gallery";
import Header from '../header/header';


import './App.scss';

function App() {

  return (
    <div className='app'>
         <Header/>
         <Gallery/>
         <img src={img} alt="asset" id="asset"/>
    </div>
   
  );
}

export default App;
