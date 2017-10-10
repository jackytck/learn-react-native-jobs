import { Notifications, Permissions } from 'expo'

import { AsyncStorage } from 'react-native'

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
}
