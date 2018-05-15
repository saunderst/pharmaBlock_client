import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import CurrentContracts from "./CurrentContracts.jsx";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
          disabled={true}
          onClick={this.handleClose}
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
         Helloooo
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