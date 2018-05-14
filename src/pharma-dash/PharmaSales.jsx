import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import ReactChartkick, { AreaChart, LineChart } from 'react-chartkick';


const data = {"2018-04-10":5,"2018-04-11":6,"2018-04-12":3,"2018-04-13":2,"2018-04-14":5,"2018-04-15":3,"2018-04-16":8,"2018-04-17":9,"2018-04-18":8,"2018-04-19":12,"2018-04-20":15,"2018-04-21":15,"2018-04-22":13,"2018-04-23":11,"2018-04-24":19,"2018-04-25":21,"2018-04-26":23,"2018-04-27":22,"2018-04-28":23,"2018-05-01":22,"2018-05-02":28};

class PharmaSales extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {

        return (
            <div id="saleschart">
                <AreaChart ytitle={"Sales (mln. USD)"} colors={["#69c2b0"]} data={data} />
            </div>
        )
    }
}

export default PharmaSales;