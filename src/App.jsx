import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar.jsx';
import HomePage from './homepage/HomePage.jsx';
import PatientIndex from './patient-dash/PatientIndex.jsx';
import PharmaIndex from './pharma-dash/PharmaIndex.jsx'
import Footer from './footer/Footer.jsx';
import Login from './navbar/Login.jsx'
import createBrowserHistory from 'history/createBrowserHistory'


class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
  
    userId: '',
    email: '',
    currentUser:null
  }
  const history = createBrowserHistory()
}

logOut(event){
  window.localStorage.clear()
  this.setState({ ...this.state, currentUser: null })
  event.stopPropagation()
}

handleLogin = (result) => {

  this.setState(...this.state,{userId: result.userId, email: result.email, currentUser:true});
}  


render() {
return(
  <Router history = {history}>
    <div>
    <NavBar handleLogin={this.handleLogin} currentUser={this.state.currentUser}/>
        <Route path="/" exact={true} component={HomePage} />
        <Route exact path='/login'
                render={(props) => <Login {...props} handleLogin={this.handleLogin}/>} />
        <Route path={`/patients/:id`} component={PatientIndex} />
        <Route path={`/pharmas/:id`} component={PharmaIndex} />             
    <Footer/>
    </div>
  </Router>
  
      )
    }
  }

export default App;
