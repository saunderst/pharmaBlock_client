import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="team-container">
          <h2>Our Team</h2>
          <div className="row">
            <div className="col-sm-4">
              <h3>Jody</h3>
              <p>An experienced software developer returning after a career in the performing arts, now turning to web development.</p>
            </div>
            <div className="col-sm-4">
              <h3>Jacob</h3>
              <p>Biomechanical Engineer turned blockchain developer.Enthusiastic to learn about state of the art technologies and frameworks in order to contribute novel and quality solutions.</p>
            </div>
            <div className="col-sm-4">
              <h3>Thomas</h3>
              <p>An experienced software developer returning after a career in the performing arts, now turning to web development.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;