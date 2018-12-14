import React, { Component, Fragment } from 'react'
import HomePage from './Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import * as ROUTES from '../constants/routes'

class App extends Component {
  render () {
    return (
      <Router>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        {/* <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.PASSWORD_FORGOT} component={PasswordForgotPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} /> */}
      </Router>
    )
  }
}

export default App
