import React, { Component } from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import axios from 'axios';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    
  },
  gridList: {
    width: 1000,
    height: 450,
    overflowY: 'auto',
    
  },
};
class PharmaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
    contracts:[]
=======
    contracts: [],
>>>>>>> feature/contracts
      };
      
    }

<<<<<<< HEAD
=======

>>>>>>> feature/contracts
    componentWillMount() { 
      axios.get(`http://localhost:8080/pharmacos/${this.props.userId}/contracts`)
      .then((response) => 
      { console.log(response)
<<<<<<< HEAD
         this.setState(...this.state, { contracts: response.data })})    
=======
         this.setState(...this.state,{ contracts: response.data })})
     
>>>>>>> feature/contracts
      .catch(e => console.log('Error'))
     }
 
  
    
  render() {
    return (
    <div className="pending-container">

  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={200}
      padding={5}
      style={styles.gridList}
     
      
    >
      {this.state.contracts.map((contract) => (
        <GridTile
          key={contract.img}
          title={contract.brand_name}
          price={contract.price}
          dose={contract.dose}
          actionPosition="left"
          titlePosition="bottom"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={contract.featured ? 2 : 1}
          rows={contract.featured ? 2 : 1}
        
        >
          <img src={contract.img} />
        </GridTile>
      ))}
    </GridList>
  </div>

  </div>





    );
  }
}

export default PharmaCard;