import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import CurrentContracts from "./CurrentContracts.jsx";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Resource from '../models/resource'
import TextField from 'material-ui/TextField';

const styles = {
   
    button: {
      marginTop: '5px',
      color: '#236B8E'
    },
  
  }
  

class PatientHome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
      }
    }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
  
  handleSubmit = (e) => {
    Resource('patients',this.props.userId).createContract()
    .then(response => {
      console.log("Response: ")
    })
    .catch(error => {
      console.log("Error: " + error)
    })
}
    
    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          onClick={this.handleClose}
          onClick={this.handleSubmit}
        />,
      ];
  
     
      return (
   
        <div className="patient-home-container">
        <h3>Welcome Back {this.props.userName}</h3>
        <div className="add-contract-container">
        <RaisedButton label="Add Prescription" primary={true} onClick={this.handleOpen} />
        <Dialog
          title="Add Prescription"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
    <TextField
      hintText="Given to you by your doctor"
      floatingLabelText="Prescription ID"
      floatingLabelFixed={true}
    /><br />
   
        </Dialog>
      </div>
        <div className="current-contracts-container">
       <CurrentContracts userId={this.props.userId} />
        </div>
        </div>
       
      );
    }
  }
  
  export default PatientHome;