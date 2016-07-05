import {ajax} from '../../utils/utils'

export const REQUEST_PAGERDATA = 'REQUEST_PAGERDATA'
export const RECEIVE_PAGERDATA = 'RECEIVE_PAGERDATA'
export const PAGER_TRIGGERED = 'PAGER_TRIGGERED'

export function fetchPagerData(search, page) {
  return dispatch => {
    dispatch(requestPagerData(search))
    ajax('GET', '[be]/pagerData', (json) => { dispatch(receivePagerData(json)) }, search)
  }
}

function requestPagerData(search) {
  return {
    type: REQUEST_PAGERDATA,
    search
  }
}

function receivePagerData(json) {
  const {pageCount, currentPage} = json
  return {
    type: RECEIVE_PAGERDATA,
    pageCount, 
    currentPage
  }
}

export function triggerPager(callback, filterItems, dispatch) {
  callback(filterItems, dispatch)
  dispatch(fetchPagerData(filterItems))
}
