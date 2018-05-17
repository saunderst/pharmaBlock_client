import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

class PharmaSidebar extends Component  {
  
  constructor(props) {
    super(props);
    this.state = {open:true};
  }
  handleToggle = () => this.setState({open: !this.state.open});
  render(){

  return (
  
    <div>
    <Drawer open={this.state.open} id="pharma-drawer">
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
    <Link to="/pharma">
    <MenuItem><i class="fas fa-home"></i> Home</MenuItem>
    </Link>
     <Divider />   
    <Link to="/pharma/active">
    <MenuItem> <i class="fas fa-capsules"></i> Active Prescriptions</MenuItem>
     </Link> 
     <Divider/>   
     <Link to="/pharma/completed">
    <MenuItem><i class="fas fa-clipboard-check"></i> Completed Prescriptions</MenuItem>
     </Link> 
     <Divider/>  
     <Link to="/pharma/products">
    <MenuItem><i class="fas fa-tags"></i> Products</MenuItem>
     </Link> 
     <Divider/>  
     <Link to="/pharma/profile">
    <MenuItem><i class="fas fa-address-card"></i> Company Profile</MenuItem>
     </Link> 
     <Divider/>  
     
    </Menu>
  </Drawer> 
 </div>
 

  )
}
}


export default PharmaSidebar;