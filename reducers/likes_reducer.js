import {
  LIKE_JOB
} from '../actions/types'
import { uniqBy } from 'lodash'

export default function (state = [], action) {
  switch (action.type) {
    case LIKE_JOB:
      return uniqBy([
        action.payload, ...state
      ], 'jobkey')
    default:
      return state
  }
}
