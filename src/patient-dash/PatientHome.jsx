import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import CurrentContracts from "./CurrentContracts.jsx";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import Resource from "../models/resource";
import TextField from "material-ui/TextField";
const block = require('../../../pharmaBlock_server/chainHelpers.js');

const prescription = {
  prescriptionID: 452356,
  drugId: 1,
  dosage: 20,
  frequencyOfDose: 3,
  numberOfDoses: 4
};
const styles = {
  button: {
    marginTop: "5px",
    color: "#236B8E"
  }
};

class PatientHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedModal: "",
      closed: false,
      prescriptionID: prescription.prescriptionID,
      drugId: prescription.drugId,
      dosage: prescription.dosage,
      frequencyOfDose: prescription.frequencyOfDose,
      numberOfDoses: prescription.numberOfDoses
    };
  }

  handleOpenPrescription = () => {
    this.setState({ openedModal: "prescription" });
  };

  handleCloseAndShowConfirmation = () => {
    this.setState({ openedModal: "confirmation" });
  };

  handleCloseCancel = () => {
    this.setState({ openedModal: "" });
  };


  handleCreate =(e)=> {
    e.preventDefault()
    if (this.state.prescriptionID === prescription.prescriptionID) {
      let prescription = {
        drugId: this.state.drugId,
        dosage: this.state.dosage,
        frequencyOfDose: this.state.frequencyOfDose,
        numberOfDoses: this.state.numberOfDoses
      };
      let web3Object = new Web3(window.web3);
      block.setProvider(web3Object);
      this.setState({ openedModal: "" });
      Resource("patients", this.props.userId).createContract(prescription)
        .then(response => {
          console.log("Response: ");
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleCloseCancel}
      />,
      <FlatButton
        label="View"
        primary={true}
        onClick={this.handleCloseAndShowConfirmation}
      />
    ];
    const actions2 = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleCloseCancel}
      />,
      <FlatButton label="Submit" primary={true} onClick={this.handleCreate} />
    ];

    return (
      <div className="patient-home-container">
        <h3>Welcome Back {this.props.userName}</h3>
        <div className="add-contract-container">
          <RaisedButton
            label="Add Prescription"
            primary={true}
            onClick={this.handleOpenPrescription}
          />
          <Dialog
            title="Add Prescription"
            actions={actions}
            modal={true}
            open={this.state.openedModal === "prescription"}
          >
            <TextField
              hintText="Given to you by your doctor"
              floatingLabelText="Prescription ID"
              floatingLabelFixed={true}
              onChange={this.handleChange}
              name="PrescriptionID"
            />
            <br />
          </Dialog>

          <Dialog
            title="Your Prescription Confirmation"
            actions={actions2}
            modal={true}
            open={this.state.openedModal === "confirmation"}
            onRequestClose={this.handleClose}
            number={2}
          >
            <br />
            <TextField
              disabled={true}
              defaultValue={prescription.prescriptionID}
              name="PrescriptionId"
              floatingLabelText="Prescription ID"
              floatingLabelFixed={true}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              disabled={true}
              defaultValue={prescription.drugId}
              name="drugId"
              floatingLabelText="Drug ID"
              floatingLabelFixed={true}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              disabled={true}
              defaultValue={prescription.dosage}
              name="dosage"
              floatingLabelText="Dosage"
              floatingLabelFixed={true}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              disabled={true}
              defaultValue={prescription.frequencyOfDose}
              name="frequencyOfDose"
              floatingLabelText="Frequency of Dose"
              floatingLabelFixed={true}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              disabled={true}
              defaultValue={prescription.numberOfDoses}
              name="numberOfDoses"
              floatingLabelText="Number of Doses"
              floatingLabelFixed={true}
              onChange={this.handleChange}
            />
            <br />
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
