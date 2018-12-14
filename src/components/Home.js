import React, { Component, Fragment } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class Home extends Component {
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

export default Home
