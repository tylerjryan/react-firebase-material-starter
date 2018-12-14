import React, { Component } from 'react'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { withFirebase } from './Firebase'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import * as ROUTES from '../constants/routes'

const INITIAL_STATE = {}

class FirebaseSignInBase extends Component {
  constructor (props) {
    super(props)

    this.state = { ...INITIAL_STATE }

    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        this.props.firebase.emailProvider.PROVIDER_ID,
        {
          provider: this.props.firebase.googleProvider.PROVIDER_ID,
          scopes: [
            'profile',
            'email'
          ]
        },
        {
          provider: this.props.firebase.facebookProvider.PROVIDER_ID,
          scopes: [
            'public_profile',
            'email'
          ]
        }
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => {
          this.props.history.push(ROUTES.HOME)
          return false
        }
      }
    }
  }

  render () {
    const uiConfig = this.uiConfig

    return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={this.props.firebase.auth} />
    )
  }
}

const FirebaseSignIn = compose(
  withRouter,
  withFirebase
)(FirebaseSignInBase)

export default FirebaseSignIn
