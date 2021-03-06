export function headerReducer(state = [], action){
  switch (action.type) {
    case 'RECEIVE_GRIDDATA':
      return action.headers
    default:
      return state
  }
}

export function dataReducer(state = [], action){
  switch (action.type) {
    case 'ADD_ROW':
        return [
            ...state,
            action.newRow
          ]
    case 'ADDED_ROW':
    case 'COMMITED_ROW':
        let cloned = [
            ...state
          ]

        cloned[action.index] = action.newRow

        return cloned
    case 'CANCELED_ADD_ROW':
    case 'DELETED_ROW':
        return [
            ...state.filter((trash, index) => index != action.index)
          ]
    case 'RECEIVE_GRIDDATA':
      return action.data
    default:
      return state
  }
}

export function editRowsReducer(state = [], action){
  switch (action.type) {
    case 'EDIT_ROW':
        return [
            ...state,
            action.index
          ]
    case 'CANCELED_EDIT_ROW':
    case 'COMMITED_ROW':
        return [
            ...state.filter(index => index != action.index)
          ]
    case 'RECEIVE_GRIDDATA':
        return []
    default:
      return state
  }
}

export function addRowsReducer(state = [], action){
  switch (action.type) {
    case 'ADD_ROW':
        return [
            ...state,
            action.index
          ]
    case 'CANCELED_ADD_ROW':
    case 'ADDED_ROW':
        return [
            ...state.filter(index => index != action.index)
          ]
    default:
      return state
  }
}
