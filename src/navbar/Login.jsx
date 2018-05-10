import React, { Component } from "react";
import axios from 'axios';
import {withRouter, Redirect} from 'react-router-dom'


//Client-side model


class Login extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email:'',
      password:'',
      userId: '',
    };
  }

  
handleEmailChange = (e)=>{
  this.setState({email:e.target.value})
}
handlePasswordChange = (e)=>{
    this.setState({password:e.target.value})
}

signIn =(e)=>{
  e.preventDefault()
  const user = {
    email: this.state.email,
    password: this.state.password
  };
  axios.post('http://localhost:8080/login', user)
  .then((response) =>
    {   
      this.setState(...this.state, {
        userId: response.data.userId,
        email: response.data.email
      });

      this.props.handleLogin(this.state)
         
      if (response.data.userType === "pharma") {
        this.props.history.push(`/pharmas/${this.state.userId}`)
      //  <Redirect to= {`/pharmas/${this.state.userId}`}  /> 
      } else {
        this.props.history.push(`/patients/${this.state.userId}`)
        // <Redirect to= {`/patients/${this.state.userId}`}  /> 
      }
    })
       
  }

  render() {
    return (
      <div>
        <div className="signupSection">
          <div className="info" />
          <form action="#" method="POST" class="signupForm" name="signupform">
            <h2>Login</h2>
            <ul className="noBullet">
              <li>
                <label for="email" />
                <input
                  type="email"
                  class="inputFields"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleEmailChange}
                  required
                />
              </li>
              <li>
                <label for="password" />
                <input
                  type="password"
                  class="inputFields"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handlePasswordChange}
                 
                  required
                />
              </li>

              <li id="center-btn">
                <input
                  type="submit"
                  id="join-btn"
                  name="submit"
                  alt="Join"
                  value="Submit"
                  onClick= {this.signIn}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
