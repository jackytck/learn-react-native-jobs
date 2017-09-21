import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component {
  componentDidMount () {
    this.props.facebookLogin()
  }

  render () {
    return (
      <View>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    )
  }
}

AuthScreen.propTypes = {
  facebookLogin: PropTypes.func
}

export default connect(null, actions)(AuthScreen)
