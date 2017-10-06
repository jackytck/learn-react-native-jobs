import {
  CLEAR_LIKED_JOBS,
  LIKE_JOB
} from '../actions/types'

import { uniqBy } from 'lodash'

export default function (state = [], action) {
  switch (action.type) {
    case CLEAR_LIKED_JOBS:
      return []
    case LIKE_JOB:
      return uniqBy([
        action.payload, ...state
      ], 'jobkey')
    default:
      return state
  }
}
