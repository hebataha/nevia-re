import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import recentImage from './images/flower.webp';

/*
  resources:
  1- https://www.npmjs.com/package/react-owl-carousel
  2- https://github.com/seal789ie/react-owl-carousel
*/

const MyOwl = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 3,
    autoplay: true,
    nav:true,
  };
  return (
      <div className="container">
          <div id="slider">
    <OwlCarousel className="owl-theme" {...options}>
 
    <div class="div main"> 
                <img src={recentImage}/>
                    <h5>time is running </h5>
                    <p>photography</p>
                </div>
    
                <div class="div main"> 
                <img src={recentImage}/>
                        <h5>time is running </h5>
                        <p>photography</p>
                    </div>
                    <div class="div main"> 
                    <img src={recentImage}/>
                            <h5>time is running </h5>
                            <p>photography</p>
                        </div>
                        <div class="div main"> 
                        <img src={recentImage}/>
                                <h5>time is running </h5>
                                <p>photography</p>
                            </div>
                            <div class="div main"> 
                                    <img src={recentImage}/>
                                    <h5>time is running </h5>
                                    <p>photography</p>
                                </div>
                                            
    </OwlCarousel>
    </div>
    </div>

  );
};
export default MyOwl;
