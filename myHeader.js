import React,{Component} from "react" 

export class Header extends Component{
  
    render(){
        return ( 

           <div className="container">
            <div class="header">

            <div class="top-header">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="logo">
                               <ul class="list-unstyled">
                                   <li>
                                       <h3>
                                        nevia
                                      </h3>
                                </li>
                                <li class="li-tem">
                                        Template Without Compromises!
    
                                </li>
                               </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="left-header">
                                <ul class="list-unstyled"
                                >
                                    <li>
                                            <i class="fab fa-twitter"></i>
                                    </li>
                                    <li>
                                            <i class="fab fa-facebook-f"></i>                                </li>
                                    <li>
                                            <i class="fas fa-globe"></i>                                    
                                        </li>
                                    <li>
                                            <i class="fab fa-linkedin"></i>
                                    </li>                                                                   
    
                                    <li>
                                            <i class="fas fa-rss"></i>                                </li>
                                    
                                </ul>
                                <div class="clear"></div>
                                    <p>Contact Phone: +48 880 440 110
                                    </p>
                                <div class="input-icon">
                                        <i class="fas fa-search"></i>                          
    
                                <input type="text" placeholder="search" class="form-control"/>
                                </div>
                            </div>
    
                        </div>
                    </div>
              
            </div>
    <nav>
        <ul class="list-unstyled">
            <li><i class="fas fa-home"></i>home</li>
            <li><i class="fas fa-file"></i>Features</li>
            <li><i class="fas fa-cog"></i>shortcodes</li>
            <li><i class="fas fa-briefcase"></i>portfolio</li>
            <li><i class="fas fa-home"></i>shop</li>
            <li><i class="fas fa-envelope"></i>contact</li>
    
    
        </ul>
    </nav>
    </div>
    </div> 

        )
    }

}