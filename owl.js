import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import sliderImage from './images/slide.jpg';

/*
  resources:
  1- https://www.npmjs.com/package/react-owl-carousel
  2- https://github.com/seal789ie/react-owl-carousel
*/

const MyOwlCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    nav:true,
  };
  return (
      <div className="container">
          <div id="slider">
    <OwlCarousel className="owl-theme" {...options}>
 
      <div>
                <img src={sliderImage}/>
                </div>
            
                <div>
                <img src={sliderImage}/>
                    </div>
            
            
                    <div>
                    <img src={sliderImage}/>
                        </div>
    </OwlCarousel>
    </div>
    </div>

  );
};
export default MyOwlCarousel;
