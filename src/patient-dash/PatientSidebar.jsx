import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PendingContracts from "./PendingContracts.jsx";
import CompletedContracts from "./CompletedContracts.jsx";
import AddContracts from "./AddContracts.jsx";
import CurrentContracts from "./CurrentContracts.jsx";

const currentUser = "E8b2";

const routes = [
  {
    path: `/patient/${currentUser}`,
    exact: true,
    main: () => 
    <div>
    <h2>Patient Home</h2>
    <CurrentContracts/>
    </div>
  },
  {
    path: `/patient/${currentUser}/addcontract`,
    main: () => 
    <div>
    <h2>Add Contract</h2>
    <AddContracts/>
    </div>
  },
  {
    path: `/patient/${currentUser}/contractspending`,
  
    main: () => 
    <div>
    <h2>Pending Contracts</h2>
    <PendingContracts />
    </div>
  },
  {
    path: `/patient/${currentUser}/contractscompleted`,
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
            <Link to={`/patient/${currentUser}`}>Home</Link>
          </li>
          <li>
            <Link to={`/patient/${currentUser}/addcontract`}>Add Contract</Link>
          </li>
          <li>
            <Link to={`/patient/${currentUser}/contractspending`}>Pending Contracts</Link>
          </li>
          <li>
            <Link to={`/patient/${currentUser}/contractscompleted`}>Completed Contracts</Link>
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