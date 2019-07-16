import React,{Component} from "react";
import Introduction from './introduction';
import About from "./about";
import Services from "./services";
import Extra from "./extra";
import Skills from "./skills";
import Work from "./work";
import Experience from "./experience";
import Education from "./education";
import Blog from "./blog";
import Contact from "./contact";
class UserDetails extends Component{
    render(){
        return(
            <div id="colorlib-main">
            <Introduction/>
            <About/>
            <Services/>
            <Extra/>
            <Skills/>
            <Work/>
            <Experience/>
            <Education/>
            <Blog/>
            <Contact/>
            </div>
        );
    }
}

export default UserDetails;