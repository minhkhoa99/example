import React, { Component } from "react";
import logo from "../img/logo.png";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className='center'>
        <img src={logo} alt='' />
      </header>
    );
  }
}

export default Header;
