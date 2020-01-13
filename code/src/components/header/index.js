import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="container">
          <input id="hamburger" className="hamburger-checkbox" type="checkbox" />
          <Grid className="header-grid">
            <div className="header-links">
              <a href="http://technigo.io">Search</a>
              <a href="http://technigo.io">Login</a>
              <a href="http://technigo.io">Menu</a>
            </div>
          </Grid>
          <label for="hamburger" className="hamburger-label" >
          <div className="logo">
              <img src="img/logo.svg"></img>
            </div>
            <div className="menu">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </label>
        </div>
      </header>
    )
  }

}

export default Header
