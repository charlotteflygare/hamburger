import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
      <div className="container">
        <label for="hamburger" class="hamburger-label" >
          <div class="menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </label>
        <input id="hamburger" class="hamburger-checkbox" type="checkbox"  />
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
