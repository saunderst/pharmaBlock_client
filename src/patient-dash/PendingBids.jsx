import React, { Component } from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

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


class PendingBids extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bids:[]
      }
    }

    componentDidMount() { 
      axios.get(`http://localhost:8080/patients/${this.props.userId}/contracts`)
      .then((response) => 
      { console.log(response)
         this.setState(...this.state,{ bids: response.data })})
     
      .catch(e => console.log('Error'))
     }

    render() {
      return (
        <div className="pending-contracts-container">
           <h2> Pending Prescription Bids</h2>
        <div style={styles.root}>
    <GridList
      cols={4}
      cellHeight={100}
      padding={9}
      style={styles.gridList}
       
    >
      {this.state.bids.map((bid) => (
     <Card>
     <CardMedia>
       <img src={`/docs/drugs/${bid.image_url}`}  alt="" className="pending-contract-card" />
     </CardMedia>
     <CardTitle title={bid.brand_name}  />
     <CardText>
    {bid.description}
    <Divider />

     </CardText>
     
     <CardActions>

       <RaisedButton label="Accept" primary={true} />   
    
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