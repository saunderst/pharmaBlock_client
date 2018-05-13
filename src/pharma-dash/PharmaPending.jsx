import React, { Component } from "react";
import PharmaCard from './PharmaCard.jsx';

class PharmaPending extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="pharma-pending-container">
        <h2> Pending Prescription Bids</h2>
        <PharmaCard />
        </div>

      );
    }
  }
  
  export default PharmaPending;