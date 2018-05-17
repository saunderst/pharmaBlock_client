import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PendingContracts from "./PendingContracts.jsx";
import CompletedContracts from "./CompletedContracts.jsx";
import CurrentContracts from "./CurrentContracts.jsx";
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';


class PatientSidebar extends Component  {
  
  constructor(props) {
    super(props);
    this.state = {open:true};
  }
  handleToggle = () => this.setState({open: !this.state.open});
  render(){

  return (
  
    <div>
    <Drawer open={this.state.open} id="patient-drawer">
       <div className="sidebar-logo">
        <a>
        <img className="brand-image"src="/docs/logo1.gif"/>
       <Link to="/">
        <span className="brand-title">Pharma.<strong>Block</strong></span>
        </Link>
        </a>
        </div>
    <Menu>
   
  
    <Divider />
    <Link to="/patient">
    <MenuItem> <i class="fas fa-home"></i> Home</MenuItem>
    </Link>
    <Divider /> 
    <Link to="/patient/pending">
    <MenuItem><i class="fas fa-prescription-bottle-alt"></i> Pending Prescriptions</MenuItem>
     </Link> 
     <Divider />   
    <Link to="/patient/completed">
    <MenuItem> <i class="fas fa-clipboard-check"></i> Completed Prescriptions</MenuItem>
     </Link> 
     <Divider/>   
    </Menu>
  </Drawer> 
 </div>
 

  )
}
}

export default PatientSidebar;