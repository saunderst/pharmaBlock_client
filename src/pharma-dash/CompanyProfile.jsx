import React, { Component } from "react";


class CompanyProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
          companyName:'',
          address:'',
          city: '',
          email: ''
      }
    }

    componentDidMount() { 
        axios.get(`http://localhost:8080/pharmacos/${this.props.userId}`)
        .then((response) => 
        { console.log(response)
            console.log(this.state)
           this.setState( ...this.state,
            { companyName: response.data[0].company_name,
            email:response.data[0].email
            }
        )
           console.log(this.state)
        })  
        .catch(e => console.log('Error'))
 
    }
    render() {
        console.log(this.state)
      return (
        <div className="company-profile-container">
        <h2> Profile </h2>
        <h3> Company Name: {this.state.companyName}</h3>
        <h3> Email: {this.state.email}</h3>
        </div>

      );
    }
  }
  
  export default CompanyProfile;