import {
  Platform,
  View
} from 'react-native'
import React, { Component } from 'react'

import {
  Button
} from 'react-native-elements'
import PropTypes from 'prop-types'
import { clearLikedJobs } from '../actions'
import { connect } from 'react-redux'

class SettingsScreen extends Component {
  static navigationOptions = {
    header: {
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

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
