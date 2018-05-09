import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar.jsx';
import HomePage from './homepage/HomePage.jsx';
import PatientIndex from './patient-dash/PatientIndex.jsx';
import PharmaIndex from './pharma-dash/PharmaIndex.jsx'
import Footer from './footer/Footer.jsx';

//0xBb16559B164e4f0B872caAA640Dc1CCbf1f3E8b2
const currentUser = "E8b2"

const App = (props) => (

  <Router>
    <div>
    <NavBar/>
  
        <Route path="/" exact={true} component={HomePage} />

        {/* <Route path="/patient" exact={true} component={PatientIndex} />  */}
        <Route path={`/patient/${currentUser}`} component={PatientIndex} />

        <Route path="/pharma" component={PharmaIndex} />
  
             
    <Footer/>
    </div>
  </Router>
  
      )

export default App;
