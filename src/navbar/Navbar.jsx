import React, { Component } from "react";
import { Link } from 'react-router';
import Login from "./Login.jsx";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Modal,
  Button
} from "react-bootstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true
    });
  }
  hideModal() {
    this.setState({
      show: false
    });
  }
  render() {
    let loginMenu
    if (this.props.currentUser) {
      loginMenu= (
        <div>
      <Button className="btn-block">
      Logout
      </Button> 
      </div>
      )
    } else {
      loginMenu= (
        <div>
        <Button
        bsStyle="success"
        className="btn-block"
        onClick={this.showModal}
        data-target="#modal-login"

        >
        Login
      </Button>

      <Modal
        show={this.state.show}
        onHide={this.hideModal}
        aria-labelledby="ModalHeader"
        id="modal-login">
        <Login handleLogin={this.props.handleLogin}/>
      </Modal>
      </div>
      )
    }
  

    return (
      <div>
        <Navbar className="main-header">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <img className="brand-logo" src="../docs/logo1.gif" />
              </a>
              <span href="#home">PharmaBlock</span>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <div className="navbar-buttons">
             {loginMenu}
            </div>
            

          </Nav>
        </Navbar>;
      </div>
    );
  }
}

export default NavBar;