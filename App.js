import React from 'react';
import ReactDOM from "react-dom";
import MyOwlCarousel from "./owl";



// import React, { header } from 'header.component.js';
import {Three} from "./threeThings.js";
import  {Header} from "./myHeader.js";
import {Slider} from "./slider.js";
import { News } from './news';
import { Recent } from './recent';
import {Footer} from "./footer.js";
 





function App() {
  return (
    <div className="App">
      <Header/>
      <MyOwlCarousel />
      <Recent/>

      {/* <button class="btn btn-success">ok</button> */}
      <Three/>

      {/* <Slider/> */}

      <News/>
      <Footer/>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
