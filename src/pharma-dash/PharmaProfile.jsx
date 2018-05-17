import React, { Component } from "react";
import Resource from '../models/resource'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


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
       <h2 className="page-headers"> {this.state.companyName} Profile</h2>
       

        </div>

      );
    }
  }
  
  export default PharmaProfile;