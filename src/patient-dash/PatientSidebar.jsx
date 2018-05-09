import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PendingContracts from "./PendingContracts.jsx";
const routes = [
  {
    path: "/patient",
    exact: true,
    main: () => <h2>Patient Home</h2>
  },
  {
    path: "/contractspending",
  
    main: () => <h2>Pending Contracts</h2>
  },
  {
    path: "/contractscompleted",

    main: () => <h2>Completed Contracts</h2>
  }
];

const PatientSidebar = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/patient">Home</Link>
          </li>
          <li>
            <Link to="/contractspending">Pending Contracts</Link>
          </li>
          <li>
            <Link to="/contractscompleted">Completed Contracts</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
    
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

export default PatientSidebar;