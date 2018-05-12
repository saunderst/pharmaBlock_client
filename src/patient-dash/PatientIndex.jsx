import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PatientSidebar from "./PatientSidebar.jsx";
import Container from 'muicss/lib/react/container'
import PendingContracts from "./PendingContracts.jsx";
import CompletedContracts from "./CompletedContracts.jsx";
import AddContracts from "./AddContracts.jsx";
import Container from 'muicss/lib/react/container';
class PatientIndex extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      
     
      return (
        <Router>
        <div>
        <PatientSidebar userName={this.props.userName} />
        <div className="patient-container">
        <Route exact path="patient/add"  component={AddContracts} />
        <Route exact path='/patient/pending' component={PendingContracts} />
        <Route exact path='/patient/completed' component={CompletedContracts} />
        </div>   
        </div>
        </Router>
      );
    }
  }
  
  export default PatientIndex;