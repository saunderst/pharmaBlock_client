import React, { Component } from "react";
import {
    MenuItem,
    Button
  } from "react-bootstrap";

class PharmaProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
     products: [],
      };
  
     
    }

    componentWillMount() { 
      axios.get(`http://localhost:8080/pharmacos/${this.props.userId}/contracts`)
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
          key={product.img}
          title={product.brand_name}
          price={product.price}

          actionPosition="left"
          titlePosition="bottom"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={product.featured ? 2 : 1}
          rows={product.featured ? 2 : 1}
        
        >
          <img src={product.img} />
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