import React, { Component } from "react";
import ContractCard from './ContractCard.jsx';

class PendingContracts extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <ContractCard />

      );
    }
  }
  
  export default PendingContracts;