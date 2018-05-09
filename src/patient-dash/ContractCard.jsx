import React, { Component } from "react";

class ContractCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
   <div className="row">
       <div className="col-sm-4">
        <div className="card">       
        <img id="cardImage" src="https://images.unsplash.com/photo-1522827585129-4ba47bae3e06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db148c67591435a9d18d9f7baee950af&auto=format&fit=crop&w=1350&q=80" />     
        <div className="card-body">
        <h4 className="pharma-name">Pharma Name</h4>
          <h5 className="card-title">Drug Name</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
        </div>
        <footer>
          <a href="#" class="btn btn-primary" id="accept-button">Accept</a>
          <div className="card-price">
              <p>$500</p>
              </div>
          </footer>
      </div>
      </div>

     <div className="col-sm-4">
        <div className="card">       
        <img id="cardImage" src="https://images.unsplash.com/photo-1522827585129-4ba47bae3e06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db148c67591435a9d18d9f7baee950af&auto=format&fit=crop&w=1350&q=80" />     
        <div className="card-body">
        <h4 className="pharma-name">Pharma Name</h4>
          <h5 className="card-title">Drug Name</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
        </div>
        <footer>
          <a href="#" class="btn btn-primary" id="accept-button">Accept</a>
          <div className="card-price">
              <p>$500</p>
              </div>
          </footer>
      </div>
      </div>

         <div className="col-sm-4">
        <div className="card">       
        <img id="cardImage" src="https://images.unsplash.com/photo-1522827585129-4ba47bae3e06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db148c67591435a9d18d9f7baee950af&auto=format&fit=crop&w=1350&q=80" />     
        <div className="card-body">
        <h4 className="pharma-name">Pharma Name</h4>
          <h5 className="card-title">Drug Name</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
        </div>
        <footer>
          <a href="#" class="btn btn-primary" id="accept-button">Accept</a>
          <div className="card-price">
              <p>$500</p>
              </div>
          </footer>
      </div>
      </div>


</div>

    );
  }
}

export default ContractCard;