import React from "react"
import ShoutyText from "lib/shouty-text"
import Grid from "lib/grid"
import Button from "lib/button"
import "./style.css"

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="logo mobile">
          <img src="/img/bring_mob.jpeg" alt="bring" />
        </div>
        <div className="logo desktop">
          <img src="/img/bring_desktop.jpeg" alt="bring" />
        </div>
      </div>
    )
  }
}

export default Hero
