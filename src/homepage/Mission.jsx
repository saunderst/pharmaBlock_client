import React, { Component } from "react";

class MissionStatement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     
        <div className="mission-container">
          <div className="row">
            <div className="col-sm-6">     
              <img className="blocks-gif" src="docs/block4.gif" />
            </div>
            <div className="col-sm-6" id="mission-left">
            <h2>Our Mission</h2>
              <p>At PharmaBlock we aim to streamline the process of getting patients the pharmaceuticals they urgently need at the cost they deserve. 
 Leveraging the power of smart contracts on the block chain ensures distributed, secure and accurate transactions between patient and provider.</p>

<p>This system shifts the power of decision back to the patient, so individuals can weigh the benefits of efficacy, ethics and cost on their own terms. 
Reduced costs compared to traditional prescription methods can be maintained by removing middlemen and their markups/dispensary fees.</p> 

            
            </div>
          </div>
        </div>
    );
  }
}

export default MissionStatement;
