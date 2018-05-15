import React, { Component } from "react";
import Resource from '../models/resource'

class PharmaProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
          companyName: '',
          address:'',
          contactName: '',
          email:''
      }
    }
    componentDidMount() { 
      Resource('pharmacos', this.props.userId).getInfo()
        .then((response) => 
        { console.log(response)
           this.setState(...this.state, {
               companyName: response.company_name,
               contactName: response.contact_name,
               email: response.email      
            })})
       
        .catch(e => console.log('Error'))
       }


    render() {
      return (
        <div className="pharma-profile-container">
        <h2>Hello {this.state.companyName}</h2>
        <h2>Hello {this.state.contactName}</h2>
        <h2>Hello {this.state.email}</h2>
        </div>

      );
    }
  }
  
  export default PharmaProfile;