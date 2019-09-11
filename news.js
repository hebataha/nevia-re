import React, { Component } from 'react'

/**
* @author
* @class 
**/

export class  News extends Component {
 state = {}
 render() {
  return(
    // Start  News 
    <div class="container">
    <section class="news">
        <div class="row">
            <div class="col-md-6 new-col">
                <h4>
                       <span> Recent News</span> / Stuff From Our Blog
    
                </h4>
                <div class="col-md-6 news-col">
                <div class="news-one">
                   <div class="new-left">
    
                 
                    <ul class="list-unstyled">
                        <li>28</li>
                        <li>Dec</li>
                    </ul>
                </div> 
    
                <div class="new-right">
    
                    <ul class="list-unstyled">
                        <h5>The Boating Life Begins <br/> With a Good Storm</h5>
                        <p>
                                Integer libero lectus, porta acean pulvinar ac, facilisis non arcu. Maecenas enim orci, adipiscing dictum sit amet gusce dapibus.
    
    
                        </p>
                        </ul>
                </div>
    
    
    
            </div>
        </div>
        <div class="col-md-6 news-col">
    
            <div class="news-one">
                    <div class="new-left">
     
                  
                     <ul class="list-unstyled">
                         <li>28</li>
                         <li>Dec</li>
                     </ul>
                 </div> 
     
                 <div class="new-right">
     
                     <ul class="list-unstyled">
                         <h5>The Boating Life Begins <br/> With a Good Storm</h5>
                         <p>
                                 Integer libero lectus, porta acean pulvinar ac, facilisis non arcu. Maecenas enim orci, adipiscing dictum sit amet gusce dapibus.
     
     
                         </p>
                         </ul>
                 </div>
     
     
                </div>
             </div>
            </div>
            <div class="col-md-6">
                    <h4>
                            <span> Testimonials</span>  / What Our Clients Say
                            
                     </h4>
                     <p class="news-p">
                            Cras sed odio est, sit amet porttitor elit. Vestibulum Proin sit amet mauris et odio pellentesque iaculis. Cum sociis natoque proin sit amet mauris odio pellentesque iaculis.
                     </p>
                     <p class="news-left">
                           <span class="sp"> Michael, </span>Flash Developer
    
                     </p>
            </div>
        </div>
    </section>
    </div>
    /* End  News  */



    )
   }
 }


