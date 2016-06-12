export function pageCountReducer(state = 0, action){
  switch (action.type) {
    case 'EDIT_ROW':
        return [
            ...state,
            action.index
          ]
    case 'COMMITTED_ROW':
        return [
            ...state.filter(index => index != action.index)
          ]
    default:
      return state
  }
}

export function currentPageReducer(state = 0, action){
  switch (action.type) {
    case 'REQUEST_PAGE':
        return action.index
    default:
      return state
  }
}
