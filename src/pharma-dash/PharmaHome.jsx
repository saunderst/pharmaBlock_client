import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import PharmaPieChart from "./PharmaPieChart.jsx";
import PharmaHeatmap from "./PharmaHeatmap.jsx"
import PharmaSales from "./PharmaSales.jsx"


class PharmaHome extends Component {
  constructor(props) {
    super(props);
  }


  render() {


    return (

      <div className="pharma-home-container">
        <h2 className="page-headers">GRIFOLS USA </h2>
        <PharmaSales />
        <div className="analytics-container">
          <PharmaHeatmap />
          <PharmaPieChart />
          {/* <add props to charts so they get info /> */}
        </div>
      </div>

    );
  }
}

export default PharmaHome;