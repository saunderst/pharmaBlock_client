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
        <Route exact path="/pharma"  render={(props) => <PharmaHome {...props}  userName={this.props.userName}/>} />
        <Route exact path='/pharma/pending' component={PharmaPending} />
        <Route exact path='/pharma/active' component={PharmaActive} />
        <Route exact path='/pharma/completed' component={PharmaCompleted} />
        <Route exact path='/pharma/products' component={PharmaProducts} />
        </div>         
        <PharmaSidebar/>
        </div>
        </Router>
      
      );
    }
  }
  
  export default PharmaIndex;