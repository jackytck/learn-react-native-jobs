import React, { Component } from 'react'

import {
  Button
} from 'react-native-elements'
import PropTypes from 'prop-types'
import {
  View
} from 'react-native'
import { clearLikedJobs } from '../actions'
import { connect } from 'react-redux'

class SettingsScreen extends Component {
  render () {
    return (
      <View>
        <Button
          title='Reset Liked Jobs'
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor='#F44336'
          onPress={this.props.clearLikedJobs}
        />
      </View>
    )
  }
}

SettingsScreen.propTypes = {
  clearLikedJobs: PropTypes.func
}

export default connect(null, { clearLikedJobs })(SettingsScreen)
