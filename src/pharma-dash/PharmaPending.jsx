import React, { Component } from "react";
import PharmaCard from './PharmaCard.jsx';

class PharmaPending extends Component {
    constructor(props) {
      super(props);
      this.state ={
   
      }
    } 

 
    render() {
      return (
        <div className="pharma-pending-container">
        <h2> Pending Prescription Bids</h2>
        <PharmaCard userId={this.props.userId}/>
        </div>

      );
    }
  }
  
  export default PharmaPending;