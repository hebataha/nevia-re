import React, { Component } from "react";
import sliderImage from './images/slide.jpg';


export class Slider extends Component {

    render() {
        return (

            <div class="container">
             {/* Start Slider */}
            <div id="slider">
            <div class="owl-carousel owl-theme">
                <div>
                <img src={sliderImage}/>
                </div>
            
                <div>
                <img src={sliderImage}/>
                    </div>
            
            
                    <div>
                    <img src={sliderImage}/>
                        </div>
                </div>
            </div>
            </div>  
            
            
            
            
            
            
            
            
        //    End Slider 
        
    )
    }

}
