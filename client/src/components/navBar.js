import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../styles/navBar.css";

const NavBar = () => {
    return(
        <div className="navBar">
            <Link to="/" className="navbar-item">SB Hacks VIII</Link>
            <Link to="/application" className="navbar-item">Application</Link>
        </div>
    )
}

export default NavBar;
