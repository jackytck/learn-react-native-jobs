import * as actions from '../actions'

import {
  Platform,
  Text,
  View
} from 'react-native'
import React, { Component } from 'react'

import {
  Card
} from 'react-native-elements'
import { MapView } from 'expo'
import PropTypes from 'prop-types'
import Swipe from '../components/Swipe'
import { connect } from 'react-redux'

class DeckScreen extends Component {
  renderCard ({ jobtitle, company, formattedRelativeTime, snippet, longitude, latitude }) {
    const initialRegion = {
      longitude: longitude,
      latitude: latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }
    return (
      <Card title={jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          />
        </View>
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
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp='jobkey'
        />
      </View>
    )
  }
}

DeckScreen.propTypes = {
  jobs: PropTypes.array,
  likeJob: PropTypes.func
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

export default connect(mapStateToProps, actions)(DeckScreen)
