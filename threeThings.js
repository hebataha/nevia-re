import React,{Component} from "react" 


export class Three extends Component{
    render(){
        return (
            
    // Start three things section 
    <div className="container">

<section>
     {/* <div class="container">  */}
        
        <div class="row">
            <div class="col-md-4">
                <div class="three-select">
                    <div class="icon">
                            <i class="fas fa-cubes"></i>                    </div>
                    <div class="ex">
                        <h4>
                                Clean Design

                        </h4>
                        <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>



            <div class="col-md-4">
                    <div class="three-select">
                        <div class="icon">
                                <i class="fas fa-mobile"></i>
                        </div>
                        <div class="ex">
                            <h4>
                                    Responsive
    
                            </h4>
                            <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>


                <div class="col-md-4">
                        <div class="three-select">
                            <div class="icon">
                                    <i class="fas fa-book"></i>                          </div>
                            <div class="ex">
                                <h4>
                                        Retina Ready

        
                                </h4>
                                <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>    
        </div>

    
</section>
</div>

//  End three things section 
        )
    }
}