import React, { Component } from "react";
import axios from 'axios';
import {withRouter, Redirect} from 'react-router-dom'
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
class Login extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email:'',
      password:'',
      userId: '',
      userName:''
    };
  }

  
handleEmailChange = (e)=>{
  this.setState({email:e.target.value})
}
handlePasswordChange = (e)=>{
    this.setState({password:e.target.value})
}

signIn =(e)=>{
  e.preventDefault();
  const user = {
    email: this.state.email,
    password: this.state.password,
  };
  axios.post('http://localhost:8080/login', user)
  .then((response) =>
    {   
      
     window.localStorage.auth_token = response.data.token;
    console.log(response.data)
      this.setState(...this.state, {
        userId: response.data.userId,
        email: response.data.email,
        userName: response.data.userName
        
      });
      this.props.handleLogin(this.state)       
      if (response.data.userType === "pharma") {
        this.props.history.push(`/pharma`)
      //  <Redirect to= {`/pharmas/${this.state.userId}`}  /> 
      } else {
        this.props.history.push(`/patient`)
        // <Redirect to= {`/patients/${this.state.userId}`}  /> 
      }
    })
       
  }

  render() {
    return (
  
      <Container
      className="login-container"
      fluid={true}
      style={{backgroundColor: '#2E4A62'}}>
<div className="container-login">
<div id="login" className="signin-card">
  <div className="logo-image">
  <img src="docs/logo1.gif" className="login-logo" alt="Logo" title="Logo" width="138"/>
  </div>
  <h1 className="display1">Login</h1>
  <form action="" method="" className="" role="form">
    <div id="form-login-username" className="form-group">
      <input onChange={this.handleEmailChange} type="email" className="form-control" name="email" type="text" placeholder="Email" />
   
      <label for="email" class="float-label">login</label>
    </div>
    <div id="form-login-password" className="form-group">
      <input onChange={this.handlePasswordChange} id="passwd" type="password" className="form-control" name="password" type="password" placeholder="Password" required />
      <label for="password" className="float-label">password</label>
    </div>  
    <div>
      <RaisedButton onClick= {this.signIn} className="login-button" label="Login" type="submit" name="Submit" />  
	  </div>
  </form>
</div>
</div>
</Container>

     
    );
  }
}

export default withRouter(Login);
