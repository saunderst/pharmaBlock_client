import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import PieChart from "react-svg-piechart"

const data = [
  { title: "Advil", value: 100, color: "#22594e" },
  { title: "Tylenol", value: 60, color: "#2f7d6d" },
  { title: "Suspicious white powder", value: 30, color: "#3da18d" },
  { title: "Jagr", value: 20, color: "#69c2b0" },
  { title: "The good stuff", value: 10, color: "#a1d9ce" },
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
        <h3> {this.state.currentTitle}: {Math.trunc(this.state.portion)}% of Sales</h3>
      </div>
    );
  }
}

export default PharmaPieChart;