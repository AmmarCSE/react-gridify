import { combineReducers } from 'redux'

function headerReducer(state = [], action){
  switch (action.type) {
    case 'RECEIVE_GRIDDATA':
      return action.headers
    default:
      return state
  }
}

function dataReducer(state = [], action){
  switch (action.type) {
    case 'ADD_ROW':
        return [
            ...state,
            action.newRow
          ]
    case 'ADDED_ROW':
    case 'COMMITTED_ROW':
        let cloned = [
            ...state
          ]

        Object.assign(cloned[action.index], action.newRow)

        return cloned
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

function editRowsReducer(state = [], action){
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

function addRowsReducer(state = [], action){
  switch (action.type) {
    case 'ADD_ROW':
        return [
            ...state,
            action.index
          ]
    case 'ADDED_ROW':
        return [
            ...state.filter(index => index != action.index)
          ]
    default:
      return state
  }
}

const gridApp = combineReducers({
    data : dataReducer,
    headers : headerReducer,
    editRows: editRowsReducer,
    addRows: addRowsReducer
})

export default gridApp

