import {ajax} from '../../utils/utils'

export const REQUEST_FILTERDATA = 'REQUEST_FILTERDATA'
export const RECEIVE_FILTERDATA = 'RECEIVE_FILTERDATA'
export const FILTER_TRIGGERED = 'FILTER_TRIGGERED'

export function fetchFilterDataIfNeeded(search) {
  return (dispatch, getState) => {
    if (shouldFetchFilterData(getState(), search)) {
      return dispatch(fetchFilterData(search))
    }
  }
}

function shouldFetchFilterData(state, search) {
  return true
  const posts = state.postsByReddit[search]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

function fetchFilterData(search) {
  return dispatch => {
    dispatch(requestFilterData(search))
    ajax('GET', '[be]/filters', (json) => { dispatch(receiveFilterData(search, json)) }, search)
  }
}

function requestFilterData(search) {
  return {
    type: REQUEST_FILTERDATA,
    search
  }
}

function receiveFilterData(search, json) {
  return {
    type: RECEIVE_FILTERDATA,
    filters: json.filters
  }
}

export function triggerFilter(callback, filterItems, dispatch) {
  callback(filterItems, dispatch)
  dispatch(fetchFilterData(filterItems))
}
