import React,{Component} from "react";

class Introduction extends Component{
    render(){
        return(
            <section id="colorlib-hero" class="js-fullheight" data-section="home">
                <div class="flexslider js-fullheight">
                    <ul class="slides">
                        <li style={{backgroundImage: 'url(images/DSC_0392-min.JPG)'}}>
                            <div class="overlay"></div>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div class="slider-text-inner js-fullheight">
                                            <div class="desc">
                                                <h1>Hi! <br/>I'm Piyush</h1>
                                                <p><a class="btn btn-primary btn-learn" target="_blank" href="https://github.com/spiderbot/Resume-PiyushJoshi/blob/master/Piyush's%20Resume%20(4)%20(1).pdf">Download CV <i class="icon-download4"></i></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: 'url(images/piyushpic.jpg)'}}>
                            <div class="overlay"></div>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div class="slider-text-inner">
                                            <div class="desc">
                                                <h1>A<br/>Software Designer and Developer</h1>
                                                <p><a class="btn btn-primary btn-learn" href="#" data-nav-section="skills">View Portfolio <i class="icon-briefcase3"></i></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Introduction;