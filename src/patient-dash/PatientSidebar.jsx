import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PendingContracts from "./PendingContracts.jsx";
import CompletedContracts from "./CompletedContracts.jsx";
import AddContracts from "./AddContracts.jsx";
import CurrentContracts from "./CurrentContracts.jsx";

const currentUser = "E8b2";

const routes = [
  {
    path: `/patients/${currentUser}`,
    exact: true,
    main: () => 
    <div>
    <h2>Welcome Patient {currentUser}</h2>
    <AddContracts/>
    <CurrentContracts/>
    </div>
  },

  {
    path: `/patients/${currentUser}/contractspending`,
  
    main: () => 
    <div>
    <h2>Pending Contracts</h2>
    <PendingContracts />
    </div>
  },
  {
    path: `/patients/${currentUser}/contractscompleted`,
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
            <Link to={`/patients/${currentUser}`}>Home</Link>
          </li>        
          <li>
            <Link to={`/patients/${currentUser}/contractspending`}>Pending Contracts</Link>
          </li>
          <li>
            <Link to={`/patients/${currentUser}/contractscompleted`}>Completed Contracts</Link>
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