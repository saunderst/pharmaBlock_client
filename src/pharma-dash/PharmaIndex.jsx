import React, { Component } from "react";
import PharmaSidebar from './PharmaSidebar.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PharmaHome from "./PharmaHome.jsx";
import PharmaCompleted from "./PharmaCompleted.jsx";
import PharmaPending from "./PharmaPending.jsx";
import PharmaActive from "./PharmaActive.jsx";
import PharmaProducts from "./PharmaProducts.jsx";


class PharmaIndex extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
      
        <Router>
        <div>
        <div>
        <Route exact path="/pharma"  render={(props) => <PharmaHome {...props}  userName={this.props.userName} userId={this.props.userId}/>} />
        <Route exact path='/pharma/pending' render={(props) => <PharmaPending {...props}  userId={this.props.userId}/>} />
        <Route exact path='/pharma/active' render={(props) => <PharmaActive {...props}   userId={this.props.userId}/>} />
        <Route exact path='/pharma/completed' render={(props) => <PharmaCompleted {...props} userId={this.props.userId}/>} />
        <Route exact path='/pharma/products' render={(props) => <PharmaProducts {...props} userId={this.props.userId}/>}/>
        </div>         
        <PharmaSidebar/>
        </div>
        </Router>
      
      );
    }
  }
  
  export default PharmaIndex;