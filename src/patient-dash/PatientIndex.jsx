import React, { Component } from "react";
import PatientSideBar from "./PatientSidebar.jsx";


class PatientIndex extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
        <PatientSideBar />
        </div>
      );
    }
  }
  
  export default PatientIndex;