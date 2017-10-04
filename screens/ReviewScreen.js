import {
  Button,
  Card
} from 'react-native-elements'
import {
  Linking,
  Platform,
  ScrollView,
  Text,
  View
} from 'react-native'
import React, { Component } from 'react'

import { MapView } from 'expo'
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
      const {
        company,
        formattedRelativeTime,
        url,
        latitude,
        longitude,
        jobtitle,
        jobkey
      } = job
      const initialRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      }

      return (
        <Card title={jobtitle} key={jobkey}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title='Apply Now!'
              backgroundColor='#03A9F4'
              onPress={() => Linking.openURL(url)}
            />
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
    marginTop: 10,
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
