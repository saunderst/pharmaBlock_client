import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

const styles = {
  button: {
    color: "#236B8E"
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let loginMenu;
    if (this.props.currentUser) {
      loginMenu = (
        <div>
          <FlatButton
            label="Logout"
            onClick={this.props.handleLogout}
            style={styles.button}
          />
        </div>
      );
    } else {
      loginMenu = (
        <div>
          <FlatButton
            label="Login"
            containerElement={<Link to="/login" />}
            style={styles.button}
          />
          <FlatButton
            label="Signup"
            containerElement={<Link to="/signup" />}
            style={styles.button}
          />
        </div>
      );
    }

    return (
      <AppBar
        id="navbar"
        iconElementLeft={
          <a>
            <img className="brand-image" src="/docs/logo1.gif" />
            <Link to="/">
              <span className="brand-title">Pharma.Block</span>
            </Link>
          </a>
        }
        iconElementRight={<div className="navbar-buttons">{loginMenu}</div>}
      />
    );
  }
}
export default NavBar;