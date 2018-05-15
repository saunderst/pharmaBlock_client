import React, { Component } from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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


class PharmaPending extends Component {
    constructor(props) {
      super(props);
      this.state ={
     contracts:[]
      }
    } 
    componentDidMount() { 
      Resource('pharmacos', this.props.userId).getContracts()
      .then((response) => 
      { console.log(response)
        let pendingContracts =[];
        response.forEach((contract) => {
          if (contract.contractStatus === "pending") {
            pendingContracts.push(contract);
          }
        })
         this.setState(...this.state,{ contracts: pendingContracts})})
     
      .catch(e => console.log('Error'))
     }

  
    render() {
      return (
        <div className="pharma-pending-container">
        <h2> Pending Prescription Bids</h2>
        <div style={styles.root}>
    <GridList
      cols={4}
      cellHeight={100}
      padding={9}
      style={styles.gridList}
       
    >
      {this.state.contracts.map((contract) => (
     <Card>
     <CardMedia>
       <img src={`/docs/drugs/${contract.image_url}`}  alt="" className="pending-contract-card" />
     </CardMedia>
     <CardTitle title={contract.brand_name}  />
     <CardText>
    {contract.description}
    <Divider />
    <p>{contract.price_per_mg} cost per contract</p>
    <p>{contract.dose} Dose</p>
     </CardText>
     
     <CardActions>
       <FlatButton label="Flag" 
       backgroundColor="#DC143C"
       icon={<i class="far fa-flag"></i>} />   
     
     </CardActions>
   </Card>
      ))}
    </GridList>
  </div>
        </div>

      );
    }
  }
  
  export default PharmaPending;