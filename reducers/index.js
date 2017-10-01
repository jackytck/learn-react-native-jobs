import auth from './auth_reducer'
import { combineReducers } from 'redux'
import jobs from './jobs_reducer'
import likedJobs from './likes_reducer'

export default combineReducers({
  auth,
  jobs,
  likedJobs
})
