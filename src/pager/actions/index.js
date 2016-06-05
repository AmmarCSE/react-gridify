export const REQUEST_PAGE = 'REQUEST_PAGE'

export function requestPage(index) {
  return {
    type: REQUEST_PAGE,
    index
  }
}
export function addRow(index) {
  return {
    type: ADD_ROW,
    newRow : {},
    index
  }
}

export function commitAddRow(newRow, index) {
  return dispatch => {
    ajax('POST', '[be]/add', (commitedRow) => { dispatch(addedRow(commitedRow, index)) }, newRow )
  }
}

export function addedRow(newRow, index) {
  return {
    type: ADDED_ROW,
    newRow,
    index
 }
}

export function editRow(index) {
  return {
    type: EDIT_ROW,
    index
 }
}

export function commitRow(touchedRow, index) {
  return dispatch => {
    ajax('POST', '[be]/update', () => { dispatch(commitedRow(index, touchedRow)) }, touchedRow )
  }
}

export function commitedRow(index, newRow) {
  return {
    type: COMMITED_ROW,
    index,
    newRow 
 }
}

export function deleteRow(index, key) {
  return dispatch => {
    ajax('POST', '[be]/delete', () => { dispatch(deletedRow(index)) }, key )
  }
}

export function deletedRow(index) {
  return {
    type: DELETED_ROW,
    index 
  }
}

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
