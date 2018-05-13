import React, { Component } from "react";
import TextField from 'material-ui/TextField'
import Container from 'muicss/lib/react/container'
import Col from 'muicss/lib/react/col'
import RaisedButton from 'material-ui/RaisedButton';
import { ClientResponse } from "http";

const styles ={
  button: {
    color: '#236B8E'
  },
}
class Signup extends Component {
  constructor(props) {
    super(props);
  this.state = {
      email:'',
      password:''

  }

    };
  


  render() {
    return (
  
      <Container
      className="login-container"
      fluid={true}
      style={{backgroundColor: '#2E4A62'}}>
<div className="container-login">
<div id="login" class="signin-card">
  <div className="logo-image">
  <img src="docs/logo1.gif" className="login-logo" alt="Logo" title="Logo" width="138"/>
  </div>
  <h1 className="display1">Signup</h1>
  <form action="" method="" className="" role="form">
    <div  className="form-group">
      <input   className="form-control" name="First Name" type="text" placeholder="First Name" />
   
      <label for="First Name" class="float-label">First Name</label>
    </div>
    <div  className="form-group">
      <input  type="" className="form-control" name="email" type="text" placeholder="Email" />
   
      <label for="email" class="float-label">E-mail</label>
    </div>
    <div  class="form-group">
      <input  id="passwd" type="password" className="form-control" name="password" type="password" placeholder="Password" required />
      <label for="password" className="float-label">password</label>
    </div>  
    <div>
      <RaisedButton  className="login-button" label="Signup" type="submit" name="Submit" />  
	  </div>
  </form>
</div>
</div>
</Container>

     
    );
  }
}

export default Signup;