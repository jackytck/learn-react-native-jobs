import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import Swipe from '../components/Swipe'

class DeckScreen extends Component {
  render () {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
        />
      </View>
    )
  }
}

DeckScreen.propTypes = {
  jobs: PropTypes.array
}

function mapStateToProps ({ jobs }) {
  return {
    jobs: jobs.results
  }
}

export default connect(mapStateToProps)(DeckScreen)
