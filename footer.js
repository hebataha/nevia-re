import React,{Component} from "react";
import image from "./images/natu.jpg";



export class Footer extends Component{

    render(){
        return(
            // Start Footer 
<div class="container">
<footer>
<div className="row">
    <div className="col-md-3">
        <h2>
            nevai
        </h2>
        <p>
                Morbi gravida imperdiet rutrum fusce mattis, lectus consequat vestibulum, duinibh fermentum ligula.
        </p>
    </div>

    <div className="col-md-3">
            <h4>
                    Contact Details

            </h4>
           <ul className="list-unstyled ul-ad">
               <li><span><i className="fas fa-map-marker-alt"></i>Address:
            </span>
        <span>123 Seward Street,<br/>
            <p> Oklahoma City, USA</p></span></li>
               <li></li>
           </ul>

           <ul className="list-unstyled ul-ad">
                <li><span><i className="fas fa-user"></i>phone:
             </span>
         <span>+48 880 440 110</span></li>
                <li></li>
            </ul>


            <ul className="list-unstyled ul-ad">
                    <li><span><i className="fas fa-envelope"></i>Email:
                 </span>
             <span>mail@example.com</span></li>
                    <li></li>
                </ul>
        </div>

        <div className="col-md-3">
                <h4>
                        Photo Stream

                </h4>
              <ul className="list-unstyled foot-ul">
                  <li>
                  <img src={image}/>
                  </li>
                  <li>
                  <img src={image}/>
                    </li>
                    <li>
                    <img src={image}/>
                        </li>
              </ul>
              <ul className="list-unstyled foot-ul">
                    <li>
                    <img src={image}/>
                        </li>
                        <li>
                        <img src={image}/>
                            </li>
                            <li>
                            <img src={image}/>
                                </li>
              </ul>

            </div>
            <div className="col-md-3 foot-last">
                    <h4>
                        twitter
    
                    </h4>
                    <i className="fab fa-twitter"></i>
                    <p>
                           
                            Morbi gravida imperdiet rutrum fusce mattis, lectus consequat vestibulum, duinibh fermentum ligula.
                    <br/>
                            <span>980 days ago
                                </span>
                        </p>

                </div>            
</div>

</footer>

 <div className="footer-end">
        <div className="row">
         <div className="col-md-6">
     <p>&copy; Copyright 2015 by<span> Nevia.</span> All Rights Reserved.
         </p>
         </div>
        <div className="col-md-6">
            <ul className="list-unstyled footer-end-ul">
                 <li>FAQ's  
                    </li>
    
                    <li>Sitemap</li>
                   <li>Contact</li>
            </ul>
            </div>
     </div>

  </div>
 {/* End Footer   */}
</div>
        )
    }
}