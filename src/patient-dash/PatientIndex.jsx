import React, { Component } from "react";
import PatientSideBar from "./PatientSidebar.jsx";


class PatientIndex extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
         <h1>Hello Patient</h1>
        <PatientSideBar />
        </div>
      );
    }
  }
  
  export default PatientIndex;