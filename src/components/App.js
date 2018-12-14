import React, { Component, Fragment } from 'react'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Account from './Account'
import PasswordForgot from './PasswordForgot'
import Admin from './Admin'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import * as ROUTES from '../constants/routes'

class App extends Component {
  render () {
    return (
      <Router>
        <Fragment>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.ACCOUNT} component={Account} />
          <Route exact path={ROUTES.PASSWORD_FORGOT} component={PasswordForgot} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
        </Fragment>
      </Router>
    )
  }
}

export default App
