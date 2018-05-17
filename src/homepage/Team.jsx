import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="team-container">
        <h2 className="team-header">Our Team</h2>

        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4">
              <div class="team-member">
                <div class="team-img">
                  <img
                    src="/docs/patrick.jpg"
                    alt="team member"
                    class="img-responsive"
                  />
                </div>
                <div class="team-hover">
                  <div class="desk">
                    <p>
                      Health Science graduated turned junior full stack developer. Passionate about immortalizing myself into the future through the web. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="team-title">
                <h5>Jody Sekhon</h5>
                <span>Jr Full Stack Developer</span>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="team-member">
                <div className="team-img">
                  <img
                    src="/docs/patrick.jpg"
                    alt="team member"
                    className="img-responsive"
                  />
                </div>
                <div className="team-hover">
                  <div className="desk">
                    <p>
                      Biomechanical Engineer turned blockchain developer.Enthusiastic to learn about state of the art
                      technologies and frameworks in order to contribute novel
                      and quality solutions..
                    </p>
                  </div>
                </div>
              </div>
              <div className="team-title">
                <h5>Jacob Maarse</h5>
                <span>Jr Full Stack Developer</span>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="team-member">
                <div className="team-img">
                  <img
                    src="/docs/patrick.jpg"
                    alt="team member"
                    className="img-responsive"
                  />
                </div>
                <div className="team-hover">
                  <div className="desk">
                    <p>
                      An experienced software developer returning after a career
                      in the performing arts, now turning to web development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="team-title">
                <h5>Thomas Saunders</h5>
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
