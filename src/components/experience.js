import React,{Component} from "react";

class Experience extends Component{
    render(){
        return(
            <section class="colorlib-experience" data-section="experience">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 animate-box" data-animate-effect="fadeInLeft">
                        <span class="heading-meta">Experience</span>
                        <h2 class="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="timeline-centered">
                            <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div class="timeline-entry-inner">

                                    <div class="timeline-icon color-1">
                                        <i class="icon-pen2"></i>
                                    </div>

                                    <div class="timeline-label">
                                        <h2><a href="#">Java Developer (Times Internet)</a> <span>Jan 2019-Present</span></h2>
                                        <p>As a member of PD Team Designed and Developed Backend of ET Prime, a premium section of economictimes.com. Worked in various technologies such as Spring , Mongo, Redis. Solved issues reported in live environment with providing support to QC Team.</p>
                                    </div>
                                </div>
                            </article>

                            <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-2">
                                        <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="#">Senior Software Engineer (Drishti-Soft Solutions)</a> <span>10/2017 – 12/2018</span></h2>
                                        <p>As a member of PD (Product Development) Team, Designed and Developed many complex modules and features mostly from scratch with good quality while adhering to the timelines. Took part in code reviews, design reviews and provided training to members in the team.
</p><p>As a member of PD Team, solved critical customer issues. Helped maintain the issues backlog count low and had direct communication with customers.</p>
                                    </div>
                                </div>
                            </article>

                            <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-3">
                                        <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="#">Software Engineer (Drishti-Soft Solutions)</a> <span>12/2015 – 10/2015</span></h2>
                                    </div>
                                </div>
                            </article>

                            <article class="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-4">
                                        <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="#">Assistant System Engineer (Tata Consultancy Services)</a> <span>07/2015 – 12/2015</span></h2>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Experience;