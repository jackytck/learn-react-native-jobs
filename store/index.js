import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'

import { AsyncStorage } from 'react-native'
import reducers from '../reducers'
import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)

persistStore(store, {
  storage: AsyncStorage,
  whitelist: ['likedJobs']
})
// }).purge() // to clear the cache

export default store
