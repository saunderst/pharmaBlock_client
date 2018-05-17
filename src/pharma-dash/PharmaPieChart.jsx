import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import PieChart from "react-svg-piechart"

const data = [
  { title: "Diproplex", value: 100, color: "#C71585" },
  { title: "Asparenol", value: 60, color: "#6495ED" },
  { title: "Romalamin", value: 30, color: "#3da18d" },
  { title: "Regobazine", value: 20, color: "#FF7F50" },
  { title: "Agelinum", value: 10, color: "#a1d9ce" },
  { title: "Apreroban", value: 10, color: "#7B68EE" },
  { title: "Factolence", value: 10, color: "#40E0D0" },
]

const totalSales = data.reduce(function (a,b) { return a + b.value; }, 0)

class PharmaPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: data[0].title,
      portion: data[0].value / totalSales * 100
    };
  }

  render() {

    return (
      <div id="piechart-container">
      <h2 className="analytic-header"> Sales by drug</h2>
      <hr/>
       <h3 className="piechart-header" > {this.state.currentTitle}: {Math.trunc(this.state.portion)}% of Sales</h3>
        <PieChart
          data={data}
          expandOnHover={true}
          expandSize={3}
          shrinkOnTouchEnd={false}
          strokeColor="#fff"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBoxSize={100}
          onSectorHover={(d, i, e) => {
            if (d) {
              this.setState({ currentTitle: d.title })
              let portion = d.value / totalSales * 100;
              this.setState({ portion: portion })
              console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
            } else {
              console.log("Mouse leave - Index:", i, "Event:", e)
            }
          }}
        />
    
      </div>
    );
  }
}

export default PharmaPieChart;