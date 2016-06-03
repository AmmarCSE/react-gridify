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
console.log(state)
console.log(action)
  switch (action.type) {
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

const gridApp = combineReducers({
    data : dataReducer,
    headers : headerReducer,
    editRows: editRowsReducer
})

export default gridApp

