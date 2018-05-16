import React, { Component } from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Resource from '../models/resource'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    
  },
  gridList: {
    width: 1000,
    height: 400,
    overflowY: 'auto',
    
  },
};

class CurrentContracts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContracts: [],
    }
  }


  componentWillMount() {
    Resource('patients', this.props.userId).getContracts()
      .then((response) => {
       console.log(response)
        let activeContracts =[];
        let dateToday = Math.trunc((new Date()).getTime()/1000)
        response.forEach((contract) => {
          if (contract.contractStatus === "filled" && dateToday <= contract.end_date) {
            activeContracts.push(contract);
          }
        })
        this.setState({ activeContracts: activeContracts })
      })
      .catch(e => console.log('Error: ', e ))
  }
  render() {
    return (

      <div className="active-contracts-container">
        <h4>Active Prescriptions</h4>
        <div style={styles.root}>
          <GridList
            cols={4}
            cellHeight={100}
            padding={9}
            style={styles.gridList}>

            {this.state.activeContracts.map((contract) => (
              <div className="active-contracts-card" key={contract.cId}>
                <Card>
                  <CardMedia>
                    <img src={`/docs/drugs/${contract.image_url}`} alt="" className="active-contract-card" />
                  </CardMedia>
                  <CardTitle title={contract.brand_name} />
                  <CardText>
                    {contract.description}
                    <Divider />
                    <p> {contract.brand_name} </p>
                    <p> {contract.dosage}</p>
                  </CardText>

                </Card>
              </div>
            ))}
          </GridList>
        </div>
      </div>

    );
  }
}


export default CurrentContracts;