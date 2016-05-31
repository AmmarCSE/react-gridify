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
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'RECEIVE_GRIDDATA':
      return action.data
    default:
      return state
  }
}
const gridApp = combineReducers({
    data : dataReducer,
    headers : headerReducer
})

export default gridApp

