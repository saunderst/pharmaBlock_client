import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom';
import NavBar from './navbar/Navbar.jsx';
import HomePage from './homepage/HomePage.jsx';
import PatientIndex from './patient-dash/PatientIndex.jsx';
import PharmaIndex from './pharma-dash/PharmaIndex.jsx'
import Footer from './footer/Footer.jsx';
import Login from './navbar/Login.jsx'
import Signup from './navbar/Signup.jsx'
import createBrowserHistory from 'history/createBrowserHistory'

// 
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    props.currentUser
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    userId: '',
    email: '',
    currentUser:null,
    userName:''
  }
  this.history = createBrowserHistory()
}

handleLogout =(event) =>{
  window.localStorage.clear()
  this.setState({ ...this.state, currentUser: null })
  window.location = "/"
  event.stopPropagation()
}

handleLogin = (result) => {

  this.setState(...this.state,{userId: result.userId, email: result.email, currentUser:true, userName: result.userName});
}  



render() {

return(
  <Router history = {this.history}>
  <MuiThemeProvider>
    <div>
    <NavBar handleLogin={this.handleLogin} handleLogout = {this.handleLogout}
    currentUser={this.state.currentUser}/>
   <div style={{ paddingTop: 50 }}></div>
    <main>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/signup" component={Signup} />
        <Route exact path='/login'
                render={(props) => <Login {...props} handleLogin={this.handleLogin}  />} />
        <Route  path='/patient' render={(props) => <PatientIndex {...props} userName={this.state.userName} userId={this.state.userId}/>} />
        <Route  path='/pharma'  render={(props) => <PharmaIndex {...props} userId={this.state.userId} userName={this.state.userName}/>} />   
    <Footer/>
    </Switch>
    </main>
   </div>
    </MuiThemeProvider>
  </Router>
  
      )
    }
  }

export default App;
