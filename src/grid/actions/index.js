import {ajax} from '../../utils/utils'

export const REQUEST_GRIDDATA = 'REQUEST_GRIDDATA'
export const RECEIVE_GRIDDATA = 'RECEIVE_GRIDDATA'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  }
}

export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}

function requestGridData(search) {
  return {
    type: REQUEST_GRIDDATA,
    search
  }
}

function receiveGridData(search, json) {
  return {
    type: RECEIVE_GRIDDATA,
    search,
    data: json.data,
    headers: json.headers
  }
}

function fetchGridData(search) {
  return dispatch => {
    dispatch(requestGridData(search))
    ajax('GET', '[be]/search', (json) => { dispatch(receiveGridData(search, json)) } )
    /*return fetch(`https://www.search.com/r/${search}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(search, json)))*/
  }
}

function shouldFetchPosts(state, reddit) {
    return true
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export function fetchPostsIfNeeded(reddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchGridData(reddit))
    }
  }
}
