import {
  Alert,
  StyleSheet,
  View
} from 'react-native'
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation'

import AuthScreen from './screens/AuthScreen'
import DeckScreen from './screens/DeckScreen'
import MapScreen from './screens/MapScreen'
import { Notifications } from 'expo'
import { Provider } from 'react-redux'
import React from 'react'
import ReviewScreen from './screens/ReviewScreen'
import SettingsScreen from './screens/SettingsScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import registerForNotifications from './services/push_notifications'
import store from './store'

export default class App extends React.Component {
  componentDidMount () {
    registerForNotifications()
    Notifications.addListener(notification => {
      const { data: { text }, origin } = notification

      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'OK' }]
        )
      }
    })
  }

  render () {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      lazy: true,
      animationEnabled: false,
      navigationOptions: {
        tabBarVisible: false
      }
    })

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})
