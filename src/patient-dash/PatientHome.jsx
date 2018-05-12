import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
   
    button: {
      marginTop: '5px',
      color: '#236B8E'
    },
  
  }
  

class PatientHome extends Component {
    constructor(props) {
      super(props);
    }

    
    render() {
      
     
      return (
   
        <div className="patient-home-container">
        <h3>Welcome Back {this.props.userName}</h3>
        <RaisedButton label="Add Prescription" primary={true}/>
        </div>
       
      );
    }
  }
  
  export default PatientHome;