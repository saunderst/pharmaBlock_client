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

class PendingContracts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contracts:[]
      }
    }

    componentDidMount() { 
      axios.get(`http://localhost:8080/patients/${this.props.userId}/contracts`)
      .then((response) => 
      { console.log(response)
         this.setState(...this.state,{ contracts: response.data })})
     
      .catch(e => console.log(e))
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
      {this.state.contracts.map((contract) => (
      <div className="pending-contracts-card" key={contract.cId}>
      <Card>
     <CardMedia>
       <img src={`/docs/drugs/${contract.image_url}`}  alt="" className="pending-contract-card" />
     </CardMedia>
     <CardTitle title={contract.brand_name}  />
     <CardText>
    {contract.description}
    <Divider />

     </CardText>
     
     <CardActions>
       <Link to="/patient/pending/bids">
       <RaisedButton label="View Bids" primary={true} />   
    </Link>
     </CardActions>
   </Card>
   </div>
      ))}
    </GridList>
  </div>
        </div>

      );
    }
  }
  
  export default PendingContracts;