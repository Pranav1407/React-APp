import React from "react";

class Home extends React.Component{
    render()
    {
        return(
            <div>
                <div id="header">
            <div class="container">
            <nav>
                <img src="assets/PortFolio1.png" width="150" height="30"/>
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i class="fa-solid fa-xmark" onclick="closemenu()"></i>
                </ul>
                <i class="fa-solid fa-bars" onclick="openmenu()"></i>
            </nav>
            <div class="header-text">
                <p>WEB DEVELOPER</p>
                <h1>Hi, I'm <span>Pranav Krishnaa</span><br/> From Erode</h1>
                <h4>Student | Mentee at Spotknack | Hard worker | Careerist | Adaptable</h4>
            </div>
        </div>
    </div>
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1"><img src="assets/user.jpg"/></div>
                <div class="about-col-2"><h1 class="subtitle">About Me</h1><p class="ab">I'm a jovial person who is interested in Technologies and uprising technical fields and I'm curious to learn new things and explore the things.I'm a hard worker and has the eagerness to process the task assigned.I can pursue my dreams and desires until I succeed in my career.
                    <br/>I'm currently learning FRONT-END development on Spotknack - Skill Development Community and started following my dreams !!!
                    </p>
                    <div class="titles">
                    <p class="links active" onclick="opentab('skills')">Skills</p>
                    <p class="links" onclick="opentab('Education')" >Education</p>
                    </div>
                    <div class="tab-contents active-tab" id="skills"><ul>
                    <li><span>Front-End</span><br/>Basics of HTML , CSS and JAVA SCRIPT</li>
                    <li><span>Programming Languages</span><br/>Basics of C, C++ , JAVA and PYTHON</li>
                    </ul></div>
                    <div class="tab-contents" id="Education"><ul>
                    <li><span>2018</span><br/>Passed out SSLC with 96%</li>
                    <li><span>2020</span><br/>Passed out HSC with 81%</li>
                    </ul></div>
                </div>
            </div>
        </div>
    </div>

    <div id="portfolio">
        <div class="container">
            <h1 class="subtitle">My Works</h1>
            <div class="work-list">
                <div class="work">
                    <img src="assets/insta.png"/>
                    <div class="layer">
                        <h3>Instagram Home Page</h3>
                        <p>This page is a clone of instagram desktop home page </p>
                        <a href="https://instagram-index.netlify.app/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="assets/youtube.jpg"/>
                    <div class="layer">
                        <h3>YouTube Home Page</h3>
                        <p>This page is a clone of youtube desktop home page</p>
                        <a href="https://youtube-index.netlify.app/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact Me</h1>
                    <p><i class="fa-solid fa-at"></i>pranavkrishnaa.2003@gmail.com</p>
                    <p><i class="fa-solid fa-phone"></i>8248469714</p>
                    <div class="social-icons">
                        <a href="https://github.com/Pranav1407" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/pranavkrishnaa" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/pranav_krishnaa?t=IzNUCFGuoUaBfRWELWwd8w&s=09" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <div class="contact-right">
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn">submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
            </div>
        );
    }
}
export default Home;