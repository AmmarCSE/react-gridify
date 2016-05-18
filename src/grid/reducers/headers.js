import defaultData from '../resources/DefaultData'

const headers = (state = defaultData.headers, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default headers 
