import { Notifications, Permissions } from 'expo'

import { AsyncStorage } from 'react-native'
import axios from 'axios'

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens'

export default async () => {
  const previousToken = await AsyncStorage.getItem('pushtoken')
  if (previousToken) {
    return
  }
  // ask user permission
  const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)
  // rejected
  if (status !== 'granted') {
    return
  }
  // granted
  const token = await Notifications.getExponentPushTokenAsync()
  await axios.post(PUSH_ENDPOINT, { token: { token } })
  AsyncStorage.setItem('pushtoken', token)
}
