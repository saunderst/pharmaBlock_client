import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const routes = [
    {
      path: "/",
      exact: true, 
      main: () => <h2>Home</h2>
    },
    {
      path: "/pendingcontracts",
      main: () => <h2>Pending Contracts</h2>
    },
    {
      path: "/completedcontracts",
      main: () => <h2>Completed Contracts</h2>
    }
  ];
  

class PatientSideBar extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "20%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pendingcontracts">Pending</Link>
              </li>
              <li>
                <Link to="/completedcontracts">Completed</Link>
              </li>
            </ul>
    
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
    
          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>

      );
    }
  }
  
  export default PatientSideBar;