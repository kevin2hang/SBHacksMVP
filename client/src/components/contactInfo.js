import React, {useEffect, useState} from 'react';
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";

const ContactInfo = () => {
    const logoLinks = [{logo: Facebook, link:"https://facebook.com/ucsbhacks"}, 
                        {logo: Instagram, link: "https://instagram.com/sbhacks"}];
    return(
        <div className="contactInfo">
            <h1 id="contactTitle">Contact</h1>
            <div className="contactContainer">
                {logoLinks.map((logoLink) => {
                    return (<a href={logoLink.link} target="_blank" rel="noopener noreferrer"><img className="logo" src={logoLink.logo}/></a>)
                })}
            </div>
        </div>
    )
}

export default ContactInfo;