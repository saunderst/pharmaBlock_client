import React, { Component } from "react";
import PharmaCard from './PharmaCard.jsx';

class PharmaPending extends Component {
    constructor(props) {
      super(props);
      this.state ={
      contracts: [],
      public_address: (this.props.match.params.userId || null),
      }
    } 

    componentWillMount() { 
        axios.get(`http://localhost:8080/pharmacos/${this.props.userId}/contracts`)
        .then((response) => 
        { console.log(response)
           this.setState(...this.state,{ contracts: response.data })})
       
        .catch(e => console.log('Error'))
       }
   
  
    render() {
      return (
        <div className="pharma-pending-container">
        <h2> Pending Prescription Bids</h2>
        <PharmaCard contracts={this.state.contracts}/>
        </div>

      );
    }
  }
  
  export default PharmaPending;