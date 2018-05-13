import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import ReactChartkick, { GeoChart } from 'react-chartkick';
// import Chart from 'chart.js';

// ReactChartkick.addAdapter(Chart)

class PharmaHeatmap extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {

        return (
            <div id="heatmap">
                <GeoChart data={[["United States",44],["Germany",23],["Brazil",22],["Canada",21],["China",13], ["India",70]]} colors={[ "#a1d9ce", "#69c2b0" , "#3da18d" , "#2f7d6d", "#22594e"]}/>
            </div>
        )
    }
}

export default PharmaHeatmap;