import React, { Component } from "react";
import Resource from '../models/resource'


class PharmaActive extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contracts: []
      }
    }
    componentWillMount() { 
      Resource('pharmacos', this.props.userId).getContracts()
      .then((response) => 
      { console.log(response)
        let activeContracts =[];
        response.forEach((contract) => {
          if (contract.contractStatus === "filled") {
            activeContracts.push(contract);
          }
        })
         this.setState(...this.state,{ contracts: activeContracts})})
     
      .catch(e => console.log('Error'))
     }

    render() {
      return (
        <div className="pharma-active-container">
        
        </div>

      );
    }
  }
  
  export default PharmaActive;