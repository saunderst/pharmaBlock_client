import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';



class PharmaHome extends Component {
    constructor(props) {
      super(props);
    }

    
    render() {
      
     
      return (
   
        <div className="pharma-home-container">
        <h3>Welcome Back {this.props.userName}</h3>
        <h3>Your Stats</h3>
        </div>
       
      );
    }
  }
  
  export default PharmaHome;