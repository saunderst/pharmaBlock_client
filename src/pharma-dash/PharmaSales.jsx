import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import ReactChartkick, { AreaChart, LineChart } from 'react-chartkick';


const data = {"2013-02-10":5,"2013-02-11":6,"2013-02-12":3,"2013-02-13":2,"2013-02-14":5,"2013-02-15":3,"2013-02-16":8,"2013-02-17":9,"2013-02-18":8,"2013-02-19":12,"2013-02-20":15,"2013-02-21":15,"2013-02-22":13,"2013-02-23":11,"2013-02-24":19,"2013-02-25":21,"2013-02-26":23,"2013-02-27":22,"2013-02-28":23,"2013-03-01":22,"2013-03-02":28};

class PharmaSales extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {

        return (
            <div id="saleschart">
                <AreaChart colors={["#69c2b0"]} data={data} />
            </div>
        )
    }
}

export default PharmaSales;