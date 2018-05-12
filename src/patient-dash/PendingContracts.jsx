import React, { Component } from "react";
import ContractCard from './ContractCard.jsx';

class PendingContracts extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="pending-contracts-container">
        <ContractCard />
        </div>

      );
    }
  }
  
  export default PendingContracts;