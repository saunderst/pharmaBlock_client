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
    height: 800,
    overflowY: 'auto',
    
  },
};


class PendingBids extends Component {
    constructor(props) {
      super(props);
      this.state = {
        cId: (this.props.match.params.id || null),
        bids:[]
      }
    }

    handleAccept = ((e, id, data) => {
      e.preventDefault();
      Resource('patients',this.props.userId).signContract(id, data)  
      .then(response => {
        console.log("Response: ")
      })
      .catch(error => {
        console.log("Error: " + error)
      })
  })

    componentDidMount() { 
      console.log(this.props.match.params.id)
      Resource('contracts', this.props.match.params.id).getBids()
      .then((response) => 
      { console.log(response)
         this.setState(...this.state,{ bids: response })})  
      .catch(e => console.log('Error: ', e))

     }

    render() {
      return (
        <div className="pending-contracts-container">
           <h2> Pending Prescription Bids</h2>
        <div style={styles.root}>
    <GridList
      cols={4}
      cellHeight={250}
      padding={9}
      style={styles.gridList} >
      {this.state.bids.map((bid) => (
     <Card>
     <CardMedia>
       <img src={`/docs/drugs/${bid.image_url}`}  alt="" className="pending-contract-card" />
     </CardMedia>
     <CardTitle title={bid.brand_name}  />
     <CardText>
    <p>Cost: {bid.price_per_mg} per mg</p>
    <Divider />
     </CardText>    
     <CardActions>
       <RaisedButton  backgroundColor="#20B2AA" label="Accept"  onClick={ (e) =>this.handleAccept(e, bid.cId, { pharmAddress: bid.pharmaco_pubadd, costPerDose: bid.price_per_mg })} />   
     </CardActions>
   </Card>
      ))}
    </GridList>
  </div>
        </div>

      );
    }
  }
  
  export default PendingBids;