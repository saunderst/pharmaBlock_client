import React, { Component } from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
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

class PendingContracts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contracts:[],
        
      }
    }

    componentDidMount() { 
      Resource('patients', this.props.userId).getContracts()
      .then((response) => 
      { console.log(response)
        let pendingContracts =[];
        response.forEach((contract) => {
          if (contract.contractStatus === "pending") {
            pendingContracts.push(contract);
          }
        })
         this.setState(...this.state,{ contracts: pendingContracts })
        })
     
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
       <Link to={{pathname:`/patient/pending/bids/${contract.cId}`}}  >  
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