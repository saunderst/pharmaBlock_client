import React, { Component } from "react";

class CurrentContracts extends Component {
    constructor(props) {
      super(props);
      this.state= {
        contracts:[],
        // public_address: (this.props.match.params.userId || null),
      }
    }
    componentWillMount() { 
      axios.get(`http://localhost:8080/patients/${this.props.userId}/contracts`)
      .then((response) => 
      { console.log(response)
         this.setState({ contracts: response.data })})  
      .catch(e => console.log('Error'))
     }
    render() {
      return (
   <h4>Active Prescriptions</h4>

      );
    }
  }
  
  export default CurrentContracts;