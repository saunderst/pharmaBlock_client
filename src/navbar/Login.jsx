import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  signIn(e){
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:8080/login', user)
    .then(response =>
      {
        this.setState(...this.state, {
          email:email,
          userId :result.data.patient_id
        })
        window.location = `/patient/${userID}` 
      })    
   }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  componentWillMount() {

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
                  oninput="return passwordValidation(this.value)"
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
                  onClick={(event) => this.signIn(event)}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;