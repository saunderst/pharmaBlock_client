import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PendingContracts from "./PendingContracts.jsx";
import CompletedContracts from "./CompletedContracts.jsx";
const routes = [
  {
    path: "/patient",
    exact: true,
    main: () => <h2>Patient Home</h2>
  },
  {
    path: "/contractspending",
  
    main: () => 
    <div>
    <h2>Pending Contracts</h2>
    <PendingContracts />
    </div>
  },
  {
    path: "/contractscompleted",
    main: () => 
    <div>
    <h2>Completed Contracts</h2>
    <CompletedContracts />
    </div>
  }
];

const PatientSidebar = () => (
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
            <Link to="/patient">Home</Link>
          </li>
          <li>
            <Link to="/contractspending">Pending Contracts</Link>
          </li>
          <li>
            <Link to="/contractscompleted">Completed Contracts</Link>
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

export default PatientSidebar;