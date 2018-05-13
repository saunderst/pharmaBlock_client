import React, { Component } from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

const tilesData = [
  {
    img: 'https://images.unsplash.com/photo-1522827585129-4ba47bae3e06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db148c67591435a9d18d9f7baee950af&auto=format&fit=crop&w=1350&q=80',
    title: 'Hello',
    author: 'jill111',
  
  },
  {
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c18d87b91cee85cbe63912304dba923&auto=format&fit=crop&w=1350&q=80',
    title: 'Hello',
    author: 'pashminu',
  },
  {
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c18d87b91cee85cbe63912304dba923&auto=format&fit=crop&w=1350&q=80',
    title: 'Hello',
    author: 'Danson67',
  },
  {
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c18d87b91cee85cbe63912304dba923&auto=format&fit=crop&w=1350&q=80',
    title: 'Hello',
    author: 'fancycrave1',
  
  },
  {
    img: 'https://images.unsplash.com/photo-1522827585129-4ba47bae3e06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db148c67591435a9d18d9f7baee950af&auto=format&fit=crop&w=1350&q=80',
    title: 'Hello',
    author: 'Hans',
  },
  {
    img: 'https://images.unsplash.com/photo-1522827585129-4ba47bae3e06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db148c67591435a9d18d9f7baee950af&auto=format&fit=crop&w=1350&q=80',
    title: 'Hello',
    author: 'fancycravel',
  },
  {
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c18d87b91cee85cbe63912304dba923&auto=format&fit=crop&w=1350&q=80',
    title: 'Hello',
    author: 'jill111',
  },
  {
    img: 'https://images.unsplash.com/photo-1522827585129-4ba47bae3e06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db148c67591435a9d18d9f7baee950af&auto=format&fit=crop&w=1350&q=80',
    title: 'Hello',
    author: 'BkrmadtyaKarki',
  },
];
class PharmaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      };
  
     
    }

  
    
  render() {
    return (
    <div className="pending-container">

  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>

  </div>





    );
  }
}

export default PharmaCard;