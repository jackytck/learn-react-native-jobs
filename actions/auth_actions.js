import { AsyncStorage } from 'react-native'
import {
  FACEBOOK_LOGIN_SUCCESS
} from './types'

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token')
  if (token) {
    // Dispatch an action saying FB login is done
    dispatch(FACEBOOK_LOGIN_SUCCESS)
  } else {
    // Start up FB Login process
  }
}
