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
     <div>
      <div className="pharma-home-container">
      <h2 className="company-overview">GRIFOLS USA Overview</h2>
    
   
      
        <PharmaHeatmap />
      


       <PharmaSales />
   
    
       <PharmaPieChart />
     
   
     

    </div>
    </div>
   
  
    
    );
  }
}

export default PharmaHome;