import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar.jsx';
import HomePage from './homepage/HomePage.jsx';
import PatientIndex from './patient-dash/PatientIndex.jsx';
import PharmaIndex from './pharma-dash/PharmaIndex.jsx'
import Footer from './footer/Footer.jsx';

const App = (props) => (

  <Router>
    <div>
    <NavBar/>
  
        <Route path="/" exact={true} component={HomePage} />
  
        <Route path="/patient" component={PatientIndex} />
        <Route path="/pharma" component={PharmaIndex} />
  
             
    <Footer/>
    </div>
  </Router>
  
      )

export default App;
