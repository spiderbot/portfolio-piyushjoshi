import React,{Component} from "react";

class Extra extends Component{
    render(){
        return(
            <div id="colorlib-counter" class="colorlib-counters" style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}}>
                <div class="overlay"></div>
                <div class="colorlib-narrow-content">
                    <div class="row">
                    </div>
                    <div class="row">
                        <div class="col-md-3 text-center animate-box">
                            <span class="colorlib-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50"></span>
                            <span class="colorlib-counter-label">Cups of coffee</span>
                        </div>
                        <div class="col-md-3 text-center animate-box">
                            <span class="colorlib-counter js-counter" data-from="0" data-to="356" data-speed="5000" data-refresh-interval="50"></span>
                            <span class="colorlib-counter-label">Projects</span>
                        </div>
                        <div class="col-md-3 text-center animate-box">
                            <span class="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50"></span>
                            <span class="colorlib-counter-label">Clients</span>
                        </div>
                        <div class="col-md-3 text-center animate-box">
                            <span class="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
                            <span class="colorlib-counter-label">Partners</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Extra;