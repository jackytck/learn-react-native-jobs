import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import {
  Card,
  Button
} from 'react-native-elements'
import Swipe from '../components/Swipe'

class DeckScreen extends Component {
  renderCard ({ jobtitle, company, formattedRelativeTime, snippet }) {
    return (
      <Card title={jobtitle}>
        <View style={styles.detailWrapper}>
          <Text>{company}</Text>
          <Text>{formattedRelativeTime}</Text>
        </View>
        <Text>
          {snippet.replace(/<\/*b>/g, '')}
        </Text>
      </Card>
    )
  }

  renderNoMoreCards () {
    return (
      <Card title='No more jobs' />
    )
  }

  render () {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    )
  }
}

DeckScreen.propTypes = {
  jobs: PropTypes.array
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

function mapStateToProps ({ jobs }) {
  return {
    jobs: jobs.results
  }
}

export default connect(mapStateToProps)(DeckScreen)
