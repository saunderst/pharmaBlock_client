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
    width: 1200,
    height: 600,
    overflowY: 'auto',
    
  },

  card: {
    padding:5,  
  },
  picture: {
   width:30,
   height: 130,
  }
};

const contractPics = ["colorpill.jpg", "pill12.jpg", "pill13.jpg", "glitterpill.jpg", "pill9.jpg", "happypill.jpg", "lightpill.jpg", "pinktablet.jpg", "pill7.jpg", "moodpill.jpg", "pill3.jpg", "pill8.jpg", "rocketpill.jpg", "rusticpill.jpg" ]
function randomPics(index){
  var random = contractPics[index];
  return random
}


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
        <h2 className="page-headers">Active Prescriptions</h2>
        <div style={styles.root}>
          <GridList
            cols={4}
            cellHeight={300}
            padding={9}
            style={styles.gridList}>

            {this.state.activeContracts.map((contract, index) => (
              <div className="active-contracts-card" key={contract.cId}>
                <Card>
                  <CardMedia>
                    <img src={`/docs/drugs/${randomPics(index)}`} alt="" style={styles.picture} />
                  </CardMedia>
                  <CardTitle title={contract.name} style={styles.card} />
                  <CardText style={styles.card}>
                    <Divider />

                    <p className="card-description"> {contract.description}</p>
                    <p><strong>Number of Doses:</strong> {contract.numberOfDoses}</p>
                    <p><strong>Frequency:</strong> {contract.dosage}mg {contract.frequencyOfDose} times a day</p>
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