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
          <div>
            <h1 className="section-a-logo"> Leveraging the power of blockchain technology</h1>
            <h3>
            PharmaBlock is the best software platform for connecting patients with pharmaceuticals directly through smart contracts. We handle contracts in a secure and state of the art way for clients around the world.
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