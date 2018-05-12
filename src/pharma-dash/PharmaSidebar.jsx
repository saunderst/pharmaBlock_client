import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <span className="brand-title">Pharma.Block</span>
        </a>
        </div>
        <Divider />
    <Menu>
   
  
    <Divider />
    <Link to="/pharma">
    <MenuItem>Home</MenuItem>
    </Link>
    <Divider /> 
    <Link to="/pharma/pending">
    <MenuItem>Pending Prescriptions</MenuItem>
     </Link> 
     <Divider />   
    <Link to="/pharma/active">
    <MenuItem>Active Prescriptions</MenuItem>
     </Link> 
     <Divider/>   
     <Link to="/pharma/completed">
    <MenuItem>Completed Prescriptions</MenuItem>
     </Link> 
     <Divider/>  
     <Link to="/pharma/products">
    <MenuItem>Products</MenuItem>
     </Link> 
     <Divider/>  
     <Link to="/pharma/profile">
    <MenuItem>Company Profile</MenuItem>
     </Link> 
     <Divider/>  
     
    </Menu>
  </Drawer> 
 </div>
 

  )
}
}


export default PharmaSidebar;