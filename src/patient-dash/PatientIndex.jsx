import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PatientSidebar from "./PatientSidebar.jsx";
import Container from 'muicss/lib/react/container'
import PendingContracts from "./PendingContracts.jsx";
import CompletedContracts from "./CompletedContracts.jsx";
import PatientHome from "./PatientHome.jsx";
import PendingBids from "./PendingBids.jsx";
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
        <Route exact path="/patient"  render={(props) => <PatientHome {...props}  userName={this.props.userName} userId={this.props.userId}/>} />
        <Route exact path='/patient/pending' render={(props) => <PendingContracts {...props}  userId={this.props.userId}/>}/>
        <Route exact path='/patient/completed' render={(props) => <CompletedContracts {...props}  userId={this.props.userId}/>} />
        <Route exact path='/patient/pending/bids' render={(props) => <PendingBids {...props}  userId={this.props.userId}/>} />
        </div>         
        <PatientSidebar/>
        </div>
        </Router>
      );
    }
  }
  
  export default PatientIndex;