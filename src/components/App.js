import React, { Component, Fragment } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    )
  }
}

export default App
