import React, { Component } from "react";


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
        axios.get(`http://localhost:8080/pharmacos/${this.props.userId}`)
        .then((response) => 
        { console.log(response)
           this.setState(...this.state, {
               companyName: response.data[0].company_name,
               contactName: response.data[0].contact_name,
               email: response.data[0].email      
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