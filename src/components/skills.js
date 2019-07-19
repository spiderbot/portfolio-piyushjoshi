import React,{Component} from "react";

class Skills extends Component{
    render(){
        return(
            <section class="colorlib-skills" data-section="skills">
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span class="heading-meta">My Specialty</span>
                            <h2 class="colorlib-heading animate-box">My Skills</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <p>The best yardstick for our progress is not other people, but ourselves. Am I better than I was yesterday? This is the only question worth asking. As long as you go to bed at night a better practitioner than the one who woke up that morning, you have succeeded. Your worth should have nothing to do with how your progress stacks up relative to another.</p>
                        </div>
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="progress-wrap">
                                <h3>Java Web Development</h3>
                                <div class="progress">
                                    <div class="progress-bar color-1" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div class="progress-wrap">
                                <h3>jQuery</h3>
                                <div class="progress">
                                    <div class="progress-bar color-2" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="progress-wrap">
                                <h3>HTML5</h3>
                                <div class="progress">
                                    <div class="progress-bar color-3" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div class="progress-wrap">
                                <h3>CSS3</h3>
                                <div class="progress">
                                    <div class="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="progress-wrap">
                                <h3>WordPress</h3>
                                <div class="progress">
                                    <div class="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div class="progress-wrap">
                                <h3>SEO</h3>
                                <div class="progress">
                                    <div class="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                                        <span>80%</span>
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

export default Skills;