import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import AboutUs from "./aboutUs";
import FAQ from "./faq";
import ImageCarousel from "./imageCarousel";


class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
         
        }
    }

    

    render() {
        return (
            <div className="App">
                <h1 className = "title">SB HACKS VIII</h1>
                <AboutUs/>
                <Link to={"/application"} id="appLink">Apply here!</Link>
                <FAQ/>
                <ImageCarousel/>
                {/* Get rid of br's later */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            
        )
    }
};

export default Landing;