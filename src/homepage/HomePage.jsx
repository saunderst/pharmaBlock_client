import React, { Component } from "react";
import Block from "./Block.jsx";
import MissionStatement from "./Mission.jsx";
import Audience from "./Audience.jsx";
import Team from "./Team.jsx";


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="container-square">
          <div className="blocks-container">
            <Block />
          </div>
          
          <div className="section-a-container">
            <h1 className="section-a-logo"> Leveraging the power of blockchain technology</h1>
            <h3 className="section-a-header">
            PharmaBlock is the best software platform for connecting <br/>patients with pharmaceuticals directly through smart contracts
            </h3>
             
          </div>
        </div>
   
        <MissionStatement />
       
        <Audience />

        <Team />

      </div>
    );
  }
}

export default HomePage;