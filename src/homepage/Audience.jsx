import React, { Component } from "react";

class Audience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="audience-container">
          <h2>Who We Help</h2>
          <div className="row">
            <div className="col-sm-4">
              <h3>Patients</h3>
              <img src="docs/patient.png" />

            </div>
            <div className="col-sm-4">
              <h3>Pharmaceuticals</h3>
              <img src="docs/pharma.png" />
            
            </div>
            <div className="col-sm-4">
              <h3>Doctors</h3>
              <img src="docs/doctor.png" />
    
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Audience;