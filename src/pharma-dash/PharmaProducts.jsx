import React, { Component } from "react";
import axios from 'axios';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
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

class PharmaProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
     products: [],
      };
     
    }

    componentWillMount() { 
      axios.get(`http://localhost:8080/pharmacos/${this.props.userId}/drugs`)
      .then((response) => 
      { console.log(response)
         this.setState(...this.state, { products: response.data })})    
      .catch(e => console.log('Error'))
     }
 
  
    
  render() {
    return (
 
  <div className="pharma-products-container">
  <h2> Products</h2>
  <div className="products-container">

  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={200}
      padding={5}
      style={styles.gridList}
     
      
    >
      {this.state.products.map((product) => (
        <GridTile
          key={product.image_url}
          title={product.brand_name}
          price={product.price_per_mg}
          description={product.description}
          actionPosition="left"
          titlePosition="bottom"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={product.featured ? 2 : 1}
          rows={product.featured ? 2 : 1}
        
        >
          <img src={`/docs/drugs/${product.image_url}`} />
        </GridTile>
      ))} 
    </GridList>
  </div>
</div>
</div>

    );
  }
}

export default PharmaProducts;