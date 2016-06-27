import {
  RECEIVE_FILTERDATA
} from '../actions'

export function filtersReducer(state = { }, action) {
  switch (action.type) {
    case RECEIVE_FILTERDATA:
      return action.filters
    default:
      return state
  }
}
