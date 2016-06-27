export function pageCountReducer(state = 0, action){
  switch (action.type) {
    case 'RECEIVE_PAGERDATA':
        return action.pageCount
    default:
      return state
  }
}

export function currentPageReducer(state = 0, action){
  switch (action.type) {
    case 'RECEIVE_PAGERDATA':
        return action.currentPage
    default:
      return state
  }
}
