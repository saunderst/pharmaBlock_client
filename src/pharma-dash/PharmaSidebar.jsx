import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const currentPharma = "1A8B"
const routes = [
  {
    path: `/pharmas/${currentPharma}`,
    exact: true,
    main: () => 
    <div>
    <h2>Pharma Home</h2>
   
    </div>
  }
 
];

const PharmaSidebar = () => (
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
            <Link to={`/pharmas/${currentPharma}`}>Home</Link>
          </li>
       
        </ul>

      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
      
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

export default PharmaSidebar;