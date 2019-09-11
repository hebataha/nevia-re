import React, { Component } from 'react'
import PropTypes from 'prop-types';
import recentImage from './images/flower.webp';


/**
* @author
* @class Recent
**/

export class Recent extends Component {
 state = {}
 render() {
  return(
    //  Start Recent 
    <div class="container">
    <div class="recent">
    <div class="row">
        <div class="col-md-3">
            <div class="re-right">
                <h4>
                        Recent Work
    
                </h4>
                <p>
                        Adding portfolio entries with this shortcode is now easier then ever.
    
    
                </p>
            </div>
        </div>
        <div class="col-md-9">
             <div class="re-left">
                
                
         {/* Set up your HTML  */}
            <div class="owl-carousel text-center "  id="recent">
                <div className="div main"> 
                <img src={recentImage}/>
                    <h5>time is running </h5>
                    <p>photography</p>
                </div>
    
                <div className="div main"> 
                <img src={recentImage}/>
                        <h5>time is running </h5>
                        <p>photography</p>
                    </div>
                    <div className="div main"> 
                    <img src={recentImage}/>
                            <h5>time is running </h5>
                            <p>photography</p>
                        </div>
                        <div className="div main"> 
                        <img src={recentImage}/>
                                <h5>time is running </h5>
                                <p>photography</p>
                            </div>
                            <div className="div main"> 
                                    <img src={recentImage}/>
                                    <h5>time is running </h5>
                                    <p>photography</p>
                                </div>
                                            
    
    
    
            </div>
    
             </div>
    
        </div>
    </div>
    </div>
    </div>
    /* End Recent */
    )
   }
 }


Recent.propTypes = {}
 