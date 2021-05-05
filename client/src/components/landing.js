import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
         
        }
    }

    

    render() {
        return (
            <div className="App">
                <h className = "title">SB HACKS VIII</h>
                <Link to= {"/application"} id = "">To application</Link>
            </div>
            
        )
    }
};

export default Landing;