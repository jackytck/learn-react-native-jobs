import {
  Button,
  Card
} from 'react-native-elements'
import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View
} from 'react-native'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title='Settings'
        onPress={() => navigation.navigate('settings')}
        backgroundColor='rgba(0, 0, 0, 0)'
        color='rgba(0, 122, 255, 1)'
      />
    )
  })

  renderLikedJobs () {
    return this.props.likedJobs.map(job => {
      return (
        <Card>
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
            </View>
          </View>
        </Card>
      )
    })
  }

  render () {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    )
  }
}

ReviewScreen.propTypes = {
  likedJobs: PropTypes.array
}

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

function mapStateToProps (state) {
  return {
    likedJobs: state.likedJobs
  }
}

export default connect(mapStateToProps)(ReviewScreen)
