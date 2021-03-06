import React, { Component } from "react";
import axios from 'axios';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Resource from '../models/resource'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    
  },
  gridList: {
    width: 1400,
    height: 700,
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
      Resource('pharmacos', this.props.userId).getDrugs()
      .then((response) => 
      { console.log(response)
         this.setState(...this.state, { products: response})})    
      .catch(e => console.log('Error'))
     }
 
  
    
  render() {
    return (
 
  <div className="pharma-products-container">
  <h2 className="page-headers"> Products</h2>
  <div className="products-container">

  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={230}
      padding={5}
      style={styles.gridList}
     >
      {this.state.products.map((product) => (
        <GridTile        
          key={product.image_url}
          title={product.brand_name}
          titleStyle={styles.titleStyle} 
          subtitleStyle={styles.subtitleStyle}
          subtitle={<span className="description"><b>{product.description}<div className="price-product">$ {product.price_per_mg} per dose</div></b></span>          
        }
          actionPosition="left"
          titlePosition="bottom"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.5) 70%,rgba(0,0,0,0) 100%)"
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