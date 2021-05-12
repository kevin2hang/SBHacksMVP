import React, { useEffect, useState } from 'react';
import pic from '../images/appleLogo.svg';

import "../styles/aboutUs.css";

const AboutUs = () => {
    return (
        <div id="aboutUsContainer">
            <h2 className="miniTitle">About Us</h2>
            <div className="aboutUsContent">
                <div className="aboutUsText">SB Hacks is a 36-hour hackathon hosted annually by students at the University of California, Santa Barbara. Normally the event takes place on campus, but this year, we are going digital! SB Hacks aims to expose college students to the technology industry and provide the necessary resources to get hands-on experience in coding. Whether you are a first-time coder or a seasoned hacker, we encourage you to enter SB Hacks with enthusiasm and curiosity. Our hope is that you challenge yourself with a fun project, learn something new along the way, and are proud of what you have accomplished at the end of it all.</div>
                <img className="aboutUsImg" src={pic} alt="About Us"></img>
            </div>
        </div>
    )
}

export default AboutUs;