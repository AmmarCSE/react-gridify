import {ajax} from '../../utils/utils'

export const REQUEST_GRIDDATA = 'REQUEST_GRIDDATA'
export const RECEIVE_GRIDDATA = 'RECEIVE_GRIDDATA'
export const ADD_ROW = 'ADD_ROW'
export const ADDED_ROW = 'ADDED_ROW'
export const EDIT_ROW = 'EDIT_ROW'
export const COMMITED_ROW = 'COMMITED_ROW'
export const DELETED_ROW = 'DELETED_ROW'
export const CANCELED_ADD_ROW = 'CANCELED_ADD_ROW'
export const CANCELED_EDIT_ROW = 'CANCELED_EDIT_ROW'

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
    ajax('POST', '[be]/update', (commitedResult) => { dispatch(commitedRow(index, commitedResult)) }, touchedRow )
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

export function canceledAddRow(index) {
  return {
    type: CANCELED_ADD_ROW,
    index 
  }
}

export function canceledEditRow(index) {
  return {
    type: CANCELED_EDIT_ROW,
    index 
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

export function fetchGridData(search) {
  return dispatch => {
    dispatch(requestGridData(search))
    ajax('GET', '[be]/search', (json) => { dispatch(receiveGridData(search, json)) }, search)
  }
}

function shouldFetchGridData(state, search) {
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

export function fetchGridDataIfNeeded(search) {
  return (dispatch, getState) => {
    if (shouldFetchGridData(getState(), search)) {
      return dispatch(fetchGridData(search))
    }
  }
}
