import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="container">
          <label for="hamburger" className="hamburger-label" >
            <div className="menu">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </label>
          <input id="hamburger" className="hamburger-checkbox" type="checkbox" />
          <Grid className="header-grid">
            <a href="http://technigo.io">Technigo</a>
            <a href="http://technigo.io">Boot Camp</a>
            <a href="http://technigo.io">Stories</a>
            <a href="http://technigo.io">About</a>
          </Grid>
        </div>
      </header>
    )
  }

}

export default Header
