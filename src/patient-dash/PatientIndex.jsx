import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PatientSidebar from "./PatientSidebar.jsx";
import Container from 'muicss/lib/react/container'
import PendingContracts from "./PendingContracts.jsx";
import CompletedContracts from "./CompletedContracts.jsx";
import PatientHome from "./PatientHome.jsx";
import AddContracts from "./AddContracts.jsx";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class PatientIndex extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      
     
      return (
        <Router>
        <div>
        <div>
        <Route exact path="/patient"  render={(props) => <PatientHome {...props}  userName={this.props.userName}/>} />
        <Route exact path='/patient/pending' component={PendingContracts} />
        <Route exact path='/patient/completed' component={CompletedContracts} />
        </div>         
        <PatientSidebar/>
        </div>
        </Router>
      );
    }
  }
  
  export default PatientIndex;