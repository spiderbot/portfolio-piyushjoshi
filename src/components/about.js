import React,{Component} from "react";
class About extends Component{
    render(){
        return(
            <section class="colorlib-about" data-section="about">
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div class="col-md-12">
                                    <div class="about-desc">
                                        <span class="heading-meta">About Me</span>
                                        <h2 class="colorlib-heading">Who Am I?</h2>
                                        <p>Hi I'm <strong> <a href="https://github.com/spiderbot" target="_blank">Piyush Joshi</a></strong> A Software Design, Algorithm Development and Agile Process Enthusiast with around 4 years of experience in Software Development Lifecycle and Freelancing</p>
                                        <p>My aim is to fulfill the requirements of any person , group or institution by creating innovative and effective solutions</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                    <div class="services color-2">
                                        <span class="icon2"><i class="icon-globe-outline"></i></span>
                                        <h3>Frontend Design and Development</h3>
                                    </div>
                                </div>
                                <div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                    <div class="services color-1">
                                        <span class="icon2"><i class="icon-bulb"></i></span>
                                        <h3>Web Services Design and Development</h3>
                                    </div>
                                </div>
                                <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                    <div class="services color-3">
                                        <span class="icon2"><i class="icon-data"></i></span>
                                        <h3>Full Stack Software Development</h3>
                                    </div>
                                </div>
                                <div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                    <div class="services color-4">
                                        <span class="icon2"><i class="icon-phone3"></i></span>
                                        <h3>Application</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                    <div class="hire">
                                        <h2>I am happy to let you know know <br/>that 15+ projects have been completed sucessfully!</h2>
                                        <a href="https://www.gmail.com" target="_blank" class="btn-hire">Hire me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;