import React from "react"
import Header from "./header"
import Hero from "./hero"
import Footer from "./footer"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Footer />
      </div>
    )
  }

}

export default App
