import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppPortal from "./components/appPortal"
import Landing from "./components/landing"
import NavBar from "./components/navBar";

import { Link } from 'react-router-dom';

function App() {
  return (
    <Router className="complete">
    {/* <div className="App"> */}
      <NavBar/>

      <div className="total">
        <Route exact path="/application" exact component={() => <AppPortal/>} />
        <Route exact path="/" exact component={() => <Landing/>} />

      </div>
      

    {/* </div> */}
    </Router>
  );
}

export default App;
